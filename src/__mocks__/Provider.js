import context from '../testHelpers.js';

export const NotesContext = ({
  Consumer(props) {
    return props.children(context)
  }
})

