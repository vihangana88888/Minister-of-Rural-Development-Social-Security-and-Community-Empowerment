import React, { useState, useRef } from "react";

const vegetableProjects = [
  {
    id: 1,
    name: "Pallankoddai Onion Cluster",
    district: "Mannar",
    office: "Nanattan",
    product: "Onion",
    location: "Pallankoddai",
    buyPath: "/buy/pallankoddai-onion",
    description:
      "This cluster supports onion farmers in Pallankoddai with improved irrigation, seed distribution, and market access. It promotes sustainable farming and connects producers to regional buyers.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9603739!3d8.8160744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdceebd8d4c8f7%3A0xa3aaa67eb97792bb!2sPallankoddai!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Ketawala Vegetable Zone",
    district: "Badulla",
    office: "Hali Ela",
    product: "Vegetable",
    location: "Ketawala",
    buyPath: "/buy/ketawala-vegetable",
    description:
      "This zone promotes vegetable cultivation in Ketawala with organic practices and cooperative marketing. It supports training and connects farmers to local and export markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.0099502!3d6.9949474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4629773118951%3A0xdd877305eff4e743!2sKetawala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Atampitiya Vegetable Cooperative",
    district: "Badulla",
    office: "Hali Ela",
    product: "Vegetable",
    location: "Atampitiya",
    buyPath: "/buy/atampitiya-vegetable",
    description:
      "This cooperative supports vegetable growers in Atampitiya with shared storage, transport, and branding. It promotes youth engagement and sustainable agriculture.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.9850312!3d6.9367363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4634caed9fc93%3A0x89ae5b89a870f672!2sEttampitiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const VegetablePage = () => {
  const [selectedProject, setSelectedProject] = useState(vegetableProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Vegetable Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#A4B465] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Buy Product</th>
            </tr>
          </thead>
          <tbody>
            {vegetableProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#D9E9CF] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#A4B465]"
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
            title="Vegetable Project Map"
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
        <div className="w-full lg:w-1/2 h-[400px] bg-[#F4F8EC] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#A4B465] mb-2">{selectedProject.name}</h2>
          <p className="text-sm text-gray-700 mb-4">{selectedProject.description}</p>
          <div className="text-sm space-y-1">
            <p><strong>District:</strong> {selectedProject.district}</p>
            <p><strong>Divisional Secretary Office:</strong> {selectedProject.office}</p>
            <p><strong>Product:</strong> {selectedProject.product}</p>
            <p><strong>Location:</strong> {selectedProject.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegetablePage;
