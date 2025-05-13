
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";
import { ScrollDownButton } from "@/components/common/ScrollDownButton";
import { useNavigate } from "react-router-dom";

const EducationPage = () => {
  const navigate = useNavigate();
  const educationRef = useRef<HTMLDivElement>(null);
  
  const navigateToNextPage = () => {
    navigate('/experience');
  };
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={educationRef} className="relative">
            <EducationSection />
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

export default EducationPage;
