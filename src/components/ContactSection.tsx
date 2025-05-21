
import { useRef, useEffect, useState } from "react";
import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";
import { motion } from "framer-motion";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-16 bg-cyber-dark min-h-screen flex flex-col justify-center items-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-white text-center section-header mx-auto"
        >
          Contact Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* Contact Information */}
          <div className="hover-card glass-card p-6 rounded-lg">
            <ContactInfo />
          </div>
          
          {/* Contact Form */}
          <div className="hover-card glass-card p-6 rounded-lg">
            <h3 className="text-xl text-white font-semibold mb-4">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
