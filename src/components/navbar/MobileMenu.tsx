
import { SocialLinks } from "./SocialLinks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MobileMenuProps {
  sections: Array<{ id: string; label: string }>;
  activeSection: string;
  onItemClick: () => void;
}

export const MobileMenu = ({ sections, activeSection, onItemClick }: MobileMenuProps) => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="md:hidden bg-cyber-darker/95 backdrop-blur-lg border-b border-cyber-neon/20"
    >
      <ul className="flex flex-col py-4">
        {sections.map((section) => (
          <motion.li 
            key={section.id} 
            className="px-6 py-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ x: 5 }}
          >
            <a 
              href={`#${section.id}`} 
              className={`block py-2 text-base transition-colors duration-200 ${
                activeSection === section.id ? "text-cyber-neon" : "text-gray-300"
              }`}
              onClick={onItemClick}
            >
              {section.label}
            </a>
          </motion.li>
        ))}
        
        {/* Mobile Social Media Links */}
        <motion.li 
          className="px-6 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <SocialLinks iconSize={20} />
        </motion.li>
      </ul>
    </motion.nav>
  );
};
