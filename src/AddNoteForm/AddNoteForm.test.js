import React from 'react';
import ReactDOM from 'react-dom';
import AddNoteForm from './AddNoteForm';
import {BrowserRouter} from 'react-router-dom';


describe('AddNoteForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <AddNoteForm />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
