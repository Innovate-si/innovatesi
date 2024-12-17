import { motion } from "framer-motion";
import { Building2, Store, ShoppingBag } from "lucide-react";

const achievements = [
  {
    icon: Building2,
    title: "Fortune 500 Partners",
    description: "Trusted partner for top 10 Fortune 500 fashion brands, delivering innovative solutions across digital and physical retail channels.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Store,
    title: "Omnichannel Expertise",
    description: "Deep expertise in connecting digital and physical retail experiences, creating seamless customer journeys across all touchpoints.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: ShoppingBag,
    title: "Retail Innovation",
    description: "Pioneering solutions in brick-and-mortar operations, e-commerce platforms, and integrated retail technologies.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
];

const IndustryLeadershipSection = () => (
  <section className="min-h-screen bg-white py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 reveal">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
          Our Expertise
        </span>
        <h2 className="text-4xl font-bold mb-4">Industry Leadership</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          With years of experience working with leading fashion and retail brands, we've established ourselves as a trusted partner in digital transformation.
        </p>
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