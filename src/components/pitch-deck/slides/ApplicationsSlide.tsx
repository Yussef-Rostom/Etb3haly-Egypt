import applicationsImage from '@/assets/applications-showcase.jpg';

const ApplicationsSlide = () => {
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-text text-center">Diverse Industry Applications</h2>
      
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-4 sm:mb-6 md:mb-8">
        <img 
          src={applicationsImage} 
          alt="3D printing applications showcase" 
          className="w-full h-40 sm:h-48 md:h-64 object-cover"
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        <div className="surface-card p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-center">
          <h3 className="font-semibold text-primary text-sm sm:text-base md:text-lg">Education</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Student projects & prototyping</p>
        </div>
        
        <div className="surface-card p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-center">
          <h3 className="font-semibold text-secondary text-sm sm:text-base md:text-lg">Healthcare</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Medical models & prosthetics</p>
        </div>
        
        <div className="surface-card p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-center">
          <h3 className="font-semibold text-accent text-sm sm:text-base md:text-lg">Architecture</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Design models & prototypes</p>
        </div>
        
        <div className="surface-card p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-center">
          <h3 className="font-semibold text-primary text-sm sm:text-base md:text-lg">Manufacturing</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Rapid prototyping solutions</p>
        </div>
        
        <div className="surface-card p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-center">
          <h3 className="font-semibold text-secondary text-sm sm:text-base md:text-lg">Creative Arts</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Art, jewelry & fashion</p>
        </div>
        
        <div className="surface-card p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl text-center">
          <h3 className="font-semibold text-accent text-sm sm:text-base md:text-lg">Automotive</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Parts & customization</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSlide;