
import { ArrowRight, Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

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
              className="absolute rounded-full bg-cyber-neon blur-2xl"
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
      
      <div className="container mx-auto px-4 relative z-10 pb-24"> {/* Added padding to bottom for scroll button */}
        <div className="max-w-4xl mx-auto text-center">
          <p className={cn(
            "text-cyber-neon font-mono mb-2 tracking-wider transition-all duration-700 opacity-0",
            visible && "opacity-100"
          )}>
            Hello, my name is
          </p>
          
          <h1 className={cn(
            "text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 transition-all duration-700 transform translate-y-4 opacity-0",
            visible && "translate-y-0 opacity-100"
          )}>
            Asraf Ahamed A
          </h1>
          
          <div className="h-6 sm:h-8 mb-4">
            <h2 className="typing-container font-mono text-lg sm:text-xl text-gray-300">
              {typedText}<span className="border-r-2 border-cyber-neon animate-blink-caret"></span>
            </h2>
          </div>
          
          <p className={cn(
            "text-gray-300 text-lg mb-8 max-w-2xl mx-auto transition-all duration-700 delay-300 transform translate-y-4 opacity-0",
            visible && "translate-y-0 opacity-100"
          )}>
            Passionate about bug bounty, CTFs, secure coding, and web pentesting. Loves solving real-world cyber challenges.
          </p>
          
          <div className={cn(
            "flex flex-wrap justify-center gap-3 transition-all duration-700 delay-500 transform translate-y-4 opacity-0",
            visible && "translate-y-0 opacity-100"
          )}>
            <Button className="bg-cyber-neon text-black hover:bg-cyber-neon/80 gap-2 hover:scale-105 transition-transform">
              Download Resume
              <Download size={16} />
            </Button>
            <Button variant="outline" className="border-cyber-neon text-cyber-neon hover:bg-cyber-neon/10 gap-2 hover:scale-105 transition-transform">
              Contact Me
              <ArrowRight size={16} />
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 gap-2 hover:scale-105 transition-transform">
              <Github size={18} />
              GitHub
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 gap-2 hover:scale-105 transition-transform">
              <Linkedin size={18} />
              LinkedIn
            </Button>
          </div>
        </div>
        
        <div className={cn(
          "absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-700 opacity-0",
          visible && "opacity-100"
        )}>
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-400 hover:text-cyber-neon transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <svg 
              className="animate-bounce hover:scale-110 transition-transform" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 5L12 19M12 19L18 13M12 19L6 13" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
