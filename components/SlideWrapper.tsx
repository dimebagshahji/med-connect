import React, { ReactNode } from 'react';

interface SlideWrapperProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, isActive, className = '' }) => {
  if (!isActive) return null;
  
  return (
    <div className={`w-full h-screen absolute top-0 left-0 overflow-hidden flex flex-col ${className}`}>
      {children}
    </div>
  );
};