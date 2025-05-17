
import { Github, Linkedin, ArrowUp, Cloud } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer ref={ref} className="py-8 border-t border-white/10 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Asraf Ahamed | All rights reserved
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/Asraf2004" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyber-neon transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/asrafahamed/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyber-neon transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://tryhackme.com/p/asrafahamed08" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyber-neon transition-colors"
              >
                <Cloud size={20} className="text-cyber-neon" />
              </motion.a>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={handleScrollToTop}
                className="rounded-full border-cyber-neon/30 hover:border-cyber-neon hover:bg-cyber-neon/10 transition-all"
              >
                <ArrowUp size={16} className="text-cyber-neon" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
