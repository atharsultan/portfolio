import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-slate-950 min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400">Let's build something extraordinary together.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-slate-800 rounded-lg text-cyan-400"><FaEnvelope /></div>
                  <a href="mailto:atharsultan56@gmail.com" className="hover:text-cyan-400 transition-colors">atharsultan56@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-slate-800 rounded-lg text-cyan-400"><FaMapMarkerAlt /></div>
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://github.com/atharsultan" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-xl text-xl text-gray-400 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/iatharsultan" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-xl text-xl text-gray-400 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/iatharsultan" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-xl text-xl text-gray-400 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all text-white placeholder-gray-500" />
              <input type="email" placeholder="Your Email" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all text-white placeholder-gray-500" />
              <textarea placeholder="Your Message" rows="4" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl focus:border-cyan-500 outline-none transition-all text-white placeholder-gray-500"></textarea>
            </div>
            
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold 
                               py-3 px-8 
                               text-sm md:text-base 
                               rounded-xl transition-all shadow-lg shadow-cyan-500/20 
                               active:scale-95 
                               w-fit mx-auto block"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}