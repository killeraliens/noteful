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

  componentDidMount() {
    this.setState({
      folders: Folders.folders,
      notes: Folders.notes
    })
  }

  deleteNote = (id) => {
    console.log('deleting note..', id)
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote
    };

    const {notes, folders} = contextValue;
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
              <Route path='/note/:noteId' render={(routeProps) => {
                const note = notes.find(note => note.id === routeProps.match.params.noteId)
                console.log('notedId path', routeProps.match)
                return(
                  <NoteShow
                    note={note}
                  />
                )
              }}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </main>
        </div>
     </NotesContext.Provider>
    );
  }
}

export default App;
