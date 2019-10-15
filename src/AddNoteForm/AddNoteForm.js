import React, {Component} from 'react'
import './AddNoteForm.css';

class AddNoteForm extends Component {
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

  render() {
    console.log(this.props)
    return(
        <form>
          <select name="folder" id="folder" onChange={this.updateFolderId}>
            <option value="None">No Folder Selected</option>
            { this.props.folders.map(folder => {
              return <option value={folder.id}>{folder.name}</option>
            })}
          </select>
          <label htmlFor="name">Name Your Note</label>
          <input type="text" value={this.state.name} id="name" name="name" onChange={this.updateName}/>
          <label htmlFor="content">Note Content</label>
          <textarea type="text" value={this.state.content} id="content" name="content" onChange={this.updateContent}/>
        </form>
    )
  }
}
