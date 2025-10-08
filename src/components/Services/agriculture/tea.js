import React, { useState, useRef } from "react";

const teaProjects = [
  {
    id: 1,
    name: "Ganthuna Tea and Areca Cluster",
    district: "Kegalle",
    office: "Kegalle",
    product: "Tea, areca nut",
    location: "58B Ganthuna North, 58A Ganthuna South, 58C Belihulwana",
    buyPath: "/buy/ganthuna-tea",
    description:
      "This cluster supports smallholder tea and areca nut growers with improved processing, packaging, and cooperative marketing. It promotes sustainable agroforestry and income diversification.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.3788803!3d7.1269334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s58B%20Ganthuna%20North%2C%2058A%20Ganthuna%20South%2C%2058C%20Belihulwana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Kottawa Tea Promotion Zone",
    district: "Galle",
    office: "Yakkalamulla",
    product: "Tea",
    location: "Kottawa, Kottawa East, Kottawa West",
    buyPath: "/buy/kottawa-tea",
    description:
      "This zone promotes organic tea cultivation and eco-tourism. It supports branding, training, and connects growers to hotels and wellness markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.3148865!3d6.1027539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae16e4d8051f99b%3A0x1174adb9d25cc6be!2sKottawa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Neluwa Tea Development Area",
    district: "Galle",
    office: "Neluwa",
    product: "Tea",
    location: "Happitiya, Pannimulla, Panagoda",
    buyPath: "/buy/neluwa-tea",
    description:
      "This area supports tea growers with training in climate-resilient practices and value-added production. It connects producers to export buyers and research institutions.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.4089828!3d6.3474274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3dfa4faf6a687%3A0x61830a8441133f8e!2sPannimulla!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "Ella Upper Tea Cooperative",
    district: "Galle",
    office: "Yakkalamulla",
    product: "Tea",
    location: "182 C Ella Upper. Magedara East",
    buyPath: "/buy/ella-tea",
    description:
      "This cooperative supports tea growers in Ella Upper with shared processing units, branding, and fair trade certification. It promotes youth engagement and rural entrepreneurship.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const TeaPage = () => {
  const [selectedProject, setSelectedProject] = useState(teaProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Tea Related Products</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#0A400C] text-white">
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
            {teaProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#B9D4AA] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#0A400C]"
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
            title="Tea Project Map"
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
        {/* Project Details Section */}
        <div className="w-full lg:w-1/2 h-[400px] bg-[#E6F2E6] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#0A400C] mb-2">{selectedProject.name}</h2>
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

export default TeaPage;