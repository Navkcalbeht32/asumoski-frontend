import { Link } from 'react-router-dom'
import CustomLink from '../Misc/CustomLink'
import './Card.scss'

export default function Card({children, title, link, linkText, background}) {
    return (
       <div className={`card ${ background }`}>
            <h3>{title}</h3>
            <div>
                {children}
            </div>
            
       </div>
    )
}   