import { Link } from 'react-scroll'; // We'll use this package for smooth scrolling
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-sm text-white shadow-md py-4 px-6">
        <div className="max-w-screen-xl mx-auto flex justify-center items-center">
          <div className="space-x-8">
            <Link 
              to="hero" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
            >
              Skills
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link 
              to="blogs" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
            >
              Blogs
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Black to Charcoal gradient */}
      <section id="hero" className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-[#1a1a2e]">
        <Hero />
      </section>

      {/* About Section - Charcoal to Deep Indigo */}
      <section id="about" className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#1e1e3a] to-[#1a1a4a] px-6 py-12">
        <About />
      </section>

      {/* Skills Section - Deep Indigo to Midnight Blue */}
      <section id="skills" className="min-h-screen bg-gradient-to-b from-[#1a1a4a] via-[#1a1a5a] to-[#0f1a2f] px-6 py-12">
        <Skills />
      </section>

      {/* Projects Section - Midnight Blue to Darker Blue */}
      <section id="projects" className="min-h-screen bg-gradient-to-b from-[#0f1a2f] via-[#0a1525] to-[#0a1020] px-6 py-12">
        <Projects />
      </section>

      {/* Blogs Section - Darker Blue to Deep Indigo */}
      <section id="blogs" className="min-h-screen bg-gradient-to-b from-[#0a1020] via-[#0a1525] to-[#1a1a4a] px-6 py-12">
        <Blogs />
      </section>

      {/* Contact Section - Darker Blue to Black */}
      <section id="contact" className="min-h-screen bg-gradient-to-b from-[#0a1020] via-[#050a15] to-black px-6 py-12">
        <Contact />
      </section>
    </div>
  );
}

export default App;
