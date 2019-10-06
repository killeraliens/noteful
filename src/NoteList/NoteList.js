import React from 'react'
import { Link } from 'react-router-dom'
import './NoteList.css'

export default function NoteList(props) {
  console.log('NoteList showing', props)
  const notes = props.notes.map(note => <li key={note.id}><Link to={`/note/${note.id}`}>{note.name}</Link></li>)
  return(
    <div className="NoteList">
     {notes}
    </div>
  )
}

NoteList.defaultProps = {
  notes: []
}
