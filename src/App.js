import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import News from "./components/News";
import Download from "./components/Download";
import Product from "./components/Products";


function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/News" element={<News />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Download" element={<Download/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;