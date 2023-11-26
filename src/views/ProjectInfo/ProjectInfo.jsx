import React, {useEffect} from 'react'
import { useAppContext } from '../../context/AppContext'
import {useParams, useNavigate} from "react-router-dom"
import "./ProjectInfo.css"
import CarouselRow from './components/CarouselRow/CarouselRow'


const ProjectInfo = () => {
  const {projectInfo} = useAppContext();
  const navigate = useNavigate();
  // const {project:currentId} = useParams()

  useEffect(()=>{
    console.log('projectInfo',projectInfo?.current)
    if(!projectInfo?.current){
      console.log('redirect client')
      navigate("/portfolio",{replace:true})
      }
     

  },[])

  console.log("ProjectInfo",projectInfo);
  return (
    <div className="view-container project-info-parent">
      <header className="project-hero-parent">
      <picture>
                    <source media="(min-width:850px)" srcSet={projectInfo?.current.projInfo.hero.desktop}/>
                    <source media="(min-width:450px)" srcSet={projectInfo?.current.projInfo.hero.tablet}/>
                    <img className="gallery-img" src={projectInfo?.current.projInfo.hero.mobile} alt="gallery-img"/>
                  </picture>
      </header>
      <main className="project-info-content-parent">
        <div className="project-info-column">
        <div className="line project-info-line"></div>

          <div className="project-info-content">
            <h2 className="header-font">{projectInfo?.current?.title}</h2>
            <h5 className="thin my-2">{projectInfo?.current?.background}</h5>
            <div className="my-2 content-details-div">
            <h5 className="cyan bold">Interaction Design/Front-End Development</h5>
             <ul className="technologies-list">
              {projectInfo.current.tools.map((tool,idx)=>(
                <li className="technology-item" key={tool}>
                  <h5 className="cyan bold">{tool}
                  {idx != projectInfo.current.tools.length-1 && " /"}
                  </h5>
   
                </li>
              ))}
            </ul> 
            </div>
      <button className="btn secondary-btn">Visit Website</button>
          </div>
          <div className="line project-info-line"></div>

        </div>
        <div className="project-info-column">
          <h1 className="thin header-font">Project Background</h1>
          <h5 className="my-2 thin">{projectInfo?.current?.summary}</h5>
          <h3 className="thin header-font">Static Previews</h3>
          <div className="previews-imgs-container">
            <div className="preview-img-container preview-img-container-one">
            <picture>
                    <source media="(min-width:850px)" srcSet={projectInfo?.current.projInfo.preview_one.desktop}/>
                    <source media="(min-width:450px)" srcSet={projectInfo?.current.projInfo.preview_one.tablet}/>
                    <img className="gallery-img" src={projectInfo?.current.projInfo.preview_one.mobile} alt="gallery-img"/>
            </picture>
            </div>
            <div className="preview-img-container preview-img-container-two">
            <picture>
                    <source media="(min-width:850px)" srcSet={projectInfo?.current.projInfo.preview_two.desktop}/>
                    <source media="(min-width:450px)" srcSet={projectInfo?.current.projInfo.preview_two.tablet}/>
                    <img className="gallery-img" src={projectInfo?.current.projInfo.preview_two.mobile} alt="gallery-img"/>
            </picture>
            </div>
          </div>
        </div>
      </main>
   
      <CarouselRow/>
    
   
    </div>
  )
}

export default ProjectInfo