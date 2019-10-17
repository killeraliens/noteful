import React from 'react';
import PropTypes from 'prop-types';

export default function NotFoundPage(props) {
  return(
    <div className="NotFoundPage">
      {props.message}
    </div>
  )
}

NotFoundPage.defaultProps = {
  message: 'Page not found'
}

NotFoundPage.propTypes = {
  message: PropTypes.string
}
