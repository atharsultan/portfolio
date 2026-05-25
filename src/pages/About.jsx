export default function About() {
  return (
    <section className="bg-slate-950 min-h-screen text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold mb-16 text-center md:text-left">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: The Narrative */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Building Digital Experiences</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              I am a Full Stack Developer driven by the challenge of turning complex requirements 
              into elegant, user-friendly solutions. My journey began with a curiosity for how 
              the web works, and it has evolved into a passion for building robust, scalable 
              applications using modern technologies.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              I believe that great software is a balance between clean architecture and 
              seamless design. I don't just write code; I craft experiences that perform well, 
              are easy to maintain, and truly serve the end-user.
            </p>
          </div>

          {/* Right Column: Values & Stats */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <h4 className="text-3xl font-bold text-cyan-400">4 Months+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2 font-semibold">Experience</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <h4 className="text-3xl font-bold text-cyan-400">6+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2 font-semibold">Projects</p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
              <h4 className="text-xl font-bold mb-3">My Philosophy</h4>
              <p className="text-gray-400 italic leading-relaxed">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}