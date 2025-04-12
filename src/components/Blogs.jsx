import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaTags } from "react-icons/fa";

function Blogs() {
  // This will be replaced with actual blog data in the future
  const placeholderBlogs = [
    {
      id: 1,
      title: "Understanding MCP (Model Context Protocol) for AI Agents",
      excerpt: "A deep dive into the Model Context Protocol and how it enhances AI agent capabilities through improved context management and reasoning.",
      date: "Coming Soon",
      readTime: "8 min read",
      tags: ["AI", "Machine Learning", "LLMs", "AI Agents"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "State Management in React: A Comprehensive Guide",
      excerpt: "Exploring different state management solutions in React applications, from useState to Redux and beyond.",
      date: "Coming Soon",
      readTime: "10 min read",
      tags: ["React", "Redux", "State Management", "Frontend"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 pt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Blog
      </motion.h2>
      
      <div className="w-full max-w-5xl">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {placeholderBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-blue-900/20 hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-2">{blog.title}</h3>
                <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-4">
            More blog posts coming soon! Check back regularly for new content.
          </p>
          <span className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
  Stay Tuned
</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Blogs; 