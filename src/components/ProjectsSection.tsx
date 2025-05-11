
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { ScrollDownButton } from "./common/ScrollDownButton";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demoLink?: string;
  direction: "left" | "right";
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible, scrollToNextSection } = useSectionAnimation(sectionRef);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: "PenTesting Framework - GUI Based",
      description: "A user-friendly GUI-based penetration testing toolkit with comprehensive scanning capabilities.",
      technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Asraf2004",
      direction: "left"
    },
    {
      title: "ARP Spoofer/Sniffer",
      description: "Tool using libpcap to detect and analyze ARP spoofing attacks in real-time on local networks.",
      technologies: ["C", "libpcap", "Network Security", "Linux"],
      github: "https://github.com/Asraf2004/ARP-Sniffer/tree/main",
      direction: "right"
    },
    {
      title: "Socket-Based Message Echo Server",
      description: "TCP Python server that handles and echoes complete client messages with robust error handling.",
      technologies: ["Python", "Networking", "Socket Programming", "Multithreading"],
      github: "https://github.com/Asraf2004/Socket",
      direction: "left"
    },
    {
      title: "IoT-Based Smart Egg Incubator",
      description: "Automated temperature and humidity control system for optimal egg incubation with remote monitoring.",
      technologies: ["IoT", "Arduino", "Sensors", "Mobile App"],
      github: "https://github.com/Asraf2004/IOT-based-smart-egg-incubator",
      direction: "right"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className={cn(
        "py-16 bg-gradient-to-b from-cyber-darker to-cyber-dark relative fade-in-section",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 
          className={cn(
            "text-3xl font-bold mb-8 text-white text-center section-header",
            isVisible && "is-visible"
          )}
        >
          Projects
        </h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-4 rounded-lg border border-white/5 hover:border-cyber-neon/30 group hover:scale-[1.01] hover:shadow-lg hover:shadow-cyber-neon/20 transition-all duration-300 fade-in-component",
                isVisible && "is-visible"
              )}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="h-32 rounded-lg bg-white/5 mb-3 flex items-center justify-center overflow-hidden">
                <div className="text-cyber-neon text-4xl opacity-30 group-hover:opacity-50 transition-opacity">
                  &lt;/&gt;
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyber-neon transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-3 text-sm">
                {project.description}
              </p>
              
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={cn(
                        "px-2 py-0.5 text-xs rounded bg-white/5 text-gray-300 border border-white/10 group-hover:border-cyber-neon/20 transition-colors fade-in-component",
                        isVisible && "is-visible"
                      )}
                      style={{ transitionDelay: `${0.05 * techIndex + 0.2}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 mt-3">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 px-3 py-1.5 rounded text-xs font-medium bg-white/5 text-white hover:bg-cyber-neon hover:text-black transition-all hover:shadow-md hover:shadow-cyber-neon/30"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20 text-xs h-7 px-3"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={14} className="mr-1" />
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="neo-blur border-cyber-neon/20 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-white">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <p className="text-gray-300 mb-4">
              {selectedProject?.description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end mt-4 gap-3">
              <a 
                href={selectedProject?.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-cyber-neon hover:text-black transition-all transform hover:scale-105"
              >
                <Github size={16} />
                View on GitHub
              </a>
              {selectedProject?.demoLink && (
                <a 
                  href={selectedProject.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-cyber-neon hover:text-black transition-all transform hover:scale-105"
                >
                  <ExternalLink size={16} />
                  View Demo
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Scroll Down Button */}
      <ScrollDownButton onClick={scrollToNextSection} isVisible={isVisible} />
    </section>
  );
}
