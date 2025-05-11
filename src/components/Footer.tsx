
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { TryHackMe } from "@/components/icons/TryHackMe";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="py-8 bg-cyber-darker border-t border-cyber-neon/10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Asraf Ahamed A. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              <a 
                href="https://www.flaticon.com/free-icons/cloud" 
                title="cloud icons"
                className="hover:text-cyber-neon transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                TryHackMe icon by Freepik - Flaticon
              </a>
            </p>
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              href="https://github.com/Asraf2004" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-gray-400 hover:text-cyber-neon transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/asrafahamed" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-gray-400 hover:text-cyber-neon transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://tryhackme.com/p/asrafahamed08" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-gray-400 hover:text-cyber-neon transition-colors"
              aria-label="TryHackMe"
            >
              <TryHackMe size={20} />
            </motion.a>
            <motion.a 
              href="mailto:asrafahamed08@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-gray-400 hover:text-cyber-neon transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="absolute right-8 -top-6 bg-cyber-neon text-black rounded-full p-3 shadow-lg shadow-cyber-neon/20 transition-all hover:shadow-cyber-neon/30"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
