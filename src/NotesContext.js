import React from 'react';
import PropTypes from 'prop-types';

const NotesContext =  React.createContext({
  notes: [],
  folders: [],
  deleteNote: () => {},
  addFolder: () => {}
})

//Is this where I use propTypes validators for a Context?
//Should my context objects be more specialized?

// NotesContext.Provider.propTypes = {
//   notes: PropTypes.array,
//   folders: PropTypes.array
// }

export default NotesContext;
