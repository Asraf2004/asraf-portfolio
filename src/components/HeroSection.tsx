
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { SocialLinks } from "./navbar/SocialLinks";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(ref);
  const [typedText, setTypedText] = useState("");
  const [showResumeModal, setShowResumeModal] = useState(false);
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
    }, 35);
    
    return () => clearInterval(typingInterval);
  }, [isVisible]);
  
  const handleViewResume = () => {
    setShowResumeModal(true);
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
          
          <div className={cn(
            "flex flex-wrap justify-center gap-4",
            isVisible && "is-visible"
          )}>
            <div className="flex items-center gap-4">
              <Button 
                className={cn(
                  "hover-button bg-cyber-neon text-black hover:bg-cyber-neon/80 gap-2 transition-all fade-in-component", 
                  isVisible && "is-visible"
                )}
                style={{transitionDelay: "0.1s"}}
                onClick={handleViewResume}
              >
                View Resume
                <Eye size={16} />
              </Button>
            </div>
            
            {/* Social links */}
            <div className={cn(
              "flex items-center justify-center",
              isVisible && "is-visible"
            )}>
              <SocialLinks iconSize={20} className="flex gap-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <Dialog open={showResumeModal} onOpenChange={setShowResumeModal}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto h-auto p-0 bg-black/95 border border-cyber-neon/20">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src="/lovable-uploads/3f841fa5-9aca-434a-bbf8-94d6b1f31528.png"
              alt="Asraf Ahamed Resume"
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
