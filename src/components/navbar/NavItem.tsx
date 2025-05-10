
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
}

export const NavItem = ({ href, label, active }: NavItemProps) => {
  return (
    <li>
      <a 
        href={href} 
        className={cn(
          "px-3 py-2 text-sm transition-colors duration-300 relative group",
          active ? "text-cyber-neon" : "text-gray-300 hover:text-cyber-neon"
        )}
      >
        {label}
        <span 
          className={cn(
            "absolute left-0 -bottom-1 w-0 h-0.5 bg-cyber-neon transition-all duration-300 group-hover:w-full",
            active ? "w-full" : ""
          )}
        />
      </a>
    </li>
  );
};
