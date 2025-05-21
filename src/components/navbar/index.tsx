
import { useState, useEffect, useCallback } from "react";
import { WebsiteLogo } from "./WebsiteLogo";
import { NavItem } from "./NavItem";
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "./SocialLinks";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

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
    
    // Add offset for navbar height
    const scrollPosition = offset + 100; // Adding extra offset to account for navbar height
    
    // Find the current section
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
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  
  // Navigation links
  const navItems = [
    { id: "home", href: "/", label: "Home", isAnchor: false },
    { id: "about", href: "#about", label: "About", isAnchor: true },
    { id: "skills", href: "#skills", label: "Skills", isAnchor: true },
    { id: "projects", href: "#projects", label: "Projects", isAnchor: true },
    { id: "achievements", href: "#achievements", label: "Achievements", isAnchor: true },
    { id: "certifications", href: "#certifications", label: "Certifications", isAnchor: true },
    { id: "education", href: "#education", label: "Education", isAnchor: true },
    { id: "experience", href: "#experience", label: "Experience", isAnchor: true },
    { id: "contact", href: "#contact", label: "Contact", isAnchor: true },
  ];
  
  // Handle smooth scroll for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, isAnchor: boolean) => {
    if (isAnchor) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
      const targetElement = document.getElementById(targetId || "");
      
      if (targetElement) {
        // Add offset for navbar height
        const navbarHeight = 70; // Approximate navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update active section immediately without waiting for scroll event
        if (targetId) {
          setActiveSection(targetId);
        }
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
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                href={item.href}
                active={activeSection === item.id}
                onClick={(e) => handleNavClick(e, item.isAnchor || false)}
              >
                {item.label}
              </NavItem>
            ))}
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
        
        {/* Mobile menu overlay */}
        {isMobile && mobileMenuOpen && (
          <MobileMenu 
            activeSection={activeSection}
            sections={navItems.map(item => ({ id: item.id, label: item.label }))}
            onItemClick={(sectionId) => {
              const targetItem = navItems.find(item => item.id === sectionId);
              if (targetItem) {
                const mockEvent = { 
                  preventDefault: () => {},
                  currentTarget: { getAttribute: () => targetItem.href }
                } as unknown as React.MouseEvent<HTMLAnchorElement>;
                handleNavClick(mockEvent, targetItem.isAnchor || false);
              }
              setMobileMenuOpen(false);
            }}
          />
        )}
      </div>
    </header>
  );
}
