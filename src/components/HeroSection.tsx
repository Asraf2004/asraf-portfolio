
import { ArrowRight, Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { TryHackMe } from "./icons/TryHackMe";

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  
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
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-cyber-dark dark:bg-cyber-dark overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-10"> 
        <div className="max-w-4xl mx-auto text-center">
          <p className={cn(
            "text-cyber-neon dark:text-cyber-neon font-mono mb-2 tracking-wider transition-all duration-700 opacity-0",
            visible && "opacity-100"
          )}>
            Hello, my name is
          </p>
          
          <h1 className={cn(
            "text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white mb-3 transition-all duration-700 transform translate-y-4 opacity-0",
            visible && "translate-y-0 opacity-100"
          )}>
            Asraf Ahamed A
          </h1>
          
          <div className="h-6 sm:h-8 mb-4">
            <h2 className="typing-container font-mono text-lg sm:text-xl text-gray-300 dark:text-gray-300">
              {typedText}<span className="border-r-2 border-cyber-neon dark:border-cyber-neon animate-blink-caret"></span>
            </h2>
          </div>
          
          <p className={cn(
            "text-gray-300 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto transition-all duration-700 delay-300 transform translate-y-4 opacity-0",
            visible && "translate-y-0 opacity-100"
          )}>
            Passionate about bug bounty, CTFs, secure coding, and web pentesting. Loves solving real-world cyber challenges.
          </p>
          
          <div className={cn(
            "flex flex-wrap justify-center gap-3 transition-all duration-700 delay-500 transform translate-y-4 opacity-0",
            visible && "translate-y-0 opacity-100"
          )}>
            <Button className="bg-cyber-neon text-black hover:bg-cyber-neon/80 gap-2 hover:scale-105 transition-all hover:shadow-md hover:shadow-cyber-neon/30">
              Download Resume
              <Download size={16} />
            </Button>
            <Button variant="outline" className="border-cyber-neon text-cyber-neon hover:bg-cyber-neon/10 gap-2 hover:scale-105 transition-all hover:shadow-md hover:shadow-cyber-neon/30">
              Contact Me
              <ArrowRight size={16} />
            </Button>
            <a 
              href="https://github.com/Asraf2004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/asrafahamed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href="https://tryhackme.com/p/asrafahamed08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
              <TryHackMe size={18} />
              TryHackMe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
