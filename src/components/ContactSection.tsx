
import { useRef } from "react";
import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(sectionRef);

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-16 bg-cyber-dark min-h-screen flex flex-col justify-center items-center"
      style={{ opacity: 1, display: "block", overflow: "visible", position: "relative", zIndex: 10 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white text-center section-header mx-auto">
          Contact Me
        </h2>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="hover-card glass-card p-6 rounded-lg" style={{ opacity: 1, visibility: "visible" }}>
            <ContactInfo isInView={true} />
          </div>
          
          {/* Contact Form */}
          <div className="hover-card glass-card p-6 rounded-lg" style={{ opacity: 1, visibility: "visible" }}>
            <h3 className="text-xl text-white font-semibold mb-4">
              Send a Message
            </h3>
            <ContactForm isInView={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
