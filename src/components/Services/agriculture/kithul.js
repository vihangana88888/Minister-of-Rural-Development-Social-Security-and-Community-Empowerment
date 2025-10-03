import React, { useState } from "react";

const kithulProjects = [
  {
    id: 1,
    district: "Nuwara Eliya",
    office: "Kotmale West",
    product: "KKithul-related value-added products",
    location: "Madakubura 468",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.314248420939!2d80.1460593!3d7.0465585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3010ecda58481%3A0x64cf85d5a0ef8ea!2sMadakubura%20Road!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Hear",
  },
  {
    id: 2,
    district: "Kalutara",
    office: "Mathugama",
    product: "Kithul Hakuru, honey, Kithul flour",
    location: "795 B Sandasirigama, 794 Horawala, 793 B Madawala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6670719!3d7.3268171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s795B%20Sandasirigama%2C%20794%20Horawala%2C%20793B%20Madawala!5e0!3m2!1sen!2slk!4v169598000000",
    showMore: "Click Hear",
  },
  
];

const KithulPage = () => {
  const [selectedMap, setSelectedMap] = useState(kithulProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Kithul Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#C1856D] text-white">
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
            {kithulProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#EBD9D1] cursor-pointer"
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
          title="Kithul Project Map"
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

export default KithulPage;
