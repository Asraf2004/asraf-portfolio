
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-cyber-darker border-t border-cyber-neon/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Asraf Ahamed A. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/asrafahamed08" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-neon transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/asrafahamed" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-neon transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:asrafahamed08@gmail.com" 
              className="text-gray-400 hover:text-cyber-neon transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
