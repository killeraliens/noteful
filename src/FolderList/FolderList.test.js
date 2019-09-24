import React from 'react';
import ReactDOM from 'react-dom';
//import { Shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import FolderList from './FolderList';
import Folders from '../dummyStore.js'

describe('FolderList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FolderList />
      </BrowserRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
