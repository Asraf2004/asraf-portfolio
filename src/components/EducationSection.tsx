
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-white text-center relative inline-block group"
        >
          Education
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon transition-all duration-300 group-hover:w-full"></span>
        </motion.h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="glass-card p-6 rounded-lg border border-white/5 hover:border-cyber-neon/30 transition-all duration-300"
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
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="pl-16"
            >
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar size={16} />
                <span>2022 - 2026</span>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <span className="text-lg font-medium text-cyber-neon">8.88</span>
                <span className="text-gray-300 ml-2">CGPA (up to 5th semester)</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 }}
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
