import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import NoteList from './NoteList/NoteList';
import NoteShow from './NoteShow/NoteShow';
import Header from './Header/Header';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import './App.css';
import Folders from './dummyStore.js'


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

  render() {
    const { folders, notes } = this.state;
    // console.log(folders)
    // console.log(notes)
    return (
      <div className="App">
        <nav>
          <SideNav folders={folders} notes={notes}/>
        </nav>
        <main>
          <Header/>
          <Switch>
            <Route exact path='/' render={(routeProps) => {
              return(
                <NoteList
                  notes={notes}
                  { ...routeProps }
                />
              )
            }}/>
            <Route path='/folder/:folderId' render={(routeProps) => {
              //console.log('rout props for folder path', routeProps.match)
              const folder = folders.find(folder => folder.id === routeProps.match.params.folderId)
              // console.log('matching folder', folder )
              const folderNotes = notes.filter(note => note.folderId === folder.id);
              //console.log('folders notes', folderNotes )
              return(
                <NoteList
                  notes={folderNotes}
                  { ...routeProps }
                />
              )
            }}/>
            <Route path='/note/:noteId' render={(routeProps) => {
              const note = notes.find(note => note.id === routeProps.match.params.noteId)
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
    );
  }
}

export default App;
