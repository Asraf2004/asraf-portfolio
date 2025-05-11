
import { useEffect, useState, useRef } from "react";
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
import { motion } from "framer-motion";

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  direction: "left" | "right" | "center";
  delay: number;
}

const SkillItem = ({ icon, title, skills, direction, delay }: SkillItemProps) => {
  // Animation variants based on direction
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "center" ? 30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
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
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            viewport={{ once: false }}
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
    <section id="skills" ref={sectionRef} className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-white text-center relative inline-block group"
        >
          My Skills
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon transition-all duration-300 group-hover:w-full"></span>
        </motion.h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              direction={skill.direction}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
