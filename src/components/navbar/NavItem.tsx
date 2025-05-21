
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
          "px-3 py-2 text-sm relative group",
          active ? "text-cyber-neon" : "text-gray-300 hover:text-cyber-neon"
        )}
      >
        <span className="relative">
          {children}
          
          {/* Underline for active state - no animations */}
          {active && (
            <span className="absolute left-0 bottom-[-4px] h-0.5 bg-cyber-neon w-full" />
          )}
          
          {/* Underline for hover state (only for non-active items) - no animations */}
          {!active && (
            <span className="absolute left-0 bottom-[-4px] h-0.5 bg-cyber-neon w-full opacity-0 group-hover:opacity-100" />
          )}
        </span>
      </a>
    </li>
  );
};
