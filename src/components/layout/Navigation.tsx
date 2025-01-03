import { Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary flex items-center gap-2">
          <Globe2 className="h-6 w-6 text-accent" />
          Innovate.si
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
            Services
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;