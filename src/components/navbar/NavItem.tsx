
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface NavItemProps {
  href: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}

export const NavItem = ({ href, active = false, onClick, children }: NavItemProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  return (
    <motion.li 
      whileHover={{ scale: 1.03 }} 
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="list-none" 
    >
      <a 
        href={href} 
        onClick={onClick}
        className={cn(
          "px-3 py-2 text-sm transition-colors duration-300 relative group",
          active ? "text-cyber-neon" : "text-gray-300 hover:text-cyber-neon"
        )}
      >
        <span ref={textRef}>{children}</span>
        
        {/* Active state underline - exact text width */}
        {active && (
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
        
        {/* Hover state underline - only for non-active items - exact text width */}
        {!active && (
          <motion.span 
            className="absolute h-0.5 bg-cyber-neon origin-left"
            style={{ 
              width: textRef.current ? textRef.current.offsetWidth : 'auto',
              left: 0,
              bottom: -4
            }}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </a>
    </motion.li>
  );
};
