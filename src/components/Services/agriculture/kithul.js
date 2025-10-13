import React, { useState,useRef } from "react";

const kithulProjects = [
  {
    id: 1,
    district: "Nuwara Eliya",
    office: "Kotmale West",
    product: "KKithul-related value-added products",
    location: "Madakubura 468",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.314248420939!2d80.1460593!3d7.0465585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3010ecda58481%3A0x64cf85d5a0ef8ea!2sMadakubura%20Road!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.", 
  },  
  {
    id: 2,
    district: "Kalutara",
    office: "Mathugama",
    product: "Kithul Hakuru, honey, Kithul flour",
    location: "795 B Sandasirigama, 794 Horawala, 793 B Madawala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6670719!3d7.3268171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s795B%20Sandasirigama%2C%20794%20Horawala%2C%20793B%20Madawala!5e0!3m2!1sen!2slk!4v169598000000",
    buyPath: "/buy/dambulla-flowers",
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.",  
   },
  
];

const KithulPage = () => {
  const [selectedProject, setSelectedProject] = useState(kithulProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Kithul Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#C1856D] text-white">
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
            {kithulProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#EBD9D1] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#C1856D]"
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
            title="Kithul Project Map"
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
          <h2 className="text-xl font-bold text-[#C1856D] mb-2">{selectedProject.name}</h2>
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

export default KithulPage;