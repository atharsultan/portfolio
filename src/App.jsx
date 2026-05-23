import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from "./pages/About";
import Skills from './pages/Skills';
import Projects from "./pages/Projects";
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <BrowserRouter>
        <Navbar />
        
        {/* Add pt-20 (padding-top) here to account for the fixed navbar */}
        <main className="pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}