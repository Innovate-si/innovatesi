import { motion } from "framer-motion";
import { BarChart2, Cog, Users, LineChart, ArrowUpRight, Target } from "lucide-react";

const IndustryLeadershipSection = () => {
  return (
    <section id="industry-leadership" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary">
              Industry <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Leading the way in Revenue Operations and Technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 p-8 bg-background rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Revenue Operations (RevOps)</h3>
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
              <div className="mt-6 space-y-4">
                <h4 className="font-semibold">Key Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <LineChart className="h-5 w-5 text-accent mt-1" />
                    <span>20-30% increase in revenue growth rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="h-5 w-5 text-accent mt-1" />
                    <span>71% better customer satisfaction scores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-accent mt-1" />
                    <span>15-25% improvement in operational efficiency</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 p-8 bg-background rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Cog className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Revenue Technology (RevTech)</h3>
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
              <div className="mt-6 space-y-4">
                <h4 className="font-semibold">Implementation Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <LineChart className="h-5 w-5 text-accent mt-1" />
                    <span>40% reduction in manual data entry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="h-5 w-5 text-accent mt-1" />
                    <span>60% faster reporting and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-accent mt-1" />
                    <span>35% increase in sales productivity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-2xl shadow-lg space-y-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold">Why Companies Need RevOps and RevTech</h3>
            <p className="text-muted-foreground">
              In today's digital-first business environment, having aligned revenue operations and the right technology stack is crucial for sustainable growth. Companies that implement RevOps and RevTech solutions see improved collaboration, better customer insights, and accelerated revenue growth.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Business Impact</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Unified revenue strategy across all departments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Improved forecasting accuracy by up to 98%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Reduced customer acquisition costs by 30%</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Competitive Advantage</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Faster time-to-market for new initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Enhanced customer lifetime value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <span>Data-driven decision making capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryLeadershipSection;