
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
      section.scrollIntoView({ behavior: 'smooth' });
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
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      clearTimeout(timer);
      clearTimeout(lazyLoadTimer);
    };
  }, []);

  return (
    <div className={`bg-cyber-dark text-white min-h-screen flex flex-col transition-all duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Particle Background - Background Animation that stops after 5 seconds - Placed first but with lowest z-index */}
      <ParticleBackground />
      
      {/* All content with positive z-index */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <div ref={heroRef} className="relative">
            <HeroSection />
            <div className={cn("relative", isHeroVisible && "visible")}>
              <ScrollDownButton onClick={() => scrollToSection("about")} isVisible={isHeroVisible} />
            </div>
          </div>
          
          <div ref={aboutRef} className="relative">
            <AboutSection />
            <div className={cn("relative", isAboutVisible && "visible")}>
              <ScrollDownButton onClick={() => scrollToSection("skills")} isVisible={isAboutVisible} />
            </div>
          </div>
          
          <div ref={skillsRef} className="relative">
            <SkillsSection />
            <div className={cn("relative", isSkillsVisible && "visible")}>
              <ScrollDownButton onClick={() => scrollToSection("projects")} isVisible={isSkillsVisible} />
            </div>
          </div>
          
          <div ref={projectsRef} className="relative">
            <ProjectsSection />
            <div className={cn("relative", isProjectsVisible && "visible")}>
              <ScrollDownButton onClick={() => scrollToSection("achievements")} isVisible={isProjectsVisible} />
            </div>
          </div>
          
          <div ref={achievementsRef} className="relative">
            <AchievementSection />
            <div className={cn("relative", isAchievementsVisible && "visible")}>
              <ScrollDownButton onClick={() => scrollToSection("certifications")} isVisible={isAchievementsVisible} />
            </div>
          </div>
          
          <div ref={certificationsRef} className="relative">
            <CertificationsSection />
            <div className={cn("relative", isCertificationsVisible && "visible")}>
              <ScrollDownButton onClick={() => scrollToSection("education")} isVisible={isCertificationsVisible} />
            </div>
          </div>
          
          <div ref={educationRef} className="relative">
            <EducationSection />
            <div className={cn("relative", isEducationVisible && "visible")}>
              <ScrollDownButton onClick={() => scrollToSection("experience")} isVisible={isEducationVisible} />
            </div>
          </div>
          
          <div ref={experienceRef} className="relative">
            <ExperienceSection />
            <div className={cn("relative", isExperienceVisible && "visible")}>
              <ScrollDownButton onClick={() => scrollToSection("contact")} isVisible={isExperienceVisible} />
            </div>
          </div>
          
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
