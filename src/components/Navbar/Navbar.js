import React from 'react'
import './Navbar.scss'
import NavLink from './NavItem'
import LinkedIn from '../../images/linkedin.svg'
import GitHub from '../../images/github.svg'
import Email from '../../images/email.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <a href="/">
                    <div className="header-logo">
                        <h3> 
                            <span>ALEX </span>  
                            SUMOSKI
                        </h3>
                        <h2>DEVELOPER</h2>
                    </div>
                </a>
                <ul className="header-links">
                   <NavLink icon={LinkedIn} link="https://www.linkedin.com/in/alexandersumoski/" />
                   <NavLink icon={GitHub} link="https://github.com/Navkcalbeht32" />
                   <NavLink icon={Email}/>
                </ul>
            </div>
        </header>
    )
}   