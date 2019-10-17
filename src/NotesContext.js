import React from 'react';
import PropTypes from 'prop-types';

const NotesContext =  React.createContext({
  notes: [],
  folders: [],
  deleteNote: () => {},
  addFolder: () => {},
  addNote: () => {}
})

//Is this right?
NotesContext.Provider.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    folderId: PropTypes.string,
    modified: PropTypes.string,
    content: PropTypes.string
  })),
  folders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.number
  })),
  deleteNote: PropTypes.func,
  addFolder: PropTypes.func,
  addNote: PropTypes.func
}

export default NotesContext;
