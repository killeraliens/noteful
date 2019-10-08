import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import NoteList from './NoteList/NoteList';
import NoteShow from './NoteShow/NoteShow';
import Header from './Header/Header';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import './App.css';
import Folders from './dummyStore.js';
import NotesContext from './NotesContext';


class App extends Component {

  state = {
    folders: [],
    notes: []
  }


  fetchData = (url, item) => {
    return fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error(res)
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          [item]: data
        })
      })
      .catch(err => {
        console.log('error loading from local, state not set', err)
        this.setState({ error: err})
      })
  }

  componentDidMount() {
    //how do i use promise.all?
    console.log('setting states from db')
    this.fetchData('http://localhost:9090/folders', 'folders')
    this.fetchData('http://localhost:9090/notes', 'notes')

    //return Promise.all([setFolders, setNotes])

  }

  deleteNoteReq = (id) => {
    // why would they tell us to put the "fetch delete req" in a child component,
    // when its used by sibling components as well?
    // I've combined the fetch and current state setting into one Context function.
    const options = {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    }

    fetch(`http://localhost:9090/notes/${id}`, options)
    .then(res => {
      if(!res.ok) {
        throw new Error(res)
      }
    })
    .then(() => {
      const newNotes = this.state.notes.filter(note => note.id !== id)
      this.setState({
        notes: newNotes
      })
    })
    .catch(err => this.setState({error: err}))
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNoteReq
    };

    if (this.state.error) {
      return (
      <div className="App">
          <header>
            <Header/>
          </header>
          {console.log(this.state.error.message)}
          <NotFoundPage message={this.state.error.message}/>
      </div>
      )
    }

    return (
      <NotesContext.Provider value={contextValue}>
        <div className="App">
          <header>
            <Header/>
          </header>
          <nav>
            <SideNav />
          </nav>
          <main>
            <Switch>
              <Route exact path='/' component={NoteList}/>
              <Route path='/folder/:folderId' component={NoteList}/>
              <Route path='/note/:noteId' component={NoteShow}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </main>
        </div>
      </NotesContext.Provider>
    );
  }
}

export default App;
