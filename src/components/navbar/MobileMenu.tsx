
import { SocialLinks } from "./SocialLinks";

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
                <span className="relative">
                  {section.label}
                  
                  {/* Active section underline - no animations */}
                  {activeSection === section.id && (
                    <span className="absolute left-0 bottom-[-4px] h-0.5 bg-cyber-neon w-full" />
                  )}
                  
                  {/* Hover underline - only for non-active items - no animations */}
                  {activeSection !== section.id && (
                    <span className="absolute left-0 bottom-[-4px] h-0.5 bg-cyber-neon w-full opacity-0 group-hover:opacity-100" />
                  )}
                </span>
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
