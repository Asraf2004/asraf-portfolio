
import { Github, Linkedin } from "lucide-react";
import { TryHackMe } from "@/components/icons/TryHackMe";
import { motion } from "framer-motion";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export const SocialLinks = ({ className = "", iconSize = 18 }: SocialLinksProps) => {
  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className={`flex space-x-3 ${className}`}>
      <motion.a 
        href="https://github.com/Asraf2004" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyber-neon transition-colors duration-300 p-1"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </motion.a>
      <motion.a 
        href="https://www.linkedin.com/in/asrafahamed/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyber-neon transition-colors duration-300 p-1"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </motion.a>
      <motion.a 
        href="https://tryhackme.com/p/asrafahamed08" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyber-neon transition-colors duration-300 p-1"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        aria-label="TryHackMe"
      >
        <TryHackMe size={iconSize} className="fill-current" />
      </motion.a>
    </div>
  );
};
