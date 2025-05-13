
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { AchievementSection } from "@/components/AchievementSection";
import { Footer } from "@/components/Footer";
import { ScrollDownButton } from "@/components/common/ScrollDownButton";
import { useNavigate } from "react-router-dom";

const AchievementsPage = () => {
  const navigate = useNavigate();
  const achievementsRef = useRef<HTMLDivElement>(null);
  
  const navigateToNextPage = () => {
    navigate('/certifications');
  };
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={achievementsRef} className="relative">
            <AchievementSection />
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

export default AchievementsPage;
