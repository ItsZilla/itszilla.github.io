
import React from 'react';
import { ExternalLink, Github, Clock, Lightbulb } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { theme } = useTheme();
  const portfolioRef = useScrollAnimation();
  const isDark = theme === 'dark';

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring real-time inventory management and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      status: "completed"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with machine learning insights, real-time data visualization, and predictive modeling.",
      technologies: ["Python", "React", "TensorFlow", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      status: "completed"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for fitness tracking with social features and personalized workout plans.",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      github: "#",
      live: "#",
      status: "completed"
    }
  ];

  const futureProjects = [
    {
      title: "AR Interior Designer",
      description: "Augmented reality app for visualizing furniture and decor in real spaces using WebXR and Three.js.",
      technologies: ["Three.js", "WebXR", "React", "AI"],
      status: "planning"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting platform built on Ethereum with smart contracts and zero-knowledge proofs.",
      technologies: ["Solidity", "Web3.js", "React", "IPFS"],
      status: "research"
    },
    {
      title: "Neural Network Composer",
      description: "AI-powered music composition tool that generates melodies based on emotional input and musical theory.",
      technologies: ["TensorFlow", "Web Audio API", "React", "Python"],
      status: "concept"
    }
  ];

  const textColor = isDark ? 'text-white' : 'text-black';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-white/5' : 'bg-black/5';
  const cardBorder = isDark ? 'border-white/10' : 'border-black/10';
  const cardHover = isDark ? 'hover:bg-white/10' : 'hover:bg-black/10';

  return (
    <section 
      id="portfolio" 
      ref={portfolioRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 relative z-10 opacity-0 translate-y-8 transition-all duration-1000"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6`}>
            My Portfolio
          </h2>
          <div className={`w-24 h-1 ${isDark ? 'bg-white' : 'bg-black'} mx-auto mb-8`}></div>
          <p className={`text-xl ${subtitleColor} max-w-2xl mx-auto`}>
            A showcase of projects that demonstrate my passion for creating innovative solutions
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className={`text-2xl font-bold ${textColor} mb-8 text-center`}>Completed Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`${cardBg} backdrop-blur-sm rounded-lg border ${cardBorder} overflow-hidden ${cardHover} transition-all duration-300 transform hover:scale-105 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-semibold ${textColor} mb-3`}>
                    {project.title}
                  </h3>
                  <p className={`${subtitleColor} mb-4 text-sm leading-relaxed`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 ${isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'} rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className={`gradient-border-button flex items-center space-x-2 px-4 py-2 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                      style={{
                        background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className={`gradient-border-button flex items-center space-x-2 px-4 py-2 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                      style={{
                        background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-2xl font-bold ${textColor} mb-8 text-center`}>Future Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureProjects.map((project, index) => (
              <div 
                key={index}
                className={`${cardBg} backdrop-blur-sm rounded-lg border ${cardBorder} p-6 ${cardHover} transition-all duration-300 transform hover:scale-105 group relative overflow-hidden`}
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="absolute top-4 right-4">
                  {project.status === 'planning' && <Clock className="w-5 h-5 text-blue-400" />}
                  {project.status === 'research' && <Lightbulb className="w-5 h-5 text-yellow-400" />}
                  {project.status === 'concept' && <Lightbulb className="w-5 h-5 text-purple-400" />}
                </div>
                
                <h3 className={`text-xl font-semibold ${textColor} mb-3 pr-8`}>
                  {project.title}
                </h3>
                <p className={`${subtitleColor} mb-4 text-sm leading-relaxed`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 ${isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'} rounded-full text-xs font-medium border ${isDark ? 'border-white/20' : 'border-black/20'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={`text-xs ${subtitleColor} uppercase tracking-wide font-semibold`}>
                  Status: {project.status}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
