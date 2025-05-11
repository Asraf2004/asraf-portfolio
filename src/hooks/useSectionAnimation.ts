
import { useState, useEffect, RefObject } from "react";

export function useSectionAnimation(ref: RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state when intersection changes
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Section becomes visible when 15% is in view
      }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    if (ref.current) {
      const nextSection = ref.current.nextElementSibling as HTMLElement;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return { isVisible, scrollToNextSection };
}
