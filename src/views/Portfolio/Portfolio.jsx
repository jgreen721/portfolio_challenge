import React from 'react'
import { PortfolioItem } from './components';

import { useAppContext } from '../../context/AppContext';
import "./Portfolio.css"

const Portfolio = () => {
  const {portfolioData,viewProject} = useAppContext();


  
  return (
    <div className="view-container">
      <ul className="portfolio-list">
        {portfolioData.map(p=>(
          <PortfolioItem item = {p} key={p.id}/>
         

        ))}
      </ul>
      <ul className="mobile-portfolio-list">
      {portfolioData.map(p=>(
                  <PortfolioItem item = {p} key={p.id}/>

          
      ))}
      </ul>
    </div>
  )
}

export default Portfolio