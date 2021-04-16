import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Portfolio.scss'
import sanityClinet from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Loader from '../Misc/Loader'
import BlockContentComponent from './BlockContent'
import Github from '../../images/github.svg'


const builder = imageUrlBuilder(sanityClinet);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePage() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClinet
            .fetch(`*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                live,
                github,
                mainImage{
                    asset->{
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`).then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singlePost) return <Loader />

    return (
        <div className="singlepost">
            <div className="singlepost-wrapper">
                <div>
                    <div>
                        <h1>{singlePost.title}</h1>
                        <div className="singlepost-author">
                            <img src={urlFor(singlePost.authorImage).url()} />
                            <p>{singlePost.name}</p>
                        </div>
                    </div>
                </div>
                <div className="singlepost-coverimage">
                    <img src={urlFor(singlePost.mainImage).url()} />
                </div>
                <div className="singlepost-links">
                    <a href={singlePost.live} target="_blank">
                        <div className="singlepost-live">
                            Live Site
                        </div>
                    </a>
                    <a href={singlePost.github} target="_blank">
                        <div className="singlepost-github">
                            <img src={Github} />
                        </div>
                    </a>
                </div>
                
                <div className="singlepost-block">
                    <BlockContentComponent singlePost={singlePost.body} />
                </div>
            </div>
        </div>
    )
}   