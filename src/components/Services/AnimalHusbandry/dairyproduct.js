import React, { useState } from "react";

const dairyProjects = [
  {
    id: 1,
    district: "Maha Nuwara",
    office: "Madadumbara",
    product: "Fresh Milk",
    location: "Madadumbara",
    mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15849.84781234527!2d80.640724!3d7.2988922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMahanuwara%2C%20Madadumbara%2C%20802%2C%20Kandekubura!5e0!3m2!1sen!2slk!4v1695470000000",
    showMore: "Click Here",
  },
  // {
  //   id: 2,
  //   district: "Badulla",
  //   office: "Welimada",
  //   project: "Dairy Product Packaging & Distribution",
  //   amount: "Rs. 34,000",
  //   location: "Welimada",
  //   mapEmbed:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d81.1162099!3d6.9958831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sWelimada!5e0!3m2!1sen!2slk!4v1690000000017!5m2!1sen!2slk",
  //   showMore: "Click Here",
  // },
  // {
  //   id: 3,
  //   district: "Kurunegala",
  //   office: "Kobeigane",
  //   project: "Milk Collection & Processing Unit",
  //   amount: "Rs. 30,000",
  //   location: "Kobeigane",
  //   mapEmbed:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.1162099!3d7.6558831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sKobeigane!5e0!3m2!1sen!2slk!4v1690000000002!5m2!1sen!2slk",
  //   showMore: "Click Here",
  // },
];

const DairyProductPage = () => {
  const [selectedMap, setSelectedMap] = useState(dairyProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Dairy Product Related Projects</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Show More</th>
            </tr>
          </thead>
          <tbody>
            {dairyProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF7E6] cursor-pointer"
                onClick={() => setSelectedMap(item.mapEmbed)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>

                <td className="px-4 py-2 border text-blue-600 underline">
                  {item.location}
                </td>
                <td className="px-4 py-2 border text-blue-600 underline">
                  {item.showMore}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
        <iframe
          title="Dairy Product Project Map"
          src={selectedMap}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default DairyProductPage;
