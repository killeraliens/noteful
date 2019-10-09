import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import NotesContext from '../NotesContext';
import Button from '../Button/Button'


class Note extends Component {
  static defaultProps = {
    followupDeleteNote: () => {},
  }

  static contextType = NotesContext;

  handleDeleteNoteReq = (e) => {
    e.preventDefault();
    const noteId = this.props.id
    const options = {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    }

    fetch(`http://localhost:9090/notes/${noteId}`, options)
    .then(res => {
      if(!res.ok) {
        throw new Error(res)
      }
    })
    .then(() => {
      this.context.deleteNote(noteId);
      this.props.followupDeleteNote(noteId);
    })
    .catch(err => {
      this.setState({error: err})
    )}
  }


  render() {
    const { name, id, modified } = this.props;
    const { error } = this.state;
    return(
      <div className="Note">
        <h2>
         <Link to={`/note/${id}`}>
          { name }
         </Link>
        </h2>
        <span>{ modified ? `modified ${modified}` : null}</span>
        <Button
              tag='button'
              onClick={this.handleDeleteNoteReq}
              className='NoteList__button'
        >
          Delete
        </Button>
      </div>
    )
  }
}

export default Note;
