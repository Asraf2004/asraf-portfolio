
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Trophy, Target, Award, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string; // URL to achievement image/certificate
  direction: "left" | "right";
}

export function AchievementSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useSectionAnimation(sectionRef);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  
  const achievements: Achievement[] = [
    {
      icon: <Trophy className="text-yellow-400" size={28} />,
      title: "Finalist in Cyberthon 2025",
      description: "Reached top 75 out of 600+ teams in the national cybersecurity competition.",
      image: "/achievements/cyberthon-2025.jpg",
      direction: "left"
    },
    {
      icon: <Target className="text-cyber-neon" size={28} />,
      title: "11th Place in KPR CTF Challenge 2025",
      description: "Secured 11th position among 40+ competing teams with complex challenges.",
      image: "/achievements/kpr-ctf-2025.jpg",
      direction: "right"
    },
    {
      icon: <Award className="text-cyber-blue" size={28} />,
      title: "Bug Bounty Workshop Contributor",
      description: "Found live SQL injection vulnerability during demonstration (₹200 bounty).",
      image: "/achievements/bug-bounty-workshop.jpg",
      direction: "left"
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
    <section 
      id="achievements" 
      ref={sectionRef} 
      className={cn(
        "py-20 bg-cyber-dark fade-in-section",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white text-center relative inline-block">
          Achievements
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
        </h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-lg mb-6 flex items-start hover:border-cyber-neon/30 hover:shadow-md hover:shadow-cyber-neon/10 transition-all duration-300"
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
                    className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
                    onClick={() => handleViewAchievement(achievement)}
                  >
                    <Eye size={16} className="mr-1" />
                    View Certificate
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
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
