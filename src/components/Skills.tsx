import { FaJava, FaJs, FaNodeJs, FaReact, FaGit, FaGithub, FaFileAlt } from "react-icons/fa";
import { SiCplusplus, SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { ReactElement } from "react";

const skills: { group: string; items: { name: string; icon: ReactElement }[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "SQL", icon: <TbSql className="text-blue-500" /> },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: <FaGit className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "Microsoft Office", icon: <FaFileAlt className="text-orange-700" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-lg font-semibold mb-4 text-secondary">{group.group}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-sm font-medium mt-1">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 