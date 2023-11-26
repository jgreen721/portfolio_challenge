import React from 'react'
import { whiteGithubIcon, whiteTwitterIcon,whiteLinkedInIcon,whiteLogo } from '../../const'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-links-column footer-column">
    <div className="footer-icon-div">
        <img src={whiteLogo} alt="" />
    </div>
    <ul className="footer-nav-links">
        <li className="nav-link-item">
            <Link className="footer-nav-link" to="/">
                <p>Home</p>
            </Link>
        </li>
        <li className="nav-link-item">
            <Link className="footer-nav-link" to="/portfolio">
            <p> Portfolio</p>
            </Link>
        </li>
        <li className="nav-link-item">
            <Link className="footer-nav-link" to="/contact">
            <p> Contact Me</p>
            </Link>
        </li>
    </ul>
        </div>

        <div className="footer-links-column footer-column">
            <ul className="footer-media-links">
                <li className="footer-media-item">
                    <a href="https://github.com/jgreen721" className="footer-media-link">
                        <img src={whiteGithubIcon} alt="" />
                    </a>
                </li>
                <li className="footer-media-item">
                    <a href="https://twitter.com" className="footer-media-link">
                        <img src={whiteTwitterIcon} alt="" />
                    </a>
                </li>
                <li className="footer-media-item">
                    <a href="https://linkedin.com" className="footer-media-link">
                        <img src={whiteLinkedInIcon} alt="" />
                    </a>
                </li>
            </ul>
            </div>

    </footer>
  )
}

export default Footer