import React from 'react'
import { Route, Switch } from 'react-router-dom';
import FolderList from '../FolderList/FolderList';
import './SideNav.css';

export default function SideNav(props) {

  return(
    <div className='SideNav'>
      <Switch>
          <Route exact path="/" render={(routeProps) => {
            return(
              <FolderList
                folders={props.folders}
                { ...routeProps }
              />
            )
          }}
          />
          <Route path="/folder/:folderId" render={(routeProps) => {
            return(
              <FolderList
                folders={props.folders}
                { ...routeProps }
              />
            )
          }}
          />
          <Route path='/note/:noteId' render={(routeProps) => {
              const note = props.notes.find(note => note.id === routeProps.match.params.noteId)
              return(
                <FolderList
                  folders={props.folders}
                  note={note}
                  { ...routeProps }
                />
              )
            }}/>
      </Switch>
    </div>
  )
}
