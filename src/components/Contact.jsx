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
    <div className="w-full flex flex-col items-center px-2 sm:px-6 py-8 sm:py-16">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 pt-4"
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
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-300 text-center">Send Me a Message</h3>
        
        {submitSuccess && (
          <motion.div 
            className="bg-green-900/30 border border-green-500/30 text-green-300 p-3 sm:p-4 rounded-md mb-4 sm:mb-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your message has been sent successfully! I'll get back to you soon.
          </motion.div>
        )}
        
        {submitError && (
          <motion.div 
            className="bg-red-900/30 border border-red-500/30 text-red-300 p-3 sm:p-4 rounded-md mb-4 sm:mb-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            There was an error sending your message. Please try again later.
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0a1020]/50 border border-blue-900/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0a1020]/50 border border-blue-900/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-[#0a1020]/50 border border-blue-900/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm sm:text-base text-gray-300 mb-1 sm:mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-[#0a1020]/50 border border-blue-900/30 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
