import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Main Pages
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import News from "./components/News";
import Product from "./components/Products";
import Download from "./components/Download.js";

// Agriculture
import Coconut from "./components/Services/agriculture/coconut";
import Flowers from "./components/Services/agriculture/flowers";
import Fruits from "./components/Services/agriculture/fruits";
import Kithul from "./components/Services/agriculture/kithul";
import Palm from "./components/Services/agriculture/palm";
import Seed from "./components/Services/agriculture/seed";
import Spices from "./components/Services/agriculture/spices";
import Vegetable from "./components/Services/agriculture/vegetable";
import Mushroom from "./components/Services/agriculture/mushroom";

// Industries
import Cane from "./components/Services/industries/cane";
import Clay from "./components/Services/industries/clay";
import Cloth from "./components/Services/industries/cloth";
import Footwear from "./components/Services/industries/footwear";
import Handcraft from "./components/Services/industries/handcraft";
import IronGold from "./components/Services/industries/iron&gold";
import Pooja from "./components/Services/industries/pooja";
import SweetFoods from "./components/Services/industries/sweet&foods";
import Wooden from "./components/Services/industries/wooden";
import OtherSpecial from "./components/Services/industries/otherspecial";

// Fisheries
import OrnamentalFish from "./components/Services/Fisheries/ornamentalfish";
import UmbalakadaDries from "./components/Services/Fisheries/umbalakada&driesfish";

// Animal Husbandry
import BeeHoney from "./components/Services/AnimalHusbandry/beehoney";
import DairyProduct from "./components/Services/AnimalHusbandry/dairyproduct";
import Eggs from "./components/Services/AnimalHusbandry/eggs";
import MuttonPork from "./components/Services/AnimalHusbandry/muttonpork";

// Village
import Village from "./components/Services/village/village";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/News" element={<News />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Download" element={<Download/>} />

        {/* Agriculture Routes */}
        <Route path="/services/agriculture/coconut" element={<Coconut />} />
        <Route path="/services/agriculture/flowers" element={<Flowers />} />
        <Route path="/services/agriculture/fruits" element={<Fruits />} />
        <Route path="/services/agriculture/kithul" element={<Kithul />} />
        <Route path="/services/agriculture/palm" element={<Palm />} />
        <Route path="/services/agriculture/seed" element={<Seed />} />
        <Route path="/services/agriculture/spices" element={<Spices />} />
        <Route path="/services/agriculture/vegetable" element={<Vegetable />} />
        <Route path="/services/agriculture/mushroom" element={<Mushroom />} />

        {/* Industries Routes */}
        <Route path="/services/industries/cane" element={<Cane />} />
        <Route path="/services/industries/clay" element={<Clay />} />
        <Route path="/services/industries/cloth" element={<Cloth />} />
        <Route path="/services/industries/footwear" element={<Footwear />} />
        <Route path="/services/industries/handcraft" element={<Handcraft />} />
        <Route path="/services/industries/iron&gold" element={<IronGold />} />
        <Route path="/services/industries/pooja" element={<Pooja />} />
        <Route path="/services/industries/sweet&foods" element={<SweetFoods />} />
        <Route path="/services/industries/wooden" element={<Wooden />} />
        <Route path="/services/industries/otherspecial" element={<OtherSpecial />} />

        {/* Fisheries Routes */}
        <Route path="/services/fisheries/ornamentalfish" element={<OrnamentalFish />} />
        <Route path="/services/fisheries/umbalakada&driesfish" element={<UmbalakadaDries />} />

        {/* Animal Husbandry Routes */}
        <Route path="/services/AnimalHusbandry/beehoney" element={<BeeHoney />} />
        <Route path="/services/AnimalHusbandry/dairyproduct" element={<DairyProduct />} />
        <Route path="/services/AnimalHusbandry/eggs" element={<Eggs />} />
        <Route path="/services/AnimalHusbandry/muttonpork" element={<MuttonPork />} />

        {/* Village Route */}
        <Route path="/services/village/village" element={<Village />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
