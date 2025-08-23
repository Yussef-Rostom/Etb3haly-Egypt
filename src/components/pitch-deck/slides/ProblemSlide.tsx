import problemImage from '@/assets/3d-products.png';

const ProblemSlide = () => {
  return (
    <div className="h-full flex items-center px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl mx-auto">
        
        {/* Left Column - Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-text">
            The Challenge
          </h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm sm:text-base md:text-lg">
                Lack of accessible 3D printing services in Egypt
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm sm:text-base md:text-lg">
                Expensive import costs for 3D printed products
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm sm:text-base md:text-lg">
                Limited expertise in 3D design and modeling
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm sm:text-base md:text-lg">
                No comprehensive platform connecting ideas to finished products
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
          <img 
            src={problemImage} 
            alt="Challenges in 3D printing accessibility" 
            className="w-full h-56 sm:h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent flex items-end">
            <div className="p-4 sm:p-6 text-center w-full">
              <div className="text-lg sm:text-xl md:text-3xl font-bold text-white">
                The majority
              </div>
              <p className="text-xs sm:text-sm md:text-base text-white/90">
                of regional businesses import 3D printed components
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSlide;