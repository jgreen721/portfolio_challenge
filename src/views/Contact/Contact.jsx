import React, {useEffect, useRef} from 'react'
import {InTouch, ContactForm} from "./components"
import { appObserver } from '../../utils/Observer'
import "./Contact.css"

const Contact = () => {
  const inTouchRef = useRef();
  const contactRef = useRef();

  useEffect(()=>{
    appObserver(inTouchRef.current,"slideleft");
    appObserver(contactRef.current,"slideright")
  })

  return (
    <div className="contact-view-container">
      <div ref={inTouchRef}>
      <InTouch/>
      </div>
      <div ref={contactRef}>

      <ContactForm/>
      </div>
    </div>
  )
}

export default Contact