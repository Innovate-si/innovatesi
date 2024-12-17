import { motion } from "framer-motion";
import { Users, Cog, Plug, ChartLine } from "lucide-react";

const ProcessStepsSection = () => {
  const steps = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Discovery Session",
      description: "We begin with a comprehensive meet & greet session where we map all existing processes within your company or specific area of concern. This allows us to understand your unique challenges and opportunities."
    },
    {
      icon: <Cog className="w-8 h-8 text-accent" />,
      title: "Process Optimization",
      description: "Working closely with your team, we analyze and optimize existing processes while implementing new ones where needed. This collaborative approach ensures solutions that truly fit your organization."
    },
    {
      icon: <Plug className="w-8 h-8 text-accent" />,
      title: "Technology Alignment",
      description: "We carefully evaluate your tech stack, adding new solutions where beneficial and removing unnecessary tools that may be causing complexity. Our goal is to streamline your technology infrastructure."
    },
    {
      icon: <ChartLine className="w-8 h-8 text-accent" />,
      title: "RevOps Monitoring",
      description: "Our work doesn't end at implementation. We continuously monitor processes and technologies, making data-driven adjustments to ensure optimal performance and ROI."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary"
          >
            Our <span className="text-accent">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We follow a structured approach to transform your revenue operations, ensuring sustainable growth and efficiency.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStepsSection;