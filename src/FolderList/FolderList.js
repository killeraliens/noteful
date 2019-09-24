import React from 'react';
import { NavLink } from 'react-router-dom'
import './FolderList.css'

function FolderList(props) {
  let folderLinks;

  props.folders.length > 0
  ? folderLinks = props.folders.map(folder => {
    return(
      <li key={folder.id}>
        <NavLink to={`/folder/${folder.id}`} className="FolderLink" >
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
      </ul>
    </div>
  )
}

FolderList.defaultProps = {
  folders: []
}

export default FolderList
