import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import NoteList from './NoteList/NoteList';
import NoteShow from './NoteShow/NoteShow';
import Header from './Header/Header';
import AddFolder from './AddFolder/AddFolder';
import AddNoteForm from './AddNoteForm/AddNoteForm'
import NotFoundPage from './NotFoundPage/NotFoundPage';
import ErrorBoundary from './ErrorBoundary'
import Button from './Button/Button'
import './App.css';
//import Folders from './dummyStore.js';
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
        //console.log('error loading from local, state not set', err)
        this.setState({ error: err})
      })
  }

  componentDidMount() {
    this.fetchData('http://localhost:9090/folders', 'folders')
    this.fetchData('http://localhost:9090/notes', 'notes')
  }


  deleteNote = (id) => {
      const newNotes = this.state.notes.filter(note => note.id !== id)
      this.setState({
        notes: newNotes
      })
  }

  addFolder = (newFolder) => {
    this.setState({
      folders: [newFolder, ...this.state.folders]
    })
  }

  addNote = (newNote) => {
    this.setState({
      notes: [newNote, ...this.state.notes]
    })
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote
    };

    if (this.state.error) {

      return (
      <div className="App">
          <header>
            <Header/>
          </header>
          <NotFoundPage>Problem loading app! Check your connection.</NotFoundPage>
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
                      <Route exact path='/' render={(props) => {
                        return(
                          <ErrorBoundary>
                            <NoteList  {...props}/>
                         </ErrorBoundary>
                        )
                      }}/>
                      <Route path='/folder/:folderId' render={(props) => {
                        return(
                          <ErrorBoundary>
                            <NoteList  {...props}/>
                         </ErrorBoundary>
                        )
                      }}/>
                      <Route path='/note/:noteId' render={(props) => {
                        return(
                          <ErrorBoundary>
                            <NoteShow  {...props}/>
                         </ErrorBoundary>
                        )
                      }}/>
                      <Route path='/add-folder' render={(props) => {
                        return(
                          <ErrorBoundary>
                            <AddFolder  {...props}/>
                         </ErrorBoundary>
                        )
                      }}/>
                      <Route path="/add-note" render={(props) => {
                        return(
                          <ErrorBoundary>
                            <AddNoteForm  {...props}/>
                          </ErrorBoundary>
                        )
                      }}/>
                      <Route render={(props) => {
                        return(
                          <ErrorBoundary>
                            <NotFoundPage  {...props}/>
                          </ErrorBoundary>
                        )
                      }}/>
                </Switch>
            </main>
        </div>
      </NotesContext.Provider>
    );
  }
}

export default App;
