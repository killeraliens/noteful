import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import NotesContext from '../NotesContext'
import './AddNoteForm.css';
import Button from '../Button/Button';
import ValidationError from '../ValidationError/ValidationError'
import ReactRouterPropTypes from 'react-router-prop-types';


class AddNoteForm extends Component {
  static contextType = NotesContext;

  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired
  }

  state = {
      name: {value: '', touched: false},
      folderId: {value: '', touched: false},
      content: {value: '', touched: false}
  }

  updateValue = (e) => {
    const {value, name} = e.target;
    this.setState({
      [name]: {value, touched: true}
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // const newNote = (({name, folderId, content}) => ({name, folderId, content}))(this.state);
    const {name, folderId, content } = this.state
    const newNote = {name: name.value, folderId: folderId.value, content: content.value}
    newNote.modified = JSON.stringify(new Date());
    newNote.id = `NiD${newNote.folderId}${this.context.notes.length + 1}`

    const options = {
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: {
        'content-type': 'application/json'
      }
    }
    fetch(`http://localhost:9090/notes`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(res)
      }
      console.log('post ok')
    })
    .then(() => {
      this.context.addNote(newNote)
      this.props.history.push(`note/${newNote.id}`)
    })
    .catch(err => {
      this.setState({error: 'Could not post your new note!'})
    })
  }

  validateName = () => {
    const name = this.state.name.value.trim();
    return name.length === 0
    ? `Name is required`
    : null
  }

  validateFolderId = () => {
    const folderId = this.state.folderId.value;
    return folderId === 'None'
    ? `Must belong to a folder`
    : null
  }

  render() {
    const { name, content, folderId} = this.state;
    const nameError = name.touched && this.validateName();
    const folderIdError = folderId.touched && this.validateFolderId();
    if (this.state.error ) {
      return new Error(this.state.error)
    }
    return(
        <form onSubmit={this.handleSubmit}>
          <h2>Create New Note</h2>
          <label htmlFor="folderId">Select a folder*</label>
          <select
            name="folderId"
            id="folderID"
            onChange={this.updateValue}
            aria-label="Select A Folder"
            aria-required="true"
            aria-describedby="folderIdError"
            aria-invalid={folderIdError}
          >
            <option value="None">None</option>
            { this.context.folders.map((folder) => {
              return <option key={folder.id} value={folder.id}>{folder.name}</option>
            })}
          </select>
          <ValidationError
            id="folderIdError"
            message={this.validateFolderId()}
            visible={folderIdError}
          />
          <label htmlFor="name">Name Your Note*</label>
          <input
            type="text"
            value={name.value}
            id="name"
            name="name"
            onChange={this.updateValue}
            aria-label="Note Name or Title"
            aria-required="true"
            aria-describedby="nameError"
            aria-invalid={nameError}
          />
          <ValidationError
            id="nameError"
            message={this.validateName()}
            visible={nameError}
          />
          <label htmlFor="content">Note Content</label>
          <textarea
            type="text"
            value={content.value}
            id="content"
            rows='8'
            name="content"
            onChange={this.updateValue}
            aria-label="Note Content"
            aria-required="false"
          />
          <div className="AddFolder__btn-wrap">
            <Button
              tag='button'
              type='submit'
              aria-label="Submit New Note"
              className="Button__add-folder light"
              disabled={ this.validateName() || this.validateFolderId()}
            >
              Create
            </Button>
            <Button
              tag='button'
              type='button'
              aria-label="Cancel New Note"
              onClick={() => {this.props.history.goBack()}}
              className="Button__Cancel"
            >
              Cancel
            </Button>
          </div>
        </form>
    )
  }
}

export default withRouter(AddNoteForm);
