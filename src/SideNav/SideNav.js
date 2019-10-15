import React from 'react'
import { Route, Switch } from 'react-router-dom';
import FolderList from '../FolderList/FolderList';
import Button from '../Button/Button';
import './SideNav.css';

export default function SideNav(props) {

  return(
    <div className='SideNav'>
      <Switch>
          <Route exact path="/" component={FolderList}/>
          <Route exact path="/folder/:folderId" component={FolderList}/>
          <Route exact path="/note/:noteId" component={FolderList}/>
          <Route exact path="/add-folder" component={FolderList}/>
      </Switch>
    </div>
  )
}
