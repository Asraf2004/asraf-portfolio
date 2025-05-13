
import { useRef } from "react";
import { cn } from "@/lib/utils";
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
      className={cn(
        "py-16 bg-cyber-dark fade-in-section min-h-screen flex flex-col justify-center items-center",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-6 text-white text-center section-header mx-auto",
          isVisible && "is-visible"
        )}>
          Contact Me
        </h2>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className={cn(
            "hover-card glass-card p-6 rounded-lg fade-in-component", 
            isVisible && "is-visible"
          )} style={{transitionDelay: "0.2s"}}>
            <ContactInfo isInView={isVisible} />
          </div>
          
          {/* Contact Form */}
          <div className={cn(
            "hover-card glass-card p-6 rounded-lg fade-in-component", 
            isVisible && "is-visible"
          )} style={{transitionDelay: "0.3s"}}>
            <h3 className="text-xl text-white font-semibold mb-4">Send a Message</h3>
            <ContactForm isInView={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}
