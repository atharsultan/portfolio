import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-slate-950 min-h-screen text-white py-20 px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 bg-slate-900 p-8 rounded-2xl border border-slate-800">
          {/* Left: Info & Socials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-gray-400">
              Have a project in mind or just want to chat? Feel free to reach out. 
              I’m currently open to new opportunities and collaborations.
            </p>
            <div className="space-y-4 pt-4">
              <p>Email: <a href="mailto:atharsultan56@gmail.com" className="text-cyan-400 hover:underline">atharsultan56@gmail.com</a></p>
              <p>Location: <span className="text-cyan-400">Rawalpindi, Pakistan</span></p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/atharsultan" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/iatharsultan" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/iatharsultan" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg focus:border-cyan-500 outline-none transition"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg focus:border-cyan-500 outline-none transition"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg focus:border-cyan-500 outline-none transition"
            ></textarea>
            <button className="w-full bg-cyan-500 text-slate-950 font-bold py-3 rounded-lg hover:bg-cyan-400 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}