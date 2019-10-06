import React from 'react'
import { Route, Switch } from 'react-router-dom';
import FolderList from '../FolderList/FolderList';
import './SideNav.css';

export default function SideNav(props) {

  return(
    <div className='SideNav'>
      <Switch>
          <Route exact path="/" component={FolderList}/>
          <Route exact path="/folder/:folderId" component={FolderList}/>
          <Route exact path="/note/:noteId" component={FolderList}/>
      </Switch>
    </div>
  )
}
