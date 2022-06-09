import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Breakpoint } from 'react-socks';




 

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)
  const onClick = () => {setShowNav(true)}
  const myContainer = useRef(null);

  const PopHamb =() =>{
    const closed = useRef();
     function CloseNav (){
       closed.current.style.display = "none"
   
     }
     
     return(
       <div ref={closed} className="containerS" style={{ top: 0, height: "100%", width: "100%", backgroundColor:"black", zIndex: "2", position: "absolute", opacity: "95%"}}>
         <ul style={{margin: "15px"}}  >
      <Link className="nav-list" to="/" style={{margin: "15px"}}  >Home</Link>
      <Link className="nav-list" to="/watch" style={{  margin: "15px"}} >Watch</Link>
      <Link className="nav-list" to="/model" style={{margin: "15px"}} >Shoe Model</Link>
      <Link className="nav-list" to="/house" style={{margin: "15px"}} >3D House</Link>
      <Link className="nav-list" to="/contact" style={{margin: "15px"}} >Contact</Link>
         </ul>
         <button  className="closebtn" onClick= {() => {setShowNav(false); CloseNav()}}  >&times;</button>
           
       </div>
     )
    }

 
  return (
    <div ref={myContainer}>

    <Breakpoint large up>
    <div className="navbar"  >
    <ul style={{margin: "15px"}}  >
      <Link className="nav-list" to="/" style={{margin: "15px"}}  >Home</Link>
      <Link className="nav-list" to="/watch" style={{  margin: "15px"}} >Watch</Link>
      <Link className="nav-list" to="/model" style={{margin: "15px"}} >Shoe Model</Link>
      <Link className="nav-list" to="/house" style={{margin: "15px"}} >3D House</Link>
      <Link className="nav-list" to="/contact" style={{margin: "15px"}} >Contact</Link>
    </ul>
  </div>
     
  </Breakpoint>
  
   <Breakpoint small down>
   <button showNav={showNav} onClick={onClick} style={{   backgroundColor: "Transparent", backgroundRepeat:"no-repeat",
        border: "none", cursor: "pointer", overflow: "hidden", color: "white", 
        fontSize: "30px", margin:"15px" }}>☰</button> 
     { showNav ? <PopHamb /> : null }
   
 </Breakpoint>
    </div>
  )
}

export default Navbar