import React from 'react';
import './NoteShow.css';
import NotesContext from '../NotesContext'


export default function NoteShow(props) {
  // console.log(props)
  return(
    <NotesContext.Consumer>
      {value => {
        const note = props.match.params.noteId
          ? value.notes.find(note => note.id === props.match.params.noteId) || {error: 'Oops, no note found'}
          : {}
        return(
          <div className='NoteShow'>
            {note.error}
            <h1>{note.name}</h1>
            <p>{note.content}</p>
          </div>
        )
      }}
    </NotesContext.Consumer>
  )
}

