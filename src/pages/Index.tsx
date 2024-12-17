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
    <div className="min-h-screen">
      {/* Logo Section */}
      <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 py-4 px-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-primary">
            Innovate
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-white px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
              RevOps & RevTech Experts
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Accelerate Your Growth
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We help companies scale their digital presence and boost sales, regardless of their platform or tools.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
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
                className="card-hover bg-secondary/50 rounded-2xl p-8"
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

      {/* Location Section */}
      <section className="py-24 bg-secondary px-4">
        <div className="container mx-auto">
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