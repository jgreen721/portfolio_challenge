import React, {useRef, useEffect} from 'react'
import { appObserver } from '../../../../utils/Observer';
import "./PortfolioItem.css"

const PortfolioItem = ({item}) => {
    const itemRef = useRef();


    useEffect(()=>{
if(item.position == "flex-start"){
        appObserver(itemRef.current,"slideleft")
}
else{
     appObserver(itemRef.current,"slideright");

}
    },[])


  return (
    <li ref={itemRef} key={item.id} className="portfolio-item">
    {item.position == "flex-start" ? 
    <div className="gallery-item-row">
      <div className="gallery-item-column">
        <div className="gallery-item-img-div">
          <picture>
            <source media="(min-width:850px)" srcSet={item.cover.desktop}/>
            <source media="(min-width:450px)" srcSet={item.cover.tablet}/>
            <img className="gallery-img" src={item.cover.mobile} alt="gallery-img"/>
          </picture>
        </div>
      </div>
      <div className="gallery-item-column content-line-column">
        <div className="top-line line"></div>
        <div className="gallery-item-content">
          <h3 className="header-font">{item.title}</h3>
          <h5 className="thin">{item.summary}</h5>

          <button onClick={()=>viewProject(item.id)} className="btn secondary-btn">View Project</button>

        </div>
        <div className="bottom-line line"></div>

      </div>
    </div>
    :
    <div className="gallery-item-row">
      <div className="gallery-item-column content-line-column">
      <div className="top-line line"></div>

        <div className="gallery-item-content">
          <h3 className="header-font">{item.title}</h3>
          <h5 className="thin">{item.summary}</h5>
          <button onClick={()=>viewProject(item.id)} className="btn secondary-btn">View Project</button>
        </div>
        <div className="bottom-line line"></div>

      </div>
      <div className="gallery-item-column">
        <div className="gallery-item-img-div">
        <picture>
            <source media="(min-width:850px)" srcSet={item.cover.desktop}/>
            <source media="(min-width:450px)" srcSet={item.cover.tablet}/>
            <img className="gallery-img" src={item.cover.mobile} alt="gallery-img"/>
          </picture>                
        </div>
      </div>
    </div>
}
  </li>
  )
}

export default PortfolioItem