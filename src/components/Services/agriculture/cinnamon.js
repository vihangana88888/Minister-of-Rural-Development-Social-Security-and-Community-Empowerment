// import React, { useState } from "react";

// const cinnamonProjects = [
//     {
//         id: 1,
//         district: "Hambantota",
//         office: "Tangalla",
//         product: "Cinamon",
//         location: "Vallodaya, Ratna East, Rekava West",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8419812!3d6.0518134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6b4f505fdb4bd%3A0x20e8faf158755ceb!2sRekawa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 2,
//         district: "Hambantota",
//         office: "Tangalla",
//         product: "Cinamon",
//         location: "Kattakaduwa South, Kattakaduwa North, Kadiragoda",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.857394!3d6.1221185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sKattakaduwa%20South%2C%20Kattakaduwa%20North%2C%20Kadiragoda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 3,
//         district: "Galle",
//         office: "Balapitiya",
//         product: "Cinamon",
//         location: "Pelagus Province, Pathiraja Place, Coconut Palm Province",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.056486!3d6.3310189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22b0049308181%3A0x222835ad6783e1f2!2sPathiraja%20place%2C%20Uragasmanhandiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 4,
//         district: "Galle",
//         office: "Niyagama",
//         product: "Cinamon",
//         location: "Horangalla Thalawa, Horangalla West",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.274145!3d6.1942041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17b4352a2374b%3A0x40f0d6f914c91b8f!2sHorangalla(Akulavila)!5e0!3m2!1sen!2slk!4v1695980000000!5m",
//         showMore: "Click Here",
//       },
//       {
//         id: 5,
//         district: "Galle",
//         office: "Yakkalamulla",
//         product: "Cinnamon",
//         location: "182 C Ella Upper",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 6,
//         district: "Matara",
//         office: "Kirinda Puhulwella",
//         product: "Cinnamon",
//         location: "Walakanda South",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 7,
//         district: "Kalutara",
//         office: "Wallawita",
//         product: "Cinnamon",
//         location: "782 Pareigama North, Kuda Matugama",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1159281!3d6.414038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3d375122dcfc9%3A0xecab5deda422532!2s782%20ප්‍රෙයිගම%20උතුර%20ග්‍රා.නි%20කාර්යාලය!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 8,
//         district: "Monaragala",
//         office: "Monaragala",
//         product: "Cinnamon",
//         location: "130 Batugammana",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3233754!3d6.887069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45a9ddf60af13%3A0xaaeaff47009fda28!2sMonaragala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 9,
//         district: "Monaragala",
//         office: "Madulla",
//         product: "Cinnamon",
//         location: "113D - Tharela",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3611109!3d6.9783424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae457a5a253fbc1%3A0x2a368ff45e659730!2sMadulla!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 10,
//         district: "Monaragala",
//         office: "Madulla",
//         product: "Cinnamon",
//         location: "113C - Illukkanda",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3611109!3d6.9783424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s113C%20-%20Illukkanda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 11,
//         district: "Monaragala",
//         office: "Monaragala",
//         product: "Cinnamon",
//         location: "116C - Watawanagara",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3233754!3d6.887069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45a9ddf60af13%3A0xaaeaff47009fda28!2sMonaragala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 12,
//         district: "Monaragala",
//         office: "Monaragala",
//         product: "Cinnamon",
//         location: "Mayyokkawatte",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3611109!3d6.9783424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sMayyokkawatte!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 13,
//         district: "Monaragala",
//         office: "Badalkubura",
//         product: "Cinnamon",
//         location: "130 Batugammana",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3233754!3d6.887069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45a9ddf60af13%3A0xaaeaff47009fda28!2sMonaragala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 14,
//         district: "Monaragala",
//         office: "Sewanagala",
//         product: "Cinnamon",
//         location: "Kiri Wewa, Indikolapelessa",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.9240953!3d6.3571134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4025b01077ac1%3A0xf136f7cf297d5ec3!2sIndikolapelessa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },
//       {
//         id: 15,
//         district: "Monaragala",
//         office: "Sewanagala",
//         product: "Cinnamon",
//         location: "Habarugala, Mahagama",
//         mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.9105413!3d6.315373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6a9c57761e3e9%3A0xb8312bd72c31d4d4!2sMahagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
//         showMore: "Click Here",
//       },


// ];

// const CinnamonPage = () => {
//   const [selectedMap, setSelectedMap] = useState(cinnamonProjects[0].mapEmbed);

//   return (
//     <div className="min-h-screen bg-white px-6 py-10">
//       <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Cinnamon Related Product</h1>

//       <div className="overflow-x-auto mb-10">
//         <table className="min-w-full border border-gray-300">
//           <thead className="bg-[#A0522D] text-white">
//             <tr>
//               <th className="px-4 py-2 border">No</th>
//               <th className="px-4 py-2 border">District</th>
//               <th className="px-4 py-2 border">Office</th>
//               <th className="px-4 py-2 border">Product</th>
//               <th className="px-4 py-2 border">Location</th>
//               <th className="px-4 py-2 border">Show More</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cinnamonProjects.map((item) => (
//               <tr
//                 key={item.id}
//                 className="hover:bg-[#FFF7E6] cursor-pointer"
//                 onClick={() => setSelectedMap(item.mapEmbed)}
//               >
//                 <td className="px-4 py-2 border text-center">{item.id}</td>
//                 <td className="px-4 py-2 border">{item.district}</td>
//                 <td className="px-4 py-2 border">{item.office}</td>
//                 <td className="px-4 py-2 border">{item.product}</td>
//                 <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
//                 <td className="px-4 py-2 border text-blue-600 underline">{item.showMore}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
//         <iframe
//           title="Cinnamon Project Map"
//           src={selectedMap}
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default CinnamonPage;

import React, { useState } from "react";

const cinnamonProjects = [
    {
                id: 1,
                district: "Hambantota",
                office: "Tangalla",
                product: "Cinamon",
                location: "Vallodaya, Ratna East, Rekava West",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8419812!3d6.0518134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6b4f505fdb4bd%3A0x20e8faf158755ceb!2sRekawa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 2,
                district: "Hambantota",
                office: "Tangalla",
                product: "Cinamon",
                location: "Kattakaduwa South, Kattakaduwa North, Kadiragoda",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.857394!3d6.1221185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sKattakaduwa%20South%2C%20Kattakaduwa%20North%2C%20Kadiragoda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 3,
                district: "Galle",
                office: "Balapitiya",
                product: "Cinamon",
                location: "Pelagus Province, Pathiraja Place, Coconut Palm Province",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.056486!3d6.3310189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22b0049308181%3A0x222835ad6783e1f2!2sPathiraja%20place%2C%20Uragasmanhandiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 4,
                district: "Galle",
                office: "Niyagama",
                product: "Cinamon",
                location: "Horangalla Thalawa, Horangalla West",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.274145!3d6.1942041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17b4352a2374b%3A0x40f0d6f914c91b8f!2sHorangalla(Akulavila)!5e0!3m2!1sen!2slk!4v1695980000000!5m",
                showMore: "Click Here",
              },
              {
                id: 5,
                district: "Galle",
                office: "Yakkalamulla",
                product: "Cinnamon",
                location: "182 C Ella Upper",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 6,
                district: "Matara",
                office: "Kirinda Puhulwella",
                product: "Cinnamon",
                location: "Walakanda South",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 7,
                district: "Kalutara",
                office: "Wallawita",
                product: "Cinnamon",
                location: "782 Pareigama North, Kuda Matugama",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1159281!3d6.414038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3d375122dcfc9%3A0xecab5deda422532!2s782%20ප්‍රෙයිගම%20උතුර%20ග්‍රා.නි%20කාර්යාලය!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 8,
                district: "Monaragala",
                office: "Monaragala",
                product: "Cinnamon",
                location: "130 Batugammana",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3233754!3d6.887069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45a9ddf60af13%3A0xaaeaff47009fda28!2sMonaragala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 9,
                district: "Monaragala",
                office: "Madulla",
                product: "Cinnamon",
                location: "113D - Tharela",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3611109!3d6.9783424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae457a5a253fbc1%3A0x2a368ff45e659730!2sMadulla!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 10,
                district: "Monaragala",
                office: "Madulla",
                product: "Cinnamon",
                location: "113C - Illukkanda",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3611109!3d6.9783424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s113C%20-%20Illukkanda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 11,
                district: "Monaragala",
                office: "Monaragala",
                product: "Cinnamon",
                location: "116C - Watawanagara",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3233754!3d6.887069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45a9ddf60af13%3A0xaaeaff47009fda28!2sMonaragala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 12,
                district: "Monaragala",
                office: "Monaragala",
                product: "Cinnamon",
                location: "Mayyokkawatte",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3611109!3d6.9783424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sMayyokkawatte!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 13,
                district: "Monaragala",
                office: "Badalkubura",
                product: "Cinnamon",
                location: "130 Batugammana",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.3233754!3d6.887069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45a9ddf60af13%3A0xaaeaff47009fda28!2sMonaragala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 14,
                district: "Monaragala",
                office: "Sewanagala",
                product: "Cinnamon",
                location: "Kiri Wewa, Indikolapelessa",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.9240953!3d6.3571134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4025b01077ac1%3A0xf136f7cf297d5ec3!2sIndikolapelessa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
              {
                id: 15,
                district: "Monaragala",
                office: "Sewanagala",
                product: "Cinnamon",
                location: "Habarugala, Mahagama",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.9105413!3d6.315373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6a9c57761e3e9%3A0xb8312bd72c31d4d4!2sMahagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                showMore: "Click Here",
              },
        
];

const CinnamonPage = () => {
  const [selectedMap, setSelectedMap] = useState(cinnamonProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Cinnamon Related Products</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-10">
      <table className="min-w-full border border-gray-300">
          <thead className="bg-[#A76545] text-white">
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
            {cinnamonProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#EFD9D1] cursor-pointer"
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
          title="Cinnamon Project Map"
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

export default CinnamonPage;
