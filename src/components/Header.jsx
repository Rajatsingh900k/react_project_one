import React from 'react';
// import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
const Header = () => {
  return (
    <nav>
        <h1>TeachStar.</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/#about"}>About Us</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
            <HashLink to={"/contact"}>Contact Us</HashLink>
        </main>
    </nav>
  )
}

export default Header