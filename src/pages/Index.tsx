import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Globe, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-xl font-bold text-primary flex items-center gap-2">
              <Globe className="h-6 w-6 text-accent" />
              Innovate.si
            </a>
            <div className="flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">
                Home
              </a>
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

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
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
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
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

        {/* Services Section */}
        <section id="services" className="min-h-screen bg-secondary/50 py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
                Our Services
              </span>
              <h2 className="text-4xl font-bold mb-4">Comprehensive Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From e-commerce optimization to digital platform development, we provide end-to-end solutions for your business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="card-hover bg-white rounded-2xl p-8"
                >
                  <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center reveal">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
                Located in Ljubljana, Slovenia
              </span>
              <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to take your business to the next level? Our team of experts is here to help you achieve your goals.
              </p>
              <Button variant="outline" size="lg" className="bg-white hover:bg-accent hover:text-white">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const services = [
  {
    icon: Globe,
    title: "E-commerce Excellence",
    description: "Optimize your online store performance and increase conversions across any platform.",
  },
  {
    icon: BarChart2,
    title: "RevOps Strategy",
    description: "Align your revenue operations for maximum efficiency and growth.",
  },
  {
    icon: Rocket,
    title: "Digital Acceleration",
    description: "Transform your digital presence and accelerate your business growth.",
  },
];

export default Index;
