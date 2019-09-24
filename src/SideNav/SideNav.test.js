import React from 'react';
import ReactDOM from 'react-dom';
//import { Shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import SideNav from './SideNav';

describe('SideNav', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SideNav/>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})
