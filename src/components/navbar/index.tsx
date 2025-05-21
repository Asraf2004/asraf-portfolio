
import { useState, useEffect } from "react";
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
  const isMobile = useIsMobile();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Navigation links
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/achievements", label: "Achievements" },
    { href: "/certifications", label: "Certifications" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "#contact", label: "Contact", isAnchor: true },
  ];
  
  // Handle smooth scroll for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, isAnchor?: boolean) => {
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
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.isAnchor)}
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
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
        
        {/* Mobile menu overlay */}
        {isMobile && (
          <MobileMenu 
            activeSection=""
            sections={navItems.map(item => ({ id: item.href.replace('#', ''), label: item.label }))}
            onItemClick={(sectionId) => {
              const targetItem = navItems.find(item => 
                item.href === `/${sectionId}` || item.href === `#${sectionId}`
              );
              if (targetItem) {
                const mockEvent = { 
                  preventDefault: () => {},
                  currentTarget: { getAttribute: () => targetItem.href }
                } as unknown as React.MouseEvent<HTMLAnchorElement>;
                handleNavClick(mockEvent, targetItem.isAnchor);
              }
              setMobileMenuOpen(false);
            }}
          />
        )}
      </div>
    </header>
  );
}
