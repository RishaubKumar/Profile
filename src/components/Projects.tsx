import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Madad: P2P Lending Platform",
    tech: "JavaScript, Node.js, Express, MongoDB",
    description: [
      "JWT authentication",
      "Full-stack implementation",
    ],
    github: "https://github.com/rishaubkumar/Madad-P2P-Lending-Platform",
  },
  {
    name: "Nestly Room Rental Platform",
    tech: "EJS, Node.js, MongoDB",
    description: [
      "Passport.js authentication",
    ],
    github: "https://github.com/rishaubkumar/Nestly-Room-Rental-Platform",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-primary">{proj.name}</span>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-xl hover:text-primary"><FaGithub /></a>
              </div>
              <span className="text-xs text-secondary mb-2">{proj.tech}</span>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 pl-2">
                {proj.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 