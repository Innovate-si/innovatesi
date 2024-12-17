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
              <a href="mailto:artur@innovate.si" className="text-accent hover:underline">
                artur@innovate.si
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">Call Us</h3>
              <a href="tel:+38640564570" className="text-accent hover:underline">
                +386 40 564 570
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;