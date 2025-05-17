
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { ContactInfoItem } from "./ContactInfoItem";
import { TryHackMeLink } from "./TryHackMeLink";

interface ContactInfoProps {
  isInView: boolean;
}

export const ContactInfo = ({ isInView }: ContactInfoProps) => {
  const contactInfo = [
    {
      icon: <Mail className="text-cyber-neon" size={20} />,
      label: "Email",
      value: "asrafahamed08@gmail.com",
      href: "mailto:asrafahamed08@gmail.com"
    },
    {
      icon: <Phone className="text-cyber-neon" size={20} />,
      label: "Phone",
      value: "+91 6388066908",
      href: "tel:+916388066908"
    },
    {
      icon: <Github className="text-cyber-neon" size={20} />,
      label: "GitHub",
      value: "github.com/Asraf2004",
      href: "https://github.com/Asraf2004"
    },
    {
      icon: <Linkedin className="text-cyber-neon" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/asrafahamed",
      href: "https://linkedin.com/in/asrafahamed"
    }
  ];

  return (
    <>
      <h3 className="text-xl text-white font-semibold mb-6">
        Get in Touch
      </h3>
      
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <ContactInfoItem 
            key={index}
            icon={info.icon}
            label={info.label}
            value={info.value}
            href={info.href}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
      
      <TryHackMeLink isInView={isInView} />
    </>
  );
};
