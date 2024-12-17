import { motion } from "framer-motion";
import { ArrowLeft, BarChart2, Cog, Users, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RevOpsExplained = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
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

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Understanding <span className="text-accent">RevOps</span> and <span className="text-accent">RevTech</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transforming business operations through revenue-focused strategies and technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 p-8 bg-secondary/50 rounded-2xl">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <BarChart2 className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold">Revenue Operations (RevOps)</h2>
                <p className="text-muted-foreground">
                  RevOps is a business function that aims to maximize an organization's revenue potential by driving full-funnel accountability across marketing, sales, and customer success teams. It focuses on process optimization, data analysis, and strategic alignment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Aligns teams around revenue goals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Optimizes customer journey</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Improves operational efficiency</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 p-8 bg-secondary/50 rounded-2xl">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Cog className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-semibold">Revenue Technology (RevTech)</h2>
                <p className="text-muted-foreground">
                  RevTech encompasses the tools and technologies that enable revenue operations. It includes CRM systems, marketing automation, sales enablement tools, and analytics platforms that work together to drive revenue growth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Automates revenue processes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Provides data-driven insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Enhances customer experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/5 p-8 rounded-2xl space-y-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-semibold">Why It Matters</h2>
              <p className="text-muted-foreground">
                In today's digital-first business environment, having aligned revenue operations and the right technology stack is crucial for sustainable growth. Companies that implement RevOps and RevTech solutions see improved collaboration, better customer insights, and accelerated revenue growth.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default RevOpsExplained;