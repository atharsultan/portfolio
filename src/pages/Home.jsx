import atharImage from "../assets/athar.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen flex items-center px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full pt-20">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="space-y-1">
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Hello, It's Me</h3>
            <h1 className="text-5xl md:text-6xl font-extrabold">Athar Ali</h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-bold">I'm a Full Stack Developer</p>
          </div>
          
          <p className="text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
            I specialize in building end-to-end web applications, focusing on creating seamless user experiences through modern frontend frameworks and robust, scalable backend architectures.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
            <a 
  href="/Athar.pdf" 
  download="Athar_Ali_CV.pdf"
  className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
>
  Download CV
</a>
            <div className="flex gap-6 text-2xl text-gray-400">
              <a href="https://github.com/atharsultan" className="hover:text-cyan-400 transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/iatharsultan" className="hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
              <a href="https://www.instagram.com/iatharsultan" className="hover:text-cyan-400 transition-colors"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-900 rounded-full border-4 border-cyan-500 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <img src={atharImage} alt="Athar Ali" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}