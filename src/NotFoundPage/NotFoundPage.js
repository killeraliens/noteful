import React from 'react';


export default function NotFoundPage(props) {
  return(
    <div className="NotFoundPage">
      {props.message ? props.message : null}
      Not Found
    </div>
  )
}
