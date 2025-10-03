import React, { useState } from "react";

const coconutHuskProjects = [
  {
    id: 1,
    district: "Kurunegala",
    office: "Nikaweratiya",
    product: "Coir ropes, mats, brushes",
    location: "Nikaweratiya Industrial Zone",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.314248420939!2d80.2159383!3d7.7576504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fddc602ccdb%3A0xcc8a51875ff74a03!2sNikaweratiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 2,
    district: "Puttalam",
    office: "Wennappuwa",
    product: "Eco-friendly packaging, coir blocks",
    location: "Wennappuwa Coir Cluster",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.314248420939!2d79.9919143!3d7.309449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae392e07c554149%3A0x0000000000000000!2sWennappuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 3,
    district: "Galle",
    office: "Ambalangoda",
    product: "Handmade coir mats",
    location: "Ambalangoda Coastal Zone",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0411077!3d6.2370214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae141cf559d74a9%3A0x753122db62df6017!2sAmbalangoda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
];

const CoconutHusk = () => {
  const [selectedMap, setSelectedMap] = useState(coconutHuskProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Coconut Husk Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#CB8589] text-white">
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
            {coconutHuskProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#F7CAC9] cursor-pointer"
                onClick={() => setSelectedMap(item.mapEmbed)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.showMore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
        <iframe
          title="Coconut Husk Project Map"
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

export default CoconutHusk;
