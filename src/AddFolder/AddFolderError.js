import React, {Component} from 'react'

class AddFolderError extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true}
  }

  render() {
    const error = this.state.hasError
    ? `Trouble adding folder`
    : this.props.children;
    return(
      <div className='error'>{error}</div>
    )
  }
}

export default AddFolderError;
