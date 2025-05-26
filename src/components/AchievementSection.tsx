
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Trophy, Target, Award, BookOpen } from "lucide-react";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  category: "achievement" | "sample";
}

export function AchievementSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionAnimation(sectionRef);
  
  const achievements: Achievement[] = [
    {
      icon: <Trophy className="text-yellow-400" size={28} />,
      title: "Cyberthon 2025 Participation",
      description: "Certificate of Participation in Cyberthon 2025, held on March 29, 2025.",
      image: "/lovable-uploads/071dd221-43fa-4a4a-b866-b04e53fad7ab.png",
      category: "achievement"
    },
    {
      icon: <Target className="text-cyber-neon" size={28} />,
      title: "Yugam 2025 Bug Hunting Workshop",
      description: "Certificate of Participation in a workshop on Mastering Bug Hunting, held on March 15, 2025.",
      image: "/lovable-uploads/8125c437-d33f-4560-87bf-330c5a7fbc4b.png",
      category: "achievement"
    },
    {
      icon: <Award className="text-cyber-blue" size={28} />,
      title: "KPR CTF Challenge 2025",
      description: "Certificate of Participation in International-Level Cyber Quest EXPLOIT-X KPR CTF organized by Department of Computer Science and Engineering at KPR Institute of Engineering and Technology on 5th April 2025.",
      image: "/lovable-uploads/4f0c28c8-767d-4a46-b33b-4822c76783ed.png",
      category: "achievement"
    },
    {
      icon: <BookOpen className="text-purple-400" size={28} />,
      title: "Sample Certifications Preview",
      description: "A preview of my online certifications, including Data Analytics with Python (Udemy), Python for Data Science (NPTEL), Generative AI Foundation Models (Coursera), and Machine Learning for All (University of London).",
      image: "/lovable-uploads/278fe577-be5b-412a-a1ef-2e6b06d98808.png",
      category: "sample"
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
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-6 text-white text-center section-header mx-auto",
          isVisible && "is-visible"
        )}>
          Achievements
        </h2>
        
        <div className={cn(
          "text-center mb-8 max-w-3xl mx-auto fade-in-component",
          isVisible && "is-visible"
        )}
        style={{transitionDelay: "0.1s"}}
        >
          <p className="text-gray-300 text-lg mb-4">
            This section showcases my certifications and achievements. Below, you'll find my certificates, each representing a completed course or participation in a relevant cybersecurity event.
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 rounded-lg hover:border-cyber-neon/30 hover:shadow-lg hover:shadow-cyber-neon/10 transition-all duration-300 fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.1 * (index + 2)}s`}}
            >
              <div className="flex items-start mb-4">
                <div className={cn(
                  "mr-4 p-3 bg-white/5 rounded-full fade-in-component",
                  isVisible && "is-visible"
                )}
                style={{transitionDelay: `${0.1 * (index + 2) + 0.1}s`}}
                >
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className={cn(
                    "text-xl font-semibold text-white mb-2 fade-in-component",
                    isVisible && "is-visible"
                  )}
                  style={{transitionDelay: `${0.1 * (index + 2) + 0.2}s`}}
                  >
                    {achievement.title}
                  </h3>
                  <p className={cn(
                    "text-gray-300 mb-4 fade-in-component",
                    isVisible && "is-visible"
                  )}
                  style={{transitionDelay: `${0.1 * (index + 2) + 0.3}s`}}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
              
              <div className={cn(
                "mt-4 fade-in-component",
                isVisible && "is-visible"
              )}
              style={{transitionDelay: `${0.1 * (index + 2) + 0.4}s`}}
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-auto rounded-lg border border-white/10 hover:border-cyber-neon/30 transition-all duration-300 shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
