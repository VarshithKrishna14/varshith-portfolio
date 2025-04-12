import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Hero() {
  const handleResumeDownload = () => {
    // This will trigger the download of your resume
    const resumeLink = document.getElementById('resume-download');
    if (resumeLink) {
      resumeLink.click();
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
      {/* Hidden resume download link */}
      <a 
        id="resume-download" 
        href="https://drive.google.com/file/d/1hMtEUK6VJ57UxGNzUHkkSKl7J1N0VhsM/view?usp=drive_link" 
        download 
        className="hidden"
      >
        Download Resume
      </a>
      
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-blue-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Varshith Krishna
      </motion.h1>
      <motion.p 
        className="text-xl sm:text-2xl mb-8 text-gray-300 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        AI/ML Developer | Full Stack Engineer |  AI Enthusiast
      </motion.p>

      <motion.div 
        className="flex gap-6 text-2xl sm:text-3xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="https://github.com/VarshithKrishna14" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-400 hover:text-white transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com/in/varshithkrishna" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-400 hover:text-blue-300 transition-colors duration-300" />
        </a>
        <a href="mailto:varshithkrishnakyatham@gmail.com">
          <FaEnvelope className="text-gray-400 hover:text-blue-200 transition-colors duration-300" />
        </a>
      </motion.div>

      <motion.button
        onClick={handleResumeDownload}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-3 rounded-md transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <FaDownload />
        <span>Get My Resume</span>
      </motion.button>
    </div>
  );
}

export default Hero;
