
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Trophy, Target, Award } from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function AchievementSection() {
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

  const achievements: Achievement[] = [
    {
      icon: <Trophy className="text-yellow-400" size={28} />,
      title: "Finalist in Cyberthon 2025",
      description: "Reached top 75 out of 600+ teams in the national cybersecurity competition."
    },
    {
      icon: <Target className="text-cyber-neon" size={28} />,
      title: "11th Place in KPR CTF Challenge 2025",
      description: "Secured 11th position among 40+ competing teams with complex challenges."
    },
    {
      icon: <Award className="text-cyber-blue" size={28} />,
      title: "Bug Bounty Workshop Contributor",
      description: "Found live SQL injection vulnerability during demonstration (₹200 bounty)."
    }
  ];

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center relative inline-block transition-all duration-700 opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        )}>
          Achievements
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
        </h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 rounded-lg mb-6 flex items-start transition-all duration-700 opacity-0 translate-y-4 hover:border-cyber-neon/30",
                isVisible && `opacity-100 translate-y-0 delay-${index * 2}00`
              )}
            >
              <div className="mr-4 p-3 bg-white/5 rounded-full">
                {achievement.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
