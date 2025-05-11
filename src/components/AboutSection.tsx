
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(ref);
  
  return (
    <section 
      id="about" 
      ref={ref} 
      className={cn(
        "py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker fade-in-section",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={cn(
            "text-3xl font-bold mb-3 text-white relative pb-3 section-header",
            isVisible && "is-visible"
          )}>
            About Me
          </h2>
          
          <div className={cn(
            "mt-8 glass-card p-6 rounded-lg relative hover-card fade-in-component", 
            isVisible && "is-visible"
          )} style={{transitionDelay: "0.2s"}}>
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
            
            <div className={cn(
              "mt-6 flex gap-4 flex-wrap stagger-children",
              isVisible && "is-visible"
            )}>
              <div className="hover-button bg-cyber-neon/10 border border-cyber-neon/30 rounded-md px-4 py-2 text-cyber-neon hover:bg-cyber-neon/20 transition-colors transform duration-200">
                Bug Bounty
              </div>
              <div className="hover-button bg-cyber-blue/10 border border-cyber-blue/30 rounded-md px-4 py-2 text-cyber-blue hover:bg-cyber-blue/20 transition-colors transform duration-200">
                CTF Enthusiast
              </div>
              <div className="hover-button bg-cyber-purple/10 border border-cyber-purple/30 rounded-md px-4 py-2 text-cyber-purple hover:bg-cyber-purple/20 transition-colors transform duration-200">
                Web Security
              </div>
              <div className="hover-button bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white hover:bg-white/20 transition-colors transform duration-200">
                Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
