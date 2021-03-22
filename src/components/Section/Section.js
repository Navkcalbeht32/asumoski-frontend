import './Section.scss'

const Section = ({children, title, subtitle}) => {
    return (
        <div className="section">
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            <div className="section-children">
                {children}
            </div>
            
        </div>
    )
}

export default Section