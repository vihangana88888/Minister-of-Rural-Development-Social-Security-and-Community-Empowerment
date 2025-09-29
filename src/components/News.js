import React from "react";
import Header from "./Header";
import featuredImage from "../assets/news/image 1.jpg"; // Replace with your actual image
import placeholderImage from "../assets/homepage/image 1.jpeg"; // Replace with actual thumbnails

const newsItems = [
  { title: "Dehydrated Product", image: placeholderImage },
  { title: "Dehydrated Product", image: placeholderImage },
  { title: "Dehydrated Product", image: placeholderImage },
  { title: "Dehydrated Product", image: placeholderImage },
  { title: "Dehydrated Product", image: placeholderImage },
  { title: "Dehydrated Product", image: placeholderImage },
];

const News = () => {
  return (
    <div className="bg-[#FFF8F6] text-gray-800 min-h-screen">
      

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-6 font-serif text-[#F3931D]">News</h1>

        <div className="w-full rounded-lg overflow-hidden border-2" style={{ borderColor: "#9A3F3F" }}>
        <img
            src={featuredImage}
            alt="Featured News"
            className="w-full h-64 object-cover"
          />
        </div>

        <section className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[#333]">News and Event</h2>
          <p className="text-gray-700 text-base max-w-3xl mx-auto">
            Browse through our collection of news and events to learn more about the latest happenings at SAUBAGYA.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
            >
              <div className="w-full h-40 mb-4 border-2  rounded overflow-hidden" style={{ borderColor: "#9A3F3F" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#333] mb-2">{item.title}</h3>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                READ MORE →
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default News;
