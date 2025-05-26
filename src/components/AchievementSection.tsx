
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Trophy, Target, Award, X } from "lucide-react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  provider: string;
  date: string;
  description: string;
  image: string;
}

export function AchievementSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(sectionRef);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const achievements: Achievement[] = [
    {
      icon: <Trophy className="text-yellow-400" size={24} />,
      title: "Cyberthon 2025 Participation",
      provider: "Cyberthon",
      date: "March 2025",
      description: "Participated in Cyberthon 2025, a premier cybersecurity competition featuring various challenges in penetration testing, digital forensics, and security analysis.",
      image: "/lovable-uploads/071dd221-43fa-4a4a-b866-b04e53fad7ab.png"
    },
    {
      icon: <Target className="text-cyber-neon" size={24} />,
      title: "Bug Hunting Workshop",
      provider: "Yugam 2025",
      date: "March 2025",
      description: "I participated in the Yugam Bug Bounty Workshop and earned a **₹200 bounty**.",
      image: "/lovable-uploads/8125c437-d33f-4560-87bf-330c5a7fbc4b.png"
    },
    {
      icon: <Award className="text-cyber-blue" size={24} />,
      title: "KPR CTF Challenge 2025",
      provider: "KPR Institute",
      date: "April 2025",
      description: "Successfully participated in the KPR CTF Challenge 2025, demonstrating skills in cryptography, reverse engineering, and web application security.",
      image: "/lovable-uploads/4f0c28c8-767d-4a46-b33b-4822c76783ed.png"
    }
  ];

  return (
    <section 
      id="achievements" 
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
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-cyber-neon/30 hover:shadow-lg hover:shadow-cyber-neon/10 transition-all duration-300 fade-in-component group",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.1 * (index + 1)}s`}}
            >
              {/* Certificate Image - Clickable */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="aspect-[4/3] overflow-hidden cursor-pointer">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] h-[95vh] p-0 bg-black/95 border border-cyber-neon/20">
                  <div className="relative w-full h-full flex items-center justify-center overflow-auto">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="max-w-full h-auto object-contain p-4"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              
              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="mr-3 p-2 bg-white/10 rounded-full">
                    {achievement.icon}
                  </div>
                  <div className="text-cyber-neon text-sm font-medium">
                    {achievement.provider}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-3 leading-relaxed"
                   dangerouslySetInnerHTML={{ 
                     __html: achievement.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                   }}>
                </p>
                
                <div className="flex items-center">
                  <span className="text-gray-400 text-sm">
                    {achievement.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
