import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

class Folder extends Component {
   static propTypes = {
     id: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired
   }

  render() {
    const { id, name, className } = this.props;
    return(
      <div className="Folder">
        <NavLink to={`/folder/${id}`} className={className}>
          <FontAwesomeIcon icon={faFolder}/>
          {name}
        </NavLink>
      </div>
    )
  }
}

export default Folder;
