import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Globe, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from "@/components/ui/sidebar";

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
    <div className="flex min-h-screen bg-background">
      {/* Side Navigation */}
      <Sidebar>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#home" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#services" className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4" />
                  <span>Services</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#contact" className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  <span>Contact</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
                RevOps & RevTech Experts
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
                Accelerate Your Growth
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We help companies scale their digital presence and boost sales, regardless of their platform or tools.
              </p>
              <Button size="lg" className="w-fit bg-accent hover:bg-accent/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl" />
              <div className="relative z-10 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg mb-4 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">Feature {i}</h3>
                      <p className="text-sm text-muted-foreground">
                        Innovative solutions for your business growth
                      </p>
                    </motion.div>
                  ))}
                </div>
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