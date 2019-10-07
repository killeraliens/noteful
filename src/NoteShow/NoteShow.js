import React from 'react';
import './NoteShow.css';
import NotesContext from '../NotesContext'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


export default function NoteShow(props) {

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
            <Button tag='button' onClick={() => {
              const deleteNote = new Promise((res, rej) => {
                res(value.deleteNote(note.id))
              })
              deleteNote.then(() => props.history.push('/'))
            }}>Delete</Button>
          </div>
        )
      }}
    </NotesContext.Consumer>
  )
}

