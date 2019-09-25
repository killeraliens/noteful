import React from 'react';
import ReactDOM from 'react-dom';
import NoteShow from './NoteShow';

describe('NoteShow', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoteShow />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})
