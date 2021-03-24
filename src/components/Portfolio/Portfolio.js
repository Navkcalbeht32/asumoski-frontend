import React from 'react'
import './Portfolio.scss'
import Projects from './Projects'

export default function Portfolio() {

    return (
        <div className="portfolio-page">  
            <div className="portfolio-heading">
                <h2>Recent Work</h2>
                <h3>Live Projects & Repositories </h3>
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