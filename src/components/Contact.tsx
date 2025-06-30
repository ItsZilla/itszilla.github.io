
import React from 'react';
import { MessageSquareDot, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const contactRef = useScrollAnimation();
  const isDark = theme === 'dark';

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com",
      label: "Twitter"
    },
    {
      icon: <MessageSquareDot className="w-6 h-6" />,
      href: "mailto:alexander@example.com",
      label: "Email"
    }
  ];

  const textColor = isDark ? 'text-white' : 'text-black';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-white/5' : 'bg-black/5';
  const cardBorder = isDark ? 'border-white/10' : 'border-black/10';
  const inputBg = isDark ? 'bg-white/5' : 'bg-black/5';
  const inputBorder = isDark ? 'border-white/20' : 'border-black/20';
  const placeholderColor = isDark ? 'placeholder-gray-400' : 'placeholder-gray-500';

  return (
    <section 
      id="contact" 
      ref={contactRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 relative z-10 opacity-0 translate-y-8 transition-all duration-1000"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6`}>
            Let's Connect
          </h2>
          <div className={`w-24 h-1 ${isDark ? 'bg-white' : 'bg-black'} mx-auto mb-8`}></div>
          <p className={`text-xl ${subtitleColor} max-w-2xl mx-auto`}>
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-12">
          <div className="space-y-8">
            <div className={`${cardBg} backdrop-blur-sm rounded-lg border ${cardBorder} p-8`}>
              <h3 className={`text-2xl font-semibold ${textColor} mb-6 text-center`}>
                Get in Touch
              </h3>
              <div className="space-y-4 mx-auto w-max">
                <div className="flex items-center space-x-4">
                  <MapPin className={`w-5 h-5 ${subtitleColor}`} />
                  <span className={subtitleColor}>West Virginia</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageSquareDot className={`w-5 h-5 ${subtitleColor}`} />
                  <a 
                    href="mailto:alexander@example.com"
                    className={`${subtitleColor} ${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors`}
                  >
                    Discord: ziilla.
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className={`text-lg font-semibold text-center ${textColor} mb-4`}>
                  Follow Me
                </h4>
                <div className="flex space-x-4 justify-center">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 ${cardBg} border ${cardBorder} rounded-lg ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-black hover:bg-black/10'} transition-all duration-300 transform hover:scale-110 group relative overflow-hidden`}
                      aria-label={link.label}
                    >
                      <div className="relative z-10">
                        {link.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
