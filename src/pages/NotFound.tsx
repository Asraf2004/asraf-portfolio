
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-cyber-dark text-white min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <NavBar />
        
        <main className="flex-1 w-full flex items-center justify-center">
          <div className="text-center max-w-md glass-card p-8 rounded-lg border border-white/10">
            <h1 className="text-6xl font-bold mb-4 text-cyber-neon">404</h1>
            <p className="text-xl text-gray-300 mb-6">Page not found</p>
            <p className="text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="bg-cyber-neon text-black hover:bg-cyber-neon/80">
              <Link to="/" className="flex items-center">
                <Home size={18} className="mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
