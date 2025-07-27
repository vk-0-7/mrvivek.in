import Image, { StaticImageData } from "next/image";
import Ptu from "@/assets/ptu.png";
import Link from "next/link";

interface WorkExperience {
  company: string;
  role: string;
  logo: StaticImageData;
  duration: string;
  isPresent?: boolean;
  link: string;
}

const workExperiences: WorkExperience[] = [
  {
    company: "Punjab Technical University",
    role: "B.Tech | Electronics and Communication Engineering",
    logo: Ptu,
    duration: "2020 - 2024",
    isPresent: false,
    link: "https://ptu.ac.in/",
  },
];

export default function Education() {
  return (
    <section className="">
      <div className="">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
          Education
        </h2>

        <div className="space-y-4 md:space-y-2">
          {workExperiences.map((experience, index) => (
            <Link
              key={index}
              className="flex items-center justify-between group hover:bg-gray-900/30 py-3 md:py-4 rounded-lg transition-colors duration-200"
              href={experience.link}
              target="_blank"
            >
              <div className="flex items-center gap-3 md:gap-4">
                {/* Company Logo */}
                <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 md:p-2">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-lg font-semibold text-white">
                    {experience.company}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    {experience.role}
                  </p>
                </div>
              </div>

              {/* Right side - Duration */}
              <div className="text-right">
                <p className="text-xs md:text-sm text-gray-400">
                  {experience.duration}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
