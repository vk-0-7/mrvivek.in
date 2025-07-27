"use client";

import { useState } from "react";
import HomeIcon from "../../assets/home.svg";
import BookIcon from "../../assets/book.svg";
import GithubIcon from "../../assets/Github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import TwitterIcon from "../../assets/twitter.svg";
import InstagramIcon from "../../assets/instagram.svg";
import MoonIcon from "../../assets/moon.svg";
import SunIcon from "../../assets/sun.svg";
import Image from "next/image";

export const StickyBottom = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigationItems = [
    {
      icon: HomeIcon,
      href: "/",
      label: "Home",
    },
    // {
    //   icon: BookIcon,
    //   href: "/blog",
    //   label: "Blog",
    // },
    {
      icon: GithubIcon,
      href: "https://github.com/vk-0-7",
      label: "GitHub",
      external: true,
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/kumarvivek07/",
      label: "LinkedIn",
      external: true,
    },
    {
      icon: TwitterIcon,
      href: "https://x.com/vivek_dev007",
      label: "Twitter",
      external: true,
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/vivek07____/",
      label: "Instagram",
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black rounded-full px-4 py-3 shadow-lg border border-gray-700">
        <div className="flex items-center gap-3">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
              aria-label={item.label}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="brightness-0 invert group-hover:scale-110 transition-transform duration-200"
              />
            </a>
          ))}

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Image
                src={SunIcon}
                alt="Sun"
                width={20}
                height={20}
                className="brightness-0 invert group-hover:scale-110 transition-transform duration-200"
              />
            ) : (
              <Image
                src={MoonIcon}
                alt="Moon"
                width={20}
                height={20}
                className="brightness-0 invert group-hover:scale-110 transition-transform duration-200"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
