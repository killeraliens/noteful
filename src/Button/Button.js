import React from 'react'
import './Button.css';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { tag, children, className, ...otherProps } = props;
  return React.createElement(
    // args: component (tag={object} or tag='button'), { props }, children
    tag, { className: 'Button ' + className, ...otherProps }, children
  )
}

Button.defaultProps = {
  tag: 'a'
}

Button.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
}
