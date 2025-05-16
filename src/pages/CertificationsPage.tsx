
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { CertificationsSection } from "@/components/CertificationsSection";
import { Footer } from "@/components/Footer";

const CertificationsPage = () => {
  const certificationsRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={certificationsRef} className="relative">
            <CertificationsSection />
            {/* No scroll down button */}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default CertificationsPage;
