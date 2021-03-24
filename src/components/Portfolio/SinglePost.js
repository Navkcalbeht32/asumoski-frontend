import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Portfolio.scss'
import sanityClinet from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Loader from '../Misc/Loader'

const builder = imageUrlBuilder(sanityClinet);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePage() {
    const [singlePost, setSinglePost] = useState(null);
    const {slug } = useParams();

    useEffect(() => {
        sanityClinet
            .fetch(`*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
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
        <></>
    )
}   