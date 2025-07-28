import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

// Import client logos
import nabLogo from '@/assets/clients/nab-logo.png';
import cbusLogo from '@/assets/clients/cbus-logo.png';
import auspostLogo from '@/assets/clients/auspost-logo.png';
import aglLogo from '@/assets/clients/agl-logo.png';
import awareSuperLogo from '@/assets/clients/aware-super-logo.png';

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Title animation
      tl.fromTo(titleRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      });

      // Carousel animation
      tl.fromTo(carouselRef.current, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const clients = [
    { name: 'NAB', logo: nabLogo },
    { name: 'CBUS', logo: cbusLogo },
    { name: 'AUSPOST', logo: auspostLogo },
    { name: 'AGL', logo: aglLogo },
    { name: 'Aware Super', logo: awareSuperLogo }
  ];

  return (
    <section 
      id="clients" 
      ref={sectionRef}
      className="py-12 md:py-24 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-light text-gradient-primary mb-4">
            We Worked With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across Australia to deliver exceptional digital solutions
          </p>
        </div>

        {/* Clients Carousel */}
        <div ref={carouselRef} className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full relative"
          >
            {/* Increased height container to prevent cropping on hover */}
            <div className="py-8">
              <CarouselContent className="-ml-2 md:-ml-4">
                {clients.map((client, index) => (
                  <CarouselItem key={client.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="relative">
                      {/* Card */}
                      <div className="glass-card overflow-hidden">
                        {/* Client Image/Background */}
                        <div className="relative h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 bg-black/5" />
                          
                          {/* Logo Overlay */}
                          <img 
                            src={client.logo} 
                            alt={`${client.name} logo`}
                            className="relative z-10 max-w-20 max-h-14 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            {/* Arrows positioned to overlay with first and last tiles */}
            <CarouselPrevious className="w-12 h-12 !bg-primary !text-primary-foreground !hover:bg-background !hover:text-primary !border-primary/20 hover:!border-primary/40 hover:glow-intense !transition-all !duration-300 left-2 z-20" />
            <CarouselNext className="w-12 h-12 !bg-primary !text-primary-foreground !hover:bg-background !hover:text-primary !border-primary/20 hover:!border-primary/40 hover:glow-intense !transition-all !duration-300 right-2 z-20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;