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
    <div className="container" style={{width:"50%", marginTop: "120px"}}>
      <h1 style={{ marginTop:"25px", textAlign:"center", fontSize: "25px", marginRight:"35px"}}>Contact Form</h1>
      <form className="row" style={{ margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>
        <label htmlFor="">Name</label>
        <input className="form-control" type="text" name= "name"  style={{ backgroundColor: "#160404",width:"80%", marginLeft: "15px"}} />

        <label htmlFor="">Email</label>
        <input className="form-control" type="email" name= "user_email" style={{ backgroundColor: "#160404",width:"80%", marginLeft: "15px"}} />

        <label htmlFor="">Message</label>
        <textarea className="form-control" name="message" rows="4" style={{ backgroundColor: "#160404",width:"80%", marginLeft: "15px"}}/>
        <input className="form-control btn btn-primary" style={{marginTop:"25px", width:"80%", marginLeft: "15px"}} type="submit" value="Send"/>

        
      </form>
    </div>
  )
}

export default ContactForm