const experiences = [
  {
    title: "Process Analyst Intern",
    company: "Ozibook",
    period: "Oct 2024 - Jan 2025",
    details: [
      "Implemented SEO increasing organic traffic by 30%",
      "Designed Notion workflows",
      "Generated custom prompts",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "ADM Welfare Society",
    period: "Jul - Sept 2024",
    details: [
      "Developed Renu Health Care website",
      "Enhanced backend with Node.js",
      "Oversaw full development process",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Experience</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform">
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-lg font-semibold text-primary">{exp.title}</span>
                <span className="text-sm text-secondary">{exp.company}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 pl-2">
                {exp.details.map((d, i) => (
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