import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({showMobile}) => {
  return (
    <section className={showMobile ? "mobile-menu" : "mobile-menu hide-mobile-menu"}>
        <ul className="mobile-links">
            <li className="mobile-link-item">
                <Link className="mobile-link" to="/">
                   <h5> Home </h5>
                </Link>
            </li>
            <li className="mobile-link-item">
                <Link className="mobile-link" to="/portfolio">
                <h5> Portfolio </h5>
                </Link>
            </li>
            <li className="mobile-link-item">
                <Link className="mobile-link" to="/contact">
                    <h5>Contact Me </h5>
                </Link>
            </li>
        </ul>
    </section>
  )
}

export default MobileMenu