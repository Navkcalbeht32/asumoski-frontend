    
import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons'

export default function MobileNavbar() {
    return (
        <div className="mobilenav">
            <div className="mobilenav-wrapper">
                <NavLink to ='/'>
                    <div><FontAwesomeIcon icon={faHome} size="lg" /></div>
                    <h5>Home</h5>
                </NavLink>
                <NavLink to="/portfolio">
                    <div><FontAwesomeIcon icon={faLayerGroup} size="lg"  /></div>
                    <h5>Portfolio</h5>
                </NavLink>
                {/* <a>
                    <div><FontAwesomeIcon icon={faUser} size="lg"  /></div>
                    
                    <h5>About</h5>
                </a> */}
                
                
                
            </div>
        </div>
    )
}   