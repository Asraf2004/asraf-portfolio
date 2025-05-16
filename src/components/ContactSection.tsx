
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(sectionRef);

  // Animation variants styled like the Skills section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-16 bg-cyber-dark min-h-screen flex flex-col justify-center items-center"
    >
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6 text-white text-center section-header mx-auto"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="hover-card glass-card p-6 rounded-lg"
            variants={itemVariants}
          >
            <ContactInfo isInView={isVisible} />
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="hover-card glass-card p-6 rounded-lg"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl text-white font-semibold mb-4"
              variants={itemVariants}
            >
              Send a Message
            </motion.h3>
            <ContactForm isInView={isVisible} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
