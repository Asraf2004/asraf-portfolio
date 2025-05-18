
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
  // Animation completely disabled by rendering a regular div instead of motion.div
  return (
    <div 
      className="flex items-start"
      style={{ opacity: 1, transform: "translateY(0)" }}
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
    </div>
  );
};
