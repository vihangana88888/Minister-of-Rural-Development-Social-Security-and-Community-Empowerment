import React, { useState, useRef } from "react";

const flowerProjects = [
  {
    id: 1,
    district: "Kurunegala",
    office: "Pannala",
    product: "Flowers",
    location: "1557 - Batapotha Ela, 1563 - Weththewa, 1582 - Kotuwela",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.0848348!3d7.3836768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2df631cf2c8e1%3A0xb75e7edcfcfa08c7!2sBatapotha%20Ela!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
  {
    id: 2,
    district: "Puttalam",
    office: "Kalpitiya",
    product: "Idda Flower",
    location: "Mampuriya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.8402406!3d8.1053673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sKarathiw%20Right!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
  {
    id: 3,
    district: "Badulla",
    office: "Hali Ela",
    product: "Flowers",
    location: "Ketawala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.0099502!3d6.9949474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4629773118951%3A0xdd877305eff4e743!2sKetawala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
  {
    id: 4,
    district: "Badulla",
    office: "Hali Ela",
    product: "Flowers",
    location: "Atampitiya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.9850312!3d6.9367363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4634caed9fc93%3A0x89ae5b89a870f672!2sEttampitiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
];

const Flowers = () => {
  const [selectedProject, setSelectedProject] = useState(flowerProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Flower and Ornamental Plants</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#C562AF] text-white">
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
            {flowerProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FEC5F6] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#C562AF]"
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
            title="Flower Project Map"
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
        <div className="w-full lg:w-1/2 h-[400px] bg-[#FCE4F8] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#C562AF] mb-2">{selectedProject.name}</h2>
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

export default Flowers;