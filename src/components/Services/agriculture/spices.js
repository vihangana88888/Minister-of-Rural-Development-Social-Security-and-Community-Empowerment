import React, { useState, useRef } from "react";

const spicesPage = [
  {
    id: 1,
    name: "Pahala Higulwala Spice Cluster",
    district: "Mahanuwara",
    office: "Poojapitiya",
    product: "Black Pepper",
    location: "507-Pahala Higulwala",
    buyPath: "/buy/pahala-higulwala-spice",
    description:
      "This cluster supports black pepper growers with improved drying, grading, and packaging facilities. It connects farmers to regional spice markets and promotes sustainable cultivation.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.991334342757!2d80.544683!3d7.3999839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae343ddd3e9ddb5%3A0xe659dcbd49322ecc!2sPahala%20Hingulwala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Udawatte Spice Village",
    district: "Nuwara Eliya",
    office: "Higuranketha",
    product: "Black Pepper",
    location: "Udawatte East, Udawatte West, 488/A Hakuruthal",
    buyPath: "/buy/udawatte-spice",
    description:
      "This village cultivates black pepper and other spices using organic methods. It promotes agro-tourism and offers training for youth in spice processing and marketing.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d79.9463209!3d9.7519306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sValikamam%20West%20(Kopai)!5e0!3m2!1sen!2slk!4v1690000000004!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Kosgama Spice Processing Center",
    district: "Colombo",
    office: "Seethawaka",
    product: "Black Pepper",
    location: "Upper Kosgama South, Aswattha North, Bollatawa",
    buyPath: "/buy/kosgama-spice",
    description:
      "This center helps spice farmers in Kosgama process and package black pepper for retail and export. It supports quality control and branding initiatives.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.135719!3d6.9428364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3ab01698ee94b%3A0xc9cd813016624e1d!2sKosgama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "Ganthuna Spice Cooperative",
    district: "Kegalle",
    office: "Kegalle",
    product: "Black Pepper",
    location: "58B Ganthuna North, 58A Ganthuna South, 58C Belihulwana",
    buyPath: "/buy/ganthuna-spice",
    description:
      "This cooperative supports spice growers in Ganthuna with shared drying units, bulk marketing, and export facilitation. It strengthens rural livelihoods and promotes fair trade.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.3788803!3d7.1269334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s58B%20Ganthuna%20North%2C%2058A%20Ganthuna%20South%2C%2058C%20Belihulwana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const SpicesPage = () => {
  const [selectedProject, setSelectedProject] = useState(spicesPage[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Spices and Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#DC3C22] text-white">
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
            {spicesPage.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFEDE8] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#DC3C22]"
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
            title="Spice Project Map"
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

export default SpicesPage;