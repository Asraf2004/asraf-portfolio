
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

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
  isVisible: boolean;
}

const SkillItem = ({ icon, title, skills, delay, isVisible }: SkillItemProps) => {
  return (
    <div className={cn(
      "glass-card p-6 rounded-lg transition-all duration-500 opacity-0 translate-y-4 hover:border-cyber-neon/50 hover:shadow-cyber-neon/20 hover:shadow-lg",
      isVisible && `opacity-100 translate-y-0 delay-${delay}00`
    )}>
      <div className="flex items-center mb-4">
        <div className="mr-3 text-cyber-neon">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const skillsData = [
    {
      icon: <Code size={24} />,
      title: "Programming",
      skills: ["Python", "C", "PHP"]
    },
    {
      icon: <Shield size={24} />,
      title: "Security Tools",
      skills: ["Burp Suite", "Metasploit", "OWASP ZAP", "Wireshark", "Nmap"]
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "Flask", "PHP"]
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      skills: ["MySQL"]
    },
    {
      icon: <Laptop size={24} />,
      title: "Operating Systems",
      skills: ["Linux", "Windows"]
    },
    {
      icon: <Bug size={24} />,
      title: "Interests",
      skills: ["Web App Pentesting", "CTFs", "Bug Bounty", "Docker"]
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center relative inline-block transition-all duration-700 opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        )}>
          My Skills
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              delay={index % 3 + 1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
