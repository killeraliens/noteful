import React from 'react'
import './Button.css';

export default function Button(props) {
  const { tag, children, className, ...otherProps } = props;
  return React.createElement(
    // component (tag={object}), { props }, children
    tag, { className: 'Button ' + className, ...otherProps }, children
  )
}

Button.defaultProps = {
  tag: 'a'
}
