import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    // Formspree will handle the form submission
    // You'll need to replace 'YOUR_EMAIL' with your actual email address
    fetch("https://formspree.io/f/myzeoebq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        } else {
          throw new Error("Failed to send message");
        }
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setSubmitError(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-16 w-full">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 pt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="w-full max-w-2xl bg-[#1a1a2e]/50 backdrop-blur-sm p-4 sm:p-8 rounded-lg shadow-lg border border-blue-900/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-blue-300 text-center">Send Me a Message</h3>
        
        {submitSuccess && (
          <motion.div 
            className="bg-green-900/30 border border-green-500/30 text-green-300 p-4 rounded-md mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your message has been sent successfully! I'll get back to you soon.
          </motion.div>
        )}
        
        {submitError && (
          <motion.div 
            className="bg-red-900/30 border border-red-500/30 text-red-300 p-4 rounded-md mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            There was an error sending your message. Please try again later.
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a1a] border border-blue-900/30 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a1a] border border-blue-900/30 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Email"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a1a] border border-blue-900/30 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Subject"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-[#0a0a1a] border border-blue-900/30 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Message"
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-md text-white font-medium transition-all duration-300 ${
              isSubmitting ? 'bg-blue-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FaPaperPlane />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
