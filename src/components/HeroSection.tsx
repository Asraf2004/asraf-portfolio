
import { ArrowRight, Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { TryHackMe } from "./icons/TryHackMe";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(ref);
  
  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-cyber-dark dark:bg-cyber-dark overflow-hidden z-10"
      data-aos="fade-up"
    >
      {/* Animated background elements - stops after 5 seconds */}
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
                animation: `pulse-neon-once ${Math.random() * 5 + 3}s ease-in-out forwards ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20"> 
        <div className="max-w-4xl mx-auto text-center">
          {/* Static name and title - no animation */}
          <p className="text-cyber-neon dark:text-cyber-neon font-mono mb-2 tracking-wider">
            Hello, my name is
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white mb-3">
            Asraf Ahamed A
          </h1>
          
          <div className="h-6 sm:h-8 mb-4">
            <h2 className="font-mono text-lg sm:text-xl text-gray-300 dark:text-gray-300">
              Cybersecurity Enthusiast | Web Pentester | Developer
            </h2>
          </div>
          
          <p className="text-gray-300 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Passionate about bug bounty, CTFs, secure coding, and web pentesting. Loves solving real-world cyber challenges.
          </p>
          
          {/* Animated buttons with bottom-to-top animation */}
          <div className={cn(
            "flex flex-wrap justify-center gap-3",
            isVisible && "is-visible"
          )}>
            <Button 
              className={cn(
                "hover-button bg-cyber-neon text-black hover:bg-cyber-neon/80 gap-2 transition-all fade-in-component", 
                isVisible && "is-visible"
              )}
              style={{transitionDelay: "0.1s"}}
            >
              Download Resume
              <Download size={16} />
            </Button>
            
            <Button 
              variant="outline" 
              className={cn(
                "hover-button border-cyber-neon text-cyber-neon hover:bg-cyber-neon/10 gap-2 transition-all fade-in-component", 
                isVisible && "is-visible"
              )}
              style={{transitionDelay: "0.2s"}}
            >
              Contact Me
              <ArrowRight size={16} />
            </Button>
            
            <a 
              href="https://github.com/Asraf2004" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "hover-button inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all fade-in-component", 
                isVisible && "is-visible"
              )}
              style={{transitionDelay: "0.3s"}}
            >
              <Github size={18} />
              GitHub
            </a>
            
            <a 
              href="https://www.linkedin.com/in/asrafahamed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "hover-button inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all fade-in-component", 
                isVisible && "is-visible"
              )}
              style={{transitionDelay: "0.4s"}}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            
            <a 
              href="https://tryhackme.com/p/asrafahamed08" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "hover-button inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all fade-in-component", 
                isVisible && "is-visible"
              )}
              style={{transitionDelay: "0.5s"}}
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
