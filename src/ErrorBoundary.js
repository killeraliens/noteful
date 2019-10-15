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
    console.log('Error Boundary props!!!', this.props)
    const error = this.state.hasError
    ? `Something Went Wrong`
    : this.props.children;
    return(
      <div className='error'>{error}</div>
    )
  }
}

export default ErrorBoundary;
