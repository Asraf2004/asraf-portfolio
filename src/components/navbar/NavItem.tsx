
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}

export const NavItem = ({ href, onClick, children }: NavItemProps) => {
  const active = window.location.pathname === href || 
                (window.location.pathname === "/" && href === "/");
                
  return (
    <motion.li 
      whileHover={{ scale: 1.03 }} 
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <a 
        href={href} 
        onClick={onClick}
        className={cn(
          "px-3 py-2 text-sm transition-colors duration-300 relative group",
          active ? "text-cyber-neon" : "text-gray-300 hover:text-cyber-neon"
        )}
      >
        {children}
        <motion.span 
          className={cn(
            "absolute left-0 -bottom-1 h-0.5 bg-cyber-neon",
            active ? "w-full" : "w-0"
          )}
          initial={false}
          animate={{ width: active ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyber-neon group-hover:w-full transition-all duration-300"></span>
      </a>
    </motion.li>
  );
};
