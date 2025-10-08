import React, { useState,useRef } from "react";

const bulathProjects = [
  {
    name: "RidiEla Organic Betel Project",
    id: 1,
    district: "Ampara",
    office: "Dehiaththakndiya",
    product: "Betel Leaf ",
    location: "RidiEla",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d81.0371839!3d7.671939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4b33d4694cd31%3A0xc42f5c92598e53a1!2sDehiattakandiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/mawanella-betel",
    description:
      "This project promotes organic betel leaf cultivation using sustainable farming practices. Farmers receive training in pest control, packaging, and export readiness, helping them access premium markets.",  },
  {
    name: "Pussella & Rangwala Betel Cluster",
    id: 2,
    district: "Kegalle",
    office: "Kegalle",
    product: "Betel Leaf ",
    location: "51 A Pussella, 51 A Rangwala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4844879!3d7.4407518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3473cde8103d5%3A0xbcaba6bf18a69044!2sPussella!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/mawanella-betel",
    description:
      "This project promotes organic betel leaf cultivation using sustainable farming practices. Farmers receive training in pest control, packaging, and export readiness, helping them access premium markets.",  },
  {
    id: 3,
    name: "Degampotha Sustainable Betel Zone",
    district: "Kegalle",
    office: "Galigamuwa",
    product: "Betel Leaf ",
    location: "70 A papoluwa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.3033959!3d7.2364563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae310c568ecd9e3%3A0x4608b86f3fdf2512!2sGaligamuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/mawanella-betel",
    description:
      "This project promotes organic betel leaf cultivation using sustainable farming practices. Farmers receive training in pest control, packaging, and export readiness, helping them access premium markets.",  },
  {
    id: 4,
    name: "Ambakele & Attangana Betel Network",
    district: "Hambanthota",
    office: "Weeraketiya",
    product: "Betel Leaf ",
    location: "Degampotha, Ambakolawewa North, near Handapangala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.7659561!3d6.1885945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae152f753861b7f%3A0x59ac569c31238836!2sDegampotha!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/mawanella-betel",
    description:
      "This project promotes organic betel leaf cultivation using sustainable farming practices. Farmers receive training in pest control, packaging, and export readiness, helping them access premium markets.",  },
  {
    id: 5,
    district: "Puttalama",
    office: "Arachchikattuwa",
    product: "Betel Leaf ",
    location: "KarukupaneAmbakele, Upper Attangana",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d79.8730983!3d7.6975641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afd32ed840461db%3A0x9f0bb6cf72b45588!2sAmbakele!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/mawanella-betel",
    description:
      "This project promotes organic betel leaf cultivation using sustainable farming practices. Farmers receive training in pest control, packaging, and export readiness, helping them access premium markets.",  },
  
  
];

const BulathPage = () => {
    const [selectedProject, setSelectedProject] = useState(bulathProjects[0]);
    const scrollTargetRef = useRef(null);
  
    const handleSelect = (project) => {
      setSelectedProject(project);
      setTimeout(() => {
        scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    };
  
    return (
      <div className="min-h-screen bg-white px-6 py-10 space-y-10">
        <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Betel Leaf Related Product</h1>
  
        {/* Table Section */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">District</th>
                <th className="px-4 py-2 border">Office</th>
                <th className="px-4 py-2 border">Product</th>
                <th className="px-4 py-2 border">Location</th>
                <th className="px-4 py-2 border">Buy Product</th>
              </tr>
            </thead>
            <tbody>
              {bulathProjects.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#E6F4EA] cursor-pointer"
                  onClick={() => handleSelect(item)}
                >
                  <td className="px-4 py-2 border text-center">{item.id}</td>
                  <td className="px-4 py-2 border">{item.district}</td>
                  <td className="px-4 py-2 border">{item.office}</td>
                  <td className="px-4 py-2 border">{item.product}</td>
                  <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                  <td className="px-4 py-2 border">
                    <a
                      href={item.buyPath}
                      className="text-blue-600 underline hover:text-green-600"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Click Here
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Split Layout Section */}
        <div
          ref={scrollTargetRef}
          className="w-full flex flex-col lg:flex-row gap-6 items-start"
        >
          {/* Map Section */}
          <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
            <iframe
              title="Bulath Project Map"
              src={selectedProject.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
  
          {/* Project Details Section */}
          <div className="w-full lg:w-1/2 h-[400px] bg-[#E6F4EA] p-6 rounded-md shadow-md overflow-y-auto">
            <h2 className="text-xl font-bold text-green-700 mb-2">{selectedProject.name}</h2>
            <p className="text-sm text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="text-sm space-y-1">
              <p><strong>District:</strong> {selectedProject.district}</p>
              <p><strong>Office:</strong> {selectedProject.office}</p>
              <p><strong>Product:</strong> {selectedProject.product}</p>
              <p><strong>Location:</strong> {selectedProject.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BulathPage;