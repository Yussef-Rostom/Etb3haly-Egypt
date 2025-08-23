import { Card } from '@/components/ui/card';
import { Smartphone, Box, Globe } from 'lucide-react';

const SolutionSlide = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-text text-center">
        All-in-One 3D Platform
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <Card className="surface-card p-5 sm:p-6 text-center space-y-3 sm:space-y-4 animate-float">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">Web & Mobile Apps</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            User-friendly platforms for seamless idea submission and project tracking
          </p>
        </Card>

        {/* Card 2 */}
        <Card 
          className="surface-card p-5 sm:p-6 text-center space-y-3 sm:space-y-4 animate-float"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
            <Box className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">3D Design & Printing</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Professional design consultation and high-quality 3D printing services
          </p>
        </Card>

        {/* Card 3 */}
        <Card 
          className="surface-card p-5 sm:p-6 text-center space-y-3 sm:space-y-4 animate-float"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
            <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">Online Marketplace</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Ready-made products and customizable 3D models for instant purchase
          </p>
        </Card>

      </div>
    </div>
  );
};

export default SolutionSlide;