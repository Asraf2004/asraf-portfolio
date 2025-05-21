
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface NavItemProps {
  href: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

export const NavItem = ({ href, active = false, onClick, children }: NavItemProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  return (
    <li className="list-none">
      <a 
        href={href} 
        onClick={onClick}
        className={cn(
          "px-3 py-2 text-sm relative group",
          active ? "text-cyber-neon" : "text-gray-300 hover:text-cyber-neon"
        )}
      >
        <span ref={textRef}>{children}</span>
        
        {/* Active state underline - exact text width */}
        {active && (
          <span 
            className="absolute h-0.5 bg-cyber-neon"
            style={{ 
              width: textRef.current ? textRef.current.offsetWidth : 'auto',
              left: 0,
              bottom: -4
            }}
          />
        )}
        
        {/* Hover state underline - only for non-active items - exact text width */}
        {!active && (
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
};
