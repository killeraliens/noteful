import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import FolderList from './FolderList/FolderList';
import './App.css';
import Folders from './dummyStore.js'

class App extends Component {

  state = {
    folders: Folders.folders,
    notes: Folders.notes
  }

  render() {
    const { folders, notes } = this.state;
    // console.log(folders)
    // console.log(notes)
    return (
      <div className="App">
        <SideNav>
          <Route exact path="/" render={(routeProps) => {
            return(
              <FolderList
                folders={folders}
                notes={notes}
                { ...routeProps }
              />
            )
          }}
          />
          <Route path="/folder/:folderId" render={(routeProps) => {
            return(
              <FolderList
                folders={folders}
                notes={notes}
                { ...routeProps }
              />
            )
          }}
          />
        </SideNav>
        <main>

        </main>
      </div>
    );
  }
}

export default App;
