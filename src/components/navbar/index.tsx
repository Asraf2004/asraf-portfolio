
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

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  
  // Handle scroll event to change navbar appearance and active section
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    
    // Set navbar background on scroll
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    // Update active section based on scroll position
    const sections = [
      "home", "about", "skills", "projects", "achievements", 
      "certifications", "education", "experience", "contact"
    ];
    
    // Check each section to determine which one is currently in view
    // In reverse order to prioritize the section that appears first in the DOM
    const scrollPosition = window.scrollY + 150; // Add offset for better detection
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i]);
          }
          break;
        }
      }
    }
    
    // Special case for home section when at the top
    if (offset < 100 && activeSection !== "home") {
      setActiveSection("home");
    }
  }, [activeSection]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set the correct active section on mount
    setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  
  // Navigation links
  const navItems = [
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
  
  // Handle smooth scroll for anchor links with proper active section updating
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, isAnchor: boolean) => {
    if (isAnchor) {
      e.preventDefault();
      
      if (sectionId) {
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
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-3",
        scrolled 
          ? "bg-cyber-darker/90 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <WebsiteLogo />
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-1 list-none">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  href={item.href}
                  active={activeSection === item.id}
                  onClick={(e) => handleNavClick(e, item.id, item.isAnchor)}
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
            sections={navItems.map(item => ({ id: item.id, label: item.label }))}
            onItemClick={(sectionId) => {
              scrollToElement(sectionId);
              setActiveSection(sectionId);
              setMobileMenuOpen(false);
            }}
          />
        )}
      </div>
    </header>
  );
}
