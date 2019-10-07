import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import './FolderList.css'
import NotesContext from '../NotesContext';

function FolderList(props) {

  return(
    <NotesContext.Consumer>
      {value => {

        let noteSelected = props.match.params.noteId
          ? value.notes.find(note => note.id === props.match.params.noteId)
          : null;

        let noteSelectedFolder = noteSelected
          ? value.folders.find(folder => folder.id === noteSelected.folderId)
          : null

        let backButton = noteSelected
          ? <Button tag='button' onClick={() => props.history.goBack()} className='Button__back FolderList__Btn'>Back</Button>
          : null

        let folderLinks = value.folders.length > 0
          ? value.folders.map(folder => {
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
            </ul>
            <div className="FolderList__button-wrap">
              <Button tag={Link} to="/add-folder" className='Button__add-folder FolderList__Btn'>Add Folder</Button>
              { backButton }
            </div>
          </div>
        )
      }}
    </NotesContext.Consumer>
  )
}

export default FolderList
