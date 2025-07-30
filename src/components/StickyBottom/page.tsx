"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaHome,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import Image from "next/image";

export const StickyBottom = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigationItems = [
    // {
    //   icon: <FaHome />,
    //   href: "/",
    //   label: "Home",
    // },
    // {
    //   icon: BookIcon,
    //   href: "/blog",
    //   label: "Blog",
    // },
    {
      icon: <FaGithub />,
      href: "https://github.com/vk-0-7",
      label: "GitHub",
      external: true,
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/kumarvivek07/",
      label: "LinkedIn",
      external: true,
    },
    // {
    //   icon: <FaTwitter />,
    //   href: "https://x.com/vivek_dev007",
    //   label: "Twitter",
    //   external: true,
    // },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/vivek07____/",
      label: "Instagram",
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black rounded-full px-2 md:px-4 py-2 md:py-3 shadow-lg border border-gray-700">
        <div className="flex items-center gap-2 md:gap-3">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 group text-white"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}

          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 group text-white"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button> */}
        </div>
      </div>
    </div>
  );
};
