
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Trophy, Target, Award, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string; // URL to achievement image/certificate
}

export function AchievementSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  
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

  const achievements: Achievement[] = [
    {
      icon: <Trophy className="text-yellow-400" size={28} />,
      title: "Finalist in Cyberthon 2025",
      description: "Reached top 75 out of 600+ teams in the national cybersecurity competition.",
      image: "/achievements/cyberthon-2025.jpg"
    },
    {
      icon: <Target className="text-cyber-neon" size={28} />,
      title: "11th Place in KPR CTF Challenge 2025",
      description: "Secured 11th position among 40+ competing teams with complex challenges.",
      image: "/achievements/kpr-ctf-2025.jpg"
    },
    {
      icon: <Award className="text-cyber-blue" size={28} />,
      title: "Bug Bounty Workshop Contributor",
      description: "Found live SQL injection vulnerability during demonstration (₹200 bounty).",
      image: "/achievements/bug-bounty-workshop.jpg"
    }
  ];
  
  const handleViewAchievement = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
  };
  
  const handleDownloadAchievement = (achievement: Achievement) => {
    if (achievement.image) {
      // Create an anchor element
      const link = document.createElement('a');
      link.href = achievement.image;
      link.download = `${achievement.title}.jpg`; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center relative inline-block transition-all duration-700 opacity-0 translate-y-4 group",
          isVisible && "opacity-100 translate-y-0"
        )}>
          Achievements
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon transition-all duration-300 group-hover:w-full"></span>
        </h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 rounded-lg mb-6 flex items-start transition-all duration-700 opacity-0 hover:border-cyber-neon/30 hover:shadow-md hover:shadow-cyber-neon/10",
                isVisible && `opacity-100 delay-${index * 200}`,
                index % 2 === 0 ? "fade-in-left" : "fade-in-right"
              )}
            >
              <div className="mr-4 p-3 bg-white/5 rounded-full">
                {achievement.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {achievement.description}
                </p>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 hover:scale-105 transition-transform"
                    onClick={() => handleViewAchievement(achievement)}
                  >
                    <Eye size={16} className="mr-1" />
                    View Certificate
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 hover:scale-105 transition-transform"
                    onClick={() => handleDownloadAchievement(achievement)}
                  >
                    <Download size={16} className="mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Achievement Certificate Dialog/Modal */}
      <Dialog open={!!selectedAchievement} onOpenChange={(open) => !open && setSelectedAchievement(null)}>
        <DialogContent className="neo-blur border-cyber-neon/20 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-white">{selectedAchievement?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedAchievement?.image && (
            <div className="mt-4 flex justify-center">
              <img 
                src={selectedAchievement.image} 
                alt={`${selectedAchievement.title}`} 
                className="max-h-[70vh] object-contain"
              />
            </div>
          )}
          
          <div className="flex justify-end mt-4">
            <Button
              variant="outline"
              className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10"
              onClick={() => selectedAchievement && handleDownloadAchievement(selectedAchievement)}
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
