import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import NotesContext from '../NotesContext';
import Button from '../Button/Button'
import PropTypes from 'prop-types'


class Note extends Component {
  static defaultProps = {
    followupDeleteNote: () => {},
  }

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    modified: PropTypes.string,
    followupDeleteNote: PropTypes.func
  }

  static contextType = NotesContext;

  state = {};

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
      this.setState({error: null})
    })
    .then(() => {
      this.context.deleteNote(noteId);
      this.props.followupDeleteNote(noteId);
    })
    .catch(err => {
      this.setState({error: 'Problem handling note deletion'})
    })
  }


  render() {
    const { name, id, modified, children } = this.props;
    const { error } = this.state;

    if (error) {
      return new Error(error)
    }

    return(
      <div className="Note">
         <Link to={`/note/${id}`}>
           <h2>{ name }</h2>
         </Link>

        <span>{ modified ? `modified ${modified}` : null}</span>
        {children}
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
