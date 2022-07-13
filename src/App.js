import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeMarkup from "./components/pages/Home/HomeMarkup";
import ShoeMarkup from "./components/pages/Shoe/ShoeMarkup";
import HouseMarkup from "./components/pages/House/HouseMarkup";
import ContactMarkup from "./components/pages/Contact/ContactMarkup";
import WatchMarkup from "./components/pages/Watch/WatchMarkup";
import { BreakpointProvider } from "react-socks";





function App() {
  return (
    <BreakpointProvider>
    <div>
      <BrowserRouter>
        <Navbar /> 
      <Routes>
        <Route path="/" element={<HomeMarkup />}/> 
        <Route path="/Watch" element={<WatchMarkup />}/>
        <Route path="/Model" element={<ShoeMarkup />} />
        <Route path="/House" element={<HouseMarkup />} />
        <Route path="/Contact" element={<ContactMarkup />} />
        
      </Routes>
      </BrowserRouter>
    </div>
    </BreakpointProvider>
  );
}

export default App;
