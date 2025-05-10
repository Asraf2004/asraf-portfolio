
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { FileCheck, CheckCircle } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  logo?: string;
}

export function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const certifications: Certification[] = [
    {
      title: "Pre-Security",
      issuer: "TryHackMe"
    },
    {
      title: "Cyber Security 101",
      issuer: "TryHackMe"
    },
    {
      title: "Cyber Security & Privacy",
      issuer: "NPTEL"
    },
    {
      title: "Joy of Computing in Python",
      issuer: "NPTEL"
    },
    {
      title: "C Programming",
      issuer: "NPTEL"
    },
    {
      title: "LAHTP – Basic",
      issuer: "SNA"
    },
    {
      title: "Computer Hardware Basics",
      issuer: "Cisco"
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center relative inline-block transition-all duration-700 opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        )}>
          Certifications
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 rounded-lg text-center transition-all duration-500 transform opacity-0 translate-y-4 hover:border-cyber-neon/30",
                isVisible && `opacity-100 translate-y-0 delay-${(index % 4) * 1}00`
              )}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 bg-cyber-neon/10 rounded-full flex items-center justify-center">
                  <FileCheck size={28} className="text-cyber-neon" />
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-1">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 text-sm">
                Issued by {cert.issuer}
              </p>
              
              <div className="mt-4 flex justify-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
                  <CheckCircle className="mr-1" size={12} />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
