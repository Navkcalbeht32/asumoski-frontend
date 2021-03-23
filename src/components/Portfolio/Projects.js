import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.scss'
import sanityClinet from '../../client'


export default function Projects() {
    const [projectData, setProject] = useState(null);

    useEffect(() => {
        sanityClinet
            .fetch(`*[_type == "project"]{
                title,
                subtitle,
                slug,
                categories,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setProject(data))
            .catch(console.error)
    }, []);

    return (
        <>  
            {projectData && projectData.map((project, index) => (
                <Link to={"/portfolio/" + project.slug.current} key={project.slug.current}>
                    <div className="portfolio-card">
                        <div className="portfolio-card-wrapper">
                            <div className="portfolio-card-image">
                            <img 
                            alt={project.mainImage.alt}
                            src={project.mainImage.asset.url} 
                            />
                            </div>
                            <div className="portfolio-card-text">
                                <h3>{project.title}</h3>
                                <h5>{project.subtitle}</h5>
                            </div>
                        </div>
                    </div>
                </Link>
            
            ))}
        </>
    )
}   