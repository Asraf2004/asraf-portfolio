
import { useState } from "react";
import { Mail, User, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { LoaderIcon } from "./icons/LoaderIcon";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
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

  return (
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
        
        <div>
          <Button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 bg-cyber-neon hover:bg-cyber-neon/80 text-black font-medium"
            disabled={isSubmitting || submitted}
          >
            {isSubmitting ? (
              <>
                <LoaderIcon size={16} className="animate-spin" />
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
      </div>
    </form>
  );
}
