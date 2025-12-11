import { Card } from '@/components/ui/card';
import { DollarSign, Printer, Briefcase, CreditCard } from 'lucide-react';

const RevenueSlide = () => {
  const streams = [
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Direct Sales",
      description: "Margins from Premade Products.",
      color: "bg-primary/20"
    },
    {
      icon: <Printer className="w-8 h-8 text-secondary" />,
      title: "Printing Services",
      description: "Service fees for Custom/Upload jobs.",
      color: "bg-secondary/20"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent" />,
      title: "B2B Contracts",
      description: "Volume orders and supply deals.",
      color: "bg-accent/20"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-indigo-500" />,
      title: "Subscriptions",
      description: "Premium features for AI tools.",
      color: "bg-indigo-500/20"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center px-4 sm:px-6 py-6 space-y-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold hero-text text-center">
        Revenue Streams
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {streams.map((stream, index) => (
           <Card 
            key={index} 
            className="surface-card p-6 text-center space-y-4 glow-effect hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-16 h-16 ${stream.color} rounded-full flex items-center justify-center mx-auto`}>
              {stream.icon}
            </div>
            <h3 className="text-xl font-bold">{stream.title}</h3>
            <p className="text-muted-foreground">{stream.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RevenueSlide;