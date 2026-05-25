import atharImage from "../assets/athar.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <section className="bg-slate-950 text-white min-h-[85vh] flex items-center px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
          <div className="space-y-2">
            <h3 className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">Hello, It's Me</h3>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white">Athar Ali</h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-300">Full Stack Developer</p>
          </div>
          
          <p className="text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 text-lg">
            I craft seamless digital experiences by bridging the gap between elegant frontend design and robust, scalable backend architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="/Athar.pdf" 
              download="Athar_Ali_CV.pdf"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold 
                         py-3 px-8 
                         text-sm md:text-base 
                         rounded-xl transition-all hover:scale-105 
                         shadow-[0_0_20px_rgba(6,182,212,0.3)] 
                         w-fit mx-auto md:mx-0 text-center"
            >
              Download CV
            </a>
            
            <div className="flex gap-6 text-2xl text-gray-400 pt-2 sm:pt-0">
              <a href="https://github.com/atharsultan" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/iatharsultan" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/iatharsultan" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image with Ambient Glow */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex justify-center items-center">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full opacity-50"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-900 rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl">
            <img 
              src={atharImage} 
              alt="Athar Ali" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}