import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Nav'>
      <h2>iTask</h2>
      <div className="right">
        <li>Home</li>
        <li>Your Tasks</li>
      </div>
    </div>
  )
}

export default Navbar
