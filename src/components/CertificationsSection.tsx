
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { FileCheck } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  image?: string;
}

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(sectionRef);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  
  const certifications: Certification[] = [
    {
      title: "Pre-Security Learning Path",
      issuer: "TryHackMe",
      description: "Comprehensive cybersecurity fundamentals covering networking, web security, and Linux basics.",
      image: "/lovable-uploads/e52f5fda-e212-4a4f-9f91-ff3df0299194.png"
    },
    {
      title: "Cyber Security 101",
      issuer: "TryHackMe", 
      description: "Advanced cybersecurity training covering threat detection, incident response, and security analysis techniques.",
      image: "/lovable-uploads/ee3ba5df-20a2-4872-9d4c-c0d5b34b8bc8.png"
    },
    {
      title: "Cyber Security & Privacy",
      issuer: "NPTEL",
      description: "Comprehensive course on cybersecurity principles and privacy protection in digital environments.",
      image: "/lovable-uploads/deb2df6b-74a8-44ab-b8ae-d84ae47bc8e9.png"
    },
    {
      title: "Joy of Computing in Python",
      issuer: "NPTEL",
      description: "Elite certification in Python programming with focus on computational thinking and problem-solving.",
      image: "/lovable-uploads/06c27b54-a564-4b5a-ab01-f1594f29b3b9.png"
    },
    {
      title: "Problem Solving through Programming in C",
      issuer: "NPTEL", 
      description: "Advanced C programming certification focusing on algorithmic problem-solving and data structures.",
      image: "/lovable-uploads/fde28035-140e-4ba8-8691-92670f651244.png"
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      description: "Elite certification covering privacy protection and security measures in social media platforms.",
      image: "/lovable-uploads/d35d8877-217c-4350-bbc2-109b32206b22.png"
    },
    {
      title: "LAHTP – Basic",
      issuer: "SNA",
      description: "Learn Art Hacking Through Programming certification covering ethical hacking fundamentals and programming techniques.",
      image: "/lovable-uploads/3699076d-2755-42e1-8b97-f1f686a56f28.png"
    },
    {
      title: "Computer Hardware Basics",
      issuer: "Cisco",
      description: "Fundamental certification in computer hardware components, troubleshooting, and system maintenance.",
      image: "/lovable-uploads/ffa5ecd9-c4e0-4a1c-9900-9771a4bcb08a.png"
    }
  ];

  const handleCertificateClick = (cert: Certification) => {
    setSelectedCert(cert);
  };

  return (
    <section 
      id="certifications" 
      ref={sectionRef} 
      className={cn(
        "py-16 bg-cyber-dark fade-in-section min-h-screen flex flex-col justify-center items-center",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className={cn(
          "text-4xl font-bold mb-12 text-white text-center section-header mx-auto",
          isVisible && "is-visible"
        )}>
          Certifications
        </h2>
        
        {/* 2x4 Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-cyber-neon/30 hover:shadow-lg hover:shadow-cyber-neon/10 transition-all duration-300 fade-in-component group cursor-pointer",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.1 * (index + 1)}s`}}
              onClick={() => handleCertificateClick(cert)}
            >
              {/* Certificate Image - Clickable */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Certificate Info */}
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="mr-2 p-1 bg-white/10 rounded-full">
                    <FileCheck className="text-cyber-neon" size={16} />
                  </div>
                  <div className="text-cyber-neon text-xs font-medium">
                    {cert.issuer}
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certificate Dialog/Modal */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[95vh] p-0 bg-black/95 border border-cyber-neon/20">
          <div className="relative w-full h-full flex items-center justify-center overflow-auto">
            {selectedCert?.image && (
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full h-auto object-contain p-4"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
