import React, {useRef} from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  const contactFormRef = useRef();

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    console.log('contactForm fired!',contactFormRef)
  }
  return (
    <div className="contact-parent-row">
      <div className="contact-column contact-header-column">
            <h3 className="header-font">Contact Me</h3>
        </div>
        <div className="contact-column contact-content-column">
<div className="contact-form">
  <form onSubmit={handleFormSubmit} ref={contactFormRef}>
  <div className="form-div">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" name="name" placeholder="Jane Appleseed" autoComplete="off" />
  </div>
  <div className="form-div">
    <label htmlFor="email">Email</label>
    <input type="text" className="form-control" name="email" placeholder="email@example.com" autoComplete="off" />
  </div>
  <div className="form-div">
    <label htmlFor="name">Message</label>
    <textarea type="text" className="form-control" name="message" placeholder="How can I help?" autoComplete="off" />
  </div>
  <div className="form-div">
    <button className="btn primary-btn">Send Message</button>
  </div>
  </form>
</div>

        </div>
    </div>
  )
}

export default ContactForm