
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={aboutRef} className="relative">
            <AboutSection />
            {/* No scroll down button */}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
