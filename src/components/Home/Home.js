import React from 'react'
import Hero from '../Home/Hero'
import Card from '../Card/Card'
import TechStack from '../Card/TechStack'
import Section from '../Section/Section'
import DBMockup from '../../images/danny-mockup.png'
import SectionCard from '../Section/SectionCard'
import CustomLink from '../Misc/CustomLink'
import Waves from '../Misc/Waves'
import Footer from '../Misc/Footer'
import SEO from '../../images/analysis.svg'
import Analytics from '../../images/analytics.svg'
import CMS from '../../images/cms.svg'
import Shop from '../../images/online-shop.svg'


export default function Home() {
    return (
        <>
            <Hero />
            <Waves />
            <div>
                <div className="cta">
                    <Card data-aos="zoom-out" background="white" title="Tech Stack" >
                        <TechStack />
                        <CustomLink linkText="View GitHub Account" link="https://github.com/Navkcalbeht32" target="_blank"/>
                    </Card>
                    <Card background="gray" title="Portfolio"  >
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <CustomLink linkText="View Portfolio" link='/portfolio' />
                    </Card>
                </div>
                <div className="section-background" />
                <Section 
                    title="Fast & Responsive"
                    subtitle="I build sites with speed and user experience prioritized">
                    <div className="section-cards">
                        
                        <SectionCard text="I build sites for desktop & mobile devices, with speed and user experience prioritized. I build sites for desktop & mobile devices, with speed and user experience prioritized">
                            <CustomLink linkText="Learn More about Next.js" link="https://nextjs.org/" target="_blank" />
                        </SectionCard>
                        
                        <SectionCard text="I build sites for desktop & mobile devices, with speed and user experience prioritized. I build sites for desktop & mobile devices, with speed and user experience prioritized" >
                            <CustomLink linkText="Learn More about SSR" link="https://developers.google.com/web/updates/2019/02/rendering-on-the-web" target="_blank" />
                        </SectionCard>
                    </div>

                    <div className="section-images">
                        <img data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up" className="desk" src={DBMockup} />
                    </div>

                </Section>
                <Section 
                    title="Building Modern Web Apps"
                    subtitle="Using the newest tools and techniques">

                        <div className="section-4-col">

                            <div className="section-4-col-item" data-aos-delay="100" data-aos-duration="600" data-aos="fade-up">
                                <img src={SEO} />
                                <div className="section-4-col-title">Search Engine Optimization</div>
                                <h5>SEO allows your website to be seen by search engines like Google, so you can convert more customers.</h5>
                            </div>
                            <div className="section-4-col-item" data-aos-delay="300" data-aos-duration="600" data-aos="fade-up">
                                <img src={Analytics} />
                                <div className="section-4-col-title">Site Analytics</div>
                                <h5>Analytics enable you to track how users respond and interact with your user interface. This allows you to make more high-impact decisions.</h5>
                            </div>
                            <div className="section-4-col-item" data-aos-delay="500" data-aos-duration="600" data-aos="fade-up">
                                <img src={CMS} />
                                <div className="section-4-col-title">Content Management</div>
                                <h5>Having the ability to update your site without code, makes managing a website easier for everyone.</h5>
                            </div>
                            <div className="section-4-col-item" data-aos-delay="700" data-aos-duration="600" data-aos="fade-up">
                                <img src={Shop} />
                                <div className="section-4-col-title">Payment Integration</div>
                                <h5>The internet is the modern marketplace; payment integration makes purchases easier for your customers.</h5>
                            </div>
                            
                        </div>

                </Section>
                <Footer />
            </div>
        </>
    )
}   