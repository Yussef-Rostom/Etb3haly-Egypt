import marketplaceImage from '@/assets/marketplace-concept.jpeg';

const ServicesSlide = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-text text-center">
        Comprehensive Service Portfolio
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        
        {/* Left Column - Services */}
        <div className="space-y-4 sm:space-y-6">
          <div className="surface-card p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">
              Design Consultation
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Transform concepts into professional 3D models with expert guidance
            </p>
          </div>

          <div className="surface-card p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-secondary">
              Professional Printing
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              High-quality printing with various materials and finishing options
            </p>
          </div>

          <div className="surface-card p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-accent">
              Fast Delivery
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Nationwide delivery network ensuring quick turnaround times
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative overflow-hidden mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg h-56 sm:h-64 md:h-full rounded-2xl shadow-lg">
          <img 
            src={marketplaceImage} 
            alt="Modern Egyptian marketplace concept" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSlide;