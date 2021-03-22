import React from 'react'
import './Navbar.scss'

const NavLink = ({icon, link}) => {
    return (
        <a className="navlink" href={link} target="_blank">
            <img src={icon} />
        </a> 
    )
}

export default NavLink