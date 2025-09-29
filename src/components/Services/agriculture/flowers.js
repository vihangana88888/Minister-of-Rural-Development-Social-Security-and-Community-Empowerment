import React, { useState } from "react";

const palmProjects = [
  {
    id: 1,
    district: "Kegalla",
    office: "Aranayaka",
    project: "Road development project from near Dothaloya Gate to Fifty Acres (Phase One)",
    amount: "Rs. 28,000",
    location: "Madurankuli",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d79.8262099!3d8.0358831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sMadurankuli!5e0!3m2!1sen!2slk!4v1690000000006!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 2,
    district: "Mannarama",
    office: "Mannarama",
    project: "Palm Sugar Production Support",
    amount: "Rs. 32,000",
    location: "Valikamam West (Kopai)",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d79.9463209!3d9.7519306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32ac41b43118b%3A0x19c40085f6da3f90!2sValikamam%20West%20(Kopai)!5e0!3m2!1sen!2slk!4v1690000000004!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 3,
    district: "Jaffna",
    office: "Valikamam South (Uduvil)",
    project: "Palm Oil Value Added Manufacturing Project",
    amount: "Rs. 36,000",
    location: "Valikamam East (Kopay)",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.0148362!3d9.7428611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe55588ef5aaad%3A0xf4fcedeaa989bbd4!2sValikamam%20East%20(Kopay)!5e0!3m2!1sen!2slk!4v1690000000005!5m2!1sen!2slk",
    showMore: "Click Here",
  },
];

const PalmPage = () => {
  const [selectedMap, setSelectedMap] = useState(palmProjects[0].mapEmbed);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Flower and Ornamental plants</h1>

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
            {palmProjects.map((item) => (
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
          title="Palm Project Map"
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

export default PalmPage;
