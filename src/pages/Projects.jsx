import bbdmsImage from "../assets/BBDS.PNG";
import smogImage from "../assets/SMOG.PNG"; 

export default function Projects() {
  const projects = [
    {
      title: "BBDMS",
      desc: "A life-saving blood bank management system that streamlines donor registration and simplifies the search process for emergency blood requests.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/atharsultan/blood-bank",
      live: "https://blood-bank-yjbk.vercel.app/",
      image: bbdmsImage,
    },
    {
      title: "Smog Prediction",
      desc: "An intelligent FYP platform that uses predictive modeling to forecast air quality and smog levels, providing critical environmental data.",
      tech: ["React", "Machine Learning", "Data API"],
      github: "#", 
      live: "https://smog-prediction.netlify.app/",
      image: smogImage,
    },
  ];

  return (
    <section className="bg-slate-950 min-h-screen py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        {/* Flex container to center the cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="w-full md:w-[400px] group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-slate-950 relative overflow-hidden flex items-center justify-center">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white">{proj.title}</h3>
                <p className="text-gray-400 mb-6 text-sm flex-grow leading-relaxed">
                  {proj.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-800">
                  {proj.github !== "#" && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold hover:text-cyan-400 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {proj.live && proj.live !== "#" && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold hover:text-cyan-400 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}