import { Link } from 'react-router-dom'
import CustomLink from '../Misc/CustomLink'
import './Card.scss'

export default function Card({children, title, link, linkText, background}) {
    return (
       <div data-aos-delay="500" data-aos-duration="1000" data-aos="fade" className={`card ${ background }`}>
            <h3>{title}</h3>
            <div>
                {children}
            </div>
            
       </div>
    )
}   