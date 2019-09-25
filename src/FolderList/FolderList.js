import React from 'react';
import { NavLink } from 'react-router-dom'
import './FolderList.css'

function FolderList(props) {
  let folderLinks;
  let noteSelectedFolder = props.note
    ? props.folders.find(folder => folder.id === props.note.folderId)
    : null
  //let isActive = noteSelectedFolder ? 'active' : ''
  //console.log('')

  props.folders.length > 0
  ? folderLinks = props.folders.map(folder => {
    return(
      <li key={folder.id}>
        <NavLink to={`/folder/${folder.id}`} className={`FolderLink ${noteSelectedFolder && noteSelectedFolder.id === folder.id ? 'active' : ''}`} >
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
    </div>
  )
}

FolderList.defaultProps = {
  folders: []
}

export default FolderList
