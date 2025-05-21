
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
          const isActive = activeSection === section.id;
          
          return (
            <li key={section.id} className="px-6 py-2 list-none">
              <a 
                href={`#${section.id}`} 
                className={`relative block py-2 text-base transition-colors duration-300 ${isActive ? 'text-cyber-neon' : 'text-gray-300 hover:text-cyber-neon'}`}
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick(section.id);
                }}
              >
                {section.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyber-neon transform ${isActive ? 'scale-x-100' : 'scale-x-0'} hover:scale-x-100 transition-transform origin-bottom-right hover:origin-bottom-left`}></span>
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
