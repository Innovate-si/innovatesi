import { Building2, Users2, ShoppingBag, Store, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";

const AboutUs = () => {
  const expertise = [
    {
      icon: ShoppingBag,
      title: "E-commerce Excellence",
      description: "Deep expertise in building and optimizing online retail platforms, from marketplace integration to conversion optimization."
    },
    {
      icon: Store,
      title: "Brick & Mortar",
      description: "Extensive experience in traditional retail operations and modernizing physical store experiences."
    },
    {
      icon: BarChart2,
      title: "Omnichannel Strategy",
      description: "Seamlessly connecting digital and physical retail channels for unified customer experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="photo-1605810230434-7631ac76ec81"
              alt="Team collaboration"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-6">Transforming Retail & E-commerce</h1>
              <p className="text-xl opacity-90">
                Trusted by Fortune 500 fashion brands to deliver innovative solutions across digital and physical retail channels.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Industry Leaders in Fashion & Retail</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With years of experience working with top fashion brands, we've established ourselves as a trusted partner in the retail industry. Our portfolio includes collaborations with multiple Fortune 500 fashion companies, where we've helped transform their retail operations and digital presence.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Fortune 500 Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid gap-6"
              >
                <img
                  src="photo-1519389950473-47ba0277781c"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We bring comprehensive knowledge across all retail channels to help businesses thrive in today's dynamic market.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;