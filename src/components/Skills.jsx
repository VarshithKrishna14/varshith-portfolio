import { motion } from "framer-motion";
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaJava, 
  FaNodeJs, 
  FaDatabase,
  FaCode,
  FaServer,
  FaChartLine,
  FaCloud,
  FaMobileAlt,
  FaGitAlt
} from "react-icons/fa";
import { SiCplusplus, SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiDocker } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" />, category: "Frontend" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, category: "Frontend" },
    { name: "Python", icon: <FaPython className="text-blue-500" />, category: "Backend" },
    { name: "Java", icon: <FaJava className="text-red-500" />, category: "Backend" },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" />, category: "Backend" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, category: "Backend" },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, category: "Database" },
    { name: "SQL", icon: <FaDatabase className="text-blue-300" />, category: "Database" },
    { name: "Docker", icon: <SiDocker className="text-blue-400" />, category: "DevOps" },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" />, category: "DevOps" },
    { name: "Excel", icon: <FaChartLine className="text-green-400" />, category: "Tools" },
    { name: "AWS", icon: <FaCloud className="text-blue-300" />, category: "Cloud" },
    { name: "React Native", icon: <FaMobileAlt className="text-purple-400" />, category: "Mobile" },
  ];

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-16 w-full">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="w-full max-w-5xl">
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-300">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {categorySkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-[#1a1a2e]/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg border border-blue-900/20 hover:border-blue-700/30 transition-all duration-300 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <div className="text-2xl sm:text-3xl mb-2">{skill.icon}</div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills; 