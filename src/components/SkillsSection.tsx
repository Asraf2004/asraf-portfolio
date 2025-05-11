import { useRef } from "react";
import { cn } from "@/lib/utils";
import { 
  Code, 
  Database, 
  Terminal, 
  Globe, 
  Server, 
  Laptop, 
  Shield, 
  Bug
} from "lucide-react";
import { motion, useInView } from "framer-motion";

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  direction: "left" | "right" | "center";
}

const SkillItem = ({ icon, title, skills, direction }: SkillItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  // Animation variants based on direction
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      y: direction === "center" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="glass-card p-6 rounded-lg border border-white/5 hover:border-cyber-neon/50 hover:shadow-cyber-neon/20 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 text-cyber-neon">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.05 * index, duration: 0.4 }}
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyber-neon/30 hover:bg-white/10 transition-colors duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const skillsData = [
    {
      icon: <Code size={24} />,
      title: "Programming",
      skills: ["Python", "C", "PHP"],
      direction: "left" as const
    },
    {
      icon: <Shield size={24} />,
      title: "Security Tools",
      skills: ["Burp Suite", "Metasploit", "OWASP ZAP", "Wireshark", "Nmap"],
      direction: "center" as const
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "Flask", "PHP"],
      direction: "right" as const
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      skills: ["MySQL"],
      direction: "left" as const
    },
    {
      icon: <Laptop size={24} />,
      title: "Operating Systems",
      skills: ["Linux", "Windows"],
      direction: "center" as const
    },
    {
      icon: <Bug size={24} />,
      title: "Interests",
      skills: ["Web App Pentesting", "CTFs", "Bug Bounty", "Docker"],
      direction: "right" as const
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-cyber-darker dark:bg-cyber-darker relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-white text-center relative inline-block"
        >
          My Skills
          <motion.span 
            initial={{ width: "0%" }}
            animate={isInView ? { width: "50%" } : { width: "0%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-cyber-neon"
          ></motion.span>
        </motion.h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              direction={skill.direction}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
