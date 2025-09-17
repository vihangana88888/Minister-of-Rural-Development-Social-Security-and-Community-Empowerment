import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />

      </Routes>
    </Router>
  );
}

export default App;