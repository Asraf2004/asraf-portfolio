
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar, CheckCircle, Eye } from "lucide-react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(sectionRef);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  
  const responsibilities = [
    "Developed full-stack web components using PHP and MySQL",
    "Implemented secure authentication and access control features",
    "Created responsive UI elements with HTML, CSS, and JavaScript",
    "Participated in code reviews and security testing"
  ];

  const handleViewCertificate = () => {
    setShowCertificateModal(true);
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className={cn(
        "py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark fade-in-section",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center section-header",
          isVisible && "is-visible"
        )}>
          Experience
        </h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className={cn(
            "hover-card glass-card p-6 rounded-lg border fade-in-component",
            isVisible && "is-visible"
          )} style={{transitionDelay: "0.2s"}}>
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <div className="bg-cyber-neon/20 p-3 rounded-full mr-4 mb-4 md:mb-0 w-fit hover-button">
                <Briefcase size={28} className="text-cyber-neon" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">
                  Junior Associate Developer
                </h3>
                <p className="text-gray-300">
                  Calanjiyam Consultancies
                </p>
              </div>
              
              <div className={cn(
                "md:ml-auto flex items-center mt-4 md:mt-0 bg-white/5 px-3 py-1 rounded-full hover-button", 
                isVisible && "is-visible"
              )} style={{transitionDelay: "0.3s"}}>
                <Calendar size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-300 text-sm">Mar - May 2024</span>
              </div>
            </div>
            
            {/* View Certificate Button */}
            <div className={cn(
              "mb-4 fade-in-component", 
              isVisible && "is-visible"
            )} style={{transitionDelay: "0.35s"}}>
              <Button 
                onClick={handleViewCertificate}
                className="bg-cyber-neon/20 text-cyber-neon hover:bg-cyber-neon/30 border border-cyber-neon/30 gap-2"
                size="sm"
              >
                View Certificate
                <Eye size={16} />
              </Button>
            </div>
            
            <div className="pl-0 md:pl-16 mt-6">
              <div className={cn(
                "mb-4 fade-in-component", 
                isVisible && "is-visible"
              )} style={{transitionDelay: "0.4s"}}>
                <h4 className="text-lg text-white mb-2">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {responsibilities.map((item, index) => (
                    <li 
                      key={index} 
                      className={cn(
                        "flex items-start fade-in-component", 
                        isVisible && "is-visible"
                      )}
                      style={{transitionDelay: `${0.4 + (index * 0.1)}s`}}
                    >
                      <CheckCircle size={16} className="text-cyber-neon mr-2 mt-1 shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={cn(
                "mt-6 fade-in-component", 
                isVisible && "is-visible"
              )} style={{transitionDelay: "0.6s"}}>
                <h4 className="text-lg text-white mb-2">Project</h4>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover-button">
                  <p className="text-gray-300">
                    HRMS (Human Resource Management System) - Full-stack web project using PHP, MySQL, HTML/CSS/JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={showCertificateModal} onOpenChange={setShowCertificateModal}>
        <DialogContent className="max-w-5xl w-[95vw] h-[95vh] p-0 bg-black/95 border border-cyber-neon/20">
          <div className="relative w-full h-full flex items-center justify-center overflow-auto">
            <img
              src="/lovable-uploads/3b7f49f9-c68a-43ac-987b-38aa400f3d68.png"
              alt="Internship Completion Certificate"
              className="max-w-full h-auto object-contain p-4"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
