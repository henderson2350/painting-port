import React from "react";
import './style.css'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1 id="header">CLARE HENDERSON</h1>
      <nav>
        <NavLink activeStyle={{ color:'#5754a8' }} to="/gallery">Gallery</NavLink>
        <NavLink activeStyle={{ color:'#5754a8' }} to="/about">About</NavLink>
        {/* <NavLink activeStyle={{ color:'#5754a8' }} to="/portraiture">Portraiture</NavLink> */}
        <NavLink activeStyle={{ color:'#5754a8' }} to="/available">Available</NavLink>
        <NavLink activeStyle={{ color:'#5754a8' }} to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
