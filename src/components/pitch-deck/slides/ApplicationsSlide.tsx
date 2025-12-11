import applicationsImage from '@/assets/applications-showcase.jpg';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const applications = [
  {
    title: "Education",
    description: "Student projects & prototyping",
    explanation: "Enables students to bring their ideas to life. Examples: printing historical artifacts for history class, creating molecular models for chemistry, or building robots for STEM clubs.",
    color: "text-primary",
  },
  {
    title: "Healthcare",
    description: "Medical models & prosthetics",
    explanation: "Revolutionizing patient care. Examples: surgeons using 3D-printed organ models to plan complex surgeries, dentists creating custom crowns and bridges, and patients receiving affordable, custom-fit prosthetic limbs.",
    color: "text-secondary",
  },
  {
    title: "Architecture",
    description: "Design models & prototypes",
    explanation: "Transforming architectural design. Examples: creating detailed city models for urban planning, presenting clients with realistic building models, and iterating on structural designs with tangible prototypes.",
    color: "text-accent",
  },
  {
    title: "Manufacturing",
    description: "Rapid prototyping solutions",
    explanation: "Accelerating innovation in manufacturing. Examples: creating functional prototypes for new products, producing custom jigs and fixtures to streamline assembly lines, and even on-demand production of spare parts.",
    color: "text-primary",
  },
  {
    title: "Creative Arts",
    description: "Art, jewelry & fashion",
    explanation: "Unlocking new creative possibilities. Examples: sculptors creating intricate statues, jewelers designing bespoke pieces, and fashion designers experimenting with 3D-printed fabrics and accessories.",
    color: "text-secondary",
  },
  {
    title: "Automotive",
    description: "Parts & customization",
    explanation: "Driving the future of the automotive industry. Examples: restoring classic cars with out-of-production parts, creating custom modifications for car enthusiasts, and prototyping new components for major manufacturers.",
    color: "text-accent",
  },
];

const ApplicationsSlide = () => {
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-text text-center">Diverse Industry Applications</h2>
      
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-4 sm:mb-6 md:mb-8">
        <img 
          src={applicationsImage} 
          alt="3D printing applications showcase" 
          className="w-full h-40 sm:h-48 md:h-64 object-cover"
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {applications.map((app) => (
          <HoverCard key={app.title}>
            <HoverCardTrigger asChild>
              <div className="surface-card p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-center cursor-pointer">
                <h3 className={`font-semibold ${app.color} text-sm sm:text-base md:text-lg`}>{app.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{app.description}</p>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
              <div className="space-y-2">
                <h3 className={`font-semibold ${app.color} text-lg`}>{app.title}</h3>
                <p className="text-sm text-muted-foreground">{app.explanation}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsSlide;