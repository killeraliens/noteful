import React from 'react';
import './NoteShow.css';
import NotesContext from '../NotesContext'
import Button from '../Button/Button'
import Note from '../Note/Note'
import { Link } from 'react-router-dom'


export default function NoteShow(props) {

  return(
    <NotesContext.Consumer>
      {value => {

        const note = value.notes.find(note => note.id === props.match.params.noteId) || {};


        return(
          <div className='NoteShow'>
            <Note followupDeleteNote={() => props.history.push('/')} name={note.name} id={note.id}/>
            <p>{note.content}</p>
            <Button tag='button' onClick={() => props.history.goBack()} className='Button__back FolderList__Btn'>Back</Button>
          </div>
        )
      }}
    </NotesContext.Consumer>
  )
}

//do i need this if the note is defaulting to empty object?
// NoteShow.defaultProps = {
//   match: {
//     params: {}
//   }
// }
