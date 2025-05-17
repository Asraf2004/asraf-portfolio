
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { ScrollDownButton } from "@/components/common/ScrollDownButton";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const navigateToNextPage = () => {
    navigate('/about');
  };
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      {/* Background Animation - Only visible on the Home page */}
      <ParticleBackground />
      
      {/* All content with positive z-index */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={heroRef} className="relative">
            <HeroSection />
            <div className="relative flex justify-center pb-8">
              <ScrollDownButton onClick={navigateToNextPage} isVisible={true} />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
