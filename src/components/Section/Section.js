import './Section.scss'

const Section = ({children, title, subtitle}) => {
    return (
        <div className="section">
            <h4>{title}</h4>
            <h3>{subtitle}</h3>
            <div className="section-children">
                {children}
            </div>
            
        </div>
    )
}

export default Section