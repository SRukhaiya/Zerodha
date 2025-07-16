import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './index.css';
import Homepage from './Landing_page/Home/Homepage';
import Signup from './Landing_page/Signup/Signup';
import Pricingpage from './Landing_page/Pricing/Pricingpage';
import Aboutpage from './Landing_page/About/Aboutpage';
import Productspage from './Landing_page/Products/productspage';
import Supportpage from './Landing_page/Support/Supportpage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import Notfound from './Landing_page/Notfound';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter >
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Pricing" element={<Pricingpage/>} />
      <Route path="/About" element={<Aboutpage/>} />
      <Route path="/Products" element={<Productspage/>} />
      <Route path="/Support" element={<Supportpage/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
     <Footer/>
  </BrowserRouter>
);


