
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
}

export const NavItem = ({ href, label, active }: NavItemProps) => {
  return (
    <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <a 
        href={href} 
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
        <span 
          className={cn(
            "absolute left-0 -bottom-1 w-0 h-0.5 bg-cyber-neon transition-all duration-300 group-hover:w-full",
            active ? "opacity-0" : "opacity-100"
          )}
        />
      </a>
    </motion.li>
  );
};
