import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Projects.css'; // Assuming you have a CSS file for styling

const Projects = () => {
  return (
    <div>
        <section id="projects" className="py-5">
            <div className="container-projects">
            <h2 className="text-center mb-4">My Projects</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                <p>Here are some of the projects I've worked on:</p>
                </div>
            </div>
            </div>
        </section>
    
        <div className='container-cards'>
            <div className='row'>
            <div className='col-md-4'>
                <div className="uk-animation-toggle" tabIndex="0">
                <div className="uk-card uk-card-default uk-card-body uk-animation-scale-up">
                    <h3 className="uk-card-title">Market Place</h3>
                    <p>Market Place</p>
                    <Link to="/Marketplace" className="btn btn-primary">View Project</Link>
                </div>
                </div>
            </div>
    
            <div className='col-md-4'>
                <div className="uk-animation-toggle" tabIndex="0">
                <div className="uk-card uk-card-default uk-card-body uk-animation-scale-up">
                    <h3 className="uk-card-title">Calender</h3>
                    <p>Calendar.</p>
                    <Link to="/CreateMeetingForm" className="btn btn-primary">View</Link>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="uk-animation-toggle" tabIndex="0">
                <div className="uk-card uk-card-default uk-card-body uk-animation-scale-up">
                    <h3 className="uk-card-title">Calender DashBoard</h3>
                    <p>Calendar.</p>
                    <Link to="/Meetings" className="btn btn-primary">View</Link>
                </div>
                </div>
            </div>
    
            <div className='col-md-4'>
                <div className="uk-animation-toggle" tabIndex="0">
                <div className="uk-card uk-card-default uk-card-body uk-animation-scale-up">
                    <h3 className="uk-card-title">Food Menu</h3>
                    <p>Food Menu.</p>
                    <Link to="/Menu" className="btn btn-primary">Food Menu</Link>
                </div>
                </div>
            </div>
    
            </div>
        </div>
    </div>
  )
}
export default Projects;
