
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
      { id: "home", offset: 0 },
      { id: "about", offset: document.getElementById("about")?.offsetTop || 0 },
      { id: "skills", offset: document.getElementById("skills")?.offsetTop || 0 },
      { id: "projects", offset: document.getElementById("projects")?.offsetTop || 0 },
      { id: "achievements", offset: document.getElementById("achievements")?.offsetTop || 0 },
      { id: "certifications", offset: document.getElementById("certifications")?.offsetTop || 0 },
      { id: "education", offset: document.getElementById("education")?.offsetTop || 0 },
      { id: "experience", offset: document.getElementById("experience")?.offsetTop || 0 },
      { id: "contact", offset: document.getElementById("contact")?.offsetTop || 0 },
    ];
    
    // Add buffer for navbar height (adjust as needed)
    const navbarHeight = 100;
    const scrollPosition = offset + navbarHeight;
    
    // Find the current section (scan from bottom to top)
    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= sections[i].offset) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, isAnchor: boolean) => {
    if (isAnchor) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
      
      if (targetId) {
        setActiveSection(targetId);
        scrollToElement(targetId);
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3",
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
                  onClick={(e) => handleNavClick(e, item.isAnchor)}
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
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
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
