
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

export function ExperienceSection() {
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

  const responsibilities = [
    "Developed full-stack web components using PHP and MySQL",
    "Implemented secure authentication and access control features",
    "Created responsive UI elements with HTML, CSS, and JavaScript",
    "Participated in code reviews and security testing"
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center relative inline-block transition-all duration-700 opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        )}>
          Experience
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
        </h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className={cn(
            "glass-card p-6 rounded-lg transition-all duration-700 opacity-0 translate-y-4 border border-white/5 hover:border-cyber-neon/30",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <div className="bg-cyber-neon/20 p-3 rounded-full mr-4 mb-4 md:mb-0 w-fit">
                <Briefcase size={28} className="text-cyber-neon" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Junior Associate Developer
                </h3>
                <p className="text-gray-300">
                  Calanjiyam Consultancies
                </p>
              </div>
              
              <div className="md:ml-auto flex items-center mt-4 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                <Calendar size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-300 text-sm">Mar - May 2024</span>
              </div>
            </div>
            
            <div className="pl-0 md:pl-16 mt-6">
              <div className="mb-4">
                <h4 className="text-lg text-white mb-2">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-cyber-neon mr-2 mt-1 shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg text-white mb-2">Project</h4>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-300">
                    HRMS (Human Resource Management System) - Full-stack web project using PHP, MySQL, HTML/CSS/JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
