import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import NotesContext from '../NotesContext';
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import config from '../config'


class Note extends Component {
  static defaultProps = {
    followupDeleteNote: () => {},
  }

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    //id: PropTypes.number.isRequired,
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

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, options)
    .then(res => {
      if(!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      this.setState({error: null})
    })
    .then(() => {
      this.context.deleteNote(noteId);
      this.props.followupDeleteNote(noteId);
    })
    .catch(error => {
      this.setState({ error: { message: 'Could not delete your note, check your connection'}})
    })
  }


  render() {
    const { name, id, modified, children } = this.props;
    const { error } = this.state;
    const errorMessage = error && error.message ? error.message : null
    return(
      <div className="Note">
        {errorMessage}
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
