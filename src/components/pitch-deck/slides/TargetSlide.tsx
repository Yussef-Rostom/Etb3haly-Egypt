import { ShoppingBag, Lightbulb, Hammer, Building2 } from 'lucide-react';

const TargetSlide = () => {
  const targets = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
      title: "Shoppers",
      description: "Looking for unique ready-made products."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Innovators",
      description: "General public seeking easy customization (AI/Smart Config)."
    },
    {
      icon: <Hammer className="w-8 h-8 text-accent" />,
      title: "Makers",
      description: "Professionals/Students with ready files."
    },
    {
      icon: <Building2 className="w-8 h-8 text-indigo-500" />,
      title: "Businesses",
      description: "B2B clients needing batch production."
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-4 sm:px-6 py-6 space-y-8">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold hero-text text-center">
        Who We Serve
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
        {targets.map((target, index) => (
          <div 
            key={index} 
            className="surface-card p-6 rounded-xl flex items-center space-x-4 hover:scale-[1.02] transition-transform duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-16 h-16 bg-background/50 rounded-full flex items-center justify-center shrink-0">
               {target.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{target.title}</h3>
              <p className="text-muted-foreground">
                {target.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetSlide;