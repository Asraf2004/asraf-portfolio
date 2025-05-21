
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
        <span className="relative inline-block">
          {children}
          
          {/* Active state underline (permanently visible) */}
          {active && (
            <span 
              className="absolute left-0 bottom-[-4px] h-0.5 bg-cyber-neon w-full"
              style={{
                transition: "transform 0.3s ease-out",
                transform: "scaleX(1)",
                transformOrigin: "left"
              }}
            />
          )}
          
          {/* Hover state underline (only visible on non-active items) */}
          {!active && (
            <span 
              className="absolute left-0 bottom-[-4px] h-0.5 bg-cyber-neon w-full"
              style={{
                transition: "transform 0.3s ease-out",
                transform: "scaleX(0)",
                transformOrigin: "left"
              }}
            />
          )}
        </span>
      </a>
    </li>
  );
};
