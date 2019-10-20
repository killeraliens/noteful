import React from 'react'
import PropTypes from 'prop-types'
import './ValidationError'

export default function ValidationError(props) {
  return props.message && props.visible
    ? <div id={props.id} className="error">{props.message}</div>
    : <div id={props.id} className="sr-only">Must pass all validations. No Error.</div>
}

ValidationError.propTypes = {
  message: PropTypes.string,
  id: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
}


