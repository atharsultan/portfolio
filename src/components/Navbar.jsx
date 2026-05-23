import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-white font-bold text-xl">
             Portfolio<span className="text-cyan-400">.</span>
      </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="/skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="/portfolio" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 flex flex-col items-center py-6 gap-4 text-gray-300">
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="/portfolio" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}