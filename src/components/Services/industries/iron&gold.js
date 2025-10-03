import React, { useState } from "react";

const ironGoldProjects = [
  {
    id: 1,
    district: "Colombo ",
    office: "Padukka",
    product: "Iron-related products such as grills, gates, garden benches",
    location: "Malagala,Udumulla",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0824999!3d6.8252464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae252ac1f70d6f9%3A0x60937d346ceb55e0!2sUdumulla!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  // {
  //   id: 2,
  //   district: "Colombo",
  //   office: "Homagama",
  //   project: "Goldsmith Artisan Support & Branding",
  //   amount: "Rs. 40,000",
  //   location: "Homagama",
  //   mapEmbed:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d79.9662099!3d6.8458831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596c6c6c6c6c%3A0x6c6c6c6c6c6c6c6c!2sHomagama!5e0!3m2!1sen!2slk!4v1690000000021!5m2!1sen!2slk",
  //   showMore: "Click Here",
  // },
  // {
  //   id: 3,
  //   district: "Galle",
  //   office: "Habaraduwa",
  //   project: "Iron & Gold Craft Exhibition & Promotion",
  //   amount: "Rs. 38,000",
  //   location: "Habaraduwa",
  //   mapEmbed:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.2162099!3d6.0458831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sHabaraduwa!5e0!3m2!1sen!2slk!4v1690000000020!5m2!1sen!2slk",
  //   showMore: "Click Here",
  // },
];

const IronGoldPage = () => {
  const [selectedMap, setSelectedMap] = useState(ironGoldProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Iron & Gold Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Project</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Show More</th>
            </tr>
          </thead>
          <tbody>
            {ironGoldProjects.map((item) => (
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
          title="Iron & Gold Project Map"
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

export default IronGoldPage;
