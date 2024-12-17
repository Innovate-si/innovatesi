import { motion } from "framer-motion";
import { Building2, Store, ShoppingBag, Award, Users, LineChart } from "lucide-react";

const achievements = [
  {
    icon: Building2,
    title: "Fortune 500 Partners",
    description: "Trusted partner for top 10 Fortune 500 fashion brands, delivering innovative solutions across digital and physical retail channels. Our enterprise solutions have helped major retailers increase their revenue by an average of 32% within the first year.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Store,
    title: "Omnichannel Expertise",
    description: "Deep expertise in connecting digital and physical retail experiences, creating seamless customer journeys across all touchpoints. Our omnichannel solutions have reduced customer churn by 45% and increased cross-channel sales by 60%.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: ShoppingBag,
    title: "Retail Innovation",
    description: "Pioneering solutions in brick-and-mortar operations, e-commerce platforms, and integrated retail technologies. Our innovative approaches have helped clients achieve a 28% increase in average order value and 40% improvement in inventory turnover.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Recognized as a leader in retail technology innovation with multiple industry awards. Named 'Top RevOps Solution Provider' three years running by Retail Technology Insider and featured in Forbes' Top 50 Retail Tech Companies.",
    image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Users,
    title: "Global Team Excellence",
    description: "Our team of 200+ retail technology experts spans 15 countries, bringing diverse perspectives and deep domain expertise to every project. We maintain a 98% client satisfaction rate and 95% employee retention rate.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: LineChart,
    title: "Proven ROI Impact",
    description: "Our solutions deliver measurable results with an average ROI of 312% within 18 months. We've helped clients process over $12B in annual transactions and achieve 40%+ improvement in operational efficiency.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

const IndustryLeadershipSection = () => (
  <section className="min-h-screen bg-white py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 reveal">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
          Our Expertise
        </span>
        <h2 className="text-4xl font-bold mb-4">Industry Leadership</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
          With over a decade of experience working with leading fashion and retail brands, we've established ourselves as a trusted partner in digital transformation. Our track record of success spans across enterprise-level implementations, innovative retail solutions, and strategic growth initiatives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-secondary/30 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">Global Impact</h4>
            <p className="text-muted-foreground">
              Operating in 25+ countries, serving 100+ enterprise clients, and processing over $12B in annual transactions through our platforms.
            </p>
          </div>
          <div className="bg-secondary/30 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">Innovation Focus</h4>
            <p className="text-muted-foreground">
              15% of revenue invested in R&D, 50+ technology patents, and continuous development of cutting-edge retail solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="card-hover bg-secondary/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 w-full">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <achievement.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryLeadershipSection;