import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer fade-in animation
      gsap.fromTo(footerRef.current, {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Floating particles animation
      gsap.to('.footer-particle', {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: TwitterLogo, href: '#', label: 'Twitter' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-t from-background to-background/50"
    >
      {/* Animated Background Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="footer-particle absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full blur-sm" />
        <div className="footer-particle absolute top-20 right-20 w-3 h-3 bg-secondary/20 rounded-full blur-sm" />
        <div className="footer-particle absolute bottom-20 left-1/4 w-2 h-2 bg-accent/25 rounded-full blur-sm" />
        <div className="footer-particle absolute bottom-10 right-1/3 w-1 h-1 bg-primary/40 rounded-full blur-sm" />
        <div className="footer-particle absolute top-1/2 left-1/2 w-2 h-2 bg-secondary/15 rounded-full blur-sm" />
        <div className="footer-particle absolute top-16 left-2/3 w-1 h-1 bg-accent/30 rounded-full blur-sm" />
      </div>

      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gradient-primary">
              EPARIES
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting premium digital experiences with cutting-edge technology 
              and innovative design solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Navigation</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group glass-button bg-primary text-primary-foreground hover:text-primary hover:glow-intense transition-all duration-300 p-3"
                  aria-label={social.label}
                >
                  <social.icon 
                    size={20} 
                    className="transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <p>sales@eparies.com</p>
              {/*<p>+1 (555) 123-4567</p>*/}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 EPARI ENTERPRISE SOLUTIONS PTY LTD.</span>
              <span> All Rights Reserved.</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded">React</span>
              <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">GSAPA</span>
              <span className="px-2 py-1 bg-accent/10 text-accent rounded">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
