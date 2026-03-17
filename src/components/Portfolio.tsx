
import React, { useState } from 'react';
import { ExternalLink, Github, Clock, Lightbulb, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { theme } = useTheme();
  const portfolioRef = useScrollAnimation();
  const isDark = theme === 'dark';
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const projects = [
    {
      title: "aitui",
      description: "Artificial Intelligence Terminal User Interface (AITUI) powered by local LLM's using Ollama.",
      technologies: ["Python", "Ollama", "TUI"],
      image: "screenshots/aitui.png",
      github: "https://github.com/ItsZilla/aitui",
      status: "completed"
    },
    {
      title: "itszilla.github.io",
      description: "Personal portfolio website built with React, TypeScript, and Vite.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"],
      image: "screenshots/portfolio.png",
      github: "https://github.com/ItsZilla/itszilla.github.io",
      status: "completed"
    },
    {
      title: "ExtremeBiolink",
      description: "The high-fidelity, gamified bio link platform. Move beyond static lists to immersive digital experiences.",
      technologies: ["TypeScript", "React", "Next.js", "Framer Motion"],
      image: "screenshots/extremebio.png",
      github: "https://github.com/ItsZilla/ExtremeBiolink",
      status: "completed"
    },
    {
      title: "gaswatch",
      description: "Serverless gas price change notifier",
      technologies: ["TypeScript", "React", "Next.js", "Vercel"],
      image: "screenshots/gaswatch.png",
      github: "https://github.com/ItsZilla/gaswatch",
      status: "completed"
    },
    {
      title: "oip-operations",
      description: "Full-stack monorepo for restaurant operations management, including POS, inventory, and online ordering.",
      technologies: ["TypeScript", "Node.js", "React", "PostgreSQL"],
      image: "screenshots/oip.png",
      github: "https://github.com/ItsZilla/oip-operations",
      status: "completed"
    },
    {
      title: "SkyCommand",
      description: "Minecraft plugin that adds highly customizable commands and administrative tools.",
      technologies: ["Kotlin", "Spigot API", "Minecraft"],
      image: "screenshots/placeholder.png",
      github: "https://github.com/ItsZilla/SkyCommand",
      status: "completed"
    },
    {
      title: "Covet",
      description: "A wishlist web application to save and organize products you want to buy later.",
      technologies: ["TypeScript", "React", "Supabase", "Web App"],
      image: "screenshots/covet.png",
      github: "https://github.com/ItsZilla/Covet",
      status: "completed"
    },
    {
      title: "SkyBackup",
      description: "Automated Minecraft server backup system designed for reliability and ease of use.",
      technologies: ["Python", "Automation", "Minecraft"],
      image: "screenshots/placeholder.png",
      github: "https://github.com/ItsZilla/SkyBackup",
      status: "completed"
    },
    {
      title: "SkyWarzone",
      description: "Minecraft plugin adding Envoys, King of the Hill, and advanced warzone management.",
      technologies: ["Kotlin", "Spigot API", "Minecraft"],
      image: "screenshots/placeholder.png",
      github: "https://github.com/ItsZilla/SkyWarzone",
      status: "completed"
    },
    {
      title: "SkyContainers",
      description: "Minecraft plugin adding specialized hoppers, crop hoppers, and automated sell chests.",
      technologies: ["Kotlin", "Spigot API", "Minecraft"],
      image: "screenshots/placeholder.png",
      github: "https://github.com/ItsZilla/SkyContainers",
      status: "completed"
    },
    {
      title: "f1-app",
      description: "Formula 1 tracking application providing real-time data and race statistics.",
      technologies: ["TypeScript", "React", "F1 API"],
      image: "screenshots/f1app.png",
      github: "https://github.com/ItsZilla/f1-app",
      status: "completed"
    },
    {
      title: "SkyUpdate",
      description: "Python utility for automatically updating Minecraft server plugins across multiple instances.",
      technologies: ["Python", "Automation", "Minecraft"],
      image: "screenshots/placeholder.png",
      github: "https://github.com/ItsZilla/SkyUpdate",
      status: "completed"
    },
    {
      title: "JudgeMyPost",
      description: "Reddit scraper and automated video generator for social media content creation.",
      technologies: ["Python", "Scraper", "Video Generation"],
      image: "screenshots/placeholder.png",
      github: "https://github.com/ItsZilla/JudgeMyPost",
      status: "completed"
    },
    {
      title: "SkyWaves",
      description: "Minecraft plugin for chat-based interactions, including GG waves and giveaways.",
      technologies: ["Kotlin", "Spigot API", "Minecraft"],
      image: "screenshots/placeholder.png",
      github: "https://github.com/ItsZilla/SkyWaves",
      status: "completed"
    },
    {
      title: "SkyKingdom",
      description: "Custom Discord bot for the SkyKingdom community, featuring moderation and economy systems.",
      technologies: ["JavaScript", "Discord.js", "Node.js"],
      image: "screenshots/placeholder.png",
      github: "https://github.com/ItsZilla/SkyKingdom",
      status: "completed"
    },
    {
      title: "SkySync",
      description: "Minecraft plugin linking DiscordSRV with custom synchronization commands.",
      technologies: ["Java", "Spigot API", "DiscordSRV"],
      image: "screenshots/placeholder.png",
      github: "https://github.com/ItsZilla/SkySync",
      status: "completed"
    },
  ];

  const textColor = isDark ? 'text-white' : 'text-black';
  const subtitleColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-white/5' : 'bg-black/5';
  const cardBorder = isDark ? 'border-white/10' : 'border-black/10';
  const cardHover = isDark ? 'hover:bg-white/10' : 'hover:bg-black/10';

  return (
    <>
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
          <h3 className={`text-2xl font-bold ${textColor} mb-8 text-center`}>Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${cardBg} backdrop-blur-sm rounded-lg border ${cardBorder} overflow-hidden ${cardHover} transition-all duration-300 transform hover:scale-105 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="relative overflow-hidden cursor-zoom-in"
                  onClick={() => setLightboxImage({ src: project.image, title: project.title })}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 rounded-full p-2">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
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
                      <span className="text-sm">Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {lightboxImage && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={() => setLightboxImage(null)}
      >
        <button
          className="fixed top-4 right-4 text-white bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
          onClick={() => setLightboxImage(null)}
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={lightboxImage.src}
          alt={lightboxImage.title}
          className="max-w-[85vw] max-h-[70vh] rounded-lg shadow-2xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </>
  );
};

export default Portfolio;
