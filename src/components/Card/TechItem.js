import React from 'react'
import './Card.scss'

const TechItem = ({title, subtitle, image, link}) => {
    return (
        <a href={link} target="_blank">
            <div className="techitem">
                <div className="itemleft">
                    <img src={image} />
                    <div>
                        <h4>{title}</h4>
                        <h5>{subtitle}</h5>
                    </div>
                </div>     
            </div>
        </a>
    )
}

export default TechItem