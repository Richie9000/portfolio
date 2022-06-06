import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar"  >
    <ul style={{margin: "15px"}}  >
      <Link className="nav-list" to="/" style={{margin: "15px"}}  >Home</Link>
      <Link className="nav-list" to="/watch" style={{margin: "15px"}} >Watch</Link>
      <Link className="nav-list" to="/model" style={{margin: "15px"}} >Shoe Model</Link>
      <Link className="nav-list" to="/house" style={{margin: "15px"}} >3D House</Link>
      <Link className="nav-list" to="/contact" style={{margin: "15px"}} >Contact</Link>
    </ul>
  </div>
  )
}

export default Navbar