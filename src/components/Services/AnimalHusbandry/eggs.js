import React, { useState, useRef } from "react";

const eggProjects = [
  {
    id: 1,
    name: "Undugoda Egg Cluster",
    district: "Kegalle",
    office: "Kegalle",
    product: "Egg",
    location: "56 B Undugoda, 56 D Moradana",
    buyPath: "/buy/undugoda-egg",
    description:
      "This cluster supports egg producers in Undugoda and Moradana with improved feed, housing, and market access. It promotes hygienic egg production and connects farmers to regional buyers.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4048678!3d7.1182999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s56%20B%20Undugoda%2C%2056%20D%20Moradana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Kandangamuwa Poultry Cooperative",
    district: "Gampaha",
    office: "Meerigama",
    product: "Eggs and chicks",
    location: "Kandangamuwa, Kindawala, Imbulanwala",
    buyPath: "/buy/kandangamuwa-eggs",
    description:
      "This cooperative supports poultry farmers with hatcheries, feed supply, and veterinary services. It promotes sustainable chick rearing and connects producers to local and export markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1275146!3d7.2844224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31e528ebe35ff%3A0x531bee31213627ab!2sKandangamuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Yakkaduwa Poultry Zone",
    district: "Gampaha",
    office: "J-Ela",
    product: "Eggs and chicks",
    location: "Yakkaduwa",
    buyPath: "/buy/yakkaduwa-eggs",
    description:
      "This zone promotes poultry farming in Yakkaduwa with training, equipment, and branding support. It connects farmers to hotels, bakeries, and wellness markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9108278!3d7.0904906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f0a6b1e2c117%3A0xbd9d1046bbd74c38!2sYakkaduwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 4,
    name: "Kosgulana Egg Cooperative",
    district: "Kalutara",
    office: "Palindanuwara",
    product: "Egg",
    location: "Kosgulana, Walakada, Dhiganna",
    buyPath: "/buy/kosgulana-egg",
    description:
      "This cooperative supports egg producers in Kosgulana with shared storage, transport, and branding. It promotes youth engagement and sustainable poultry farming.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2501363!3d6.6114202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3c87dfb94365f%3A0xa25198460f723bdb!2sKosgulana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const EggPage = () => {
  const [selectedProject, setSelectedProject] = useState(eggProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Egg Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Buy Product</th>
            </tr>
          </thead>
          <tbody>
            {eggProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF7E6] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={item.buyPath}
                    className="text-blue-600 underline hover:text-[#F3931D]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Click Here
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Split Layout Section */}
      <div
        ref={scrollTargetRef}
        className="w-full flex flex-col lg:flex-row gap-6 items-start"
      >
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Egg Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Project Details Section */}
        <div className="w-full lg:w-1/2 h-[400px] bg-[#FFF7E6] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#F3931D]mb-2">{selectedProject.name}</h2>
          <p className="text-sm text-gray-700 mb-4">{selectedProject.description}</p>
          <div className="text-sm space-y-1">
            <p><strong>District:</strong> {selectedProject.district}</p>
            <p><strong>Divisional Secretary Office:</strong> {selectedProject.office}</p>
            <p><strong>Product:</strong> {selectedProject.product}</p>
            <p><strong>Location:</strong> {selectedProject.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
          
export default EggPage    