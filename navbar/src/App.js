import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Footer from './component/Footer';
import Navbar1 from './component/Navbar1';
import Services from './component/Services';
import Career from './component/Career';
import Contact from './component/Contact';
import { Routes, Route } from 'react-router-dom';
import '../src/Asset/Omega.css';



function App() {
  return (
    <>
    <Navbar1/>
    <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Services" element={<Services/>}/>
          <Route path="Career" element={<Career/>}/>
          <Route path="Contact" element={<Contact/>}/>
          
    </Routes>
    <Footer/>
    
    </>
  );
}

export default App;
