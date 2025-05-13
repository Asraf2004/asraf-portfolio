
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { FileCheck, CheckCircle, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

interface Certification {
  title: string;
  issuer: string;
  image?: string; // URL to certificate image
  logo?: string;
}

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(sectionRef);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  
  const certifications: Certification[] = [
    {
      title: "Pre-Security",
      issuer: "TryHackMe",
      image: "/certificates/tryhackme-presecurity.jpg"
    },
    {
      title: "Cyber Security 101",
      issuer: "TryHackMe",
      image: "/certificates/tryhackme-cs101.jpg"
    },
    {
      title: "Cyber Security & Privacy",
      issuer: "NPTEL",
      image: "/certificates/nptel-cybersecurity.jpg"
    },
    {
      title: "Joy of Computing in Python",
      issuer: "NPTEL",
      image: "/certificates/nptel-python.jpg"
    },
    {
      title: "C Programming",
      issuer: "NPTEL",
      image: "/certificates/nptel-c.jpg"
    },
    {
      title: "LAHTP – Basic",
      issuer: "SNA",
      image: "/certificates/sna-lahtp.jpg"
    },
    {
      title: "Computer Hardware Basics",
      issuer: "Cisco",
      image: "/certificates/cisco-hardware.jpg"
    }
  ];

  const handleViewCertificate = (cert: Certification) => {
    setSelectedCert(cert);
  };
  
  const handleDownloadCertificate = (cert: Certification) => {
    if (cert.image) {
      // Create an anchor element
      const link = document.createElement('a');
      link.href = cert.image;
      link.download = `${cert.title} - ${cert.issuer} Certificate.jpg`; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section 
      id="certifications" 
      ref={sectionRef} 
      className={cn(
        "py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker fade-in-section min-h-screen flex items-center",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center relative inline-block section-header",
          isVisible && "is-visible"
        )}>
          Certifications
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 rounded-lg text-center hover:border-cyber-neon/30 hover:shadow-lg hover:shadow-cyber-neon/10 group fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.05 * index}s`}}
              data-aos="fade-up"
              data-aos-delay={50 * index}
            >
              <div className={cn(
                "mb-4 flex justify-center fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.05 * index + 0.1}s`}}
              >
                <div className="w-14 h-14 bg-cyber-neon/10 rounded-full flex items-center justify-center group-hover:bg-cyber-neon/20 transition-all">
                  <FileCheck size={28} className="text-cyber-neon" />
                </div>
              </div>
              
              <h3 className={cn(
                "text-xl font-medium text-white mb-1 group-hover:text-cyber-neon transition-colors fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.05 * index + 0.2}s`}}
              >
                {cert.title}
              </h3>
              
              <p className={cn(
                "text-gray-400 text-sm mb-4 fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.05 * index + 0.3}s`}}
              >
                Issued by {cert.issuer}
              </p>
              
              <div className={cn(
                "flex justify-center items-center gap-2 mt-4 fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.05 * index + 0.4}s`}}
              >
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
                  <CheckCircle className="mr-1" size={12} />
                  Verified
                </span>
              </div>
              
              <div className={cn(
                "mt-4 flex justify-center gap-2 fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.05 * index + 0.5}s`}}
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
                  onClick={() => handleViewCertificate(cert)}
                >
                  <Eye size={16} className="mr-1" />
                  View
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
                  onClick={() => handleDownloadCertificate(cert)}
                >
                  <Download size={16} className="mr-1" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certificate Dialog/Modal */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="neo-blur border-cyber-neon/20 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-white">{selectedCert?.title} - {selectedCert?.issuer}</DialogTitle>
          </DialogHeader>
          
          {selectedCert?.image && (
            <div className="mt-4 flex justify-center">
              <img 
                src={selectedCert.image} 
                alt={`${selectedCert.title} Certificate`} 
                className="max-h-[70vh] object-contain"
              />
            </div>
          )}
          
          <div className="flex justify-end mt-4">
            <Button
              variant="outline"
              className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 hover:scale-105 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
              onClick={() => selectedCert && handleDownloadCertificate(selectedCert)}
            >
              <Download size={16} className="mr-2" />
              Download
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
