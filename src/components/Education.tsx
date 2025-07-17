const educationData = [
  {
    institution: "VIT Bhopal University",
    period: "2023–2027",
    degree: "B.Tech Computer Science Engineering",
    result: "CGPA: 9.04 (Current)",
  },
  {
    institution: "JNV, Ghaziabad",
    period: "2020–2022",
    degree: "Class XII, CBSE Board",
    result: "Percentage: 83.6%",
  },
  {
    institution: "JNV, Ghaziabad",
    period: "2018–2020",
    degree: "Class X, CBSE Board",
    result: "Percentage: 90.16%",
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Education</h2>
        <ol className="relative border-l-4 border-primary dark:border-primary/70 ml-4">
          {educationData.map((edu, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className="absolute -left-5 flex items-center justify-center w-8 h-8 bg-primary rounded-full ring-4 ring-white dark:ring-gray-900 text-white font-bold text-lg">{educationData.length - idx}</span>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold">{edu.institution}</span>
                <span className="text-sm text-secondary">{edu.period}</span>
                <span className="text-sm">{edu.degree}</span>
                <span className="text-sm font-medium text-accent">{edu.result}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
} 