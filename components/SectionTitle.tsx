
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-12 mt-6 bg-orange-500 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
