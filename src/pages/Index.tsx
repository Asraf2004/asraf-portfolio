import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AchievementSection } from "@/components/AchievementSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ScrollDownButton } from "@/components/common/ScrollDownButton";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  
  const { isVisible: isHeroVisible } = useSectionAnimation(heroRef);
  const { isVisible: isAboutVisible } = useSectionAnimation(aboutRef);
  const { isVisible: isSkillsVisible } = useSectionAnimation(skillsRef);
  const { isVisible: isProjectsVisible } = useSectionAnimation(projectsRef);
  const { isVisible: isAchievementsVisible } = useSectionAnimation(achievementsRef);
  const { isVisible: isCertificationsVisible } = useSectionAnimation(certificationsRef);
  const { isVisible: isEducationVisible } = useSectionAnimation(educationRef);
  const { isVisible: isExperienceVisible } = useSectionAnimation(experienceRef);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Add offset for navbar height
      const navbarHeight = 70; // Approximate navbar height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    // Load dark mode preference from localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "false") {
      document.documentElement.classList.remove("dark");
    } else {
      // Set dark mode as default
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
    
    // Set the document title
    document.title = "Asraf Ahamed A - Cybersecurity Enthusiast & Developer";
    
    // Add a meta tag for preloading important resources
    const linkPreload = document.createElement('link');
    linkPreload.rel = 'preload';
    linkPreload.as = 'font';
    linkPreload.href = '/fonts/main-font.woff2'; // Adjust to your actual font path
    linkPreload.type = 'font/woff2';
    linkPreload.crossOrigin = 'anonymous';
    document.head.appendChild(linkPreload);
    
    // Simulate site loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    // Lazy load images once the main content is loaded
    const lazyLoadImages = () => {
      const imgElements = document.querySelectorAll('img[loading="lazy"]');
      imgElements.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.classList.add('lazy-loaded');
        }
      });
    };
    
    // Lazy load images after a short delay
    const lazyLoadTimer = setTimeout(lazyLoadImages, 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(lazyLoadTimer);
    };
  }, []);

  return (
    <div className={`bg-cyber-dark text-white min-h-screen flex flex-col transition-all duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* All content with positive z-index */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          {/* Each section is now set to min-height: 100vh to ensure equal heights */}
          <div ref={heroRef} className="relative">
            <HeroSection />
            <div className={cn("relative", isHeroVisible && "visible")}>
              <ScrollDownButton onClick={() => scrollToSection("about")} isVisible={isHeroVisible} />
            </div>
          </div>
          
          <div ref={aboutRef} className="relative">
            <AboutSection />
          </div>
          
          <div ref={skillsRef} className="relative">
            <SkillsSection />
          </div>
          
          <div ref={projectsRef} className="relative">
            <ProjectsSection />
          </div>
          
          <div ref={achievementsRef} className="relative">
            <AchievementSection />
          </div>
          
          <div ref={certificationsRef} className="relative">
            <CertificationsSection />
          </div>
          
          <div ref={educationRef} className="relative">
            <EducationSection />
          </div>
          
          <div ref={experienceRef} className="relative">
            <ExperienceSection />
          </div>
          
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
