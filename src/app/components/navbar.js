import React from 'react'
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
function Navbar() {
  return (
    <div >
       <header className="header">
      
      <div className="logo">LOGO</div>
      <nav className="nav" >
        <a href="#" className="nav-link">Shop</a>
        <a href="#" className="nav-link">Skills</a>
        <a href="#" className="nav-link">Stories</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact Us</a>
      </nav>
      <div className="icons">
        <CiSearch />
        <FaUser />
        <FaShoppingBag />
      </div>
    </header>
    </div>
  )
}

export default Navbar
