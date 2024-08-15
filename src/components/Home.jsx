import React from 'react';
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillAmazonCircle,
  AiFillYoutube} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className='home' id='home'>Home
        <main> 
            <h1>TechStar.</h1>
            <p>Solution to all your problems</p>
        </main> 
      </div>

      <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech
            problems you face every day. We are leading tech 
            company whose aim is to increase the problem solving
            ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At TechStar, we specialize in delivering cutting-edge full-stack development and peer-to-peer support services.
            Our team of skilled developers is dedicated to crafting robust, scalable, and innovative web and mobile applications that cater to the unique needs of our clients. 
            Beyond development, we offer a dynamic peer-to-peer support system that fosters a collaborative environment, ensuring that our clients have access to real-time assistance and expertise.
            At TechStar, we are committed to driving success through technology, empowering businesses to thrive in the digital age.
          </p>
        </div>
      </div>
      
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            
            <div style={{
              animationDelay:"0.3s",
            }}> 
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            
            <div style={{
              animationDelay:"0.5s",
            }}> 
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            
            <div style={{
              animationDelay:"0.7s",
            }}> 
              <AiFillYoutube/>
              <p>YouTube</p>
            </div>

            <div style={{
              animationDelay:"1s",
            }}> 
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          
          </article>
        </div>
      </div>
    </>
  );
};

export default Home