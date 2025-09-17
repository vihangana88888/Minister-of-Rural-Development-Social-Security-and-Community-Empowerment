import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/AboutUs",
    subItems: [
      { label: "Introduction", anchor: "#introduction" },
      { label: "Overview", anchor: "#overview" },
      { label: "Officer Details", anchor: "#services" },
    ],
  },
  { label: "Services", path: "#" },
  { label: "Product", path: "#" },
  { label: "Download", path: "#" },
  { label: "News", path: "#" },
  { label: "Contact Us", path: "/ContactUs" },

  
];

const accessibilityIcons = [
  { icon: "bi bi-universal-access", title: "Accessibility" },
  { icon: "bi bi-translate", title: "Language" },
];


const Header = () => {
  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="w-full bg-[#9A3F3F] text-white py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Logo + Ministry Name */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Ministry Logo"
              className="h-[100px] w-[100px] object-contain rounded-full"
            />
            <h1
              className="text-sm md:text-lg font-bold leading-snug"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              ග්‍රාමීය සංවර්ධන, සමාජ ආරක්ෂණ හා ප්‍රජා සවිබලගැන්වීම් අමාත්‍යංශය<br />
              Ministry of Rural Development, Social Security and Community Empowerment<br />
              கிராமிய அபிவிருத்தி, சமூகப் பாதுகாப்பு மற்றும் சமூக வலுவூட்டுகை அமைச்சு
            </h1>
          </div>

          {/* Accessibility Icons */}
          <div className="flex gap-4">
            {accessibilityIcons.map(({ icon, title }) => (
              <button
                key={icon}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-xl text-black hover:bg-blue-100 hover:text-blue-600 transition"
                title={title}
              >
                <i className={icon}></i>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-[#E3A0A0]">
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between h-14">
          <ul className="flex items-center gap-6">
            {navItems.map((item) =>
              item.subItems ? (
                <li key={item.label} className="relative group">
                  <Link
                    to={item.path}
                    className="px-6 py-2 bg-white text-sm font-medium shadow-sm hover:bg-red-300 transition"
                  >
                    {item.label}
                  </Link>
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={`${item.path}${sub.anchor}`}
                          className="block px-4 py-2 hover:bg-red-100 text-sm"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="px-6 py-2 bg-white text-sm font-medium shadow-sm hover:bg-red-300 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
