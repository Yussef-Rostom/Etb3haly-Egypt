import { Box } from 'lucide-react';

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  className?: string;
}

const Header = ({ currentSlide, totalSlides, goToSlide }: HeaderProps) => {
  return (
    <header className="border-b border-border/50 backdrop-blur-md bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          
          {/* Logo + Title */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Box className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold hero-text">
              Etb3haly Egypt
            </span>
          </div>
          
          {/* Slide Counter + Indicators */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-xs sm:text-sm text-muted-foreground">
              {currentSlide + 1} / {totalSlides}
            </span>
            
            <div className="flex space-x-1 sm:space-x-1.5">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-primary' 
                      : 'bg-muted'
                  } w-2 h-2 sm:w-2.5 sm:h-2.5`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;