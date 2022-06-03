import React from 'react'
import emailjs from "emailjs-com"

const ContactForm = () => {

  function sendEmail (e) {
    e.preventDefault()
    emailjs.sendForm("service_yk05f19", "template_etrnv2h", e.target, "FmYy1ydMc0Kv_Vt5h")
    .then(res =>{
      console.log(res);
    }).catch(err => {console.log(err)})
  }
  return (
    <div className="container border" style={{width:"50%"}}>
      <h1 style={{ marginTop:"25px", textAlign:"center", fontSize: "25px"}}>Contact Form</h1>
      <form className="row" style={{ margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>
        <label htmlFor="">Name</label>
        <input className="form-control" type="text" name= "name" />

        <label htmlFor="">Email</label>
        <input className="form-control" type="email" name= "user_email" />

        <label htmlFor="">Message</label>
        <textarea className="form-control" name="message" rows="4" />
        <input className="form-control btn btn-primary" style={{marginTop:"25px" }}type="submit" value="Send" />

        
      </form>
    </div>
  )
}

export default ContactForm