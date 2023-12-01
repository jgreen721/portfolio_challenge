import React, {useRef, useState} from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  const contactFormRef = useRef();
  const [errorName,setErrorName] = useState("")
  const [errorEmail,setErrorEmail] = useState("")
  const [errorMessage,setErrorMessage] = useState("")
  const [successMsg,setSuccessMsg] = useState("")
  const nameErrorRef = useRef()
  const emailErrorRef = useRef()
  const messageErrorRef = useRef()

  const handleFormSubmit = (e)=>{
    if(successMsg)return;
    e.preventDefault();
    console.log('contactForm fired!',contactFormRef)
    const formData = new FormData(contactFormRef.current)
    let contactInfo={
      name:formData.get("name"),
      email:formData.get("email"),
      message:formData.get("message"),
    }
    console.log("contactInfo",contactInfo);
    let hasError = false;
    for(let i in contactInfo){
      if(contactInfo[i] == ""){
         console.log("invalid input!");
         hasError = true;
         if(i == "name")nameErrorRef.current.classList.add("show-error")
         if(i == "email")emailErrorRef.current.classList.add("show-error")
         if(i == "message")messageErrorRef.current.classList.add("show-error")
      }
    }
    if(!hasError){
      toggleAlert("Your email was successfully sent! :)")
    }
  }

  const toggleAlert=(msg)=>{
    setSuccessMsg(msg);
    setTimeout(()=>setSuccessMsg(""),2000)
  }
  return (
    <div className="contact-parent-row">
      <div className="contact-column contact-header-column">
            <h3 className="header-font">Contact Me</h3>
            <h3 className="success-alert">{successMsg}</h3>

        </div>
        <div className="contact-column contact-content-column">
<div className="contact-form">
  <form onKeyDown={(e)=>{
    if(e.target.name == "name"){
   if(nameErrorRef.current.classList.contains("show-error")){nameErrorRef.current.classList.remove("show-error")}
    }
    if(e.target.name == "email"){
      if(emailErrorRef.current.classList.contains("show-error")){emailErrorRef.current.classList.remove("show-error")}
    }
    if(e.target.name == "message"){
      if(messageErrorRef.current.classList.contains("show-error")){messageErrorRef.current.classList.remove("show-error")}
    }

    
  }} onSubmit={handleFormSubmit} ref={contactFormRef}>
  <div className="form-div">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" name="name" placeholder="Jane Appleseed" autoComplete="off" />
    <div className="error-div">
    <h5 ref={nameErrorRef} className="error">{errorName}Error -- invalid name</h5>
    </div>

  </div>
  <div className="form-div">
    <label htmlFor="email">Email</label>
    <input type="text" className="form-control" name="email" placeholder="email@example.com" autoComplete="off" />
    
    <div className="error-div">
<h5 ref={emailErrorRef} className="error">{errorEmail} Error -- invalid email</h5>
</div>
  </div>
  <div className="form-div">
    <label htmlFor="name">Message</label>
    <textarea type="text" className="form-control" name="message" placeholder="How can I help?" autoComplete="off" />
    <div className="error-div">
    <h5 ref={messageErrorRef} className="error">{errorMessage} Error -- invalid message</h5>
    </div>

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