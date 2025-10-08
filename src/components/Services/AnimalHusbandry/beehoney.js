import React, { useState, useRef } from "react";

const beeHoneyProjects = [
  {
    id: 1,
    name: "Bogahawela Bee Honey Cluster",
    district: "Nuwara Eliya",
    office: "Kotmale West",
    product: "Bee Honey",
    location: "468 D Bogahawela",
    buyPath: "/buy/bogahawela-honey",
    description:
      "This cluster supports bee honey producers in Bogahawela with training, equipment, and market access. It promotes sustainable beekeeping and connects producers to health-conscious buyers.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.314248420939!2d80.6101204!3d7.0239491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3797418795599%3A0x85906d3b6c76d0f3!2sKotmale%20Food%20Products%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Mawelakanda Bee Honey Cooperative",
    district: "Nuwara Eliya",
    office: "Kotmale West",
    product: "Bee Honey",
    location: "456 C Mawelakanda",
    buyPath: "/buy/mawelakanda-honey",
    description:
      "This cooperative supports honey producers in Mawelakanda with shared processing units, branding, and fair trade certification. It promotes rural entrepreneurship and sustainable livelihoods.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.314248420939!2d80.6101204!3d7.0239491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3797418795599%3A0x85906d3b6c76d0f3!2sKotmale%20Food%20Products%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Niyamgamdora Vine Orange Zone",
    district: "Nuwara Eliya",
    office: "Kotmale East",
    product: "Vine oranges",
    location: "Niyamgamdora 470",
    buyPath: "/buy/niyamgamdora-oranges",
    description:
      "This zone promotes vine orange cultivation in Niyamgamdora with improved irrigation and organic practices. It connects growers to juice processors and wellness markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.6397853!3d7.0508821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2sNiyamgamdora%20470!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const BeeHoneyPage = () => {
  const [selectedProject, setSelectedProject] = useState(beeHoneyProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Bee Honey Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
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
            {beeHoneyProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF7E6] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#F3931D]"
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
            title="Bee Honey Project Map"
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
        <div className="w-full lg:w-1/2 h-[400px] bg-[#FFF7E6] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#F3931D] mb-2">{selectedProject.name}</h2>
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

export default BeeHoneyPage;
