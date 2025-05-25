import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 py-8 px-4 md:px-6 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-yellow-400">Rakib</span> Hossain
            </h2>
            <p className="text-gray-400 text-sm mt-1">Android & Full-Stack Web Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with ❤️ in Bangladesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};