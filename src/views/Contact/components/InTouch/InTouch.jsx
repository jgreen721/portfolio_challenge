import React from 'react'
import { githubIcon,linkedInIcon,twitterIcon } from '../../../../const'
import "./InTouch.css"

const InTouch = () => {
  return (
    <div className="contact-parent-row">
        <div className="contact-column contact-header-column">
            <h3 className="header-font">Get in Touch</h3>
        </div>
        <div className="contact-column contact-content-column">
            <p className="muted strong mb-2">  I’d love to hear about what you’re working on and how I could help. I’m currently 
  looking for a new role and am open to a wide range of opportunities. My preference 
  would be to find a position in a company in London. But I’m also happy to hear about 
  opportunites that don’t fit that description. I’m a hard-working and positive person 
  who will always approach each task with a sense of purpose and attention to detail. 
  Please do feel free to check out my online profiles below and get in touch using the form.</p>
  <ul className="contact-links">
      <li className="contact-link-item">
          <a target="_blank" href="https://github.io/jgreen721">
          <img className="contact-link-img" src={githubIcon} alt="" />
          </a>
      </li>
      <li className="contact-link-item">
          <a target="_blank" href="https://x.com">
          <img className="contact-link-img" src={twitterIcon} alt="" />
          </a>
      </li>
      <li className="contact-link-item">
          <a target="_blank" href="https://www.linkedin.com/in/justin-green-2484513b/">
          <img className="contact-link-img" src={linkedInIcon} alt="" />
          </a>
      </li>
  </ul>
        </div>
    </div>
  )
}

export default InTouch