import React, { useState } from 'react';
import { SectionTitle } from './common/SectionTitle';
import { projectsData, projectCategories } from '../data/projects';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

const iconMap = {
  Grid3X3: FolderOpen,
  Globe: FolderOpen,
  Smartphone: FolderOpen,
  Gamepad2: FolderOpen,
  Users: FolderOpen,
  FolderOpen
};

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const getProjectCount = (categoryId: string) => {
    if (categoryId === 'all') return projectsData.length;
    return projectsData.filter(project => project.category === categoryId).length;
  };

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle>My Projects</SectionTitle>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {projectCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const projectCount = getProjectCount(category.id);
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden text-xs md:text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 shadow-xl shadow-yellow-400/30'
                    : 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/80 hover:text-white border border-slate-600 hover:border-slate-500 backdrop-blur-sm'
                }`}
              >
                <IconComponent size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-12' : 'group-hover:rotate-6'} md:w-4 md:h-4`} />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                <span className={`text-xs px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-slate-900/20 text-slate-900' 
                    : 'bg-slate-700 text-gray-400 group-hover:bg-slate-600 group-hover:text-gray-300'
                }`}>
                  {projectCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${project.title}-${activeCategory}`}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-2 border border-slate-700/50 hover:border-slate-600/50"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'slideInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden h-48 md:h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.category === 'web' ? 'bg-blue-500/80 text-white' :
                    project.category === 'android' ? 'bg-green-500/80 text-white' :
                    project.category === 'game' ? 'bg-purple-500/80 text-white' :
                    project.category === 'client' ? 'bg-orange-500/80 text-white' :
                    'bg-gray-500/80 text-white'
                  }`}>
                    {projectCategories.find(cat => cat.id === project.category)?.label || 'Others'}
                  </span>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 md:p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-xs md:text-sm text-gray-300">{project.shortDescription}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-xs md:text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium bg-slate-700/70 text-cyan-400 rounded-md border border-slate-600 hover:border-cyan-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium bg-slate-700/70 text-gray-400 rounded-md border border-slate-600">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col gap-2 md:gap-3 w-full">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-3 py-2 text-xs md:text-sm bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-md font-medium hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-yellow-400/30"
                    >
                      <ExternalLink size={14} className="md:w-4 md:h-4" />
                      Download
                    </a>
                  )}

                  <div className="flex gap-2 md:gap-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 px-3 py-2 text-xs md:text-sm bg-slate-700 text-white rounded-md font-medium hover:bg-slate-600 transition-all duration-300 transform hover:scale-[1.02] border border-slate-600 hover:border-slate-500"
                      >
                        <Github size={14} className="md:w-4 md:h-4" />
                        Code
                      </a>
                    )}

                    {project.videoLink && (
                      <a 
                        href={project.videoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 px-3 py-2 text-xs md:text-sm bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md font-medium hover:from-red-400 hover:to-red-500 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-red-500/30"
                      >
                        <ExternalLink size={14} className="md:w-4 md:h-4" />
                        Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 md:py-16">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-slate-800/50 flex items-center justify-center">
              <FolderOpen size={32} className="text-gray-400 md:w-10 md:h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-2">No Projects Found</h3>
            <p className="text-gray-500 text-sm md:text-base">No projects available in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};