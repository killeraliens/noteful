import React, {Component} from 'react'

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log('error!!!', error)
    return { hasError: true}
  }

  render() {

    if(this.state.hasError) {
      return(
        <div className='ErrorBoundary'>
          <summary>Something went wrong</summary>

        </div>
      )
    }

    return this.props.children
    //const errorDetails = this.state.hasError
  }
}

export default ErrorBoundary;
