
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const projectsRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={projectsRef} className="relative">
            <ProjectsSection />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
