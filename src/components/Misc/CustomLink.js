import './Misc.scss'

const CustomLink = ({linkText, link, target}) => {
    return (
        <div className="customlink">
            <a href={link} target={target}>
                <h5>{linkText}</h5>
                <span>--&gt;</span>
            </a>
        </div>
        
    )
}

export default CustomLink