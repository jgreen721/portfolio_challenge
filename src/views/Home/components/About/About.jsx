import React, {useEffect, useRef} from 'react'
import {Link} from "react-router-dom";
import { appObserver } from '../../../../utils/Observer'

import "./About.css"

const About = () => {
  const imgRef = useRef();
  const aboutCardRef = useRef();


  useEffect(()=>{

    appObserver(imgRef.current,"clearImg")
    appObserver(aboutCardRef.current,"scaleCard")

  },[])
  return (
    <section className="about-parent-section">
        <div className="about-section-column">
            <picture ref={imgRef} className="about-me-img-div">
                <source media="(min-width: 1050px)" srcSet="./images/homepage/desktop/image-homepage-profile.jpg"/>
                <source media="(min-width: 575px)" srcSet="./images/homepage/tablet/image-homepage-profile.jpg"/>
                <img className="about-me-img" src="./images/homepage/mobile/image-homepage-profile.jpg"/>
            </picture>        
        </div>
        <div ref={aboutCardRef} className="about-section-column about-section-content-column">
          <div className="line top-line"></div>
          <div className="about-section-content">
            <h2 className="about-me-header">About Me</h2>
            <h5 className="about-me-blurb">  I’m a junior front-end developer looking for a new role in an exciting company. 
  I focus on writing accessible HTML, using modern CSS practices and writing clean 
  JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
  whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
  and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
  I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
  you to check out my work.</h5>
  <Link to="/portfolio">
  <button className="btn secondary-btn">Go to Portfolio</button>
  </Link>
  </div>
  <div className="line bottom-line"></div>

        </div>
    </section>
  )
}

export default About