import { ArrowRight, Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { TryHackMe } from "./icons/TryHackMe";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const fullText = "Cybersecurity Enthusiast | Web Pentester | Developer";
  
  useEffect(() => {
    // Animation to reveal the hero section
    setVisible(true);
    
    // Typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50);
    
    // Trigger animations when component comes into view
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      });
    }
    
    return () => clearInterval(typingInterval);
  }, [isInView]);

  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-cyber-dark dark:bg-cyber-dark overflow-hidden z-10"
    >
      {/* Animated background elements - continuous loop */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index} 
              className="absolute rounded-full bg-cyber-neon dark:bg-cyber-neon blur-2xl"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.3,
                animation: `pulse-neon ${Math.random() * 8 + 4}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20"> 
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyber-neon dark:text-cyber-neon font-mono mb-2 tracking-wider"
          >
            Hello, my name is
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white mb-3"
          >
            Asraf Ahamed A
          </motion.h1>
          
          <div className="h-6 sm:h-8 mb-4">
            <h2 className="typing-container font-mono text-lg sm:text-xl text-gray-300 dark:text-gray-300">
              {typedText}<span className="border-r-2 border-cyber-neon dark:border-cyber-neon animate-blink-caret"></span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Passionate about bug bounty, CTFs, secure coding, and web pentesting. Loves solving real-world cyber challenges.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-cyber-neon text-black hover:bg-cyber-neon/80 gap-2 transition-all hover:shadow-md hover:shadow-cyber-neon/30">
                Download Resume
                <Download size={16} />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-cyber-neon text-cyber-neon hover:bg-cyber-neon/10 gap-2 transition-all hover:shadow-md hover:shadow-cyber-neon/30">
                Contact Me
                <ArrowRight size={16} />
              </Button>
            </motion.div>
            <motion.a 
              href="https://github.com/Asraf2004" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all"
            >
              <Github size={18} />
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/asrafahamed/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all"
            >
              <Linkedin size={18} />
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://tryhackme.com/p/asrafahamed08" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all"
            >
              <TryHackMe size={18} />
              TryHackMe
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
