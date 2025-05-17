
import { Cloud } from "lucide-react";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

interface TryHackMeLinkProps {
  isInView: boolean;
}

export const TryHackMeLink = ({ isInView }: TryHackMeLinkProps) => {
  return (
    <div className="mt-8">
      <p className="text-gray-300 mb-3">
        Also find me on TryHackMe:
      </p>
      <a 
        href="https://tryhackme.com/p/asrafahamed08" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-cyber-neon/10 border border-cyber-neon/20 hover:border-cyber-neon/40 rounded-lg text-white transition-colors"
      >
        <Cloud size={18} className="text-cyber-neon" />
        <span>tryhackme.com/p/asrafahamed08</span>
        <ExternalLinkIcon size={16} />
      </a>
    </div>
  );
};
