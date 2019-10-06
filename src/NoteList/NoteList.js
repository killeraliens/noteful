import React from 'react'
import { Link } from 'react-router-dom'
import './NoteList.css'
import NotesContext from '../NotesContext';

export default function NoteList(props) {
  //console.log('NoteList showing', props)
  //const notes = props.notes.map(note => <li key={note.id}><Link to={`/note/${note.id}`}>{note.name}</Link></li>)
  return(
    <NotesContext.Consumer>
      {(value) => {
        console.log('noteslist rendering: routeProps match', props.match.params )
        const notes = props.match.params.folderId
          ? value.notes.filter(note => note.folderId === props.match.params.folderId)
          : value.notes
        const noteListItems = notes.map(note =>
          <li key={note.id}><Link to={`/note/${note.id}`}>{note.name}</Link></li>
        )

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
  notes: []
}
