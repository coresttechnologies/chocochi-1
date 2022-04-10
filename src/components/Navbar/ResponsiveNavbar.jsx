import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveNavbar = ({ setNav, nav }) => {
    return (
        <div style={{ transform: nav && "translateY(0%)" }} className='res-navbar'>
            <svg onClick={() => setNav(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.22168 1.2218L16.778 16.7782" stroke="white" stroke-width="2" stroke-linecap="round" />
                <path d="M1.22168 16.7781L16.778 1.22179" stroke="white" stroke-width="2" stroke-linecap="round" />
            </svg>
            <Link to={"/"}> <p>Home</p></Link>
            <Link to={"/products"}><p>Products</p></Link>
            <Link to={"/contact-us"}><p>Contact us</p></Link>
        </div>
    )
}

export default ResponsiveNavbar