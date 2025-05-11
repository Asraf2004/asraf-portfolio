
import { motion } from "framer-motion";
import { TryHackMe } from "@/components/icons/TryHackMe";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

interface TryHackMeLinkProps {
  isInView: boolean;
}

export const TryHackMeLink = ({ isInView }: TryHackMeLinkProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="mt-10"
    >
      <p className="text-gray-300 mb-4">
        Also find me on TryHackMe:
      </p>
      <motion.a 
        href="https://tryhackme.com/p/asrafahamed08" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-cyber-neon/10 border border-cyber-neon/20 hover:border-cyber-neon/40 rounded-lg text-white transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <TryHackMe size={18} className="text-cyber-neon" />
        <span>tryhackme.com/p/asrafahamed08</span>
        <ExternalLinkIcon size={16} />
      </motion.a>
    </motion.div>
  );
};
