
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, Calendar } from "lucide-react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useSectionAnimation(sectionRef);

  return (
    <section 
      id="education" 
      ref={sectionRef} 
      className={cn(
        "py-20 bg-cyber-darker fade-in-section",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center section-header",
          isVisible && "is-visible"
        )}>
          Education
        </h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className={cn(
            "hover-card glass-card p-6 rounded-lg border border-white/5 fade-in-component",
            isVisible && "is-visible"
          )} style={{transitionDelay: "0.2s"}}>
            <div className="flex items-center mb-4">
              <div className="bg-cyber-neon/20 p-3 rounded-full mr-4 hover-button">
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
              
              <div className={cn(
                "bg-white/5 rounded-lg p-4 border border-white/10 hover-button fade-in-component",
                isVisible && "is-visible"
              )} style={{transitionDelay: "0.3s"}}>
                <span className="text-lg font-medium text-cyber-neon">8.88</span>
                <span className="text-gray-300 ml-2">CGPA (up to 5th semester)</span>
              </div>
              
              <div className={cn(
                "mt-4 text-gray-300 fade-in-component",
                isVisible && "is-visible"
              )} style={{transitionDelay: "0.4s"}}>
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
