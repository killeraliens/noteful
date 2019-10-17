import React from 'react'
import PropTypes from 'prop-types'

export default function ValidationError(props) {
  return props.message && props.visible
    ? <div className="error">{props.message}</div>
    : null
}

ValidationError.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool
}


