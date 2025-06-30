import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const heroRef = useScrollAnimation();
  const isDark = theme === 'dark';

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const textColor = isDark ? 'text-white' : 'text-black';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const descColor = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <section 
      ref={heroRef as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center relative z-10 opacity-0 translate-y-8 transition-all duration-1000"
    >
      <div className="text-center px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className={`text-6xl md:text-8xl font-bold ${textColor} mb-4 tracking-tight`}>
            Alexander
            <span className={`bg-gradient-to-r ${isDark ? 'from-white to-gray-300' : 'from-black to-gray-700'} bg-clip-text text-transparent block`}>
              Martin
            </span>
          </h1>
          <p className={`text-xl md:text-2xl ${subtitleColor} max-w-2xl mx-auto leading-relaxed`}>
            Creative Developer & Digital Innovator
          </p>
          <p className={`text-lg ${descColor} mt-4 max-w-xl mx-auto`}>
            Crafting exceptional digital experiences through code, design, and imagination
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button 
            onClick={scrollToAbout}
            className={`gradient-border-button px-8 py-4 ${textColor} font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            style={{
              background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)'
            }}
          >
            Explore My Work
          </button>
          <a 
            href="#contact" 
            className={`gradient-border-button px-8 py-4 ${textColor} font-semibold transition-all duration-300 transform hover:scale-105`}
            style={{
              background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)'
            }}
          >
            Get In Touch
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className={`w-8 h-8 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} cursor-pointer transition-colors`}
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
