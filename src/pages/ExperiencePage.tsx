
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { ScrollDownButton } from "@/components/common/ScrollDownButton";
import { useNavigate } from "react-router-dom";

const ExperiencePage = () => {
  const navigate = useNavigate();
  const experienceRef = useRef<HTMLDivElement>(null);
  
  const navigateToNextPage = () => {
    navigate('/contact');
  };
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={experienceRef} className="relative">
            <ExperienceSection />
            <div className="relative">
              <ScrollDownButton onClick={navigateToNextPage} isVisible={true} />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default ExperiencePage;
