
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
import { useEffect, useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState(true);
  
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
    
    // Simulate site loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
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
    };
  }, []);

  return (
    <div className={`bg-cyber-dark text-white min-h-screen flex flex-col transition-all duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Particle Background - Continuous Background Animation - Placed first but with lowest z-index */}
      <ParticleBackground />
      
      {/* All content with positive z-index */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementSection />
          <CertificationsSection />
          <EducationSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
