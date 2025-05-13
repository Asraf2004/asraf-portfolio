
import { useEffect, useState } from "react";

export const ParticleBackground = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Particle animation logic
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Make it taller than viewport to cover scrolling
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle properties
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(100, Math.floor(window.innerWidth / 20)); // Responsive particle count
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    createParticles();

    // Animation loop - plays for 5 seconds then freezes
    const startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Only move particles if animation should continue
        if (shouldAnimate) {
          // Move particles
          p.x += p.speedX;
          p.y += p.speedY;
          
          // Wrap around edges
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        }
        
        // Get theme color
        const isDark = document.documentElement.classList.contains('dark');
        const particleColor = isDark ? 'rgba(0, 255, 65, ' : 'rgba(0, 100, 25, ';
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${p.opacity})`;
        ctx.fill();
        
        // Connect nearby particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `${particleColor}${(1 - distance / 100) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      // Check if 5 seconds have passed
      if (Date.now() - startTime < 5000 && shouldAnimate) {
        animationFrameId = requestAnimationFrame(animate);
      } else if (shouldAnimate) {
        // After 5 seconds, stop animation and draw a static frame
        setShouldAnimate(false);
        // Draw one last frame
        requestAnimationFrame(() => {
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            // Get theme color
            const isDark = document.documentElement.classList.contains('dark');
            const particleColor = isDark ? 'rgba(0, 255, 65, ' : 'rgba(0, 100, 25, ';
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `${particleColor}${p.opacity})`;
            ctx.fill();
            
            // Draw connections
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dx = p.x - p2.x;
              const dy = p.y - p2.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `${particleColor}${(1 - distance / 100) * 0.2})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        });
      }
    };

    animate(); // Start the animation loop

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldAnimate]);

  return (
    <canvas
      id="particles"
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20" // Using -z-20 to ensure it's behind all content
      data-aos="fade"
      data-aos-duration="1500"
    />
  );
};
