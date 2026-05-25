import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Change 1: Import NavLink

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <NavLink to="/" className="text-white font-bold text-xl">
          Portfolio<span className="text-cyan-400">.</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              // Change 2: Use the 'className' prop with a function to handle active state
              className={({ isActive }) => 
                isActive 
                  ? "text-cyan-400 transition-colors" 
                  : "hover:text-cyan-400 transition-colors"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button className="md:hidden text-white text-2xl z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex flex-col items-center py-8 gap-6 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive ? "text-cyan-400" : "hover:text-cyan-400"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}