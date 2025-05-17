import { ArrowRight, Github, Linkedin, Download, Mail, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import { TryHackMe } from "./icons/TryHackMe";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(ref);
  const [typedText, setTypedText] = useState("");
  const fullText = "Cybersecurity Enthusiast | Web Pentester | Developer";
  const { toast } = useToast();
  
  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, [isVisible]);
  
  const handleDownloadResume = () => {
    try {
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = '/asraf-ahamed-resume.pdf'; // Path to resume PDF in public folder
      link.download = 'Asraf-Ahamed-Resume.pdf'; // Name that will be used for downloaded file
      
      // Check if the file exists before triggering download
      fetch(link.href)
        .then(response => {
          if (response.ok) {
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            toast({
              title: "Resume not found",
              description: "Please upload your resume to the public folder named 'asraf-ahamed-resume.pdf'",
              variant: "destructive",
            });
          }
        })
        .catch(error => {
          toast({
            title: "Download failed",
            description: "Unable to download resume. Please try again later.",
            variant: "destructive",
          });
          console.error("Error downloading resume:", error);
        });
    } catch (error) {
      console.error("Error in download handler:", error);
    }
  };
  
  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-cyber-dark dark:bg-cyber-dark overflow-hidden z-10"
    >
      {/* Animated background elements */}
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
      
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center"> 
        <div className="max-w-4xl mx-auto text-center">
          {/* Name and title */}
          <motion.p 
            className="text-cyber-neon dark:text-cyber-neon font-mono mb-2 tracking-wider"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, my name is
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Asraf Ahamed A
          </motion.h1>
          
          <motion.div 
            className="h-6 sm:h-8 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-mono text-lg sm:text-xl text-gray-300 dark:text-gray-300 typing-container">
              {typedText}
              <span className="animate-blink-caret border-r-2 border-cyber-neon ml-1"></span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Passionate about bug bounty, CTFs, secure coding, and web pentesting. Loves solving real-world cyber challenges.
          </motion.p>
          
          {/* Animated buttons */}
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
              onClick={handleDownloadResume}
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
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  const navbarHeight = 70;
                  const elementPosition = contactSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
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
            
            <motion.a 
              href="https://tryhackme.com/p/asrafahamed08" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "hover-button inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-white/10 transition-all fade-in-component", 
                isVisible && "is-visible"
              )}
              style={{transitionDelay: "0.5s"}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Cloud size={18} className="text-cyber-neon" />
              TryHackMe
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
