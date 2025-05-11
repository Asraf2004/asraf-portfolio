
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
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ delay: 0.1 * index, duration: 0.3 }}
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
