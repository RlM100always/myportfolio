import React, { useState } from 'react';
import { SectionTitle } from './common/SectionTitle';
import { projectsData, projectCategories } from '../data/projects';
import { ExternalLink, Github, Globe, Smartphone, Gamepad2, Users, FolderOpen, Grid3X3 } from 'lucide-react';

const iconMap = {
  Grid3X3,
  Globe,
  Smartphone,
  Gamepad2,
  Users,
  FolderOpen
};

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const getProjectCount = (categoryId: string) => {
    if (categoryId === 'all') return projectsData.length;
    return projectsData.filter(project => project.category === categoryId).length;
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-6 relative">
      <div className="container mx-auto">
        <SectionTitle>My Projects</SectionTitle>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const projectCount = getProjectCount(category.id);
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative flex items-center gap-3 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 shadow-xl shadow-yellow-400/30'
                    : 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/80 hover:text-white border border-slate-600 hover:border-slate-500 backdrop-blur-sm'
                }`}
              >
                <IconComponent size={18} className={`transition-transform duration-300 ${isActive ? 'rotate-12' : 'group-hover:rotate-6'}`} />
                <span className="text-sm">{category.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${project.title}-${activeCategory}`}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'slideInUp 0.6s ease-out forwards'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
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
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6`}>
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.shortDescription}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium bg-slate-700/70 text-cyan-400 rounded-md border border-slate-600 hover:border-cyan-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-lg font-medium text-sm hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
                    >
                      <ExternalLink size={16} />
                      Download
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/70 text-white rounded-lg font-medium text-sm hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-slate-500"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  
                  {project.videoLink && (
                    <a 
                      href={project.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-lg font-medium text-sm hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
                    >
                      <ExternalLink size={16} />
                      Video
                    </a>
                  )}
                  

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800/50 flex items-center justify-center">
              <FolderOpen size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No Projects Found</h3>
            <p className="text-gray-500">No projects available in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};