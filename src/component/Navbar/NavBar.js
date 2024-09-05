import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css";
import myLogo from "../../logo.svg"


console.log("logo");

function NavBar() {
  return (
    <div class="nav">
      <Link class="navlogolinks" to="/"><img class="navlogo" src={myLogo} alt="My Image" /></Link>
      <div class="links">
        <div class="navbar">
          <Link to="/" class="navlinks" > Home </Link>
          <Link to="shop" class="navlinks" > Shop </Link>
          <Link to="about" class="navlinks" > About </Link>
          <Link to="faq" class="navlinks" > FAQ </Link>
          <Link to="contact" class="navlinks" > Contact </Link>
          <Link to="blog" class="navlinks" > Blog </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;