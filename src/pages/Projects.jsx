export default function Projects() {
  const projects = [
    { title: "Project One", desc: "Short description.", tech: ["React", "Tailwind"], github: "#", live: "#" },
    { title: "Project Two", desc: "Short description.", tech: ["Node.js", "MongoDB"], github: "#", live: "#" },
    { title: "Project Three", desc: "Short description.", tech: ["React", "Firebase"], github: "#", live: "#" },
    { title: "Project Four", desc: "Short description.", tech: ["JS", "CSS"], github: "#", live: "#" },
    { title: "Project Five", desc: "Short description.", tech: ["React", "API"], github: "#", live: "#" },
    { title: "Project Six", desc: "Short description.", tech: ["Node.js", "Express"], github: "#", live: "#" },
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-white py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        {/* Removed the card background/border classes for a cleaner look */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((proj, i) => (
            <div key={i} className="group flex flex-col">
              <div className="w-full h-48 bg-slate-900 rounded-lg mb-4 flex items-center justify-center text-slate-700 border border-slate-800 group-hover:border-cyan-500 transition-all">
                Project Image
              </div>
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-4 text-sm flex-grow">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="text-xs text-cyan-400 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={proj.github} className="text-sm font-bold border-b border-transparent hover:border-cyan-400 transition">GitHub</a>
                <a href={proj.live} className="text-sm font-bold border-b border-transparent hover:border-cyan-400 transition">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}