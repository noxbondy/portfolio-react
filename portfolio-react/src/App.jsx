import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Marketplace from './pages/Marketplace';

import Menu from './pages/Menu';
import Ads from './pages/Marketplace/Ads';
import Meetings from './pages/Meetings';
import CreateMeetingForm from './pages/CreateMeetingForm';
 //
//  Importing Marketplace page if needed

 const App = () => {
  
  return (
  <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Ads" element={<Ads/>} />
        <Route path="/Meetings" element={<Meetings/>} />
         <Route path="/CreateMeetingForm" element={<CreateMeetingForm/>} />
        
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;
