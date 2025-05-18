
import { Mail, Phone, Github, Linkedin, Cloud } from "lucide-react";
import { ContactInfoItem } from "./ContactInfoItem";
import { motion } from "framer-motion";

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
    },
    {
      icon: <Cloud className="text-cyber-neon" size={20} />,
      label: "TryHackMe",
      value: "tryhackme.com/p/asrafahamed08",
      href: "https://tryhackme.com/p/asrafahamed08"
    }
  ];

  // Animation variants
  const titleVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <>
      <motion.h3 
        className="text-xl text-white font-semibold mb-6"
        variants={titleVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Get in Touch
      </motion.h3>
      
      <motion.div 
        className="space-y-6"
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
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
      </motion.div>
    </>
  );
};
