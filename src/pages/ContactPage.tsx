
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={contactRef} className="relative">
            <ContactSection />
            {/* No scroll button on the last page */}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
