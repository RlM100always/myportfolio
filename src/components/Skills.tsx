import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle>My Skills</SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-12">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden border border-slate-700/50 hover:border-slate-600/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background glow effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-glow transition-opacity duration-700"
                ></div>
                
                <div className="relative z-10">
                  <div 
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-700/70 mb-3 md:mb-4 mx-auto transform transition-transform duration-500 group-hover:scale-110" 
                    style={{ color: skill.color }}
                  >
                    <IconComponent size={24} className="md:w-7 md:h-7" />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-center mb-2 leading-tight">{skill.name}</h3>
                  <p className="text-gray-400 text-center text-xs md:text-sm leading-relaxed">{skill.technologies}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};