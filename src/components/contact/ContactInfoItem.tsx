
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
  // Animation variants similar to other sections
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.1 * index
      }
    }
  };
  
  return (
    <motion.div 
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex items-start"
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
