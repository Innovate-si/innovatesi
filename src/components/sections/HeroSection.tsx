import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => (
  <section id="home" className="min-h-screen relative">
    <div className="absolute inset-0 w-full h-full">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="object-cover w-full h-full"
      >
        <source 
          src="https://cdn.coverr.co/videos/coverr-temp-sftfwatermarkedvideo00436be495bc341e4b7274f83a560daa2mp4-5896/thumbnail?width=1920" 
          type="video/mp4"
        />
      </video>
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