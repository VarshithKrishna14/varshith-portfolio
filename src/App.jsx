import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // for mobile toggle icons
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Only set menu items visible when opening the menu
    if (!isMenuOpen) {
      setMenuItemsVisible(true);
    } else {
      // When closing, delay hiding the items to allow for exit animation
      setTimeout(() => {
        setMenuItemsVisible(false);
      }, 500);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // Delay hiding the items to allow for exit animation
    setTimeout(() => {
      setMenuItemsVisible(false);
    }, 500);
  };

  // Map section IDs to display names
  const sectionNames = {
    hero: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    blogs: "Blogs",
    contact: "Contact"
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden w-full">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-sm shadow-md py-4 px-4 sm:px-6 w-full">
        <div className="max-w-screen-xl mx-auto flex justify-center items-center relative">
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex space-x-8 justify-center">
            {["hero", "about", "skills", "projects", "blogs", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
              >
                {sectionNames[section]}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle - Right aligned */}
          <div className="md:hidden absolute right-0 z-30">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-20">
            <div className="flex flex-col items-center justify-start h-full space-y-8 py-6 pt-32">
              {menuItemsVisible && ["hero", "about", "skills", "projects", "blogs", "contact"].map((section, index) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer text-2xl text-white hover:text-indigo-400 transition-colors duration-300 bg-black/50 px-6 py-2 rounded-lg backdrop-blur-sm transform translate-x-0 animate-slide-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards',
                    opacity: 0,
                    transform: 'translateX(100px)'
                  }}
                >
                  {sectionNames[section]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen bg-gradient-to-b from-black via-gray-950 to-[#1a1a2e] overflow-hidden w-full">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="h-screen bg-gradient-to-b from-[#1a1a2e] via-[#1e1e3a] to-[#1a1a4a] px-4 sm:px-6 py-12 overflow-hidden w-full">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="h-screen bg-gradient-to-b from-[#1a1a4a] via-[#1a1a5a] to-[#0f1a2f] px-4 sm:px-6 py-12 overflow-hidden w-full">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen bg-gradient-to-b from-[#0f1a2f] via-[#0a1525] to-[#0a1020] px-4 sm:px-6 py-12 overflow-hidden w-full">
        <Projects />
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="h-screen bg-gradient-to-b from-[#0a1020] via-[#0a1525] to-[#1a1a4a] px-4 sm:px-6 py-12 overflow-hidden w-full">
        <Blogs />
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen bg-gradient-to-b from-[#0a1020] via-[#050a15] to-black px-4 sm:px-6 py-12 overflow-hidden w-full">
        <Contact />
      </section>

      {/* Add keyframe animation for slide-in effect */}
      <style jsx>{`
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;
