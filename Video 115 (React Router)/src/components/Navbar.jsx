import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav>
          <li>
            <NavLink to="/home" className={({isActive})   => (isActive ? 'red' : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive})   => (isActive ? 'red' : "")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive})   => (isActive ? 'red' : "")}>Contact </NavLink>
          </li>
      </nav>
    </div>
  );
}

export default Navbar
