
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ScrollDownButtonProps {
  onClick: () => void;
  isVisible?: boolean;
}

export function ScrollDownButton({ onClick, isVisible = true }: ScrollDownButtonProps) {
  return (
    <motion.div 
      className={cn(
        "flex justify-center w-full absolute bottom-6 left-0 z-10 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.button 
        onClick={onClick}
        aria-label="Scroll to next section"
        className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-cyber-neon/50 transition-all duration-300 shadow-sm hover:shadow-cyber-neon/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowDown className="w-6 h-6 text-cyber-neon" />
      </motion.button>
    </motion.div>
  );
}
