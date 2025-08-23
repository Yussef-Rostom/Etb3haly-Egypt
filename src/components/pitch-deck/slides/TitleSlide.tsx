import heroImage from "@/assets/hero-3d-printing.jpg";

const TitleSlide = () => {
  return (
    <div className="h-full flex items-center justify-center p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-6xl">
        
        {/* Left side - Content */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold hero-text mb-2 sm:mb-4">
            Etb3haly
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-secondary font-semibold">
            First 3D Printing Services in Egypt
          </p>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Transforming ideas into reality through cutting-edge 3D printing
            technology and comprehensive digital services.
          </p>

          {/* Button */}
          {/* <div className="flex justify-center lg:justify-start">
            <button className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base">
              Contact us
            </button>
          </div> */}
          
        </div>

        {/* Right side - Image with modern frame */}
        <div className="relative order-first lg:order-last">
          <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl rotate-2 sm:rotate-3"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={heroImage}
              alt="Futuristic 3D printing laboratory"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;