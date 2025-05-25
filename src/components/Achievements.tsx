import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { achievementsData } from '../data/achievements';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4 md:px-6 bg-slate-900/50 relative">
      <div className="container mx-auto">
        <SectionTitle>Achievements</SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {achievementsData.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={achievement.title}
                className="achievement-card group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background pulse effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-blue-500/10 to-transparent group-hover:animate-pulse-slow"></div>
                </div>
                
                <div className="relative z-10">
                  <div 
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-700/70 text-3xl mb-6 mx-auto transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" 
                    style={{ color: achievement.iconColor }}
                  >
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  {achievement.description && (
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};