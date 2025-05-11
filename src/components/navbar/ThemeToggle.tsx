
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Load dark mode preference from localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      const isDark = savedMode === "true";
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);
  
  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    if (newMode) {
      document.documentElement.classList.add("dark");
      toast({
        title: "Dark Mode Activated",
        description: "You've switched to dark mode",
        duration: 2000
      });
    } else {
      document.documentElement.classList.remove("dark");
      toast({
        title: "Light Mode Activated",
        description: "You've switched to light mode",
        duration: 2000
      });
    }
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
  };
  
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button 
        variant="ghost"
        size="icon"
        className="rounded-full text-gray-300 hover:text-cyber-neon transition-all duration-300"
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDarkMode ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-blue-300" />}
        </motion.div>
      </Button>
    </motion.div>
  );
};
