import React from 'react';
import ReactDOM from 'react-dom';
//import { Shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SideNav from './SideNav';

describe('SideNav', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideNav/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders its children', () => {
    const div = document.createElement('div');
    const childDiv = document.createElement('div');
    const instance = renderer.create(<SideNav><div>test</div></SideNav>).toJSON();
    console.log(instance);
    expect(instance).toMatchSnapshot()
  })
})
