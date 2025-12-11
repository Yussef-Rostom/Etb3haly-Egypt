import { Factory } from 'lucide-react';

const VisionSlide = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-12 px-4">
      <div className="space-y-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold hero-text leading-tight">
          The First Digital Factory in Egypt.
        </h2>
        
        <div className="surface-card p-8 rounded-2xl animate-float">
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Bridging the gap between ideas and physical products. <br />
            <span className="text-primary font-semibold block mt-4">
              A complete ecosystem for Direct Purchase, Smart Design, and Manufacturing Solutions.
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="inline-flex items-center space-x-3 surface-card p-4 px-8 rounded-full border border-primary/20">
          <Factory className="w-6 h-6 text-primary" />
          <span className="text-lg font-medium">Redefining Local Manufacturing</span>
        </div>
      </div>
    </div>
  );
};

export default VisionSlide;