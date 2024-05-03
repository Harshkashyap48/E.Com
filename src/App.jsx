import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import './App.css';
import Footer from './Components/Footer';



const App = () => {
 return (
 <BrowserRouter >
 
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/shop" element={<Shop />} /> 
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
       
      </Routes>
     
      <Footer/>
    </BrowserRouter>
  
  );
};

export default App;

