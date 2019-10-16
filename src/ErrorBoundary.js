import React, {Component} from 'react'

class ErrorBoundary extends Component {

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
    ? `Something Went Wrong`
    : this.props.children;

    const classNames = this.state.hasError
      ? `error active`
      : `error`
    return(
      <div className='error'>{error}</div>
    )
  }
}

export default ErrorBoundary;
