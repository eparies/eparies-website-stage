import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logoImage from '@/assets/logo.jpg';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set([progressBarRef.current, logoRef.current], { opacity: 0 });

    // Animation sequence
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(progressBarRef.current, {
      opacity: 1,
      duration: 0.5
    }, "-=0.3")
    .to(progressBarRef.current?.querySelector('.progress-fill'), {
      width: "100%",
      duration: 2.5,
      ease: "power2.out"
    })
    .to([logoRef.current, progressBarRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.inOut"
    }, "+=0.3")
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        onLoadingComplete();
      }
    }, "-=0.2");

  }, [onLoadingComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float-slow" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float-fast" />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-accent/15 rounded-full blur-xl animate-float" />

      {/* Logo */}
      <div 
        ref={logoRef}
        className="relative z-10 mb-12 flex flex-col items-center"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-glow mb-6 bg-black">
          <img 
            src={logoImage} 
            alt="Eparies Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-4xl md:text-6xl font-bold text-gradient-primary mb-2">
          EPARIES
        </div>
        <div className="text-center text-muted-foreground text-lg">
          Crafting Digital Excellence
        </div>
      </div>

      {/* Progress Bar */}
      <div 
        ref={progressBarRef}
        className="relative w-80 max-w-sm"
      >
        <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
          <div className="progress-fill h-full bg-gradient-primary rounded-full w-0 shadow-glow" />
        </div>
        <div className="mt-3 text-center text-sm text-muted-foreground">
          Loading Experience...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;