import React, { useState } from "react";

const driedFishProjects = [
  {
    id: 1,
    district: "Matara",
    office: "Devinuwara",
    project: "Umbalakada Processing & Packaging Center",
    amount: "Rs. 32,000",
    location: "Devinuwara",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.5512099!3d5.9458831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sDevinuwara!5e0!3m2!1sen!2slk!4v1690000000030!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 2,
    district: "Hambantota",
    office: "Tangalle",
    project: "Dried Fish Storage & Distribution Unit",
    amount: "Rs. 36,000",
    location: "Tangalle",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.7912099!3d6.0458831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sTangalle!5e0!3m2!1sen!2slk!4v1690000000018!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 3,
    district: "Jaffna",
    office: "Point Pedro",
    project: "Traditional Dried Fish Artisan Support",
    amount: "Rs. 40,000",
    location: "Point Pedro",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.0162099!3d9.8258831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5f6c6c6c6c6c%3A0x6c6c6c6c6c6c6c6c!2sPoint%20Pedro!5e0!3m2!1sen!2slk!4v1690000000040!5m2!1sen!2slk",
    showMore: "Click Here",
  },
];

const UmbalakadaDriesFishPage = () => {
  const [selectedMap, setSelectedMap] = useState(driedFishProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Umbalakada & Dries Fish Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Project</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Show More</th>
            </tr>
          </thead>
          <tbody>
            {driedFishProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF7E6] cursor-pointer"
                onClick={() => setSelectedMap(item.mapEmbed)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.project}</td>
                <td className="px-4 py-2 border">{item.amount}</td>
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
          title="Umbalakada & Dries Fish Project Map"
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

export default UmbalakadaDriesFishPage;
