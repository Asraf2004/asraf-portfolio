
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}

export const NavItem = ({ href, active = false, onClick, children }: NavItemProps) => {
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
      </a>
    </motion.li>
  );
};
