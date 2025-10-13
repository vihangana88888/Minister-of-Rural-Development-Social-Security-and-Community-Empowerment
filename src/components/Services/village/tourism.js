import React, { useState, useRef } from "react";

const tourismProjects = [
    {
        id: 1,
        district: "Mathale",
        office: "Ukuwela",
        product: "Providing food and drinks for tourists",
        location: "Alkaduwa Waththa",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.624248420939!2d80.6728799!3d7.424052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae35c768093f625%3A0x8a3c4742cd2c7161!2sElkaduwa%20Watta!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
        buyPath: "/buy/ella-tourism",
        description:
            "This initiative promotes eco-tourism in Ella by developing homestays, nature trails, and cultural experiences that benefit local families and preserve the environment.",
        
  },
  {
    id: 2,
    district: "Puttalama",
    office: "Mahawewa",
    product: "Tourism and fishing industry ",
    location: "Lower Mahawewa, Upper Mahawewa, Upper Koswadi",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.8184106!3d7.4379365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c69b6435b237%3A0x9ae7fa5debad4b60!2sMeda%20Koswadiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 3,
    district: "Hambantota",
    office: "AngunuKolapelass",
    product: "Tourism industry ",
    location: "AngunuKolapelass",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8962914!3d6.1663574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6adfd60786ea7%3A0x5bfedf1c6254ffc8!2sAgunukolapelessa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.", 
     },
     {
        id: 4,
        district: "Badulla",
        office: "Ella",
        product: "Tourism",
        location: "68 C Maduragama",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.314248420939!2d80.1996721!3d7.776529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcd1472fdf3bc3%3A0x8918fcce1525498e!2sMaduragama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
        buyPath: "/buy/dambulla-pottery",
        description:
          "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
      {
        id: 5,
        district: "Anuradhapura",
        office: "Kakirawa",
        product: "Tourism",
        location: "626 Mahawa, 627 Maradankadawala, Walapara",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.314248420939!2d80.5412385!3d8.1201991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc96e65e48bfbd%3A0xe43d407387d8f44e!2sMaradankadawala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
        buyPath: "/buy/dambulla-pottery",
        description:
          "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
      {
        id: 6,
        district: "Anurdhapura",
        office: "Ipalogama",
        product: "Tourism",
        location: "503 Ganthiriyagama",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.4158443!3d8.0713753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc94597cef8fcb%3A0x923b446274cd3b8b!2sIpalogama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
        buyPath: "/buy/dambulla-pottery",
        description:
          "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  
        },
];

const TourismPage = () => {
  const [selectedProject, setSelectedProject] = useState(tourismProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Tourism Projects</h1>

      {/* Table Section */}
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
            {tourismProjects.map((item) => (
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
      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Tourism Project Map"
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
            <p><strong>Project Type:</strong> {selectedProject.product}</p>
            <p><strong>Location:</strong> {selectedProject.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourismPage;
