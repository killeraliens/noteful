import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from '../Button/Button';

export default function Header(props) {
  return(
    <div className='Header'>
      <Link to='/'>
        <h1>Noteful App</h1>
      </Link>
    </div>
  )
}

