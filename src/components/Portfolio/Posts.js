import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.scss'
import sanityClinet from '../../client'


export default function Posts() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClinet
            .fetch(`*[_type == "post"]{
                title,
                subtitle,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, []);

    return (
        <>  
            {postData && postData.map((post, index) => (
                <Link to={"/portfolio" + post.slug.current} key={post.slug.current}>
                    <div className="portfolio-card">
                        <div className="portfolio-card-wrapper">
                            <div className="portfolio-card-image">
                            <img 
                            alt={post.mainImage.alt}
                            src={post.mainImage.asset.url} 
                            />
                            </div>
                            <div className="portfolio-card-text">
                                <h3>{post.title}</h3>
                                <h5>{post.subtitle}</h5>
                            </div>
                        </div>
                    </div>
                </Link>
            
            ))}
        </>
    )
}   