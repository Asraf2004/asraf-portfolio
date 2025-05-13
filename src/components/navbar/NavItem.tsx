
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void; // Added onClick as an optional prop
}

export const NavItem = ({ href, label, active, onClick }: NavItemProps) => {
  return (
    <motion.li 
      whileHover={{ scale: 1.03 }} 
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <a 
        href={href} 
        onClick={(e) => {
          e.preventDefault(); // Prevent default navigation
          if (onClick) onClick(); // Call the onClick handler if provided
        }}
        className={cn(
          "px-3 py-2 text-sm transition-colors duration-300 relative group",
          active ? "text-cyber-neon" : "text-gray-300 hover:text-cyber-neon"
        )}
      >
        {label}
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
