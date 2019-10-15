import React, {Component} from 'react';
import Button from '../Button/Button';
import ValidationError from '../ValidationError/ValidationError';
import NotesContext from '../NotesContext'
import './AddFolder.css';


class AddFolder extends Component {
  static contextType = NotesContext;

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
      name: this.state.folderName.value,
      id: `FiD${this.context.folders.length + 1}`
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(newFolder),
      headers: {
        'content-type': 'application/json'
      }

    }
    fetch(`http://localhost:9090/folders`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res)
      }
      console.log('post ok')
    })
    .then(() => {
      this.context.addFolder(newFolder)
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err)
      this.setState({error: err})
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
    const nameError = this.state.folderName.touched && this.validateFolderName();
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
        />
        <ValidationError message={this.validateFolderName()} visible={nameError}/>
        <div className="AddFolder__btn-wrap">
          <Button tag='button' type='submit' className="Button__add-folder light">Create</Button>
          <Button tag='button' type='button' className="Button__Cancel">Cancel</Button>
        </div>
      </form>
    )
  }
}

export default AddFolder
