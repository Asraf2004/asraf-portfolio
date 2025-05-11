
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
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillItem = ({ icon, title, skills }: SkillItemProps) => {
  return (
    <div className="glass-card p-6 rounded-lg border border-white/5 hover:border-cyber-neon/50 hover:shadow-cyber-neon/20 hover:shadow-lg transition-all duration-300">
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
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyber-neon/30 hover:bg-white/10 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useSectionAnimation(sectionRef);
  
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
    <section 
      id="skills" 
      ref={sectionRef} 
      className={cn(
        "py-20 bg-cyber-darker dark:bg-cyber-darker relative z-10 fade-in-section",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white text-center relative inline-block">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
