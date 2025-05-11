
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const isLeftInView = useInView(leftColumnRef, { once: false, amount: 0.3 });
  const isRightInView = useInView(rightColumnRef, { once: false, amount: 0.3 });

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-white text-center relative inline-block"
        >
          Contact Me
          <motion.span 
            initial={{ width: "0%" }}
            animate={isInView ? { width: "50%" } : { width: "0%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-cyber-neon"
          ></motion.span>
        </motion.h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            ref={leftColumnRef}
            initial={{ opacity: 0, x: -20 }}
            animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-6 rounded-lg border border-white/5 hover:border-cyber-neon/30 transition-all duration-500"
          >
            <ContactInfo isInView={isLeftInView} />
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            ref={rightColumnRef}
            initial={{ opacity: 0, x: 20 }}
            animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card p-6 rounded-lg border border-white/5 hover:border-cyber-neon/30 transition-all duration-500"
          >
            <h3 className="text-xl text-white font-semibold mb-6">Send a Message</h3>
            <ContactForm isInView={isRightInView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
