import React, { useState } from "react";

const teaProjects = [
  {
    id: 1,
    district: "Kegalle",
    office: "Kegalle",
    product: "Tea, areca nut",
    location: "58B Ganthuna North, 58A Ganthuna South, 58C Belihulwana",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.3788803!3d7.1269334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s58B%20Ganthuna%20North%2C%2058A%20Ganthuna%20South%2C%2058C%20Belihulwana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 2,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Tea",
    location: "Kottawa, Kottawa East, Kottawa West",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.3148865!3d6.1027539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae16e4d8051f99b%3A0x1174adb9d25cc6be!2sKottawa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 3,
    district: "Galle",
    office: "Neluwa",
    product: "Tea",
    location: "Happitiya, Pannimulla, Panagoda",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.4089828!3d6.3474274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3dfa4faf6a687%3A0x61830a8441133f8e!2sPannimulla!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 4,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Tea",
    location: "182 C Ella Upper. Magedara East",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
];

const TeaPage = () => {
  const [selectedMap, setSelectedMap] = useState(teaProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Tea Related Products</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300">
        <thead className="bg-[#0A400C] text-white">
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
            {teaProjects.map((item) => (
              <tr
              key={item.id}
              className="hover:bg-[#B9D4AA] cursor-pointer"
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
          title="Tea Project Map"
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

export default TeaPage;
