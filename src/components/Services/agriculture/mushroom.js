import React, { useState,useRef } from "react";

const mushroomProjects = [
  {
    id: 1,
    district: "Mathale",
    office: "Ukuwela",
    product: "Mushroom production",
    location: "Owilla Thenna, Thibbatuwawa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.994684342757!2d80.5980205!3d8.022494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcbd63a2611585%3A0x1c2c7866914ae80d!2sThibbatuwewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
  {
    id: 2,
    district: "Ampara",
    office: "Uhana",
    product: "Mushroom",
    location: "Bandaradoowa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.314248420939!2d81.4604659!3d7.4268175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae520c1595dddbf%3A0x25c2ef2f88d9dec!2sBandaradoowa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
  {
    id: 3,
    district: "Kegalle",
    office: "Aranayake",
    product: "Mushroom",
    location: "45C Pahinibeddara, Gavilipitiya Village",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.2473567!3d7.2250915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31a1102026723%3A0x233870b85415a271!2sNelundeniya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
  {
    id: 4,
    district: "Monaragala",
    office: "Wellawaya",
    product: "Mushroom",
    location: "Kotikambokka",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.2473567!3d7.2250915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31a1102026723%3A0x233870b85415a271!2sNelundeniya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
  {
    id: 5,
    district: "Badulla",
    office: "Ella",
    product: "Mushroom",
    location: "Millagama, Idamegama, Udu Kumbalwela",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.0274744!3d6.8815647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4645572a706ab%3A0x4aa4f518f484c194!2sKumbalwela!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
  {
    id: 6,
    district: "Polonnaruwa",
    office: "Madirigiriya",
    product: "Mushroom",
    location: "124 Veheragala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.9516002!3d8.143382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb65eaeea2c9ad%3A0xc1b1d51f3a30a57c!2sMedirigiriya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  },
];

const MushroomPage = () => {
  const [selectedProject, setSelectedProject] = useState(mushroomProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Mushroom Related Products</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#C78A3B] text-white">
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
            {mushroomProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FCECDD] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#C78A3B]"
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
            title="Mushroom Project Map"
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
        <div className="w-full lg:w-1/2 h-[400px] bg-[#FCECDD] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#C78A3B] mb-2">{selectedProject.name}</h2>
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

export default MushroomPage;