import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  slideTitle: string;
  onNext: () => void;
  onPrev: () => void;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  slideTitle,
  onNext,
  onPrev
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-3">
      <div
        className="
          flex flex-row items-center justify-between
          gap-2 sm:gap-4
          surface-card px-3 py-2 sm:px-5 sm:py-3
          rounded-full shadow-md
          w-[350px] sm:w-[350px]
        "
      >
        {/* Previous Button */}
        <Button
          variant="outline"
          size="icon"
          className="w-9 h-9 sm:w-9 sm:h-9"
          onClick={onPrev}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Slide Title */}
        <span
          className="
            text-xs sm:text-sm md:text-base 
            font-medium text-center truncate
            max-w-[120px] sm:max-w-[200px]
          "
        >
          {slideTitle}
        </span>

        {/* Next Button */}
        <Button
          variant="outline"
          size="icon"
          className="w-9 h-9 sm:w-9 sm:h-9"
          onClick={onNext}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SlideNavigation;