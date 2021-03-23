import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './Portfolio.scss'
import sanityClinet from '../../client'
import Projects from './Projects'
import Posts from './Posts'

export default function Portfolio() {

    return (
        <div className="portfolio-page">  
            <div className="portfolio-heading">
                <h2>Recent Work</h2>
                <h3>Live Projects, Repositories, & Case Studies</h3>
                <br/>
            </div>
            <hr/>
            <div className="">
                <div className="portfolio-wrapper">
                    <Projects />
                </div>   
             </div>
            <hr/>
            <div className="">
                <div className="portfolio-wrapper">
                    {/* <Posts /> */}
                </div>   
             </div>
        </div>
    )
}   