import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({setShowMobile,showMobile}) => {
  return (
    <section className={showMobile ? "mobile-menu-parent" : "mobile-menu-parent hide-mobile-menu"}>
        <ul className="mobile-links">
            <li onClick={()=>setShowMobile(false)} className="mobile-link-item">
                <Link className="mobile-link" to="/">
                   <h5> Home </h5>
                </Link>
            </li>
            <li onClick={()=>setShowMobile(false)} className="mobile-link-item">
                <Link className="mobile-link" to="/portfolio">
                <h5> Portfolio </h5>
                </Link>
            </li>
            <li onClick={()=>setShowMobile(false)} className="mobile-link-item">
                <Link className="mobile-link" to="/contact">
                    <h5>Contact Me </h5>
                </Link>
            </li>
        </ul>
    </section>
  )
}

export default MobileMenu