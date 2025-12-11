import { Card } from '@/components/ui/card';
import { ShoppingBag, Sliders, Wand2, UploadCloud, Factory } from 'lucide-react';

const SolutionSlide = () => {
  const tracks = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
      title: "Track 1: Premade Catalog (B2C)",
      description: "Ready-to-print verified products. No design skills needed. Zero inventory risk.",
      color: "bg-primary/20",
      textColor: "text-primary"
    },
    {
      icon: <Sliders className="w-8 h-8 text-secondary" />,
      title: "Track 2: Smart Configurator",
      description: "Parametric designs for custom gifts. Adjust size/text, system auto-generates files.",
      color: "bg-secondary/20",
      textColor: "text-secondary"
    },
    {
      icon: <Wand2 className="w-8 h-8 text-accent" />,
      title: "Track 3: Gen AI Creator",
      description: "Text-to-3D for innovators. Turn prompts like 'Lotus Vase' into 3D models instantly.",
      color: "bg-accent/20",
      textColor: "text-accent"
    },
    {
      icon: <UploadCloud className="w-8 h-8 text-indigo-500" />,
      title: "Track 4: Upload & Print",
      description: "Instant quotation engine for Pros. Auto-repair & slicing for STL/OBJ files.",
      color: "bg-indigo-500/20",
      textColor: "text-indigo-500"
    },
    {
      icon: <Factory className="w-8 h-8 text-orange-500" />,
      title: "Track 5: B2B Manufacturing",
      description: "Mass production & prototyping alternative to imports for businesses.",
      color: "bg-orange-500/20",
      textColor: "text-orange-500"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-4 sm:px-6 py-4 space-y-6">
      {/* Title */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-text">
          5 Operational Tracks
        </h2>
        <p className="text-muted-foreground">Comprehensive solutions for every user type</p>
      </div>

      {/* Grid Layout: 3 top, 2 bottom */}
      <div className="flex flex-col gap-6 max-w-6xl mx-auto w-full">
        {/* Top Row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.slice(0, 3).map((track, index) => (
            <Card 
              key={index}
              className="surface-card p-5 text-center space-y-3 animate-float hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${track.color} rounded-full flex items-center justify-center mx-auto`}>
                {track.icon}
              </div>
              <h3 className="text-lg font-bold">{track.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {track.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom Row: 2 cards (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
          {tracks.slice(3, 5).map((track, index) => (
            <Card 
              key={index + 3}
              className="surface-card p-5 text-center space-y-3 animate-float hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${track.color} rounded-full flex items-center justify-center mx-auto`}>
                {track.icon}
              </div>
              <h3 className="text-lg font-bold">{track.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {track.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;