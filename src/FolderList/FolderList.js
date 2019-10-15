import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faFolder } from '@fortawesome/free-solid-svg-icons'
import Folder from '../Folder/Folder';
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

        // let backButton = noteSelected
        //   ? <Button tag='button' onClick={() => props.history.goBack()} className='Button__back FolderList__Btn'>Back</Button>
        //   : null

        let folderLinks = value.folders.length > 0
          ? value.folders.map(folder => {
            return(
              <Folder
                key={folder.id}
                id={folder.id}
                name={folder.name}
                className={`FolderList__li__nav-link ${noteSelectedFolder && noteSelectedFolder.id === folder.id ? 'active' : ''}`}
              />
            )
          })
          : <div>No Folders</div>

        return(
          <div className="FolderList">
            <ul>
              {folderLinks}
            </ul>
            <div className="FolderList__button-wrap">
              <Button
                tag={Link}
                to="/add-folder"
                className='Button__add-folder FolderList__Btn'
                disabled={props.match.path === '/add-folder'}
              >
                Add Folder
              </Button>
            </div>
          </div>
        )
      }}
    </NotesContext.Consumer>
  )
}

FolderList.defaultProps = {
  match: { params: {} }
}

export default FolderList
