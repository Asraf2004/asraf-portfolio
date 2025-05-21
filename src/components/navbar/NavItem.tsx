
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
          
          {/* Underline for active state */}
          {active && (
            <span className="absolute left-0 bottom-[-4px] h-0.5 bg-cyber-neon w-full transition-none" />
          )}
          
          {/* Underline for hover state with left-to-right animation (only for non-active items) */}
          {!active && (
            <span className="absolute left-0 bottom-[-4px] h-0.5 bg-cyber-neon w-0 group-hover:w-full transition-[width] duration-300 ease-in-out" />
          )}
        </span>
      </a>
    </li>
  );
};
