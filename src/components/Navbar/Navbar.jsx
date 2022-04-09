import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div className="nav-items">
            <p>Home</p>
            <p>Products</p>
            <p>Contact us</p>
        </div>
    </div>
  )
}

export default Navbar