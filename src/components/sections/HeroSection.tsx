import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => (
  <section id="home" className="min-h-screen relative">
    <div className="absolute inset-0">
      <img 
        src="/team-meeting.jpg" 
        alt="Team looking at computer" 
        className="w-full h-full object-cover"
      />
      {/* Simple dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
    
    <div className="container mx-auto relative z-10 h-screen flex items-center px-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full"
          >
            RevOps & RevTech Experts
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Analyze, perfect and <span className="text-accent">measure</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-white/80 max-w-lg"
          >
            We help companies scale their digital presence and boost sales, regardless of their platform or tools.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="pt-4"
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 transform transition-all duration-300 hover:scale-105" 
              onClick={onGetStarted}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;