
import { motion } from "framer-motion";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  index: number;
  isInView: boolean;
}

export const ContactInfoItem = ({ icon, label, value, href, index, isInView }: ContactInfoItemProps) => {
  // Animation variants for each contact info item with bottom-to-top animation
  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div 
      className="flex items-start"
      variants={itemVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="bg-white/5 rounded-full p-3 mr-4">
        {icon}
      </div>
      
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <a 
          href={href} 
          className="text-white hover:text-cyber-neon transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      </div>
    </motion.div>
  );
};
