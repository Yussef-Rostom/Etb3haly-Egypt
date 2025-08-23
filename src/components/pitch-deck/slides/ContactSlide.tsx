import { Mail, Phone, Globe } from 'lucide-react';

const ContactSlide = () => {
  return (
    <div className="text-center space-y-8 px-4 sm:px-6">
      {/* Header */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold hero-text">
          Shaping Ideas into Reality
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-secondary font-semibold">
          with 3D Printing Innovation
        </p>
      </div>
      
      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-5xl mx-auto">
        {/* Email */}
        <div className="surface-card p-4 sm:p-6 rounded-xl text-center space-y-2 sm:space-y-3">
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto" />
          <h3 className="text-sm sm:text-base md:text-lg font-semibold">Email</h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            hello@print3degypt.com
          </p>
        </div>

        {/* Phone */}
        <div className="surface-card p-4 sm:p-6 rounded-xl text-center space-y-2 sm:space-y-3">
          <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto" />
          <h3 className="text-sm sm:text-base md:text-lg font-semibold">Phone</h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            +20 100 123 4567
          </p>
        </div>

        {/* Website */}
        <div className="surface-card p-4 sm:p-6 rounded-xl text-center space-y-2 sm:space-y-3">
          <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto" />
          <h3 className="text-sm sm:text-base md:text-lg font-semibold">Website</h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            www.print3degypt.com
          </p>
        </div>
      </div>

      {/* Optional CTA buttons */}
      {/* <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8">
        <Button variant="default" size="lg" className="bg-primary hover:bg-primary-hover w-full sm:w-auto">
          Download Mobile App
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          Schedule Demo
        </Button>
      </div> */}
    </div>
  );
};

export default ContactSlide;