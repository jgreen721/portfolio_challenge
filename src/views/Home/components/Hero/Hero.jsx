import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <header className="home-hero">
     
        <div className="img-hero-div slideleft">
            <picture>
                <source  media="(min-width: 768px)" srcSet="./images/homepage/desktop/image-homepage-hero.jpg"/>
                <source media="(min-width: 375px)" srcSet="./images/homepage/tablet/image-homepage-hero.jpg"/>
                <img className="img-hero" src="./images/homepage/mobile/image-homepage-hero.jpg"/>
            </picture> 
        </div>
        <section className="intro-hero-card slideup">
            <h1 className="intro-h1">Hey, I'm Alex Spencer and I love building beautiful websites</h1>
            <button className="btn primary-btn">About Me</button>
        </section>

    </header>
  )
}

export default Hero