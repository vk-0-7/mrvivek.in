import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex md:flex-row gap-3 md:gap-12 items-center justify-between">
        {/* Left side - Content */}
        <div className="text-white space-y-4 md:space-y-6 w-6/10  md:w-7/10">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Hi, Vivek here
            </h1>
          </div>

          <p className="hidden md:block text-sm sm:text-base md:text-base text-gray-300 max-w-2xl leading-relaxed text-balance">
            {"I'm "}a full-stack developer, turning ideas into production-ready
            products—handling everything from concept to deployment with a
            complete modern tech stack.
          </p>
        </div>

        {/* Right side - Profile Image */}
        <div className="flex w-4/10 md:w-3/10 items-center justify-center md:justify-end">
          <Image
            src="/vivek.png"
            alt="Vivek"
            className="h-30 w-30 md:h-35 md:w-35 object-cover rounded-full"
            width={500}
            height={500}
          />
        </div>
      </div>
      <p className="block md:hidden text-sm sm:text-base md:text-base text-gray-300">
        {"I'm "}a full-stack developer, turning ideas into production-ready
        products—handling everything from concept to deployment with a complete
        modern tech stack.
      </p>
    </>
  );
};

export default Hero;
