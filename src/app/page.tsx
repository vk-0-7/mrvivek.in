import Image from "next/image";
import Work from "../components/Work";
import Hero from "@/components/Hero";
import Education from "@/components/education";
import Skills from "@/components/Skills";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 pt-8 md:pt-16 pb-16 max-w-[45rem] mx-auto">
      <div className="space-y-6 md:space-y-12 mb-12">
        <Hero />
        <Work />
        <Skills />
        <Education />
      </div>
    </div>
  );
}
