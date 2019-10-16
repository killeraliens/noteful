import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import FolderList from '../FolderList/FolderList';
import Button from '../Button/Button';
import './SideNav.css';

export default function SideNav(props) {

  return(
    <div className='SideNav'>
      <Switch>
          <Route exact path="/" component={FolderList}/>
          <Route path="/folder/:folderId" component={FolderList}/>
          <Route path="/note/:noteId" component={FolderList}/>
          <Route path="/add-folder" component={FolderList}/>
          <Route path="/add-note" component={FolderList}/>
      </Switch>
    </div>
  )
}
