
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { SocialLinks } from "./navbar/SocialLinks";
// Import jsPDF correctly
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(ref);
  const [typedText, setTypedText] = useState("");
  const fullText = "Cybersecurity Enthusiast | Web Pentester | Developer";
  const { toast } = useToast();
  
  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35); // Increased speed from 50ms to 35ms for snappier typing
    
    return () => clearInterval(typingInterval);
  }, [isVisible]);
  
  const handleDownloadResume = () => {
    try {
      // Create a new PDF document
      const doc = new jsPDF();
      
      // Set font styles
      doc.setFont("helvetica", "normal");
      
      // Add name at the top
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.text("Asraf Ahamed A", doc.internal.pageSize.width / 2, 20, { align: "center" });
      
      // Add contact information
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text("+91 6383066908 | Salem, Tamil Nadu | asrafahamed09@gmail.com | LinkedIn | GitHub | TryHackMe", 
        doc.internal.pageSize.width / 2, 30, { align: "center" });
      
      // Add horizontal line
      doc.setLineWidth(0.5);
      doc.line(20, 35, doc.internal.pageSize.width - 20, 35);
      
      // PERSONAL STATEMENT
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("PERSONAL STATEMENT", 20, 45);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const statement = "Cybersecurity enthusiast with hands-on experience in Web Penetration Testing, Secure Coding, and Security Analysis. Strong background in Python, C, and MySQL with expertise in security tools like Metasploit and Burp Suite. Passionate about bug bounty and Capture The Flag (CTF) challenges.";
      const splitStatement = doc.splitTextToSize(statement, doc.internal.pageSize.width - 40);
      doc.text(splitStatement, 20, 55);
      
      // EDUCATION
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("EDUCATION", 20, 75);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("K S Rangasamy College of Technology, Salem, Tamil Nadu", 20, 85);
      doc.setFont("helvetica", "normal");
      doc.text("Bachelor of Engineering (Computer Science Engineering)", 20, 92);
      doc.text("CGPA: 8.88/10 (Till 5th semester)", 20, 99);
      doc.setFont("helvetica", "normal");
      doc.text("2022 - Present", 180, 85, { align: "right" });
      
      // INTERNSHIP
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("INTERNSHIP", 20, 115);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("Junior Associate Developer (10 weeks)", 20, 125);
      doc.setFont("helvetica", "normal");
      doc.text("Calaniyam Consultancies and Technologies", 20, 132);
      doc.text("March 2024 - May 2024", 180, 125, { align: "right" });
      
      // Bullet points for internship
      doc.setFont("helvetica", "normal");
      doc.text("• Developed a Human Resource Management System (HRMS) using HTML, CSS, JavaScript, PHP, and", 25, 142);
      doc.text("  MySQL as part of a full-stack web application project.", 25, 149);
      doc.text("• Gained experience in full-stack development, database management, and the project lifecycle, ensuring timely", 25, 156);
      doc.text("  delivery of assigned tasks.", 25, 163);
      
      // CERTIFICATIONS
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("CERTIFICATIONS", 20, 180);
      
      // TryHackMe
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("TryHackMe", 20, 190);
      doc.setFont("helvetica", "normal");
      doc.text("• Pre Security", 25, 197);
      doc.text("• Cyber security 101", 25, 204);
      
      // NPTEL
      doc.setFont("helvetica", "bold");
      doc.text("NPTEL", 120, 190);
      doc.setFont("helvetica", "normal");
      doc.text("• Cyber Security and Privacy", 125, 197);
      doc.text("• A Joy of Computing Using python", 125, 204);
      doc.text("• Problem Solving through Programming in C", 125, 211);
      doc.text("• Privacy and Security in Online Social Media", 125, 218);
      
      // SELFMADE NINJA ACADEMY
      doc.setFont("helvetica", "bold");
      doc.text("SELFMADE NINJA ACADEMY(SNA)", 20, 230);
      doc.setFont("helvetica", "normal");
      doc.text("• Learn Art Hacking Through Programming Basic (LAHTP)", 25, 237);
      
      // SKILLS
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("SKILLS", 20, 250);
      
      // Two column skills layout
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("Programming:", 20, 260);
      doc.setFont("helvetica", "normal");
      doc.text("Python, C, PHP", 85, 260);
      
      doc.setFont("helvetica", "bold");
      doc.text("Databases:", 120, 260);
      doc.setFont("helvetica", "normal");
      doc.text("MySQL", 170, 260);
      
      doc.setFont("helvetica", "bold");
      doc.text("Security Tools:", 20, 267);
      doc.setFont("helvetica", "normal");
      const securityTools = "OWASP, Metasploit, Burp Suite, Wireshark, Nmap, GitHub, Linux, Docker";
      doc.text(securityTools, 85, 267);
      
      // Save the PDF
      doc.save("asraf-ahamed-resume.pdf");
      
      // Show success toast notification
      toast({
        title: "Resume downloaded",
        description: "Thank you for your interest in my resume!",
        variant: "default",
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast({
        title: "Download failed",
        description: "There was an issue downloading the resume. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-cyber-dark dark:bg-cyber-dark overflow-hidden z-10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index} 
              className="absolute rounded-full bg-cyber-neon dark:bg-cyber-neon blur-2xl"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.3,
                animation: `pulse-neon-once ${Math.random() * 5 + 3}s ease-in-out forwards ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center"> 
        <div className="max-w-4xl mx-auto text-center">
          {/* Name and title */}
          <motion.p 
            className="text-cyber-neon dark:text-cyber-neon font-mono mb-2 tracking-wider"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, my name is
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Asraf Ahamed A
          </motion.h1>
          
          <motion.div 
            className="h-6 sm:h-8 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-mono text-lg sm:text-xl text-gray-300 dark:text-gray-300 typing-container">
              {typedText}
              <span className="animate-blink-caret border-r-2 border-cyber-neon ml-1"></span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Passionate about bug bounty, CTFs, secure coding, and web pentesting. Loves solving real-world cyber challenges.
          </motion.p>
          
          <div className={cn(
            "flex flex-wrap justify-center gap-4",
            isVisible && "is-visible"
          )}>
            <div className="flex items-center gap-4">
              <Button 
                className={cn(
                  "hover-button bg-cyber-neon text-black hover:bg-cyber-neon/80 gap-2 transition-all fade-in-component", 
                  isVisible && "is-visible"
                )}
                style={{transitionDelay: "0.1s"}}
                onClick={handleDownloadResume}
              >
                Download Resume
                <Download size={16} />
              </Button>
            </div>
            
            {/* Social links */}
            <div className={cn(
              "flex items-center justify-center",
              isVisible && "is-visible"
            )}>
              <SocialLinks iconSize={20} className="flex gap-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

