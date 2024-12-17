import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => (
  <section id="home" className="min-h-screen flex items-center">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center"
      >
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
            RevOps & RevTech Experts
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            Accelerate Your <span className="text-accent">Growth</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg">
            We help companies scale their digital presence and boost sales, regardless of their platform or tools.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={onGetStarted}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/revops-explained">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative hidden md:flex items-center justify-center"
      >
        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Professional working on revenue growth"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;