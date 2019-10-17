import React from 'react';
import './NoteShow.css';
import NotesContext from '../NotesContext'
import Button from '../Button/Button'
import Note from '../Note/Note'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import ReactRouterPropTypes from 'react-router-prop-types';


export default function NoteShow(props) {

  return(
    <NotesContext.Consumer>
      {value => {

        const note = value.notes.find(note => note.id === props.match.params.noteId) || {};

        if (!note.id) {
         return <NotFoundPage>Could not find this note!</NotFoundPage>
        }

        return(
          <div className='NoteShow'>
            <Note followupDeleteNote={() => props.history.push('/')} name={note.name} id={note.id} modified={note.modified}>
              <p>{note.content}</p>
              <Button tag='button' onClick={() => props.history.goBack()} className='Button__back FolderList__Btn'>Back</Button>
            </Note>
          </div>
        )
      }}
    </NotesContext.Consumer>
  )
}


NoteShow.defaultProps = {
  match: { params: {}},
}

NoteShow.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match,
}

