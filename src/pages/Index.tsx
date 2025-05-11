
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
import { useEffect, useState } from "react";

// Particle animation component
const ParticleBackground = () => {
  useEffect(() => {
    // Particle animation logic
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Make it taller than viewport to cover scrolling
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle properties
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(100, Math.floor(window.innerWidth / 20)); // Responsive particle count
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Get theme color
        const isDark = document.documentElement.classList.contains('dark');
        const particleColor = isDark ? 'rgba(0, 255, 65, ' : 'rgba(0, 100, 25, ';
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${p.opacity})`;
        ctx.fill();
        
        // Connect nearby particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `${particleColor}${(1 - distance / 100) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      id="particles"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500"
    />
  );
};

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
    
    // Set up intersection observer for section animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Re-trigger animations by removing and adding animation classes
          const animateElements = entry.target.querySelectorAll('[data-aos]');
          animateElements.forEach(el => {
            const animationClass = el.getAttribute('data-aos');
            if (animationClass) {
              el.classList.remove(animationClass);
              setTimeout(() => el.classList.add(animationClass), 50);
            }
          });
        } else {
          // Optional: reset animation when element is out of view
          // entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
    
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
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`bg-cyber-dark text-white min-h-screen flex flex-col transition-all duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Particle Background */}
      <ParticleBackground />
      
      <NavBar />
      
      <main className="flex-1 relative z-10">
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
