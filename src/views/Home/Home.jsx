import React from 'react'
import {Hero,About} from "./components"
import "./Home.css"

const Home = () => {

  return (
    <div className="view-container">
      <Hero/>
      <About/>
    </div>
  )
}

export default Home