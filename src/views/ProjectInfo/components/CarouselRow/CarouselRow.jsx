import React from 'react'
import { arrowLeft,arrowRight } from '../../../../const'
import { useAppContext } from '../../../../context/AppContext'
import "./CarouselRow.css"
const CarouselRow = () => {
  const {projectInfo,viewProject} = useAppContext();
  return (
    <div className="carousel-row">
      <ul className="carousel">
        <li onClick={()=>viewProject(projectInfo.prev.id)} className="carousel-column carousel-item flex-start-mobile">
          <div className="arrow-div">
    <img  className="arrow-icon-img" src={arrowLeft} alt="left-arrow" />
          </div>
          <div>
          <h3 className="thin header-font">{projectInfo?.prev.title}</h3>
          <h4 className="thinner muted my-2">Previous Project</h4>
          </div>
        </li>
        <div className="carousel-partition-item">
        </div>
        <li onClick={()=>viewProject(projectInfo.next.id)}  className="carousel-column carousel-item flex-end-mobile">
          <div className="desktop-carousel-column">
            <h3 className="thin header-font">{projectInfo?.next.title}</h3> 
            <h4 className="thinner muted my-2">Next Project</h4> 
          </div>
          <div className="arrow-div">
          <img className="arrow-icon-img" src={arrowRight} alt="right-arrow" />

          </div>
          <div className="mobile-carousel-column">
            <h3 className="thin header-font">{projectInfo?.next.title}</h3> 
            <h4 className="thinner muted my-2">Next Project</h4> 
          </div>
        </li> 
    </ul>
  </div>
  )
}

export default CarouselRow