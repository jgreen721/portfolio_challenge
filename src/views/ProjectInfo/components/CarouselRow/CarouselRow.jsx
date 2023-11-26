import React from 'react'
import { arrowLeft,arrowRight } from '../../../../const'
import { useAppContext } from '../../../../context/AppContext'
import "./CarouselRow.css"
const CarouselRow = () => {
  const {projectInfo} = useAppContext();
  return (
    <div className="carousel-row">
      <ul className="carousel">
        <li className="carousel-column carousel-item">
          <div className="arrow-div">
    <img className="arrow-icon-img" src={arrowLeft} alt="left-arrow" />
          </div>
          <div>
          <h2 className="thin header-font">{projectInfo?.prev.title}</h2>
          <h3 className="thinner muted my-2">Previous Project</h3>
          </div>
        </li>
        <div className="carousel-partition-item">
        </div>
        <li className="carousel-column carousel-item">
          <div>
            <h2 className="thin header-font">{projectInfo?.next.title}</h2> 
            <h3 className="thinner muted my-2">Next Project</h3>  
          </div>
          <div className="arrow-div">
          <img className="arrow-icon-img" src={arrowRight} alt="right-arrow" />

          </div>
        </li> 
    </ul>
  </div>
  )
}

export default CarouselRow