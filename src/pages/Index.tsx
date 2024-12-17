import { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProcessStepsSection from "@/components/sections/ProcessStepsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustryLeadershipSection from "@/components/sections/IndustryLeadershipSection";
import ContactSection from "@/components/sections/ContactSection";

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

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <HeroSection onGetStarted={scrollToServices} />
        <ProcessStepsSection />
        <ServicesSection />
        <IndustryLeadershipSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;