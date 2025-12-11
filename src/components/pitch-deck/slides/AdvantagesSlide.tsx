import { Database, Cpu, ShieldCheck } from 'lucide-react';
import competitiveEdgeImage from '@/assets/3d-products.png';

const AdvantagesSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center px-4 sm:px-6 space-y-8">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold hero-text text-center">
        The Technical Core
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto w-full">
        
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Core 1 */}
          <div className="flex items-start space-x-4 surface-card p-4 rounded-xl hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Digital Inventory</h3>
              <p className="text-muted-foreground leading-relaxed">
                We store files, not goods. Print-on-Demand means Zero Inventory Risk.
              </p>
            </div>
          </div>

          {/* Core 2 */}
          <div className="flex items-start space-x-4 surface-card p-4 rounded-xl hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Cpu className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Backend Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Auto-repair, auto-slicing, and instant pricing for scalable operations.
              </p>
            </div>
          </div>

          {/* Core 3 */}
          <div className="flex items-start space-x-4 surface-card p-4 rounded-xl hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Quality Control</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hybrid AI + Human verification to ensure print success.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image with Badge */}
        <div className="relative w-full hidden md:block">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border border-white/10">
            <img 
              src={competitiveEdgeImage} 
              alt="Advanced Digital Manufacturing" 
              className="w-full h-64 sm:h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
            {/* Badge Overlay */}
            <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md text-foreground px-6 py-3 rounded-xl shadow-xl border border-white/10">
              <p className="text-sm font-semibold">Smart Manufacturing</p>
              <p className="text-xs text-muted-foreground">AI-Driven Quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSlide;