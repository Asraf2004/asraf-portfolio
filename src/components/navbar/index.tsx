
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavItem } from "./NavItem";
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "./SocialLinks";
import { MobileMenu } from "./MobileMenu";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
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
    // Subscribe to scroll updates to check the current section
    const unsubscribeScroll = scrollY.on("change", (latest) => {
      // Update navbar background
      setIsScrolled(latest > 10);
      
      // Check which section is currently visible in the viewport
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);
      
      const viewportHeight = window.innerHeight;
      
      // Modified logic to better detect current section based on position
      const currentSection = sectionElements.find(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        // Consider a section visible if its top is within the first quarter of the viewport
        return rect.top <= 100 && rect.bottom > viewportHeight / 4;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    });
    
    return () => {
      unsubscribeScroll();
    };
  }, [scrollY, sections]);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll with offset adjustment to prevent content being hidden under navbar
      const navbarHeight = 70; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300", 
        isScrolled 
          ? "bg-cyber-darker/80 backdrop-blur-md border-b border-cyber-neon/20 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            onClick={() => handleNavigation("home")}
            className="text-xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Asraf<span className="text-cyber-neon">.</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              {sections.map((section) => (
                <NavItem 
                  key={section.id} 
                  href={`#${section.id}`}
                  onClick={() => handleNavigation(section.id)}
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
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
            onItemClick={handleNavigation}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
