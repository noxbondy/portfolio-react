import React from 'react'
import '../styles/Footer.css'; // Assuming you have a CSS file for styling
import { FaFacebook } from 'react-icons/fa';
import {FaLinkedin}  from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";// Importing Facebook icon

 const Footer = () => {
  return (
    <div>
         <footer class="text-white pt-4 pb-2">
    <div class="container-footer">
      <div class="row">
        <div class="col-md-3 mb-3">
        <h5>About Us</h5>
        <p>We are committed to providing the best IT services to our customers.</p>
        </div>

 
        <div class="col-md-2 mb-12">
          <div className='quick-links'>
          <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="/home" class="text-white text-decoration-none">Home</a></li>
          <li><a href="/About" class="text-white text-decoration-none">About</a></li>
          <li><a href="/Projects" class="text-white text-decoration-none">Projects</a></li>
          <li><a href="/Contact" class="text-white text-decoration-none">Contact</a></li>
        
        </ul>
          </div>
          
        </div>

    
        <div class="col-md-3 mb-12">
          <h5>Contact Us</h5>
          <p>Email:gulamnoxbondy@gmail.com</p>
          <p>Phone: +46769072199</p> 
        </div>

   
        <div class="col-md-2 mb-12">
          <div className='social-icons'>
          <h5>Follow Us</h5>
          <a href='https://github.com/noxbondy'><FaFacebook /></a>
          <a href='https://www.linkedin.com/in/gulam-noxbondy-83b16882/'><FaLinkedin /></a>
          <a href='https://github.com/noxbondy'><FaGithub /></a>
          </div>
              
      </div>

    </div>
<div class="reserved">
<p> 2025 Your Name. All rights reserved. </p>
</div>
</div>
  </footer>
  
    </div>
  )
}
export default Footer;
