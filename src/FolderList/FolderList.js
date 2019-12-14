import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Folder from '../Folder/Folder';
import './FolderList.css'
import NotesContext from '../NotesContext';
//import ReactRouterPropTypes from 'react-router-prop-types';

function FolderList(props) {

  return(
    <NotesContext.Consumer>
      {value => {

        let noteSelected = props.match.params.noteId
          ? value.notes.find(note => note.id === props.match.params.noteId)
          : null;

        let noteSelectedFolder = noteSelected
          ? value.folders.find(folder => folder.id === noteSelected.folder_id)
          : null

        let folderLinks = value.folders.length > 0
          ? value.folders.map(folder => {
            return(
              <Folder
                key={folder.id}
                id={folder.id}
                name={folder.folder_name}
                className={`FolderList__li__nav-link ${noteSelectedFolder && noteSelectedFolder.id === folder.id ? 'active' : ''}`}
              />
            )
          })
          : <div>No Folders</div>

        return(
          <div className="FolderList">
            <React.Fragment>
              {folderLinks}
            </React.Fragment>
            <div className="FolderList__button-wrap">
              <Button
                tag={Link}
                to="/add-folder"
                className="Button__add-folder FolderList__Btn"
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
  match: { params: {}, path: {} }
}

// FolderList.propTypes = {
//   match: ReactRouterPropTypes.match,
// }

export default FolderList
