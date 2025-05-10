
import { SocialLinks } from "./SocialLinks";

interface MobileMenuProps {
  sections: Array<{ id: string; label: string }>;
  activeSection: string;
  onItemClick: () => void;
}

export const MobileMenu = ({ sections, activeSection, onItemClick }: MobileMenuProps) => {
  return (
    <nav className="md:hidden bg-cyber-darker/95 backdrop-blur-lg border-b border-cyber-neon/20">
      <ul className="flex flex-col py-4">
        {sections.map((section) => (
          <li key={section.id} className="px-6 py-2">
            <a 
              href={`#${section.id}`} 
              className={`block py-2 text-base transition-colors duration-200 ${
                activeSection === section.id ? "text-cyber-neon" : "text-gray-300"
              }`}
              onClick={onItemClick}
            >
              {section.label}
            </a>
          </li>
        ))}
        
        {/* Mobile Social Media Links */}
        <li className="px-6 py-4">
          <SocialLinks iconSize={20} />
        </li>
      </ul>
    </nav>
  );
};
