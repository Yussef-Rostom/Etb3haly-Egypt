import { MapPin, TrendingUp, Rocket } from 'lucide-react';
import competitiveEdgeImage from '@/assets/3d-products.png';

const AdvantagesSlide = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-text text-center">
        Our Competitive Edge
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        
        {/* Left Column - Content */}
        <div className="space-y-6">
          {/* Advantage 1 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Localized Egyptian Service</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Understanding local market needs with fast, reliable delivery.
              </p>
            </div>
          </div>

          {/* Advantage 2 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Affordable Pricing</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Competitive rates compared to expensive import alternatives.
              </p>
            </div>
          </div>

          {/* Advantage 3 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Rocket className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Complete Journey</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                End-to-end service from idea to finished product.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image with Badge */}
        <div className="relative w-full">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
            <img 
              src={competitiveEdgeImage} 
              alt="Our competitive advantages in 3D printing" 
              className="w-full h-56 sm:h-64 md:h-80 object-cover"
            />
            {/* Badge Overlay */}
            <div className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-md text-xs sm:text-sm font-medium">
              Cost Savings vs Imports
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSlide;