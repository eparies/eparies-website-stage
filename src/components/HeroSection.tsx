import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'phosphor-react';
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5
    });

    // Initial setup
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)'
    });

    // Animation sequence
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: "power3.out"
    }).to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: "power3.out"
    }, "-=0.8").to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");

    // Floating orbs animation
    gsap.to('.hero-orb-1', {
      y: -30,
      x: 20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    gsap.to('.hero-orb-2', {
      y: 20,
      x: -15,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    gsap.to('.hero-orb-3', {
      y: -25,
      x: 30,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);
  const handleCTAClick = () => {
    gsap.to(ctaRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Spline 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <iframe src='https://my.spline.design/squarechipsfallinginplace-nzHqVbtujIau2zPOQnjJD4v8/' frameBorder='0' width='100%' height='110%' className="scale-110" />
      </div>

      {/* Floating Orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
        <div className="hero-orb-1 absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="hero-orb-2 absolute top-3/4 right-1/4 w-48 h-48 bg-secondary/15 rounded-full blur-3xl" />
        <div className="hero-orb-3 absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div ref={headlineRef} className="mb-6">
          <h1 className="text-6xl md:text-8xl font-light text-gradient-primary mb-4 leading-tight lg:text-7xl">
            Innovate. Build. Lead.
          </h1>
          <h1 className="text-6xl md:text-8xl font-light text-gradient-primary mb-4 leading-tight lg:text-7xl">
            with
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight lg:text-9xl">
            EPARIES
          </h1>
        </div>

        <div ref={subtitleRef} className="mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting premium digital experiences with cutting-edge technology and 
            innovative design solutions that push boundaries.
          </p>
        </div>

        <button ref={ctaRef} onClick={handleCTAClick} className="group glass-button text-lg px-8 py-4 glow-primary hover:glow-intense transition-all duration-300 hover:scale-105">
          <span className="flex items-center gap-3">
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;
