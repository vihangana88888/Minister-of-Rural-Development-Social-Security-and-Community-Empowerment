import React, { useState, useRef } from "react";

const sanitaryProjects = [
    {
        id: 1,
        district: "Madakalapuwa",
        office: "Koralaipattu South",
        product: "Drinking water facilities",
        location: "Murutthanai",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sMurutthanai!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
        buyPath: "/buy/dambulla-pottery",
        description:
          "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
      {
        id: 2,
        district: "Madakalapuwa",
        office: "Koralaipattu South",
        product: "Sanitary facilities",
        location: "Murutthanai",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sMurutthanai!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
        buyPath: "/buy/dambulla-pottery",
        description:
          "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
      {
        id: 3,
        district: "Madakalapuwa",
        office: "Koralaipattu South",
        product: "Health clinic facilities",
        location: "Murutthanai",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sMurutthanai!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
        showMore: "Click Here",
      },

  {
    id: 4,
    district: "Kegalle",
    office: "Aranayake",
    product: "Sanitary facilities",
    location: "58G Ganthuna Medagama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4048678!3d7.1182999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s58G%20Ganthuna%20Medagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  
    },
    {
        id: 5,
        district: "Vavuniya",
        office: "Vavuniya South",
        product: "Providing food and beverages and providing public facilities",
        location: "Irattaperiyakulam",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.4791437!3d8.7074043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sIrattaperiyakulam!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
        buyPath: "/buy/dambulla-pottery",
        description:
          "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  
        },
        {
    id: 6,
    district: "Matara",
    office: "Kirinda Phulwella",
    product: "Development of Kaluhena Colony Welipotha Road",
    location: "Walaknda South",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  
  

];

const SanitaryFacilitiesPage = () => {
  const [selectedProject, setSelectedProject] = useState(sanitaryProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Sanitary Facilities Projects</h1>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Project Type</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Buy Product</th>
            </tr>
          </thead>
          <tbody>
            {sanitaryProjects.map((item) => (
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

      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Sanitary Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[400px] bg-[#FFF7E6] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#F3931D] mb-2">{selectedProject.name}</h2>
          <p className="text-sm text-gray-700 mb-4">{selectedProject.description}</p>
          <div className="text-sm space-y-1">
            <p><strong>District:</strong> {selectedProject.district}</p>
            <p><strong>Divisional Secretary Office:</strong> {selectedProject.office}</p>
            <p><strong>Project Type:</strong> {selectedProject.product}</p>
            <p><strong>Location:</strong> {selectedProject.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanitaryFacilitiesPage;
