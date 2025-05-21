
import { SocialLinks } from "./SocialLinks";
import { useRef } from "react";

export interface MobileMenuProps {
  activeSection: string;
  sections: Array<{ id: string; label: string }>;
  onItemClick: (sectionId: string) => void;
}

export const MobileMenu = ({ sections, activeSection, onItemClick }: MobileMenuProps) => {
  return (
    <nav className="md:hidden absolute top-full left-0 right-0 bg-cyber-darker/95 backdrop-blur-lg border-b border-cyber-neon/20">
      <ul className="flex flex-col py-4 list-none">
        {sections.map((section) => {
          const textRef = useRef<HTMLSpanElement>(null);
          
          return (
            <li key={section.id} className="px-6 py-2 list-none">
              <a 
                href={`#${section.id}`} 
                className="relative block py-2 text-base group"
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick(section.id);
                }}
              >
                <span ref={textRef}>{section.label}</span>
                
                {/* Active section underline - exact text width */}
                {activeSection === section.id && (
                  <span 
                    className="absolute h-0.5 bg-cyber-neon"
                    style={{ 
                      width: textRef.current ? textRef.current.offsetWidth : 'auto',
                      left: 0,
                      bottom: -4
                    }}
                  />
                )}
                
                {/* Hover underline - only for non-active items - exact text width */}
                {activeSection !== section.id && (
                  <span 
                    className="absolute h-0.5 bg-cyber-neon opacity-0 group-hover:opacity-100"
                    style={{ 
                      width: textRef.current ? textRef.current.offsetWidth : 'auto',
                      left: 0,
                      bottom: -4
                    }}
                  />
                )}
              </a>
            </li>
          );
        })}
        
        {/* Mobile Social Media Links */}
        <li className="px-6 py-4 list-none">
          <SocialLinks iconSize={20} />
        </li>
      </ul>
    </nav>
  );
}
