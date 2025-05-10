
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, User, GitHub, Linkedin, Check, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message sent successfully",
        description: "Thanks for reaching out! I'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

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
      icon: <GitHub className="text-cyber-neon" size={20} />,
      label: "GitHub",
      value: "github.com/asrafahamed08",
      href: "https://github.com/asrafahamed08"
    },
    {
      icon: <Linkedin className="text-cyber-neon" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/asrafahamed",
      href: "https://linkedin.com/in/asrafahamed"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold mb-8 text-white text-center relative inline-block transition-all duration-700 opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        )}>
          Contact Me
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-cyber-neon"></span>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className={cn(
            "glass-card p-6 rounded-lg transition-all duration-700 opacity-0 translate-y-4",
            isVisible && "opacity-100 translate-y-0 delay-100"
          )}>
            <h3 className="text-xl text-white font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white/5 rounded-full p-3 mr-4">
                    {info.icon}
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <a 
                      href={info.href} 
                      className="text-white hover:text-cyber-neon transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <p className="text-gray-300 mb-4">
                Also find me on TryHackMe:
              </p>
              <a 
                href="https://tryhackme.com/p/asrafahamed08" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-cyber-neon/10 border border-cyber-neon/20 hover:border-cyber-neon/40 rounded-lg text-white transition-colors"
              >
                <span>tryhackme.com/p/asrafahamed08</span>
                <ExternalLinkIcon size={16} />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={cn(
            "glass-card p-6 rounded-lg transition-all duration-700 opacity-0 translate-y-4",
            isVisible && "opacity-100 translate-y-0 delay-200"
          )}>
            <h3 className="text-xl text-white font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm text-gray-300 mb-1 block">
                    Full Name
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="bg-white/5 border-white/10 focus:border-cyber-neon/50 pl-10"
                    />
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm text-gray-300 mb-1 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="bg-white/5 border-white/10 focus:border-cyber-neon/50 pl-10"
                    />
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm text-gray-300 mb-1 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    required
                    className="bg-white/5 border-white/10 focus:border-cyber-neon/50 min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-cyber-neon hover:bg-cyber-neon/80 text-black font-medium"
                  disabled={isSubmitting || submitted}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <Check size={16} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Additional icons
const ExternalLinkIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Loader = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);
