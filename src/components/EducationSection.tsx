
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold mb-8 text-white text-center relative inline-block"
        >
          Education
          <motion.span 
            initial={{ width: "0%" }}
            animate={isInView ? { width: "50%" } : { width: "0%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-cyber-neon"
          ></motion.span>
        </motion.h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card p-6 rounded-lg border border-white/5 hover:border-cyber-neon/30 transition-all duration-500"
          >
            <div className="flex items-center mb-4">
              <div className="bg-cyber-neon/20 p-3 rounded-full mr-4">
                <GraduationCap size={28} className="text-cyber-neon" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white">
                  B.E. Computer Science and Engineering
                </h3>
                <p className="text-gray-300">
                  K.S. Rangasamy College of Technology
                </p>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="pl-16"
            >
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar size={16} />
                <span>2022 - 2026</span>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                className="bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <span className="text-lg font-medium text-cyber-neon">8.88</span>
                <span className="text-gray-300 ml-2">CGPA (up to 5th semester)</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="mt-4 text-gray-300"
              >
                <p>
                  Studying core computer science subjects with focus on cybersecurity, 
                  networking, and software development.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
