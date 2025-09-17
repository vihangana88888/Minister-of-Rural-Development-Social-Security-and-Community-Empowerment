import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;