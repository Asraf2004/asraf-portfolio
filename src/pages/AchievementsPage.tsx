
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { AchievementSection } from "@/components/AchievementSection";
import { Footer } from "@/components/Footer";

const AchievementsPage = () => {
  const achievementsRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={achievementsRef} className="relative">
            <AchievementSection />
            {/* No scroll down button */}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default AchievementsPage;
