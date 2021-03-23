import './Home.scss'

export default function Hero() {
    return (
       <div className="hero">
            <div className="hero-wrapper">
                <h1 className="web">Web Development.</h1>
                <h1 className="ecom" data-aos="fade-left">Ecommerce.</h1>
                <div className="hero-gradient">
                    <div className="hero-gradient-cover" data-aos="fade-up" data-aos-duration="2000">
                        <h1>& More.</h1>
                    </div>
                </div>
                <div className="hero-subtext">
                    I intuitively merge user experience with business to create highly effective, and usable applications.
                </div>
            </div>
       </div>
    )
}   