import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      {/* flex flex-col: Stacks Navbar, Main, and Footer vertically.
        min-h-screen: Ensures the container takes at least the full height of the viewport.
      */}
      <div className="bg-slate-950 min-h-screen flex flex-col">
        <Navbar />
        
        {/* flex-grow: Tells the main content to expand to fill all available vertical space,
          naturally pushing the Footer to the bottom if the page content is short.
        */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}