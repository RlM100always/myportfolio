import React, { useState } from 'react';
import { SectionTitle } from './common/SectionTitle';
import { certificatesData, certificateCategories } from '../data/certificates';
import { ExternalLink, Calendar, Award, Code2, Globe, Smartphone, Database, BookOpen, Star, CheckCircle, Shield, Zap, Trophy, Medal } from 'lucide-react';

const iconMap = {
  Award,
  Code2,
  Globe,
  Smartphone,
  Database,
  BookOpen
};

export const Certificates: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCertificates = activeCategory === 'all' 
    ? certificatesData 
    : certificatesData.filter(cert => cert.category === activeCategory);

  const getCertificateCount = (categoryId: string) => {
    if (categoryId === 'all') return certificatesData.length;
    return certificatesData.filter(cert => cert.category === categoryId).length;
  };

  // Premium freeCodeCamp certificate design
  const FreeCodeCampCertificate = ({ certificate, index }: { certificate: any, index: number }) => (
    <div 
      className="group relative bg-gradient-to-br from-emerald-900/40 via-slate-800/60 to-teal-900/40 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-emerald-500/30 transform hover:-translate-y-4 border border-emerald-500/30 backdrop-blur-sm"
      style={{
        animationDelay: `${index * 150}ms`,
        opacity: 0,
        animation: 'slideInUp 0.8s ease-out forwards'
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-400/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-emerald-300/50 rounded-full animate-bounce"></div>
      </div>

      {/* Premium header with certification badge */}
      <div className="relative p-8 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 border-b border-emerald-400/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <Code2 size={28} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Shield size={12} className="text-yellow-900" />
              </div>
            </div>
            <div>
              <h4 className="text-emerald-300 font-bold text-lg">freeCodeCamp</h4>
              <p className="text-emerald-200/80 text-sm flex items-center gap-2">
                <CheckCircle size={14} />
                Verified Professional Certificate
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-emerald-300 text-xs font-medium">Premium Certification</span>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="relative p-8">
        <div className="text-center mb-8">
          <div className="relative mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
              <Trophy size={36} className="text-white" />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
              CERTIFIED
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
            Full Stack Web Development
          </h3>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/20 rounded-2xl border border-emerald-400/30 mb-6">
            <Medal size={20} className="text-emerald-400" />
            <span className="text-emerald-200 font-semibold">Professional Developer</span>
          </div>
        </div>

        {/* Skills matrix */}
        <div className="mb-8">
          <h5 className="text-emerald-300 font-bold mb-4 text-center flex items-center justify-center gap-2">
            <Zap size={16} />
            Technology Stack Mastered
          </h5>
          <div className="grid grid-cols-3 gap-3">
            {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'].map((tech, i) => (
              <div key={tech} className="group/tech bg-slate-700/40 rounded-xl p-3 text-center border border-slate-600/50 hover:border-emerald-400/50 transition-all duration-300">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mx-auto mb-2 group-hover/tech:animate-pulse"></div>
                <span className="text-gray-300 text-xs font-medium group-hover/tech:text-emerald-300 transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate details with enhanced styling */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-600/50">
            <span className="text-gray-400 font-medium">Certification Authority:</span>
            <span className="text-emerald-400 font-bold">freeCodeCamp.org</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-600/50">
            <span className="text-gray-400 font-medium">Completion Date:</span>
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar size={16} />
              <span className="font-medium">{certificate.date}</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-600/50">
            <span className="text-gray-400 font-medium">Learning Hours:</span>
            <span className="text-yellow-400 font-bold">300+ Hours</span>
          </div>
        </div>

        {/* Enhanced description */}
        <div className="mb-8">
          <div className="p-6 bg-gradient-to-r from-slate-800/60 to-slate-700/60 rounded-2xl border border-slate-600/50">
            <p className="text-gray-300 leading-relaxed text-center">
              {certificate.description}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        {certificate.credentialUrl && (
          <div className="space-y-4">
            <a 
              href={certificate.credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/30"
            >
              <ExternalLink size={20} />
              View Official Certificate
            </a>
            
            {/* Verification badge */}
            <div className="flex items-center justify-center gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-400/30">
              <CheckCircle size={18} className="text-emerald-400" />
              <span className="text-emerald-300 font-medium">Verified by freeCodeCamp.org</span>
            </div>
          </div>
        )}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-400/20 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-400/20 to-transparent rounded-tr-full"></div>
    </div>
  );

  // Modern card design for regular certificates
  const ModernCertificate = ({ certificate, index }: { certificate: any, index: number }) => (
    <div 
      className="group relative bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 border border-slate-600/50 backdrop-blur-sm"
      style={{
        animationDelay: `${index * 120}ms`,
        opacity: 0,
        animation: 'slideInUp 0.7s ease-out forwards'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Image section with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={certificate.image} 
          alt={certificate.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        
        {/* Category badge with enhanced styling */}
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md border ${
            certificate.category === 'web' ? 'bg-blue-500/80 text-white border-blue-400/50' :
            certificate.category === 'android' ? 'bg-green-500/80 text-white border-green-400/50' :
            certificate.category === 'programming' ? 'bg-purple-500/80 text-white border-purple-400/50' :
            certificate.category === 'database' ? 'bg-orange-500/80 text-white border-orange-400/50' :
            'bg-gray-500/80 text-white border-gray-400/50'
          }`}>
            {certificateCategories.find(cat => cat.id === certificate.category)?.label || 'Other'}
          </span>
        </div>
        
        {/* Floating certificate icon */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
          <Award size={20} className="text-yellow-400" />
        </div>
        
        {/* Bottom overlay with title preview */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {certificate.title}
          </h3>
          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {certificate.issuer}
          </p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-6 relative">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {certificate.title}
          </h3>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Award size={14} className="text-white" />
              </div>
              <span className="text-cyan-400 font-semibold text-sm">{certificate.issuer}</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Calendar size={14} />
              <span>{certificate.date}</span>
            </div>
          </div>
        </div>
        
        {/* Description with enhanced styling */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm leading-relaxed p-4 bg-slate-800/50 rounded-xl border border-slate-600/30">
            {certificate.description}
          </p>
        </div>
        
        {/* Action button with modern design */}
        {certificate.credentialUrl && (
          <div className="space-y-3">
            <a 
              href={certificate.credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-xl font-bold text-sm hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/30"
            >
              <ExternalLink size={16} />
              View Credential
            </a>
            
            {/* Verification indicator */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <CheckCircle size={12} className="text-green-400" />
              <span>Verified Certificate</span>
            </div>
          </div>
        )}
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full"></div>
    </div>
  );

  return (
    <section id="certificates" className="py-20 px-4 md:px-6 bg-slate-900/50 relative">
      <div className="container mx-auto">
        <SectionTitle>Certificates </SectionTitle>
        
        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {certificateCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const certificateCount = getCertificateCount(category.id);
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
                {/* Background animation */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-700 ${
                  isActive ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'
                }`}></div>
                
                <div className="relative flex items-center gap-3">
                  <IconComponent size={20} className={`transition-transform duration-300 ${isActive ? 'rotate-12' : 'group-hover:rotate-6'}`} />
                  <span>{category.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    isActive 
                      ? 'bg-slate-900/30 text-slate-900' 
                      : 'bg-slate-700 text-gray-400 group-hover:bg-slate-600 group-hover:text-gray-300'
                  }`}>
                    {certificateCount}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid with improved spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredCertificates.map((certificate, index) => {
            // Special treatment for freeCodeCamp certificate
            if (certificate.title === 'Full Stack Web Development' && certificate.issuer === 'freeCodeCamp') {
              return (
                <div key={`${certificate.title}-${activeCategory}`} className="md:col-span-2 lg:col-span-1">
                  <FreeCodeCampCertificate certificate={certificate} index={index} />
                </div>
              );
            }
            
            return (
              <ModernCertificate 
                key={`${certificate.title}-${activeCategory}`}
                certificate={certificate} 
                index={index} 
              />
            );
          })}
        </div>

        {/* Enhanced Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center border border-slate-600">
              <Award size={40} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-3">No Certificates Found</h3>
            <p className="text-gray-500 max-w-md mx-auto">No certificates available in this category yet. Check back soon for new achievements!</p>
          </div>
        )}

        {/* Enhanced Statistics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Certificates', value: certificatesData.length, color: 'yellow', icon: Trophy },
            { label: 'Issuing Organizations', value: new Set(certificatesData.map(cert => cert.issuer)).size, color: 'cyan', icon: Award },
            { label: 'Programming Certs', value: certificatesData.filter(cert => cert.category === 'programming').length, color: 'green', icon: Code2 },
            { label: 'Web Dev Certs', value: certificatesData.filter(cert => cert.category === 'web').length, color: 'blue', icon: Globe }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="group text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                  stat.color === 'yellow' ? 'from-yellow-400 to-orange-400' :
                  stat.color === 'cyan' ? 'from-cyan-400 to-blue-400' :
                  stat.color === 'green' ? 'from-green-400 to-emerald-400' :
                  'from-blue-400 to-indigo-400'
                } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  stat.color === 'yellow' ? 'text-yellow-400' :
                  stat.color === 'cyan' ? 'text-cyan-400' :
                  stat.color === 'green' ? 'text-green-400' :
                  'text-blue-400'
                }`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};