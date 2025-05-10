
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={cn(
            "text-3xl font-bold mb-3 text-white relative pb-3 inline-block transition-all duration-700 opacity-0 translate-y-4",
            isVisible && "opacity-100 translate-y-0"
          )}>
            About Me
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
          </h2>
          
          <div className={cn(
            "mt-8 glass-card p-6 rounded-lg relative transition-all duration-700 delay-200 opacity-0 translate-y-4",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyber-neon"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyber-neon"></div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm Asraf Ahamed, a passionate cybersecurity and web development enthusiast currently 
              pursuing B.E. in Computer Science and Engineering at K.S. Rangasamy College of Technology.
              With a CGPA of 8.88, I've built a strong foundation in programming, secure coding practices, 
              and network security.
            </p>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              My interests lie in bug bounty hunting, CTF competitions, and building security tools.
              I enjoy solving real-world security problems and sharing knowledge through workshops and 
              team projects.
            </p>
            
            <div className="mt-6 flex gap-4 flex-wrap">
              <div className="bg-cyber-neon/10 border border-cyber-neon/30 rounded-md px-4 py-2 text-cyber-neon">
                Bug Bounty
              </div>
              <div className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-md px-4 py-2 text-cyber-blue">
                CTF Enthusiast
              </div>
              <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded-md px-4 py-2 text-cyber-purple">
                Web Security
              </div>
              <div className="bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white">
                Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
