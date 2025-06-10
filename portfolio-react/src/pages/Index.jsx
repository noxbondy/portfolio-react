import React from 'react'
import '../styles/Home.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'; // Import Link for navigation

 const Home = () => {
  return (
    <div className="home-container">
         <div class="container table-container">
    <h2 class="section-title">Work Experience</h2>
    <div class="table-responsive">
      <table class="table table-striped table-hover align-middle">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Position</th>
            <th scope="col">Duration</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google</td>
            <td>Software Engineer</td>
            <td>Jan 2021 – Present</td>
            <td>Mountain View, CA</td>
          </tr>
          <tr>
            <td>Microsoft</td>
            <td>Backend Developer</td>
            <td>Aug 2018 – Dec 2020</td>
            <td>Redmond, WA</td>
          </tr>
          <tr>
            <td>IBM</td>
            <td>Intern</td>
            <td>Jun 2017 – Jul 2018</td>
            <td>New York, NY</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
   <div class="container table-container">

    <div className='container'> 
        <div className='row justify-content-center'>
            <div className='col-md-8'>
 <h2 class="text-center mb-4">Programming Skills</h2>
  <div class="section-title">Programming Languages</div>
  <div class="skill-label">JavaScript</div>
  
            </div>
        </div>

    </div>
   
   </div>
    </div>

  )
}
export default Home;
