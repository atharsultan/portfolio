export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
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
    <section className="bg-slate-950 min-h-screen py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        {/* The grid centers the last item by using md:grid-cols-2 for the first row, 
            and ensuring the last item spans effectively. */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              // This logic centers the 3rd card by making it span the full width of the md grid
              className={`${index === 2 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""} bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]`}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}