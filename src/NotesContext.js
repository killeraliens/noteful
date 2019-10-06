import React from 'react';

const NotesContext =  React.createContext({
  notes: [],
  deleteNote: () => {}
})

export default NotesContext;
