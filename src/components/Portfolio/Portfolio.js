import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './Portfolio.scss'
import sanityClinet from '../../client'
import Projects from './Projects'
import Posts from './Posts'

export default function Portfolio() {

    return (
        <>  
            <div className="portfolio-heading">
                <h1>Portfolio</h1>
            </div>
            <hr/>
            <div className="section">
                <div className="portfolio-wrapper">
                    <Projects />
                </div>   
             </div>
            <hr/>
            <div className="section">
                <div className="portfolio-wrapper">
                    <Posts />
                </div>   
             </div>
        </>
    )
}   