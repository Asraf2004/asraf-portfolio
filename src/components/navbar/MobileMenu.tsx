
import { SocialLinks } from "./SocialLinks";
import { motion } from "framer-motion";

export interface MobileMenuProps {
  activeSection: string;
  sections: Array<{ id: string; label: string }>;
  onItemClick: (sectionId: string) => void;
}

export const MobileMenu = ({ sections, activeSection, onItemClick }: MobileMenuProps) => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="md:hidden absolute top-full left-0 right-0 bg-cyber-darker/95 backdrop-blur-lg border-b border-cyber-neon/20"
    >
      <motion.ul 
        className="flex flex-col py-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
      >
        {sections.map((section) => (
          <motion.li 
            key={section.id} 
            className="px-6 py-2"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
            }}
            whileHover={{ x: 5 }}
          >
            <a 
              href={`#${section.id}`} 
              className={`block py-2 text-base transition-colors duration-200 ${
                activeSection === section.id ? "text-cyber-neon" : "text-gray-300"
              }`}
              onClick={(e) => {
                e.preventDefault();
                onItemClick(section.id);
              }}
            >
              {section.label}
            </a>
          </motion.li>
        ))}
        
        {/* Mobile Social Media Links */}
        <motion.li 
          className="px-6 py-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.3 } }
          }}
        >
          <SocialLinks iconSize={20} />
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
