export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase"]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git & GitHub", "VS Code", "Postman", "Vite", "Responsive Design"]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-white py-20 px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 border-b border-slate-700 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}