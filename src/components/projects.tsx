import React from "react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  bgColor: string;
  textColor: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Thumbnaily",
    subtitle: "AI Powered Thumbnail Magic",
    description:
      "An AI thumbnail generator, takes a reference image from users and prompt and then crafts perfect thumbnail for the required title",
    gradient: "from-purple-900 to-blue-900",
    bgColor: "bg-gray-800",
    textColor: "text-white",
    githubUrl: "https://github.com/yourusername/thumbnaily",
    liveUrl: "https://thumbnaily.app",
    technologies: [
      "Next.JS",
      "TypeScript",
      "AWS S3",
      "PostgreSQL",
      "Prisma",
      "Virtual Machine",
      "CI/CD",
    ],
  },
  {
    id: 2,
    title: "Yaatra AI",
    subtitle: "Discover Your Next adventure with AI",
    description:
      "A full-stack AI-powered travel planning application using React and Vite for the frontend with Express as the backend",
    gradient: "from-white to-gray-100",
    bgColor: "bg-white",
    textColor: "text-gray-800",
    githubUrl: "https://github.com/yourusername/yaatra-ai",
    liveUrl: "https://yaatra-ai.vercel.app",
    technologies: [
      "React-Vite",
      "TypeScript",
      "GenAI",
      "OpenAI SDK",
      "TailwindCSS",
    ],
  },
  {
    id: 3,
    title: "CertSecure",
    subtitle: "Secure Digital Certificates on the Blockchain",
    description:
      "A blockchain-based certificate verification system ensuring authenticity and preventing fraud",
    gradient: "from-green-900 to-blue-900",
    bgColor: "bg-green-900/30",
    textColor: "text-white",
    githubUrl: "https://github.com/yourusername/certsecure",
    liveUrl: "https://certsecure.eth",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
  },
  {
    id: 4,
    title: "Portfolio",
    subtitle: "Personal Developer Portfolio",
    description:
      "A modern, responsive portfolio website built with Next.js and TypeScript",
    gradient: "from-gray-800 to-gray-900",
    bgColor: "bg-gray-800",
    textColor: "text-white",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://vivek.dev",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
  },
];

const Projects = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
        Cool Projects {"I've"} Built
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800"
          >
            {/* Project Preview */}
            <div
              className={`aspect-video ${project.bgColor} rounded-lg mb-3 md:mb-4 overflow-hidden`}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className={`text-center ${project.textColor}`}>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">
                    {project.subtitle.split(" ").slice(0, -2).join(" ")}
                  </h3>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                    {project.subtitle.split(" ").slice(-2).join(" ")}
                  </h3>
                </div>
              </div>
            </div>

            {/* Project Title and Links */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 md:mb-4 gap-2 sm:gap-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Live Demo"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Project Description */}
            <p className="text-gray-300 text-xs sm:text-sm mb-3 md:mb-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
