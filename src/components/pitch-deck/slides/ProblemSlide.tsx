import { Search, PenTool, Printer, Building } from 'lucide-react';

const ProblemSlide = () => {
  const painPoints = [
    {
      icon: <Search className="w-10 h-10 text-destructive/80" />,
      title: "The Shopper",
      description: "Struggle to find unique, customized decor or gadgets in traditional stores."
    },
    {
      icon: <PenTool className="w-10 h-10 text-primary/80" />,
      title: "The Non-Designer",
      description: "Wants to innovate but lacks CAD/3D modeling skills."
    },
    {
      icon: <Printer className="w-10 h-10 text-secondary/80" />,
      title: "The Pro (Makers)",
      description: "Lack of reliable, high-quality local 3D printing services for ready files."
    },
    {
      icon: <Building className="w-10 h-10 text-accent/80" />,
      title: "The Business",
      description: "No fast, flexible local alternative to importing for medium-volume manufacturing."
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-4 sm:px-6 py-6 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold hero-text">
          User Pain Points
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Identifying the key challenges across our diversified target market
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
        {painPoints.map((point, index) => (
          <div 
            key={index} 
            className="surface-card p-6 rounded-xl flex items-start space-x-4 hover:scale-[1.02] transition-transform duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-3 bg-background/50 rounded-lg shrink-0">
              {point.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSlide;