import React from 'react'
import './NoteList.css'
import NotesContext from '../NotesContext';
import Note from '../Note/Note'
import ReactRouterPropTypes from 'react-router-prop-types';

export default function NoteList(props) {

  return(
    <NotesContext.Consumer>
      {(value) => {
        const notes = props.match.params.folderId
          ? value.notes.filter(note => note.folderId === props.match.params.folderId)
          : value.notes
        const noteListItems = notes.length > 0
          ? notes.map(note => <Note key={note.id}  id={note.id} name={note.name} modified={note.modified}/>)
          : <p> No Notes Yet!</p>
        return(
          <div className="NoteList">
            {noteListItems}
          </div>
        )
      }}
    </NotesContext.Consumer>
  )
}

NoteList.defaultProps = {
  match: {params: {}}
}

NoteList.propTypes = {
  match: ReactRouterPropTypes.match,
}




