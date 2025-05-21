
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WebsiteLogoProps {
  className?: string;
  isVisible?: boolean;
}

export const WebsiteLogo = ({ className, isVisible = true }: WebsiteLogoProps) => {
  return (
    <motion.div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-white/5",
        className
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Globe size={18} className="text-cyber-neon" />
      <span className="font-medium text-white">Asraf</span>
    </motion.div>
  );
};
