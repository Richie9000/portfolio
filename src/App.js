import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeMarkup from "./components/pages/Home/HomeMarkup";
import Portfolio from "./components/pages/Earth/Portfolio";
import ShoeMarkup from "./components/pages/Shoe/ShoeMarkup";
import HouseMarkup from "./components/pages/House/HouseMarkup";
import ContactForm from "./components/pages/Contact/ContactForm";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
      <Routes>
        <Route path="/" element={<HomeMarkup />}/> 
        <Route path="/Portfolio" element={<Portfolio />}/>
        <Route path="/Model" element={<ShoeMarkup />} />
        <Route path="/House" element={<HouseMarkup />} />
        <Route path="/Contact" element={<ContactForm />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
