
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollDownButtonProps {
  onClick: () => void;
  isVisible?: boolean;
}

export function ScrollDownButton({ onClick, isVisible = true }: ScrollDownButtonProps) {
  return (
    <div 
      className={cn(
        "flex justify-center w-full absolute bottom-6 left-0 z-10 fade-in-component transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <button 
        onClick={onClick}
        aria-label="Scroll to next section"
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-cyber-neon/30 hover:scale-110 transition-all duration-300 animate-bounce shadow-sm hover:shadow-cyber-neon/20"
      >
        <ArrowDown className="w-6 h-6 text-cyber-neon" />
      </button>
    </div>
  );
}
