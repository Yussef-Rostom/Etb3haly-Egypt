import { Rocket } from 'lucide-react';

const VisionSlide = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold hero-text text-center">Our Roadmap</h2>
      <div className="space-y-6">
        <div className="surface-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3 text-primary">Phase 1: Egypt Market Leadership</h3>
          <p className="text-muted-foreground">Establish dominant position in Egyptian 3D printing market with comprehensive service offerings</p>
        </div>
        <div className="surface-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3 text-secondary">Phase 2: MENA Expansion</h3>
          <p className="text-muted-foreground">Scale operations across Middle East and North Africa region with strategic partnerships</p>
        </div>
        <div className="surface-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3 text-accent">Phase 3: Advanced Technologies</h3>
          <p className="text-muted-foreground">Integrate AI-powered design assistance and 3D scanning capabilities for enhanced user experience</p>
        </div>
      </div>
      <div className="text-center">
        <div className="inline-flex items-center space-x-4 surface-card p-4 rounded-full">
          <Rocket className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">Projected to serve 10,000+ customers by 2026</span>
        </div>
      </div>
    </div>
  );
};

export default VisionSlide;