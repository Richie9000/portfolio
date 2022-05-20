import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Model from "./components/pages/Shoe";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
      <Routes>
        {/* <Route path="/" element={<About />}/> */}
        <Route path="/Portfolio" element={<Portfolio />}/>
        <Route path="/Model" element={<Model />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
