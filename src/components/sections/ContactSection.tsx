import { Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="min-h-screen flex items-center py-24 bg-secondary/5">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto reveal">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-accent/10 text-accent rounded-full">
          Located in Ljubljana, Slovenia
        </span>
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Ready to take your business to the next level? Our team of experts is here to help you achieve your goals.
        </p>
        
        <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">Email Us</h3>
              <a href="mailto:bruno@innovate.si" className="text-accent hover:underline">
                bruno@innovate.si
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">Book a Call</h3>
              <a href="https://calendly.com/bruno-innovate/30min" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Schedule a 30-minute call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;