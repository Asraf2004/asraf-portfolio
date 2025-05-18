
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Trophy, Target, Award, Eye } from "lucide-react";
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
  const { isVisible } = useSectionAnimation(sectionRef);
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

  return (
    <section 
      id="achievements" 
      ref={sectionRef} 
      className={cn(
        "py-16 bg-cyber-dark fade-in-section min-h-screen flex flex-col justify-center items-center",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-6 text-white text-center section-header mx-auto",
          isVisible && "is-visible"
        )}>
          Achievements
          {/* Removed the permanent underline span */}
        </h2>
        
        <div className="mt-8 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-5 rounded-lg mb-5 flex items-start hover:border-cyber-neon/30 hover:shadow-md hover:shadow-cyber-neon/10 transition-all duration-300 fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.1 * (index + 1)}s`}}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className={cn(
                "mr-4 p-3 bg-white/5 rounded-full fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.1 * (index + 1) + 0.1}s`}}
              >
                {achievement.icon}
              </div>
              
              <div className="flex-1">
                <h3 className={cn(
                  "text-xl font-semibold text-white mb-2 fade-in-component",
                  isVisible && "is-visible"
                )}
                style={{transitionDelay: `${0.1 * (index + 1) + 0.2}s`}}
                >
                  {achievement.title}
                </h3>
                <p className={cn(
                  "text-gray-300 mb-3 fade-in-component",
                  isVisible && "is-visible"
                )}
                style={{transitionDelay: `${0.1 * (index + 1) + 0.3}s`}}
                >
                  {achievement.description}
                </p>
                
                <div className={cn(
                  "flex gap-2 fade-in-component",
                  isVisible && "is-visible"
                )}
                style={{transitionDelay: `${0.1 * (index + 1) + 0.4}s`}}
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
                    onClick={() => handleViewAchievement(achievement)}
                  >
                    <Eye size={16} className="mr-1" />
                    View Certificate
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
                className="max-h-[60vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
