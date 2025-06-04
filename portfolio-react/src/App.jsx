import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Marketplace from './pages/Marketplace';
import Calendar from './pages/Calendar';
import Menu from './pages/Menu';
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
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;
