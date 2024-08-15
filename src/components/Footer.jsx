import React from 'react';
import {AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return <footer>
    <div>
        <h1>TechStar.</h1>
        <p>@all rights reserved</p>
    </div>
    <div>
        <h5>Follow Us</h5>
        <div>
            <AiFillYoutube/>
            <a href="https://youtube.com/" target={"blank"}>
                YouTube
            </a>
            <AiFillInstagram/>
            <a href="https://instagram.com/" target={"blank"}>
                Instagram
            </a>
            <AiFillFacebook/>
            <a href="https://facebook.com/" target={"blank"}>
                Facebook
            </a>
        </div>
    </div>
  </footer>
}

export default Footer