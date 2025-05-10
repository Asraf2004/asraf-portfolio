
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
}

const NavItem = ({ href, label, active }: NavItemProps) => {
  return (
    <li>
      <a 
        href={href} 
        className={cn(
          "px-3 py-2 text-sm transition-colors duration-200 relative group",
          active ? "text-cyber-neon" : "text-gray-300 hover:text-cyber-neon"
        )}
      >
        {label}
        <span 
          className={cn(
            "absolute left-0 -bottom-1 w-0 h-0.5 bg-cyber-neon transition-all duration-200 group-hover:w-full",
            active ? "w-full" : ""
          )}
        />
      </a>
    </li>
  );
};

export function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const current = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return { id: section.id, position: -Infinity };
          
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            position: rect.top + window.scrollY - 100
          };
        })
        .filter(section => section.position > -1)
        .sort((a, b) => a.position - b.position);
        
      if (current.length > 0 && window.scrollY > 100) {
        setActiveSection(current[0].id);
      } else {
        setActiveSection("home");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Initial dark mode setup
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  
  // Toggle dark/light mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300", 
        isScrolled 
          ? "bg-cyber-darker/80 backdrop-blur-md border-b border-cyber-neon/20 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-gradient">
            Asraf<span className="text-cyber-neon">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              {sections.map((section) => (
                <NavItem 
                  key={section.id} 
                  href={`#${section.id}`} 
                  label={section.label} 
                  active={activeSection === section.id} 
                />
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-300 hover:text-cyber-neon"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-300 hover:text-cyber-neon md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-cyber-darker/95 backdrop-blur-lg border-b border-cyber-neon/20">
          <ul className="flex flex-col py-4">
            {sections.map((section) => (
              <li key={section.id} className="px-6 py-2">
                <a 
                  href={`#${section.id}`} 
                  className={cn(
                    "block py-2 text-base transition-colors duration-200",
                    activeSection === section.id ? "text-cyber-neon" : "text-gray-300"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
