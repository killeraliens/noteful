import React from 'react';
import './NoteShow.css';
import NotesContext from '../NotesContext'
import Button from '../Button/Button'
import Note from '../Note/Note'
import { Link } from 'react-router-dom'
//import NotFoundPage from '../NotFoundPage/NotFoundPage'


export default function NoteShow(props) {

  return(
    <NotesContext.Consumer>
      {value => {

        const note = value.notes.find(note => note.id === props.match.params.noteId) || {};

        // if (!note.id) {
        //  return <NotFoundPage>Could not find this note!</NotFoundPage>
        // }

        return(
          <div className='NoteShow'>
            <Note followupDeleteNote={() => props.history.push('/')} name={note.name} id={note.id}>
              <p>{note.content}</p>
              <Button tag='button' onClick={() => props.history.goBack()} className='Button__back FolderList__Btn'>Back</Button>
            </Note>
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
