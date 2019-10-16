import React from 'react'
//import { Link } from 'react-router-dom'
import './NoteList.css'
import NotesContext from '../NotesContext';
//import Button from '../Button/Button';
import Note from '../Note/Note'

export default function NoteList(props) {

  return(
    <NotesContext.Consumer>
      {(value) => {
        //console.log('noteslist rendering: routeProps match', props.match.params )
        const notes = props.match.params.folderId
          ? value.notes.filter(note => note.folderId === props.match.params.folderId)
          : value.notes
        const noteListItems = notes.length > 0
          // intentional error thrown here (missing name and id)
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



