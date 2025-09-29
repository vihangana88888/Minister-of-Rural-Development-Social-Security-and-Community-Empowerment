import React, { useState } from "react";

const fruitProjects = [
  {
    id: 1,
    district: "Mahanuwara",
    office: "Harispaththuwa",
    product: "Amban Banana",
    location: "Bulathgolla",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.5827771!3d7.2997305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae369ab2e00ec53%3A0xcd9ff735bc4aa846!2sBulathgolla%2C%20Halloluwa!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
//   {
//     id: 2,
//     district: "Kegalle",
//     office: "Ruwanwella",
//     product: "Fruit Drying & Packaging Unit",
//     amount: "Rs. 33,000",
//     location: "Ruwanwella",
//     mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.2162099!3d7.0458831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sRuwanwella!5e0!3m2!1sen!2slk!4v1690000000014!5m2!1sen!2slk",
//     showMore: "Click Here",
//   },
//   {
//     id: 3,
//     district: "Ampara",
//     office: "Uhana",
//     project: "Fruit Juice Production Support",
//     amount: "Rs. 36,000",
//     location: "Uhana",
//     mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d81.5212099!3d7.3924319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae522281e73e697%3A0xac30584dddae1156!2sUhana!5e0!3m2!1sen!2slk!4v1690000000003!5m2!1sen!2slk",
//     showMore: "Click Here",
//   },
];

const FruitPage = () => {
  const [selectedMap, setSelectedMap] = useState(fruitProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Fruit Related Product</h1>

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
            {fruitProjects.map((item) => (
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
          title="Fruit Project Map"
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

export default FruitPage;
