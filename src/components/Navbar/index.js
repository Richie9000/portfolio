import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css";

const Navbar = () => {
  return (
    <div className="navigation-menu">
    <ul>
      <Link to="/">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
     
    </ul>
  </div>
  )
}

export default Navbar