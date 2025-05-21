
import { SocialLinks } from "./SocialLinks";
import { motion } from "framer-motion";
import { useRef } from "react";

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
        className="flex flex-col py-4 list-none"
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
        {sections.map((section) => {
          const textRef = useRef<HTMLSpanElement>(null);
          
          return (
            <motion.li 
              key={section.id} 
              className="px-6 py-2 list-none"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
              }}
              whileHover={{ x: 5 }}
            >
              <a 
                href={`#${section.id}`} 
                className="relative block py-2 text-base transition-colors duration-200 group"
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick(section.id);
                }}
              >
                <span ref={textRef}>{section.label}</span>
                
                {/* Active section underline - exact text width */}
                {activeSection === section.id && (
                  <motion.span 
                    className="absolute h-0.5 bg-cyber-neon"
                    style={{ 
                      width: textRef.current ? textRef.current.offsetWidth : 'auto',
                      left: 0,
                      bottom: -4
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover underline animation - only for non-active items - exact text width */}
                {activeSection !== section.id && (
                  <span 
                    className="absolute h-0.5 bg-cyber-neon origin-left"
                    style={{ 
                      width: textRef.current ? textRef.current.offsetWidth : 'auto',
                      left: 0,
                      bottom: -4,
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  />
                )}
              </a>
            </motion.li>
          );
        })}
        
        {/* Mobile Social Media Links */}
        <motion.li 
          className="px-6 py-4 list-none"
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
