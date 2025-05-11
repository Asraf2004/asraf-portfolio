
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <section 
      id="about" 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            className="text-3xl font-bold mb-3 text-white relative pb-3 inline-block"
          >
            About Me
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-cyber-neon group-hover:w-full transition-all duration-300"></span>
          </motion.h2>
          
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
            className="mt-8 glass-card p-6 rounded-lg relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyber-neon"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyber-neon"></div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-300 mb-4 leading-relaxed"
            >
              I'm Asraf Ahamed, a passionate cybersecurity and web development enthusiast currently 
              pursuing B.E. in Computer Science and Engineering at K.S. Rangasamy College of Technology.
              With a CGPA of 8.88, I've built a strong foundation in programming, secure coding practices, 
              and network security.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-300 mb-4 leading-relaxed"
            >
              My interests lie in bug bounty hunting, CTF competitions, and building security tools.
              I enjoy solving real-world security problems and sharing knowledge through workshops and 
              team projects.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 flex gap-4 flex-wrap"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-cyber-neon/10 border border-cyber-neon/30 rounded-md px-4 py-2 text-cyber-neon hover:bg-cyber-neon/20 transition-colors transform duration-200"
              >
                Bug Bounty
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-cyber-blue/10 border border-cyber-blue/30 rounded-md px-4 py-2 text-cyber-blue hover:bg-cyber-blue/20 transition-colors transform duration-200"
              >
                CTF Enthusiast
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-cyber-purple/10 border border-cyber-purple/30 rounded-md px-4 py-2 text-cyber-purple hover:bg-cyber-purple/20 transition-colors transform duration-200"
              >
                Web Security
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white hover:bg-white/20 transition-colors transform duration-200"
              >
                Development
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
