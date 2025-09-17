import React, { useEffect, useState } from "react";
import Header from "./Header";

// Import your images
import image1 from "../assets/homepage/image 1.jpeg";
import image2 from "../assets/homepage/image 2.jpeg";
import image3 from "../assets/homepage/image 3.jpeg";
import image4 from "../assets/homepage/image 4.jpeg";
import image5 from "../assets/homepage/image 5.jpeg";

const images = [image1, image2, image3, image4, image5];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen overflow-hidden">
     

      {/* Carousel Section */}
      <main className="w-full h-screen relative flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 w-full z-10 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </main>

      <section className="bg-white py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
  {/* Left Side: Image */}
  <div className="w-full lg:w-1/2">
    <img
      src={require("../assets/homepage/image 1.jpeg")} // Replace with your actual image path
      alt="EDB eMarketplace"
      className="rounded-lg shadow-lg w-full object-cover"
    />
  </div>

  {/* Right Side: Text Content */}
  <div className="w-full lg:w-1/2 text-left">
    <h2 className="text-3xl font-bold text-[#333333] mb-4 uppercase">
    About Ministy of Rural Development
    </h2>
    <p className="text-sm uppercase text-gray-600 mb-2">
      576 Production Villages Based on Rural Resources
    </p>
    <p className="text-base text-gray-700 leading-relaxed mb-6">
      The Saubagya Production Village Program was launched to promote home-based products, raise the income level of the rural community, uplift the rural economy, and support the "Vision of Prosperity and Splendour" National Policy Framework.
    </p>
    <a
      href="/AboutUs"
      className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
    >
      READ MORE →
    </a>
  </div>
</section>


      {/* New Section Below Carousel */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#9A3F3F] mb-4 uppercase">
          A Strong Household Economy
        </h2>
        <p className="text-sm uppercase text-gray-600 mb-2">
          576 Production Villages Based on Rural Resources
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
          The Saubagya Production Village Program was launched to promote home-based products, raise the income level of the rural community, uplift the rural economy, and support the "Vision of Prosperity and Splendour" National Policy Framework.
        </p>
        <a
          href="/about-us#services"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          READ MORE →
        </a>
      </section>

      {/* New Section Below Carousel */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#9A3F3F] mb-4 uppercase">
          A Strong Household Economy
        </h2>
        <p className="text-sm uppercase text-gray-600 mb-2">
          576 Production Villages Based on Rural Resources
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
          The Saubagya Production Village Program was launched to promote home-based products, raise the income level of the rural community, uplift the rural economy, and support the "Vision of Prosperity and Splendour" National Policy Framework.
        </p>
        <a
          href="/about-us#services"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          READ MORE →
        </a>
      </section>

      {/* New Section Below Carousel */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#9A3F3F] mb-4 uppercase">
          A Strong Household Economy
        </h2>
        <p className="text-sm uppercase text-gray-600 mb-2">
          576 Production Villages Based on Rural Resources
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
          The Saubagya Production Village Program was launched to promote home-based products, raise the income level of the rural community, uplift the rural economy, and support the "Vision of Prosperity and Splendour" National Policy Framework.
        </p>
        <a
          href="/about-us#services"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          READ MORE →
        </a>
      </section>

      <footer/>
    </div>

  );
};

export default Home;
