import { Users, Target, Box, Play } from 'lucide-react';

const TargetSlide = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-text text-center">
        Who We Serve
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Card 1 */}
          <div className="surface-card p-4 sm:p-5 md:p-6 rounded-xl">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">Students & Researchers</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              University students and academic researchers needing prototypes and educational models
            </p>
          </div>

          {/* Card 2 */}
          <div className="surface-card p-4 sm:p-5 md:p-6 rounded-xl">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              <h3 className="text-lg sm:text-xl font-semibold">Startups & SMEs</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Small to medium enterprises requiring rapid prototyping and product development
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Card 3 */}
          <div className="surface-card p-4 sm:p-5 md:p-6 rounded-xl">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <Box className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              <h3 className="text-lg sm:text-xl font-semibold">Design Professionals</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Architects, engineers, and designers needing physical model representations
            </p>
          </div>

          {/* Card 4 */}
          <div className="surface-card p-4 sm:p-5 md:p-6 rounded-xl">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-semibold">Makers & Innovators</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Hobbyists, inventors, and creative professionals bringing ideas to life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSlide;