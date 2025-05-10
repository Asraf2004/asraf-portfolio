
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
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
    <section id="education" ref={sectionRef} className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center relative inline-block transition-all duration-700 opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        )}>
          Education
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
        </h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className={cn(
            "glass-card p-6 rounded-lg transition-all duration-700 opacity-0 translate-y-4 border border-white/5 hover:border-cyber-neon/30",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <div className="flex items-center mb-4">
              <div className="bg-cyber-neon/20 p-3 rounded-full mr-4">
                <GraduationCap size={28} className="text-cyber-neon" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white">
                  B.E. Computer Science and Engineering
                </h3>
                <p className="text-gray-300">
                  K.S. Rangasamy College of Technology
                </p>
              </div>
            </div>
            
            <div className="pl-16">
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar size={16} />
                <span>2022 - 2026</span>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <span className="text-lg font-medium text-cyber-neon">8.88</span>
                <span className="text-gray-300 ml-2">CGPA (up to 5th semester)</span>
              </div>
              
              <div className="mt-4 text-gray-300">
                <p>
                  Studying core computer science subjects with focus on cybersecurity, 
                  networking, and software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
