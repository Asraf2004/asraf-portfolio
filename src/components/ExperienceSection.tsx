
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const responsibilities = [
    "Developed full-stack web components using PHP and MySQL",
    "Implemented secure authentication and access control features",
    "Created responsive UI elements with HTML, CSS, and JavaScript",
    "Participated in code reviews and security testing"
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-white text-center relative inline-block group"
        >
          Experience
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
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <div className="bg-cyber-neon/20 p-3 rounded-full mr-4 mb-4 md:mb-0 w-fit">
                <Briefcase size={28} className="text-cyber-neon" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Junior Associate Developer
                </h3>
                <p className="text-gray-300">
                  Calanjiyam Consultancies
                </p>
              </div>
              
              <div className="md:ml-auto flex items-center mt-4 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                <Calendar size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-300 text-sm">Mar - May 2024</span>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="pl-0 md:pl-16 mt-6"
            >
              <div className="mb-4">
                <h4 className="text-lg text-white mb-2">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {responsibilities.map((item, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle size={16} className="text-cyber-neon mr-2 mt-1 shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="mt-6"
              >
                <h4 className="text-lg text-white mb-2">Project</h4>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-300">
                    HRMS (Human Resource Management System) - Full-stack web project using PHP, MySQL, HTML/CSS/JS
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
