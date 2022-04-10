import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div className="nav-items">
            <Link to={"/"}> <p>Home</p></Link>
            <Link to={"/products"}><p>Products</p></Link>
            <Link to={"/contact-us"}><p>Contact us</p></Link>
        </div>
    </div>
  )
}

export default Navbar