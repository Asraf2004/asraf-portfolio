
import { ArrowRight, Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { TryHackMe } from "./icons/TryHackMe";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, typingAnimationClass } = useSectionAnimation(ref);
  
  const fullText = "Cybersecurity Enthusiast | Web Pentester | Developer";
  
  useEffect(() => {
    // Animation to reveal the hero section
    setVisible(true);
    
    // Reset typing animation when section comes into view
    if (isVisible && !typingComplete) {
      let typingInterval: number;
      let index = 0;
      
      const animateTyping = () => {
        // Type forward only
        setTypedText(fullText.substring(0, index));
        index++;
        
        if (index > fullText.length) {
          clearInterval(typingInterval);
          setTypingComplete(true);
        }
      };
      
      setTypedText("");
      index = 0;
      
      typingInterval = window.setInterval(animateTyping, 50);
      
      return () => clearInterval(typingInterval);
    }
  }, [isVisible, typingComplete]);

  return (
    <section 
      ref={ref}
      id="home" 
      className={cn(
        "min-h-screen flex items-center justify-center relative bg-cyber-dark dark:bg-cyber-dark overflow-hidden z-10 fade-in-section",
        isVisible && "is-visible"
      )}
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
          <p className={cn("text-cyber-neon dark:text-cyber-neon font-mono mb-2 tracking-wider fade-in-component", isVisible && "is-visible")}
             data-aos="fade-up" data-aos-delay="100">
            Hello, my name is
          </p>
          
          <h1 className={cn("text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white mb-3 fade-in-component", isVisible && "is-visible")}
              data-aos="fade-up" data-aos-delay="200" style={{transitionDelay: "0.1s"}}>
            Asraf Ahamed A
          </h1>
          
          <div className="h-6 sm:h-8 mb-4">
            <h2 className={cn("typing-container font-mono text-lg sm:text-xl text-gray-300 dark:text-gray-300 fade-in-component", isVisible && "is-visible")}
                data-aos="fade-up" data-aos-delay="300" style={{transitionDelay: "0.2s"}}>
              {typedText}<span className={`border-r-2 border-cyber-neon dark:border-cyber-neon ${typingComplete ? 'animate-none opacity-0' : 'animate-blink-caret'}`}></span>
            </h2>
          </div>
          
          <p className={cn("text-gray-300 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto fade-in-component", isVisible && "is-visible")}
             data-aos="fade-up" data-aos-delay="400" style={{transitionDelay: "0.3s"}}>
            Passionate about bug bounty, CTFs, secure coding, and web pentesting. Loves solving real-world cyber challenges.
          </p>
          
          <div className={cn("flex flex-wrap justify-center gap-3 stagger-children", isVisible && "is-visible")}
               data-aos="fade-up" data-aos-delay="500">
            <Button className="hover-button bg-cyber-neon text-black hover:bg-cyber-neon/80 gap-2 transition-all">
              Download Resume
              <Download size={16} />
            </Button>
            <Button variant="outline" className="hover-button border-cyber-neon text-cyber-neon hover:bg-cyber-neon/10 gap-2 transition-all">
              Contact Me
              <ArrowRight size={16} />
            </Button>
            <a 
              href="https://github.com/Asraf2004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-button inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/asrafahamed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-button inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href="https://tryhackme.com/p/asrafahamed08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-button inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all"
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
