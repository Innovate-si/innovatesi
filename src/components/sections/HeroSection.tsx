import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => (
  <section id="home" className="min-h-screen relative overflow-hidden">
    {/* Background Layers */}
    <div className="absolute inset-0 w-full h-full">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#221F26] via-[#403E43] to-[#1EAEDB]/20" />
      
      {/* Analytics Graph Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        {/* Bar chart elements */}
        <div className="absolute bottom-20 left-20 flex items-end space-x-2">
          {[40, 60, 30, 80, 50, 70].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}px` }}
              transition={{
                duration: 1.5,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-4 bg-accent/20 rounded-t"
            />
          ))}
        </div>

        {/* Line graph elements */}
        <svg className="absolute top-40 right-20 w-96 h-48 opacity-20">
          <motion.path
            d="M0,50 Q50,10 100,40 T200,30 T300,45 T400,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* Floating data points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: -20 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-accent rounded-full blur-sm" />
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-accent/50 rounded-full blur-sm" />
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-accent/70 rounded-full blur-sm" />
        
        {/* Additional data visualization elements */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-accent/20 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-accent/30 rounded-full" />
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
    </div>
    
    <div className="container mx-auto relative z-10 h-screen flex items-center px-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
            RevOps & RevTech Experts
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Analyze, perfect and <span className="text-accent">measure</span>
          </h1>
          <p className="text-xl text-white/80 max-w-lg">
            We help companies scale their digital presence and boost sales, regardless of their platform or tools.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={onGetStarted}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;