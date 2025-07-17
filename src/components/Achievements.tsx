import { FaTrophy, FaMedal, FaCertificate, FaAward } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy className="text-yellow-500" />,
    text: "Tata Imagination Challenge 2024 Semi-Finalist",
  },
  {
    icon: <FaAward className="text-orange-400" />,
    text: "Young Turks Round 1",
  },
  {
    icon: <FaCertificate className="text-blue-500" />,
    text: "NPTEL Elite Top 5% Certification",
  },
  {
    icon: <FaMedal className="text-green-500" />,
    text: "Hacktoberfest 2024 Contributor",
  },
  {
    icon: <FaMedal className="text-purple-500" />,
    text: "GSSOC Contributor",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Achievements</h2>
        <ul className="space-y-5">
          {achievements.map((ach, idx) => (
            <li key={idx} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:scale-[1.02] transition-transform">
              <span className="text-2xl">{ach.icon}</span>
              <span className="text-base font-medium text-gray-800 dark:text-gray-100">{ach.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 