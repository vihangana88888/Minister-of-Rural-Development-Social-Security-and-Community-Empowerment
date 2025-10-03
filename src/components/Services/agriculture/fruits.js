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
  {
    id: 2,
    district: "Mahanuwara",
    office: "Poojapitiya",
    product: "Duuriyan",
    location: "507-Pahala Higulwala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.991334342757!2d80.544683!3d7.3999839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae343ddd3e9ddb5%3A0xe659dcbd49322ecc!2sPahala%20Hingulwala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 3,
    district: "Nuwara Eliya",
    office: "Kotmale West",
    product: "Vine oranges",
    location: "465 H Dombagasthala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.6397853!3d7.0508821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s465%20H%20Dombagasthala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",  
    showMore: "Click Here",
  },
  
  {
    id: 4,
    district: "Nuwara Eliya",
    office: "Kotmale East",
    product: "Jamanarang",
    location: "461/D Weralalapathana",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.6397853!3d7.0508821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2sNiyamgamdora%20470!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",  
    showMore: "Click Here",
  },
  {
    id: 3,
    district: "Ampara",
    office: "Uhana",
    product: "Vine oranges",
    location: "Bandaradoowa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.314248420939!2d81.4604659!3d7.4268175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae520c1595dddbf%3A0x25c2ef2f88d9dec!2sBandaradoowa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 4,
    district: "Mulathivu",
    office: "Mantai East",
    product: "Jams, cordials and orange-based products",
    location: "Ampalapuram",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.9713535!3d16.5738373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ef83f9204c7d%3A0x5f9453f5c41b161e!2sAmalapuram%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1695980000000!5m2!1sen!2sin",
    showMore: "Click Here",
  },
  {
    id: 5,
    district: "Mulathivu",
    office: "Puthukudirippu",
    product: "Kavendish Banana",
    location: "Theravil Thevipuram",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6457424!3d9.3448853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afeb7380d057633%3A0x2377b0bdd76e59e8!2sThevipuram!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 6,
    district: "Plonnaruwa",
    office: "Madirigiriya",
    product: "Pinapple and Delum",
    location: "108 Vijayapura",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.8894955!3d6.9298653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259b9ed12a471%3A0xdfa3bfe9081df24!2s108%20-%20Vijayapura!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 7,
    district: "Plonnaruwa",
    office: "Madirigiriya",
    product: "Apple,Pera,Tompesi Mango",
    location: "109 Ihalagama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.9516002!3d8.143382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb65eaeea2c9ad%3A0xc1b1d51f3a30a57c!2sMedirigiriya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },


  

];

const FruitPage = () => {
  const [selectedMap, setSelectedMap] = useState(fruitProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Fruit Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#D97D55] text-white">
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
                className="hover:bg-[#F9CB99] cursor-pointer"
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
