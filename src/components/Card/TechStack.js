import React from 'react'
import './Card.scss'
import TechItem from './TechItem'

const TechStack = () => {
    return (
        <div className="techstack">
            <TechItem title="React" subtitle="Javascript Library" image="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" link="https://reactjs.org/" />
            <TechItem title="JavaScript (ES6)" subtitle="Programming Language" image="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
            <TechItem title="Node.js" subtitle="JavaScript Runtime" image="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" link="https://nodejs.org/en/" />
            <TechItem title="Redux" subtitle="State Management library" image="https://cdn.worldvectorlogo.com/logos/redux.svg" link="https://redux.js.org/" />
            <TechItem title="Next.js" subtitle="React Framework" image="https://cdn.worldvectorlogo.com/logos/next-js.svg" link="https://nextjs.org/" />
            <TechItem title="Angular" subtitle="Javascript Framework" image="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" link="https://angular.io/" />
            <TechItem title="Strapi" subtitle="Headless CMS" image="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/ndjjv1cj4s32fp8fwslu" link="https://strapi.io/" />
            <TechItem title="Sanity" subtitle="Headless CMS" image="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/exghybvcvdmerns27fff" link="https://www.sanity.io/" />
            <TechItem title="SASS/SCSS" subtitle="CSS Extension" image="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" link="https://sass-lang.com/" />
            <TechItem title="HTML5" image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" link="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" />
            <TechItem title="CSS3" image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        </div>
    )
}

export default TechStack