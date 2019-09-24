import React from 'react'
import { Link } from 'react-router-dom'

function NoteList(props) {
  const notes = props.notes.map(note => <li><Link to={`/note/${note.id}`}>{note.name}</Link></li>)
  return(
    <div className="NoteList">
     {notes}
    </div>
  )
}

export default NoteList;
