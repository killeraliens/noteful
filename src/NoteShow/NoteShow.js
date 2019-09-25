import React from 'react'


export default function NoteShow(props) {
  //console.log(props)
  return(
    <div>
      <h1>{props.note.name}</h1>
      <p>{props.note.content}</p>
    </div>
  )
}

NoteShow.defaultProps = {
  note: {
    name: '',
    content: ''
  }
}
