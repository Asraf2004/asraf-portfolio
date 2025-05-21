
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

export const NavItem = ({ href, active = false, onClick, children }: NavItemProps) => {
  return (
    <li className="list-none">
      <a 
        href={href} 
        onClick={onClick}
        className={cn(
          "px-3 py-2 text-sm relative group transition-colors duration-300",
          active ? "text-cyber-neon" : "text-gray-300 hover:text-cyber-neon"
        )}
      >
        {children}
        <span className={cn(
          "absolute bottom-0 left-0 w-full h-0.5 bg-cyber-neon transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right group-hover:origin-bottom-left",
          active && "scale-x-100 origin-bottom-left"
        )}></span>
      </a>
    </li>
  );
};
