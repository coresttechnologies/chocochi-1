import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import ResponsiveNavbar from './ResponsiveNavbar'

const Navbar = ({ padding }) => {
  const [nav, setNav] = useState(false)
  return (
    <div style={{ paddingLeft: padding, paddingRight: padding }} className='navbar'>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="nav-items">
        <Link to={"/"}> <p>Home</p></Link>
        <Link to={"/products"}><p>Products</p></Link>
        <Link to={"/contact-us"}><p>Contact us</p></Link>
      </div>
      <svg onClick={()=>setNav(true)} width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H23" stroke="white" stroke-width="2" stroke-linecap="round" />
        <path d="M1 7H23" stroke="white" stroke-width="2" stroke-linecap="round" />
        <path d="M1 14H23" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>
      <ResponsiveNavbar nav={nav} setNav={setNav}/>
    </div>
  )
}

export default Navbar