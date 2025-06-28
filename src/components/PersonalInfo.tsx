import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Calendar, MapPin, User, GraduationCap, Award, BookOpen, School } from 'lucide-react';

export const PersonalInfo: React.FC = () => {
  const personalDetails = [
    {
      icon: Calendar,
      label: 'Date of Birth',
      value: '12 November 2001',
      color: 'text-blue-400'
    },
    {
      icon: User,
      label: 'Gender',
      value: 'Male',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Nationality',
      value: 'Bangladeshi',
      color: 'text-red-400'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Vill. Tangail, P.O. Tangail Sadar, Upa. Tangail Sadar, Dist. Tangail',
      color: 'text-purple-400'
    }
  ];

  const educationData = [
    {
      degree: 'B.Sc. in Computer Science and Engineering',
      institution: 'University of Dhaka',
      location: 'Dhaka, Bangladesh',
      period: '2022 – Present',
      expectedGraduation: '2026',
      gpa: 'Ongoing',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      degree: 'H.S.C. (Science)',
      institution: 'BAF Shaheen College, Kurmitola',
      location: 'Dhaka Board',
      period: '2020',
      gpa: '5.00/5.00',
      icon: School,
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      degree: 'S.S.C. (Science)',
      institution: 'Sristy Academic School, Tangail',
      location: 'Dhaka Board',
      period: '2018',
      gpa: '5.00/5.00',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="personal-info" className="py-20 px-4 md:px-6 bg-slate-900/50 relative">
      <div className="container mx-auto">
        <SectionTitle>Personal Information</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Personal Details */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                <User size={24} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-white">Personal Details</h3>
            </div>
            
            <div className="space-y-6">
              {personalDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <div 
                    key={detail.label}
                    className="group flex items-start gap-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      opacity: 0,
                      animation: 'slideInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-slate-600/50 flex items-center justify-center ${detail.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-300 mb-1">{detail.label}</h4>
                      <p className="text-white leading-relaxed">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src="https://avatars.githubusercontent.com/u/109984220?s=400&u=830ae2d7210f7a7b6ca3efbe266e2d99faf79e86&v=4"
                alt="Rakib Hossain"
                className="relative rounded-3xl w-80 h-80 object-cover border-4 border-yellow-400/50 shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center border-4 border-slate-900 shadow-lg">
                <GraduationCap size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Educational Background</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((education, index) => {
              const IconComponent = education.icon;
              return (
                <div 
                  key={education.degree}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 border border-slate-700/50"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    opacity: 0,
                    animation: 'slideInUp 0.7s ease-out forwards'
                  }}
                >
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={education.image} 
                      alt={education.degree} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${education.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-slate-600">
                        {education.period}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {education.degree}
                    </h4>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <School size={16} className="text-cyan-400" />
                        <span className="text-gray-300 text-sm">{education.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-green-400" />
                        <span className="text-gray-300 text-sm">{education.location}</span>
                      </div>
                      {education.expectedGraduation && (
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-purple-400" />
                          <span className="text-gray-300 text-sm">Expected: {education.expectedGraduation}</span>
                        </div>
                      )}
                    </div>

                    {/* GPA Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-yellow-400" />
                        <span className="text-gray-400 text-sm">GPA:</span>
                      </div>
                      <div className={`px-4 py-2 rounded-xl font-bold text-sm ${
                        education.gpa === 'Ongoing' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                      }`}>
                        {education.gpa}
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${education.color} opacity-10 rounded-tl-full`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Achievements Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Perfect GPA in HSC', value: '5.00/5.00', icon: Award, color: 'yellow' },
            { label: 'Perfect GPA in SSC', value: '5.00/5.00', icon: Award, color: 'green' },
            { label: 'Current University', value: 'University of Dhaka', icon: GraduationCap, color: 'blue' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="group text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                  stat.color === 'yellow' ? 'from-yellow-400 to-orange-400' :
                  stat.color === 'green' ? 'from-green-400 to-emerald-400' :
                  'from-blue-400 to-indigo-400'
                } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <div className={`text-2xl font-bold mb-2 ${
                  stat.color === 'yellow' ? 'text-yellow-400' :
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