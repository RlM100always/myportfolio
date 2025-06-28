import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { achievementsData } from '../data/achievements';
import { ExternalLink } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-20 px-4 md:px-6 bg-slate-900/50 relative">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle>Achievements</SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-12">
          {achievementsData.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={achievement.title}
                className="achievement-card group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg overflow-hidden border border-slate-700/50 hover:border-slate-600/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background pulse effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-blue-500/10 to-transparent group-hover:animate-pulse-slow"></div>
                </div>
                
                <div className="relative z-10 flex flex-col items-center h-full w-full">
                  <div 
                    className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-700/70 text-2xl md:text-3xl mb-4 md:mb-6 mx-auto transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" 
                    style={{ color: achievement.iconColor }}
                  >
                    <IconComponent size={28} className="md:w-8 md:h-8" />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold mb-2 leading-tight">{achievement.title}</h3>
                  {achievement.description && (
                    <p className="text-gray-400 text-xs md:text-sm mb-4 flex-grow leading-relaxed text-center">{achievement.description}</p>
                  )}

                  {/* Achievement Links */}
                  {achievement.links && achievement.links.length > 0 && (
                    <div className="mt-auto w-full space-y-2">
                      {achievement.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs md:text-sm bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-lg font-medium hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-yellow-400/30"
                        >
                          <ExternalLink size={12} className="md:w-3.5 md:h-3.5" />
                          <span className="truncate">{link.label}</span>
                        </a>
                      ))}
                    </div>
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