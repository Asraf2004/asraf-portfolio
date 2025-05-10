
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
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add("dark");
    
    // Set the document title
    document.title = "Asraf Ahamed A - Cybersecurity Enthusiast & Developer";
    
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
  }, []);

  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
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
  );
};

export default Index;
