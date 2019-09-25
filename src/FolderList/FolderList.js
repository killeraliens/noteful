import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import NoteList from '../NoteList/NoteList'
import './FolderList.css'

function FolderList(props) {
  let folderLinks;
  let noteSelectedFolder = props.note
    ? props.folders.find(folder => folder.id === props.note.folderId)
    : null

  let buttonLink = noteSelectedFolder
    ? <Link onClick={() => props.history.goBack()}>Back</Link>
    : <Link to='/add-folder'>Add Folder</Link>

  props.folders.length > 0
  ? folderLinks = props.folders.map(folder => {
    return(
      <li key={folder.id} className="FolderList__li">
        <NavLink to={`/folder/${folder.id}`} className={`FolderList__li__nav-link ${noteSelectedFolder && noteSelectedFolder.id === folder.id ? 'active' : ''}`} >
          {folder.name}
        </NavLink>
      </li>
    )
  })
  : folderLinks = <div>No Folders</div>


  return(
    <div className="FolderList">
      <h1>Folders</h1>
      <ul>
        {folderLinks}
        { noteSelectedFolder ? noteSelectedFolder.name : null }
      </ul>
      { buttonLink }
    </div>
  )
}

FolderList.defaultProps = {
  folders: []
}

export default FolderList
