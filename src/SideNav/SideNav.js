import React from 'react'

export default function SideNav(props) {
  //console.log(props.children);
  return(
    <div className='SideNav'>
       {props.children}
    </div>
  )
}
