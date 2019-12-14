import React from 'react'
import './NoteList.css'
import NotesContext from '../NotesContext';
import Note from '../Note/Note'
import PropTypes from 'prop-types'

export default function NoteList(props) {

  return(
    <NotesContext.Consumer>
      {(value) => {
        const notes = props.match.params.folderId
        ? value.notes.filter(note => note.folder_id == props.match.params.folderId)
        : value.notes
        //debugger

        const noteListItems = notes.length > 0
          ? notes.map(note => <Note key={note.id}  id={note.id} name={note.note_name} modified={note.modified}/>)
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
  match: {params: {}},
  notes: []
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  )
}




