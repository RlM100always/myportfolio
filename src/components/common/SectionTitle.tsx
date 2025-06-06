import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
        {children}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
      </h2>
    </div>
  );
};