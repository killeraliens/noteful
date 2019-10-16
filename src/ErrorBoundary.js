import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);

   const { history } = props;

    history.listen((location, action) => {
      if (this.state.hasError) {
        this.setState({
          hasError: false,
        });
      }
    });

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    //console.log('error!!!', error)
    return { hasError: true, error: error}
  }

  render() {
    const details = this.state.error && this.state.error.message
      ? <details>{this.state.error.message}</details>
      : null

    if(this.state.hasError) {
      return(
        <div className='ErrorBoundary'>
          <summary>Something went wrong</summary>
          {details}
        </div>
      )
    }

    return this.props.children
  }
}

export default withRouter(ErrorBoundary);
