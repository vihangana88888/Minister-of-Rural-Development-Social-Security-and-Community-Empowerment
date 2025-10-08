import React, { useState, useRef } from "react";

const clayProjects = [
  {
    id: 1,
    name: "Traditional Clay Pottery in Dambulla",
    district: "Rathnapura",
    office: "Kolonna",
    product: "Pots, clay pots",
    location: "Dambulla",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.6828641!3d6.356544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae392e07c554149%3A0x0000000000000000!2sකැල්ල%2C%20අබ්ගහයාය!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
  
    name: "Biyagama Clay Craft Cluster",
    district: "Gampaha",
    office: "Biyagama",
    product: "Clay Product",
    location: "28c Biyagama South",
    buyPath: "/buy/biyagama-clay",
    description:
      "This cluster focuses on modernizing clay production in Biyagama, introducing eco-friendly firing techniques and promoting handcrafted items like tiles, pots, and decor. The project empowers local women and youth through skill development and entrepreneurship.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9609053!3d6.9571841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s28C%20Biyagama%20South!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Weherayaya Clay Pot Initiative",
    district: "Monaragala",
    office: "Wellavaya",
    product: "Milk Pot, Clay Pot",
    location: "Weherayaya",
    buyPath: "/buy/weherayaya-pots",
    description:
      "This initiative revives the milk pot tradition in Weherayaya, blending heritage with innovation. Artisans receive support for raw material sourcing, branding, and participation in regional trade fairs, boosting both income and visibility.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.1155528!3d6.6420945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sWeherayaya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const ClayPage = () => {
  const [selectedProject, setSelectedProject] = useState(clayProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Clay Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#4B352A] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">See more</th>
            </tr>
          </thead>
          <tbody>
            {clayProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#F2F2F2] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-orange-600"
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
        {/* Map */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Clay Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Project Details */}
        <div className="w-full lg:w-1/2 h-[400px] bg-[#F9F6F3] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#4B352A] mb-2">{selectedProject.name}</h2>
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

export default ClayPage;
