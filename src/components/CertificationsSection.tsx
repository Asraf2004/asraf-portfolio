
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { FileCheck, CheckCircle, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, useInView } from "framer-motion";

interface Certification {
  title: string;
  issuer: string;
  image?: string; // URL to certificate image
  logo?: string;
}

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
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
    <section id="certifications" ref={sectionRef} className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-white text-center relative inline-block"
        >
          Certifications
          <motion.span 
            initial={{ width: "0%" }}
            animate={isInView ? { width: "50%" } : { width: "0%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-cyber-neon"
          ></motion.span>
        </motion.h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, { once: false, amount: 0.3 });
            // Alternate animations based on index
            const direction = index % 2 === 0 ? "left" : "right";
            
            return (
              <motion.div 
                key={index}
                ref={itemRef}
                initial={{ 
                  opacity: 0, 
                  x: direction === "left" ? -20 : 20 
                }}
                animate={isItemInView ? { 
                  opacity: 1, 
                  x: 0 
                } : { 
                  opacity: 0, 
                  x: direction === "left" ? -20 : 20 
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-card p-6 rounded-lg text-center hover:border-cyber-neon/30 hover:shadow-lg hover:shadow-cyber-neon/10 group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 bg-cyber-neon/10 rounded-full flex items-center justify-center group-hover:bg-cyber-neon/20 transition-all">
                    <FileCheck size={28} className="text-cyber-neon" />
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-1 group-hover:text-cyber-neon transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  Issued by {cert.issuer}
                </p>
                
                <div className="flex justify-center items-center gap-2 mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
                    <CheckCircle className="mr-1" size={12} />
                    Verified
                  </span>
                </div>
                
                <div className="mt-4 flex justify-center gap-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
                      onClick={() => handleViewCertificate(cert)}
                    >
                      <Eye size={16} className="mr-1" />
                      View
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
                      onClick={() => handleDownloadCertificate(cert)}
                    >
                      <Download size={16} className="mr-1" />
                      Download
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
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
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
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
