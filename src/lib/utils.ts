
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function for smooth scrolling to elements
export function scrollToElement(elementId: string, offset: number = 80) {
  // Home is a special case - scroll to top
  if (elementId === "home") {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }
  
  const element = document.getElementById(elementId);
  if (element) {
    // Calculate position with consistent offset
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    
    // Scroll with smooth behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Optimize image loading
export function optimizeImageLoading(imageElement: HTMLImageElement) {
  // Add loading="lazy" attribute
  imageElement.loading = "lazy";
  
  // Add blur-up effect
  imageElement.classList.add("lazy-load");
  
  // When image loads, remove blur and add fade-in
  imageElement.onload = () => {
    imageElement.classList.remove("lazy-load");
    imageElement.classList.add("lazy-loaded");
  };
}
