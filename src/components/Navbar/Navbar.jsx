import React, {useState} from 'react'
import {logo, closeIcon, hamburgerIcon} from "../../const"
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import "./Navbar.css"

const Navbar = () => {
    const [showMobile,setShowMobile] = useState(false)
  return (
    <nav className="nav">
    {/* <div className="nav-links-column nav-column"> */}
<div className="nav-icon-div">
    {/* <img className="nav-icon" src={logo} alt="" /> */}
    <div className="left-logo-square-nav logo-square"></div>
    <div className="right-logo-square-nav logo-square"></div>
</div>

    {/* </div> */}

    <div className="nav-column">
    <ul className="nav-links">
        <li className="nav-link-item">
            <Link className="nav-link" to="/">
                <p>Home</p>
            </Link>
        </li>
        <li className="nav-link-item">
            <Link className="nav-link" to="/portfolio">
            <p> Portfolio</p>
            </Link>
        </li>
        <li className="nav-link-item">
            <Link className="nav-link" to="/contact">
            <p> Contact Me</p>
            </Link>
        </li>
    </ul>
    <div className="mobile-menu-div">
        <div  className="mobile-icon-div">
            <button className="mobile-btn" onClick={()=>setShowMobile(!showMobile)}>
                <img src={showMobile ? closeIcon : hamburgerIcon} alt="" />
            </button>
        </div>
        {/* <MobileMenu showMobile={showMobile}/> */}
    </div>
    <MobileMenu showMobile={showMobile}/>

        </div>

</nav>
  )
}

export default Navbar