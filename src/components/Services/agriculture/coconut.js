import React, { useState, useRef } from "react";

const coconutProjects = [
  {
    id: 1,
    district: "Kurunegala",
    office: "Udubaddawa",
    product: "Coconut Husk",
    location: "Udadeniya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9186883!3d7.4545244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2dad7bd94d815%3A0x71357788d19f6a4c!2sUdadeniya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/ambalangoda-coconut",
    description:
      "This coastal zone supports coconut shell artisans creating handmade mats and decorative items. It preserves traditional techniques and boosts tourism-linked sales.",  },
  {
    id: 2,
    district: "Kurunegala",
    office: "Kobeigane",
    product: "Coconut Husk",
    location: "Pubbiliya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4792061!3d7.3862375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae340f13e3d8e8b%3A0x99445d5048a81adc!2sPubbiliya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/ambalangoda-coconut",
    description:
      "This coastal zone supports coconut shell artisans creating handmade mats and decorative items. It preserves traditional techniques and boosts tourism-linked sales.",  },
  {
    id: 3,
    district: "Jaffna",
    office: "Valikamam East (Kopai)",
    product: "Coconut Oil",
    location: "Puttur East J/278",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0981408!3d9.7317703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afeff95b8d76edd%3A0xca1fa8d34fc715b5!2sPuttur%20East!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/ambalangoda-coconut",
    description:
      "This coastal zone supports coconut shell artisans creating handmade mats and decorative items. It preserves traditional techniques and boosts tourism-linked sales.",  },
  
  
];

const CoconutPage = () => {
  const [selectedProject, setSelectedProject] = useState(coconutProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Coconut Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#C2A68C] text-white">
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
            {coconutProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#E6D8C3] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#C2A68C]"
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
            title="Project Location Map"
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
        <div className="w-full lg:w-1/2 h-[400px] bg-[#F3E9DC] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#C2A68C] mb-2">{selectedProject.name}</h2>
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

export default CoconutPage;