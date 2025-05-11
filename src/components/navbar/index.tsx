
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavItem } from "./NavItem";
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "./SocialLinks";
import { MobileMenu } from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";

export function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300", 
        isScrolled 
          ? "bg-cyber-darker/80 backdrop-blur-md border-b border-cyber-neon/20 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="text-xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Asraf<span className="text-cyber-neon">.</span>
          </motion.a>
          
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
            {/* Social Media Icons */}
            <div className="hidden md:block">
              <SocialLinks className="mr-2" />
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-300 hover:text-cyber-neon transition-all duration-300 hover:scale-110 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.div
                initial={false}
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu 
            sections={sections} 
            activeSection={activeSection} 
            onItemClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
