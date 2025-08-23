import { useState } from 'react';
import Header from './Header';
import SlideNavigation from './SlideNavigation';
import { Slide } from './types';
import TitleSlide from './slides/TitleSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import ServicesSlide from './slides/ServicesSlide';
import ApplicationsSlide from './slides/ApplicationsSlide';
import AdvantagesSlide from './slides/AdvantagesSlide';
import TargetSlide from './slides/TargetSlide';
import ContactSlide from './slides/ContactSlide';
import RevenueSlide from './slides/RevenueSlide';
import VisionSlide from './slides/VisionSlide';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 'title',
      title: 'Print3D Egypt',
      subtitle: 'Revolutionizing 3D Printing Services in Egypt',
      content: <TitleSlide />
    },
    {
      id: 'problem',
      title: 'The Problem',
      subtitle: 'Limited Access to 3D Printing in MENA',
      content: <ProblemSlide />
    },
    {
      id: 'solution',
      title: 'Our Solution',
      subtitle: 'Complete Digital Platform for 3D Innovation',
      content: <SolutionSlide />
    },
    {
      id: 'services',
      title: 'Services Offered',
      subtitle: 'End-to-End 3D Solutions',
      content: <ServicesSlide />
    },
    {
      id: 'applications',
      title: 'Market Applications',
      subtitle: '3D Printing Across Industries',
      content: <ApplicationsSlide />
    },
    {
      id: 'advantages',
      title: 'Competitive Advantages',
      subtitle: 'Why Choose Print3D Egypt',
      content: <AdvantagesSlide />
    },
    // {
    //   id: 'revenue',
    //   title: 'Revenue Model',
    //   subtitle: 'Sustainable Business Growth',
    //   content: <RevenueSlide />
    // },
    {
      id: 'target',
      title: 'Target Audience',
      subtitle: 'Our Customer Segments',
      content: <TargetSlide />
    },
    // {
    //   id: 'vision',
    //   title: 'Future Vision',
    //   subtitle: 'Expanding Across MENA',
    //   content: <VisionSlide />
    // },
    // {
    //   id: 'contact',
    //   title: 'Let\'s Shape the Future',
    //   subtitle: 'Contact Print3D Egypt',
    //   content: <ContactSlide />
    // }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-background via-surface to-surface-variant">
      {/* Header takes fixed height */}
      <Header
        currentSlide={currentSlide}
        totalSlides={slides.length}
        goToSlide={goToSlide}
        className="h-14 sm:h-16"
      />

      {/* Main content area */}
      <main className="flex-grow overflow-auto pb-24 sm:pb-20">
        <div className="h-full flex items-center justify-center container mx-auto px-4 sm:px-6 md:px-8 py-4">
          <div className="w-full max-w-full sm:max-w-3xl lg:max-w-6xl slide-transition">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Navigation */}
      <div className="fixed bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-[95%] sm:w-3/4 px-2">
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          slideTitle={slides[currentSlide].title}
          onNext={nextSlide}
          onPrev={prevSlide}
        />
      </div>
    </div>
  );
};

export default PitchDeck;