import './Section.scss'
const SectionCard = ({children, title, text}) => {
    return (
        <div className="section-card">
            <div className="section-card-wrapper">
                {/* <h3>{title}</h3> */}
                <h5 className="section-card-text">{text}</h5>
                {children}
            </div>
        </div>
    )
}

export default SectionCard