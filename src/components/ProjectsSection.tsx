
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demoLink?: string;
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(sectionRef);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: "PenTesting Framework - GUI Based",
      description: "A user-friendly GUI-based penetration testing toolkit with comprehensive scanning capabilities.",
      technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Asraf2004"
    },
    {
      title: "ARP Spoofer/Sniffer",
      description: "Tool using libpcap to detect and analyze ARP spoofing attacks in real-time on local networks.",
      technologies: ["C", "libpcap", "Network Security", "Linux"],
      github: "https://github.com/Asraf2004/ARP-Sniffer/tree/main"
    },
    {
      title: "Socket-Based Message Echo Server",
      description: "TCP Python server that handles and echoes complete client messages with robust error handling.",
      technologies: ["Python", "Networking", "Socket Programming", "Multithreading"],
      github: "https://github.com/Asraf2004/Socket"
    },
    {
      title: "IoT-Based Smart Egg Incubator",
      description: "Automated temperature and humidity control system for optimal egg incubation with remote monitoring.",
      technologies: ["IoT", "Arduino", "Sensors", "Mobile App"],
      github: "https://github.com/Asraf2004/IOT-based-smart-egg-incubator"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className={cn(
        "min-h-screen flex flex-col justify-center items-center py-16 bg-cyber-dark relative fade-in-section",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 
          className={cn(
            "text-4xl font-bold mb-12 text-white text-center section-header mx-auto",
            isVisible && "is-visible"
          )}
        >
          Projects
        </h2>
        
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-cyber-neon/30 hover:shadow-lg hover:shadow-cyber-neon/10 transition-all duration-300 fade-in-component group",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.1 * (index + 1)}s`}}
            >
              {/* GitHub Logo */}
              <div className="aspect-[4/3] flex items-center justify-center bg-white/2">
                <Github size={80} className="text-white/70 group-hover:text-cyber-neon transition-colors duration-300" />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex gap-2">
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
    </section>
  );
}
