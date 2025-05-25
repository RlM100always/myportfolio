import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current && textRef.current) {
      imageRef.current.style.opacity = '1';
      imageRef.current.style.transform = 'translateY(0)';
      
      const elements = textRef.current.querySelectorAll('.animate-in');
      elements.forEach((element, index) => {
        setTimeout(() => {
          (element as HTMLElement).style.opacity = '1';
          (element as HTMLElement).style.transform = 'translateY(0)';
        }, 300 + index * 100);
      });
    }
  }, []);

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      window.scrollTo({
        top: skillsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-24 pb-16 px-4 md:px-6 flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            className="lg:w-1/3 flex justify-center"
          >
            <img
              ref={imageRef}
              src="https://avatars.githubusercontent.com/u/109984220?s=400&u=830ae2d7210f7a7b6ca3efbe266e2d99faf79e86&v=4"
              alt="Rakib Hossain"
              className="rounded-full w-64 h-64 object-cover border-4 border-yellow-400 shadow-lg shadow-cyan-500/20 opacity-0 transform translate-y-8 transition-all duration-700"
            />
          </div>

          <div 
            ref={textRef}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <h2 className="animate-in text-lg text-cyan-400 font-medium mb-3 opacity-0 transform translate-y-8 transition-all duration-700">
              Hello, I am
            </h2>
            <h1 className="animate-in text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 transform translate-y-8 transition-all duration-700">
              <span className="text-yellow-400">Rakib</span> Hossain
            </h1>
            <h3 className="animate-in text-xl md:text-2xl text-gray-300 mb-6 opacity-0 transform translate-y-8 transition-all duration-700">
              Android & Full-Stack Web Developer
            </h3>
            <p className="animate-in text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0 transform translate-y-8 transition-all duration-700">
              A <span className="text-white font-medium">passionate developer</span> with 3+ years of experience in <span className="text-white font-medium">Android</span> and <span className="text-white font-medium">Web Development</span>. I specialize in creating high-performance mobile apps and scalable web applications.
            </p>
            
            <div className="animate-in flex flex-wrap justify-center lg:justify-start gap-4 opacity-0 transform translate-y-8 transition-all duration-700">
              <a 
                href="https://drive.google.com/file/d/1_c5VHsD0ojWLrvEniRDuE5DE8372qLPL/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-yellow-400 text-slate-900 font-bold transition-transform hover:shadow-lg hover:shadow-yellow-400/20 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Download CV
              </a>
              
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-6 py-3 rounded-full bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold transition-all hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-bounce">
          <button 
            onClick={scrollToSkills}
            className="p-2 rounded-full border border-gray-500 text-gray-400 hover:text-white hover:border-white transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};