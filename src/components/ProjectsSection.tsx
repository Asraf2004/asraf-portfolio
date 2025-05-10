
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demoLink?: string;
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
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
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-12 text-white text-center relative inline-block transition-all duration-700 opacity-0 translate-y-4 group",
          isVisible && "opacity-100 translate-y-0"
        )}>
          Projects
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon transition-all duration-300 group-hover:w-full"></span>
        </h2>
        
        <div className="mt-12 space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 transition-all duration-700 opacity-0",
                isVisible && `opacity-100 delay-${index * 2}00`,
                index % 2 === 0 
                  ? "md:flex-row translate-x-[-50px]" 
                  : "md:flex-row-reverse translate-x-[50px]",
                isVisible && "translate-x-0"
              )}
            >
              {/* Project Image/Placeholder */}
              <div className="w-full md:w-5/12 aspect-video">
                <div className="glass-card h-full w-full rounded-lg overflow-hidden border border-white/5 hover:border-cyber-neon/30 group hover:shadow-lg hover:shadow-cyber-neon/20 flex items-center justify-center">
                  <div className="text-cyber-neon text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                    &lt;/&gt;
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="w-full md:w-7/12 glass-card p-6 rounded-lg border border-white/5 hover:border-cyber-neon/30 hover:shadow-lg hover:shadow-cyber-neon/20 transition-all group hover:scale-[1.01]">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyber-neon transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/10 group-hover:border-cyber-neon/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-cyber-neon hover:text-black transition-all transform hover:scale-105 hover:shadow-md hover:shadow-cyber-neon/30"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-cyber-neon hover:text-black transition-all transform hover:scale-105 hover:shadow-md hover:shadow-cyber-neon/30"
                    >
                      <Eye size={16} />
                      View Demo
                    </a>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 hover:scale-105 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={16} className="mr-1" />
                    View Details
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
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
