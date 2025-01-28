import { motion } from "framer-motion";
import { Globe2, BarChart2, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "E-Commerce Growth Solutions",
    description: "Accelerate your online retail success with tailored strategies. From optimizing product listings and simplifying checkouts to leveraging AI-powered recommendations and mobile-first design, we deliver seamless integrations and data-driven solutions that drive conversions and enhance the shopping experience.",
  },
  {
    icon: BarChart2,
    title: "RevOps Strategy",
    description: "Align your sales, marketing, and customer success teams with a unified RevOps framework designed to drive efficiency and accelerate revenue growth. We streamline workflows, implement cutting-edge CRM solutions, and build data-driven strategies to optimize every stage of your customer journey. Our approach focuses on enhancing lead management and improving deal velocity for predictable growth, deploying targeted marketing campaigns to efficiently nurture leads and boost engagement, and refining key touchpoints to maximize customer satisfaction and retention. With our RevOps expertise, your business achieves seamless collaboration, actionable insights, and sustainable growth.",
  },
  {
    icon: Rocket,
    title: "Digital Acceleration",
    description: "Fast-track your digital transformation with cutting-edge solutions. We implement cloud-native architectures, develop scalable applications, and create innovative digital experiences. Our expertise includes AI/ML integration, IoT solutions, and enterprise-grade digital infrastructure modernization.",
  },
];

const ServicesSection = () => (
  <section id="services" className="min-h-screen bg-secondary/50 py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 reveal">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
          Our Services
        </span>
        <h2 className="text-4xl font-bold mb-4">How Can We Help You?</h2>
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
            className="card-hover bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <service.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
