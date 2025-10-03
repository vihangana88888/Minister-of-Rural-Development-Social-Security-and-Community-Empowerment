import React, { useState } from "react";

const clayProjects = [
  {
    id: 1,
    district: "Rathnapura",
    office: "Kolonna",
    product: "Pots, clay pots",
    location: "Dambulla",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.6828641!3d6.356544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae392e07c554149%3A0x0000000000000000!2sකැල්ල%2C%20අබ්ගහයාය!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 2,
    district: "Gampaha",
    office: "Biyagama",
    product: "Clay Product",
    location: "28c Biyagama South",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9609053!3d6.9571841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s28C%20Biyagama%20South!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 3,
    district: "Monaragala",
    office: "Wellavaya",
    product: "Milk Pot, Clay Pot",
    location: "Weherayaya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.1155528!3d6.6420945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sWeherayaya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
];

const ClayPage = () => {
  const [selectedMap, setSelectedMap] = useState(clayProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Clay Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#4B352A] text-white">
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
            {clayProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#F2F2F2] cursor-pointer"
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
          title="Clay Project Map"
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

export default ClayPage;
