import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from '../Misc/HighlightCode'
import './Portfolio.scss'


import sanityClinet from '../../client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClinet);
function urlFor(source) {
    return builder.image(source)
}

const serializers = {
    types: {
        code: ({node: {language, code, filename}}) => {
            return (
                <div className="code">
                    <HighlightCode  language={language}>
                        {code}
                    </HighlightCode>
                    <div className="code-filename">
                       <em><h4>{filename}</h4></em> 
                    </div>
                </div>
            )
        },
        image: ({node: {asset, alt}}) => {
            return (
                <div className="singlepost-block-image">
                    <img src={urlFor(asset).height(300).fit('max').url()} />
                    <div><em><h4>{alt}</h4></em></div>
                </div>
            )
        }
    }
}

const BlockContentComponent = ({singlePost}) => {
    return (
        <BlockContent 
        serializers={serializers}
        projectId="7r55p5ig"
        dataset="production"
        blocks={singlePost}
        />
    )
}

export default BlockContentComponent