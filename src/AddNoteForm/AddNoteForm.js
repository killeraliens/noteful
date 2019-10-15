import React, {Component} from 'react'
import NotesContext from '../NotesContext'
import './AddNoteForm.css';
import Button from '../Button/Button';

class AddNoteForm extends Component {
  static contextType = NotesContext;

  static defaultProps = {
    history: {match: {}}
  }

  state = {
      "name": "",
      "folderId": "",
      "content": ""
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  updateContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  updateFolderId = (e) => {
    this.setState({
      folderId: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newNote = (({name, folderId, content}) => ({name, folderId, content}))(this.state);
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
      throw new Error(err)
    })
  }

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <select name="folderId" id="folderID" onChange={this.updateFolderId}>
            <option value="None">No Folder Selected</option>
            { this.context.folders.map(folder => {
              return <option value={folder.id}>{folder.name}</option>
            })}
          </select>
          <label htmlFor="name">Name Your Note</label>
          <input type="text" value={this.state.name} id="name" name="name" onChange={this.updateName}/>
          <label htmlFor="content">Note Content</label>
          <textarea type="text" value={this.state.content} id="content" name="content" onChange={this.updateContent}/>
          <div className="AddFolder__btn-wrap">
          <Button tag='button' type='submit' className="Button__add-folder light">Create</Button>
          <Button tag='button' type='button' className="Button__Cancel">Cancel</Button>
        </div>
        </form>
    )
  }
}

export default AddNoteForm;
