import React from 'react'
import '../styles/Navbar.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'; // Import Link for navigation

 const Navbar = () => {
    
  return (
    
  <div>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">MyPortfolio</a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/About">About</a></li>
          <li class="nav-item"><a class="nav-link" href="/Projects">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="/Contact">Contact</a></li>
           <li class="nav-item"><a class="nav-link" href="/Ads">Ads</a></li>
          
        </ul>
      </div>
    </div>
  </nav>
  <section class="hero text-center">
    <div class="container">
      <h1>Hello, I'm Md Gulam Noxbondy</h1>
      <p class="lead">Full-Stack-Developer  | Graphic Designer | Tech Enthusiast</p>
      <a href="/Projects" class="btn btn-outline-light mt-3">View My Work</a>
    </div>
  </section>
  </div>
  )
}
export default Navbar;
