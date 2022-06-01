import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css";

const Navbar = () => {
  return (
    <div className="navigation-menu">
    <ul>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/model">Shoe Model</Link>
      <Link to="/house">3D House</Link>
    </ul>
  </div>
  )
}

export default Navbar