
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export function ProjectsSection() {
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

  const projects: Project[] = [
    {
      title: "Secure Code Analysis Tool",
      description: "Flask app to scan .py files for vulnerabilities, with a dashboard and user authentication.",
      technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML/CSS"],
      github: "https://github.com/asrafahamed08/secure-code-analysis"
    },
    {
      title: "ARP Spoofing Detection System",
      description: "C tool using libpcap to detect ARP spoofing attacks in real-time on local networks.",
      technologies: ["C", "libpcap", "Network Security", "Linux"],
      github: "https://github.com/asrafahamed08/arp-spoofing-detection"
    },
    {
      title: "Socket-Based Message Echo Server",
      description: "TCP Python server that handles and echoes complete client messages with robust error handling.",
      technologies: ["Python", "Networking", "Socket Programming", "Multithreading"],
      github: "https://github.com/asrafahamed08/socket-echo-server"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center relative inline-block transition-all duration-700 opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        )}>
          Projects
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-lg overflow-hidden transition-all duration-700 opacity-0 translate-y-4 hover:shadow-md hover:shadow-cyber-neon/20 border border-white/5 hover:border-cyber-neon/30 group",
                isVisible && `opacity-100 translate-y-0 delay-${index * 2 + 1}00`
              )}
            >
              <div className="h-3 bg-gradient-to-r from-cyber-neon to-cyber-blue"></div>
              
              <div className="p-6">
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
                        className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium bg-white/5 text-white hover:bg-cyber-neon hover:text-black transition-all"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
