import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ClientsSection from '@/components/ClientsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   // Disable scroll during loading
  //   if (isLoading) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [isLoading]);

  // const handleLoadingComplete = () => {
  //   setIsLoading(false);
  //   setShowContent(true);
    
  //   // Main content fade-in animation
  //   gsap.fromTo('.main-content', {
  //     opacity: 0,
  //     y: 30
  //   }, {
  //     opacity: 1,
  //     y: 0,
  //     duration: 1,
  //     ease: "power3.out"
  //   });
  // };

  return (
    <>
      {/* Loading Screen */}
      {/* {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />} */}
      
      {/* Main Content */}
      <div className="main-content">
        {/* Navigation */}
        <Navigation />
        
        {/* Sections */}
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <ClientsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
