import React, { useState, useEffect, useCallback } from 'react';
import { TOTAL_SLIDES, SlideIndex } from './types';
import { Navigation } from './components/Navigation';
import {
  Slide1_Title,
  Slide2_Problem,
  Slide3_Solution,
  Slide4_Market,
  Slide5_WhyNow,
  Slide6_Product,
  Slide7_Competition,
  Slide8_BusinessModel,
  Slide9_Traction,
  Slide10_GTM,
  Slide11_Team,
  Slide12_Finance,
  Slide13_Roadmap,
  Slide14_Closing
} from './components/Slides';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-full h-screen bg-gray-900 relative overflow-hidden font-sans">
      <div className="w-full h-full relative">
        <Slide1_Title isActive={currentSlide === SlideIndex.Title} />
        <Slide2_Problem isActive={currentSlide === SlideIndex.Problem} />
        <Slide3_Solution isActive={currentSlide === SlideIndex.Solution} />
        <Slide4_Market isActive={currentSlide === SlideIndex.Market} />
        <Slide5_WhyNow isActive={currentSlide === SlideIndex.WhyNow} />
        <Slide6_Product isActive={currentSlide === SlideIndex.Product} />
        <Slide7_Competition isActive={currentSlide === SlideIndex.Competition} />
        <Slide8_BusinessModel isActive={currentSlide === SlideIndex.BusinessModel} />
        <Slide9_Traction isActive={currentSlide === SlideIndex.Traction} />
        <Slide10_GTM isActive={currentSlide === SlideIndex.GoToMarket} />
        <Slide11_Team isActive={currentSlide === SlideIndex.Team} />
        <Slide12_Finance isActive={currentSlide === SlideIndex.Finance} />
        <Slide13_Roadmap isActive={currentSlide === SlideIndex.Roadmap} />
        <Slide14_Closing isActive={currentSlide === SlideIndex.Closing} />
      </div>

      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={TOTAL_SLIDES} 
        nextSlide={nextSlide} 
        prevSlide={prevSlide} 
      />
    </div>
  );
};

export default App;