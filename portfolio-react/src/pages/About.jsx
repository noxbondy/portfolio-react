import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/About.css'; // Assuming you have a CSS file for styling
 const About = () => {
  return (
    <div>
        <section id="about" class="py-5">
    <div class="container-about">
      <h2 class="text-center mb-4">About Me</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <p>A Full-Stack Developer is a software developer who works on both the frontend (client side) and backend
             (server side) of web applications. They have knowledge of how to build user interfaces, manage databases, and create APIs, 
            making them versatile in the development process.</p>
        </div>
      </div>
    </div>
  </section>
  <div className='container'>
    <div className='row'>
<div className='col-md-4'>
<div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Front End Programming</p>
            <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, Node.js</li>
                    <li>Express, MongoDB</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control (Git)</li>
                </ul>
        </div>
    </div>
    </div>
    <div className='col-md-4'>
<div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">BackEnd Programming</p>
            <ul>
                    <li>Building Console Applications</li>
                    <li>Object Oriented Programming,</li>
                    <li>Data ,Lambda and Stream API</li>
                    <li>Spring, Spring Boot</li>
                    <li>MVC, JPA, Spring Data </li>
                    <li>v services, deploy in Docker and cloud. </li>
                </ul>
        </div>
    </div>
    </div>
    <div className='col-md-4'>
<div class="uk-animation-toggle" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Relational Database</p>
            <ul>
                    <li>SQL Structured Query Language</li>
                    <li>ERD diagram</li>
                    <li>Entity Relationship Diagram</li>
                    <li>MySQL DB,</li>
                    <li>JDBC</li>
                </ul>
        </div>
    </div>
    </div>
    </div>
    
  </div>
  
    </div>
    
  )
}
export default About;
