import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, nextSlide, prevSlide }) => {
  return (
    <div className="absolute bottom-6 right-6 z-50 flex items-center gap-4">
      <div className="bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold">
        {currentSlide + 1} / {totalSlides}
      </div>
      <div className="flex gap-2">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-black/60 hover:bg-black/30 backdrop-blur-md text-white disabled:opacity-40 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-full bg-primary hover:bg-primary/80 text-white shadow-lg disabled:opacity-30 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};