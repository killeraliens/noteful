import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import NoteList from './NoteList/NoteList';
import NoteShow from './NoteShow/NoteShow';
import Header from './Header/Header';
import AddFolder from './AddFolder/AddFolder';
import AddFolderError from './AddFolder/AddFolderError'
import AddNoteForm from './AddNoteForm/AddNoteForm'
import NotFoundPage from './NotFoundPage/NotFoundPage';
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
        console.log('error loading from local, state not set', err)
        this.setState({ error: err})
      })
  }

  componentDidMount() {
    //how do i use promise.all? Should I?
    console.log('setting states from db')
    this.fetchData('http://localhost:9090/folders', 'folders')
    this.fetchData('http://localhost:9090/notes', 'notes')

    //return Promise.all([setFolders, setNotes])

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

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder
    };

    // if (this.state.error) {
    //   return (
    //   <div className="App">
    //       <header>
    //         <Header/>
    //       </header>
    //       {console.log(this.state.error.message)}
    //       <NotFoundPage message={this.state.error.message}/>
    //   </div>
    //   )
    // }

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
              {/*<AddFolderError>*/}
                <Route path='/add-folder' component={AddFolder}/>
              {/*</AddFolderError>*/}
              <Route exact path="/add-note" component={AddNoteForm}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </main>
        </div>
      </NotesContext.Provider>
    );
  }
}

export default App;
