
import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { theme } = useTheme();
  const aboutRef = useScrollAnimation();
  const isDark = theme === 'dark';

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Full-stack development with modern technologies and frameworks"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Creating beautiful, intuitive user interfaces and experiences"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing boundaries with creative solutions and cutting-edge tech"
    }
  ];

  const textColor = isDark ? 'text-white' : 'text-black';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-white/5' : 'bg-black/5';
  const cardBorder = isDark ? 'border-white/10' : 'border-black/10';
  const cardHover = isDark ? 'hover:bg-white/10' : 'hover:bg-black/10';
  const tagBg = isDark ? 'bg-white/10' : 'bg-black/10';
  const tagBorder = isDark ? 'border-white/20' : 'border-black/20';

  return (
    <section 
      id="about" 
      ref={aboutRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 relative z-10 opacity-0 translate-y-8 transition-all duration-1000"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6`}>
            About Me
          </h2>
          <div className={`w-24 h-1 ${isDark ? 'bg-white' : 'bg-black'} mx-auto mb-8`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className={`text-lg ${subtitleColor} leading-relaxed`}>
              I'm a passionate developer who believes in the power of technology to create 
              meaningful experiences. With a keen eye for design and a love for clean code, 
              I bridge the gap between functionality and aesthetics.
            </p>
            <p className={`text-lg ${subtitleColor} leading-relaxed`}>
              My journey in tech has been driven by curiosity and a constant desire to learn. 
              I specialize in creating digital solutions that not only work beautifully but 
              also solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {['React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'Kotlin',  'Java'].map((tech) => (
                <span 
                  key={tech}
                  className={`px-3 py-2 ${tagBg} ${textColor} rounded-full text-sm font-medium border ${tagBorder} hover:scale-105 transition-transform duration-200`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`p-6 ${cardBg} backdrop-blur-sm rounded-lg border ${cardBorder} ${cardHover} transition-all duration-300 transform hover:scale-105 group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${textColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${textColor} mb-2`}>
                      {skill.title}
                    </h3>
                    <p className={subtitleColor}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
