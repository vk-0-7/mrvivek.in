const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "C++",

  "MongoDB",
  "Git",
];

export default function Skills() {
  return (
    <section className="">
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 md:px-4 py-1.5 md:py-1 bg-white text-black rounded-lg text-sm md:text-base font-medium hover:bg-gray-100 transition-colors duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
