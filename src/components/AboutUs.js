import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


// Import officer images
import nimalImage from "../assets/officers/image 1.jpeg";
import tharushiImage from "../assets/officers/image 2.jpeg";
import ruwanImage from "../assets/officers/image 3.jpeg";

const officers = [
  {
    name: "S.K.W.Sisira Kumara",
    designation: "Director Genaral",
    office: "011 2877122",
    phone: "N/A",
    email: "nimal.perera@ministry.gov.lk",
    image: nimalImage,
  },
  {
    name: "W.P.S.WICKRAMGE",
    designation: " Directer",
    office: "011288714",
    phone: "+94 91 8765432",
    email: "tharushi.silva@ministry.gov.lk",
    image: tharushiImage,
  },
  {
    name: "Name: W.M.U.M.WIJEYAKOON",
    designation: "Directer ",
    office: "N/A",
    phone: "+94 714434091",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
  {
    name: "Name: N.C.WICKRAMANAYAKA",
    designation: "Directer ",
    office: "112186018",
    phone: "+94 718318437",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
  {
    name: "Name: V.C.WIJEWARDANA",
    designation: "Deputy Director ",
    office: "112887478",
    phone: " +94 702599805",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
  {
    name: "Name: S.G.A.K.SUBAWICKRAMA",
    designation: "Assistant Director",
    office: "N/A",
    phone: "+94 741520766",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
  {
    name: "Name: R.M.C.S.RATHNAYAKA",
    designation: "Assistant Director",
    office: "112887831",
    phone: "+94 703065277",
    email: "ruwan.jayasena@ministry.gov.lk",
    image: ruwanImage,
  },
];

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-[#FFF8F6] text-gray-800 min-h-screen">


      <main className="max-w-5xl mx-auto px-6 py-10 space-y-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold  text-[#9A3F3F] text-center mb-6 font-serif ]">About Us</h1>
        {/* Introduction Section */}
        <section id="introduction">
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Introduction</h2>
          <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
            <p className="text-lg leading-relaxed">
            The Saubagya Production Village Programme was launched to promote home-based products, 
            raising the income level of the rural community, uplifting the rural economy, and making
             a significant contribution to the national product, in order to realize the “Saubagyaye Dakma” 
             Political Manifest. 
            The aim is to establish 1000 villages as “Saubhagya Production Villages” throughout the country (500 villages in the first phase and another 500 in the second phase), involving low-income earners including Samurdhi recipients as well as more potential family units who directly contribute to the production process.            </p>
          </div>
        </section>

        <hr className="border-t border-gray-400" />

        {/* Overview Section */}
        <section id="overview">
          <h2 className="text-2xl font-bold text-[#9A3F3F] mb-4">Overview</h2>

          <div className="space-y-6">
            <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-orange-600 mb-2">Vision</h3>
              <p className="text-base leading-relaxed">
                An empowered community where every individual has the opportunity to lead a fulfilling and dignified life.
              </p>
            </div>

            <div className="bg-[#FDF1E7] rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-orange-600 mb-2">Mission</h3>
              <p className="text-base leading-relaxed">
                Promoting rural community development by overseeing a wide range of programs including rural infrastructure, livelihood support, social protection schemes, and community engagement initiatives. Our work is collaborative, involving local governments, NGOs, and citizens to deliver impactful solutions tailored to each region’s needs.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-400" />

        {/* Officer Overview Section */}
        <section id="services">
          <h2 className="text-2xl font-bold text-[#9A3F3F] mb-6">Officers' Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((officer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-[#9A3F3F]">{officer.name}</h3>
                <p className="text-sm font-medium">{officer.designation}</p>
                <p className="text-sm">{officer.office}</p>
                <p className="text-sm text-blue-600">{officer.email}</p>
                <p className="text-sm">{officer.phone}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
