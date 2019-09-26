import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import NoteList from '../NoteList/NoteList'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import './FolderList.css'

function FolderList(props) {

  let noteSelectedFolder = props.note
    ? props.folders.find(folder => folder.id === props.note.folderId)
    : null

   let backButton = noteSelectedFolder
     ? <Button tag='button' onClick={() => props.history.goBack()} className='Button__back'>Back</Button>
     : null

  let folderLinks = props.folders.length > 0
  ? props.folders.map(folder => {
    return(
      <li key={folder.id} className="FolderList__li">
        <NavLink to={`/folder/${folder.id}`} className={`FolderList__li__nav-link ${noteSelectedFolder && noteSelectedFolder.id === folder.id ? 'active' : ''}`} >
          <FontAwesomeIcon icon={faFolder}/>
          {folder.name}
        </NavLink>
      </li>
    )
  })
  : <div>No Folders</div>


  return(
    <div className="FolderList">
      <ul>
        {folderLinks}
       {/* { noteSelectedFolder ? noteSelectedFolder.name : null }*/}
      </ul>
      <div className="FolderList__button-wrap">
        <Button tag={Link} to="/add-folder" className='Button__add-folder'>Add Folder</Button>
        { backButton }
      </div>
    </div>
  )
}

FolderList.defaultProps = {
  folders: [],
  note: null
}

export default FolderList
