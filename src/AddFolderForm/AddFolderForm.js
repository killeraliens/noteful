import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Button from '../Button/Button';
import ValidationError from '../ValidationError/ValidationError';
import NotesContext from '../NotesContext'
import ReactRouterPropTypes from 'react-router-prop-types';
import './AddFolderForm.css';
import config from '../config'


class AddFolder extends Component {
  static contextType = NotesContext;

  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired
  }

  state = {
    folderName: {value: '', touched: false}
  }

  updateValue = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: {value, touched: true},
      error: null
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newFolder = {
      folder_name: this.state.folderName.value
      // id: `FiD${this.context.folders.length + 1}`
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(newFolder),
      headers: {
        'content-type': 'application/json'
      }

    }
    fetch(`${config.API_ENDPOINT}/api/folders`, options)
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(resFolder => {
      this.context.addFolder(resFolder)
      this.props.history.push(`folder/${resFolder.id}`)
    })
    .catch(error => {
      this.setState({error})
      new Error('Problem adding folder')
    })

  }

  validateFolderName = () => {
    const name = this.state.folderName.value.trim();
    return name.length === 0
     ? "Can't be blank"
     : name.length > 16
     ? "Keep the name under 16 characters"
     : null
  }

  render() {
    const nameError = this.state.folderName.touched && this.validateFolderName()
      ? true
      : false;
    return(
      <form className='AddFolder' onSubmit={this.handleSubmit}>
        { this.state.error ? this.state.error.message : null}
        <h2>Add New Folder</h2>
        <label htmlFor="folder-name">Folder Name</label>
        <input
          type="text"
          id='folder-name'
          name='folderName'
          value={this.state.folderName.value}
          onChange={this.updateValue}
          aria-label="Folder Name"
          aria-required="true"
          aria-describedby="nameError"
          aria-invalid={nameError}
        />
        <ValidationError
          id="nameError"
          message={this.validateFolderName()}
          visible={nameError}
        />
        <div className="AddFolder__btn-wrap">
          <Button
            tag='button'
            type='submit'
            aria-label="Create New Folder"
            className="Button__add-folder light"
            disabled={this.validateFolderName()}
          >
            Create
          </Button>
          <Button
            tag='button'
            type='button'
            aria-label="Cancel New Folder"
            className="Button__Cancel"
            onClick={() => {this.props.history.goBack()}}
          >
            Cancel
          </Button>
        </div>
      </form>
    )
  }
}

export default withRouter(AddFolder)
