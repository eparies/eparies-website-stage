import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Globe, GithubLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      gsap.fromTo('.project-card', {
        opacity: 0,
        y: 100,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Individual card hover animations
      document.querySelectorAll('.project-card').forEach((card) => {
        const hoverTl = gsap.timeline({ paused: true });
        
        hoverTl.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });

        hoverTl.to(card.querySelector('.project-glow'), {
          opacity: 1,
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        }, 0);

        card.addEventListener('mouseenter', () => hoverTl.play());
        card.addEventListener('mouseleave', () => hoverTl.reverse());
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Neural Interface",
      description: "Advanced AI-powered dashboard with real-time data visualization and machine learning integration.",
      tech: ["React", "TypeScript", "Three.js", "Python"],
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Portfolio",
      description: "Next-generation portfolio platform with immersive 3D experiences and WebGL animations.",
      tech: ["Next.js", "WebGL", "GSAP", "Blender"],
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      featured: true
    },
    {
      id: 3,
      title: "Crypto Exchange",
      description: "Secure cryptocurrency trading platform with real-time charts and advanced analytics.",
      tech: ["React", "Node.js", "WebSocket", "D3.js"],
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      featured: false
    },
    {
      id: 4,
      title: "AR Experience",
      description: "Augmented reality web application for interactive product visualization and engagement.",
      tech: ["A-Frame", "WebXR", "Three.js", "WebRTC"],
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      featured: false
    },
    {
      id: 5,
      title: "Cloud Analytics",
      description: "Enterprise-grade analytics platform with AI insights and predictive modeling capabilities.",
      tech: ["Vue.js", "Python", "TensorFlow", "Docker"],
      image: "bg-gradient-to-br from-indigo-500 to-blue-600",
      featured: false
    },
    {
      id: 6,
      title: "IoT Dashboard",
      description: "Smart home automation interface with real-time device monitoring and control systems.",
      tech: ["React", "MQTT", "Node.js", "MongoDB"],
      image: "bg-gradient-to-br from-teal-500 to-green-600",
      featured: false
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 md:py-32 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-gradient-secondary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest creations that push the boundaries of what's possible 
            in digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card relative group cursor-pointer h-full flex flex-col"
            >
              {/* Glow Effect */}
              <div className="project-glow absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 scale-90 transition-all duration-300" />
              
              {/* Card */}
              <div className="relative glass-card p-6 h-full overflow-hidden group-hover:border-primary/40 transition-all duration-300 flex flex-col">
                {/* Project Image/Background */}
                <div className={`relative h-48 rounded-xl mb-6 ${project.image} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-white text-6xl font-bold opacity-30">
                    {project.id}
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-float" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-float-slow" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      size={20} 
                      className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" 
                    />
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 mt-auto">
                    <button className="flex items-center gap-2 text-sm glass-button bg-primary text-primary-foreground hover:text-primary hover:glow-intense transition-all duration-300">
                      <Globe size={16} />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 text-sm glass-button bg-primary text-primary-foreground hover:text-primary hover:glow-intense transition-all duration-300">
                      <GithubLogo size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16">
          <button className="glass-button bg-primary text-primary-foreground hover:text-primary hover:glow-intense transition-all duration-300 px-8 py-3">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;