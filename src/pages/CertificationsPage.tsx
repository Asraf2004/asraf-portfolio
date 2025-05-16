
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { CertificationsSection } from "@/components/CertificationsSection";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const CertificationsPage = () => {
  const navigate = useNavigate();
  const certificationsRef = useRef<HTMLDivElement>(null);
  
  const navigateToNextPage = () => {
    navigate('/education');
  };
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={certificationsRef} className="relative">
            <CertificationsSection />
            {/* Removed ScrollDownButton */}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default CertificationsPage;
