
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
      </a>
    </li>
  );
};
