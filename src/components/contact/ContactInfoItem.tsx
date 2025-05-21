
interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export const ContactInfoItem = ({ icon, label, value, href }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start">
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
