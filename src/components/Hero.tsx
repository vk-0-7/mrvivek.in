import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">
      {/* Left side - Content */}
      <div className="text-white space-y-4 md:space-y-6 w-full md:w-7/10">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Hi, Vivek here
          </h1>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed text-balance">
          {"I'm "}a full-stack developer, turning ideas into production-ready
          products—handling everything from concept to deployment with a
          complete modern tech stack.
        </p>
      </div>

      {/* Right side - Profile Image */}
      <div className="flex w-full md:w-3/10 items-center justify-center md:justify-end">
        <Image
          src="/vivek.png"
          alt="Vivek"
          className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-full"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
