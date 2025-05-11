
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Trophy, Target, Award, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, useInView } from "framer-motion";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string; // URL to achievement image/certificate
  direction: "left" | "right";
}

export function AchievementSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
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
    <section id="achievements" ref={sectionRef} className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-white text-center relative inline-block"
        >
          Achievements
          <motion.span 
            initial={{ width: "0%" }}
            animate={isInView ? { width: "50%" } : { width: "0%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-0 left-0 h-1 bg-cyber-neon"
          ></motion.span>
        </motion.h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => {
            const itemRef = useRef(null);
            const isItemInView = useInView(itemRef, { once: false, amount: 0.3 });
            
            return (
              <motion.div 
                key={index}
                ref={itemRef}
                initial={{ 
                  opacity: 0, 
                  x: achievement.direction === "left" ? -30 : 30 
                }}
                animate={isItemInView ? { 
                  opacity: 1, 
                  x: 0 
                } : { 
                  opacity: 0, 
                  x: achievement.direction === "left" ? -30 : 30 
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass-card p-6 rounded-lg mb-6 flex items-start hover:border-cyber-neon/30 hover:shadow-md hover:shadow-cyber-neon/10 transition-all duration-300"
              >
                <div className="mr-4 p-3 bg-white/5 rounded-full">
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={isItemInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-xl font-semibold text-white mb-2"
                  >
                    {achievement.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isItemInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-gray-300 mb-4"
                  >
                    {achievement.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={isItemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="flex gap-2"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
                        onClick={() => handleViewAchievement(achievement)}
                      >
                        <Eye size={16} className="mr-1" />
                        View Certificate
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon/10 transition-transform hover:shadow-md hover:shadow-cyber-neon/20"
                        onClick={() => handleDownloadAchievement(achievement)}
                      >
                        <Download size={16} className="mr-1" />
                        Download
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
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
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
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
