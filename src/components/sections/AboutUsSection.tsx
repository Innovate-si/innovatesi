import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutUsSection = () => {
  const team = [
    {
      name: "Artur Muzic",
      role: "RevOps",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Bruno Omerovic",
      role: "RevTech",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center reveal">
              <Avatar className="w-48 h-48 mb-6">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-semibold text-primary mb-2">{member.name}</h3>
              <p className="text-lg text-accent mb-4">{member.role}</p>
              <p className="text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;