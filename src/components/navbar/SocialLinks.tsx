
import { Github, Linkedin } from "lucide-react";
import { TryHackMe } from "@/components/icons/TryHackMe";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export const SocialLinks = ({ className = "", iconSize = 18 }: SocialLinksProps) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      <a 
        href="https://github.com/Asraf2004" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyber-neon transition-colors p-1 hover:scale-110 transform duration-200"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a 
        href="https://www.linkedin.com/in/asrafahamed/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyber-neon transition-colors p-1 hover:scale-110 transform duration-200"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="https://tryhackme.com/p/asrafahamed08" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyber-neon transition-colors p-1 hover:scale-110 transform duration-200"
        aria-label="TryHackMe"
      >
        <TryHackMe size={iconSize} />
      </a>
    </div>
  );
};
