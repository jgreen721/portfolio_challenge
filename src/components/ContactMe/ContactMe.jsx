import React, {useRef, useEffect} from 'react'
import "./ContactMe.css"
import { appObserver } from '../../utils/Observer'
import { Link } from 'react-router-dom'

const ContactMe = () => {
  const h2Ref = useRef();
  const btnRef = useRef();


  useEffect(()=>{
      appObserver(h2Ref.current,'slideright');
      appObserver(btnRef.current,'slideleft');
  },[]);
  return (
    <section className="contact-me-section">
      <div className="contact-me-h2-div">
        <h2 ref={h2Ref} className="contact-me-h2">Interested in doing a project together?</h2>
      </div>
        <div className="contact-me-line"></div>
        <div className="flex-end-div">
          <Link ref={btnRef} to="/contact" className="contact-btn-link">
            <button className="btn secondary-btn">Contact Me</button>
          </Link>
        </div>
    </section>
  )
}

export default ContactMe