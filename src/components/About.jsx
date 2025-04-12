import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 w-full">
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >I'm Varshith Krishna — a Computer Science undergrad, AI/ML developer, and Full Stack Engineer.
I specialize in crafting intelligent applications, AI-driven tools, and automation systems that address real-world challenges and enhance daily experiences. My passion lies in exploring the forefront of technology, from LLaMA and Stable Diffusion to Natural Language Processing and building dynamic React-powered applications. When I'm not immersed in code, you'll likely find me enjoying music or brainstorming new ideas for innovative tech solutions 🚀.
        
      </motion.p>
    </div>
  );
}

export default About;
