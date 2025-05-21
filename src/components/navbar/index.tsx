
import { useState, useEffect, useCallback } from "react";
import { WebsiteLogo } from "./WebsiteLogo";
import { NavItem } from "./NavItem";
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "./SocialLinks";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { scrollToElement } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";

export function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  
  // Navigation links
  const sections = [
    { id: "home", href: "#home", label: "Home", isAnchor: true },
    { id: "about", href: "#about", label: "About", isAnchor: true },
    { id: "skills", href: "#skills", label: "Skills", isAnchor: true },
    { id: "projects", href: "#projects", label: "Projects", isAnchor: true },
    { id: "achievements", href: "#achievements", label: "Achievements", isAnchor: true },
    { id: "certifications", href: "#certifications", label: "Certifications", isAnchor: true },
    { id: "education", href: "#education", label: "Education", isAnchor: true },
    { id: "experience", href: "#experience", label: "Experience", isAnchor: true },
    { id: "contact", href: "#contact", label: "Contact", isAnchor: true },
  ];
  
  // Handle scroll event to change navbar appearance and active section
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    
    // Set navbar background on scroll
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    
    // Improved active section detection with debounce-like behavior
    const scrollPosition = window.scrollY + 100;
    let newSectionId = null;
    let bestVisibleRatio = 0;
    
    // Find the section that's most visible in the viewport
    // Using visibility ratio for better accuracy
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const { top, bottom, height } = element.getBoundingClientRect();
        const sectionTop = element.offsetTop;
        const viewportHeight = window.innerHeight;
        
        // How much of this section is visible as a ratio
        let visibleHeight = 0;
        
        if (top >= 0 && top < viewportHeight) {
          // Section top is in viewport
          visibleHeight = Math.min(viewportHeight - top, height);
        } else if (top < 0 && bottom > 0) {
          // Section top is above viewport but bottom is in viewport
          visibleHeight = bottom;
        }
        
        const visibilityRatio = visibleHeight / height;
        
        // Consider a section active if it has the highest visibility ratio
        // and exceeds minimum threshold
        if (visibilityRatio > 0.2 && visibilityRatio > bestVisibleRatio) {
          bestVisibleRatio = visibilityRatio;
          newSectionId = section.id;
        }
        
        // Special case for sections that fill most of the viewport
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + height && visibilityRatio > 0.5) {
          newSectionId = section.id;
          break;
        }
      }
    }
    
    // Special case for top of page / home section
    if (offset < 100) {
      newSectionId = "home";
    }
    
    // Only update if we have a valid section and it's different from current
    if (newSectionId && newSectionId !== activeSection) {
      setActiveSection(newSectionId);
    }
  }, [activeSection, sections]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set the correct active section on mount
    setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  
  // Handle smooth scroll for anchor links with proper active section updating
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, isAnchor: boolean) => {
    if (isAnchor) {
      e.preventDefault();
      
      if (sectionId && sectionId !== activeSection) {
        setActiveSection(sectionId);
        scrollToElement(sectionId);
      }
      
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
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
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <WebsiteLogo />
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-1 list-none">
              {sections.map((item) => (
                <NavItem
                  key={item.id}
                  href={item.href}
                  active={activeSection === item.id}
                  onClick={(e) => handleNavigation(e, item.id, item.isAnchor)}
                >
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </nav>
        )}
        
        {/* Right side items */}
        <div className="flex items-center space-x-3">
          {/* Social links - visible only on desktop */}
          {!isMobile && (
            <div className="hidden lg:flex items-center mr-2">
              <SocialLinks />
            </div>
          )}
          
          {/* Theme toggle */}
          <ThemeToggle />
          
          {/* Mobile menu button */}
          {isMobile && (
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
        
        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <MobileMenu 
            activeSection={activeSection}
            sections={sections.map(item => ({ id: item.id, label: item.label }))}
            onItemClick={(sectionId) => {
              scrollToElement(sectionId);
              setActiveSection(sectionId);
              setMobileMenuOpen(false);
            }}
          />
        )}
      </div>
    </motion.header>
  );
}
