import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      name: "HealthScan - AI Healthcare Diagnostics",
      description: "AI tool using Stable Diffusion and Pandas to generate synthetic medical images, improving diagnostic accuracy by 25%. Features a Flask web app for clinician interaction.",
      link: "https://github.com/VarshithKrishna14/health-scan",
    },
    {
      name: "FlowMaster - Agentic Workflow Automation",
      description: "Agentic AI system that automates spreadsheet-based workflows via Google Sheets API, cutting manual task time by 40%. Includes a Flask backend for AI task management.",
      link: "https://github.com/VarshithKrishna14/flowmaster",
    },
    {
      name: "FlashLearn - AI-Powered Flashcard SaaS",
      description: "Scalable flashcard SaaS with real-time sync via Firebase and secure payments using Stripe. Boosted learning retention by 40% with data-driven personalized insights.",
      link: "https://github.com/VarshithKrishna14/CarrerDev-AIChatbot",
    },
    {
      name: "TransitTalk - Transportation LLM Chatbot",
      description: "LLM chatbot using LLaMA2, RAG, and Node.js for real-time transit advice. Deployed with a React frontend, improving response accuracy and user experience.",
      link: "https://github.com/VarshithKrishna14/transittalk",
    },
    {
      name: "MediTrend - Predictive Healthcare Analytics",
      description: "Predictive analytics tool with Scikit-Learn and Google Sheets API, forecasting healthcare trends with 85% accuracy. Automated data ingestion saved 20+ hours monthly.",
      link: "https://github.com/VarshithKrishna14/meditrend",
    },
    {
      name: "EduBot - AI-Powered Study Assistant",
      description: "Study assistant using Transformers, React, and Firebase to answer student queries in real time, reducing study time by 25% with 18% improved NLP accuracy.",
      link: "https://github.com/VarshithKrishna14/edubot",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 pt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a2e]/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-blue-900/20 hover:border-blue-700/30 transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              borderColor: "rgba(59, 130, 246, 0.5)"
            }}
          >
            <div className="h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-gray-200 group-hover:text-blue-300 transition-colors duration-300">{project.name}</h3>
              <p className="text-lg mb-4 text-gray-400 flex-grow">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 transition-colors duration-300 inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
