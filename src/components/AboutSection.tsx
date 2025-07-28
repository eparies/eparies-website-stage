import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileHtml, 
  FileCss, 
  FileJs, 
  Globe, 
  Lightning, 
  Palette 
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Profile image animation
      tl.fromTo(imageRef.current, {
        opacity: 0,
        x: -100,
        scale: 0.8
      }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      });

      // Content animation
      tl.fromTo(contentRef.current?.children, {
        opacity: 0,
        y: 50,
        filter: 'blur(5px)'
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.8");

      // Skills animation
      tl.fromTo(skillsRef.current?.children, {
        opacity: 0,
        y: 30,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Hover animation for profile image
      const profileHover = gsap.to(imageRef.current, {
        rotateY: 10,
        rotateX: 5,
        scale: 1.05,
        duration: 0.3,
        paused: true,
        ease: "power2.out"
      });

      imageRef.current?.addEventListener('mouseenter', () => profileHover.play());
      imageRef.current?.addEventListener('mouseleave', () => profileHover.reverse());

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: 'HTML5', icon: FileHtml, color: 'text-orange-400' },
    { name: 'CSS3', icon: FileCss, color: 'text-blue-400' },
    { name: 'JavaScript', icon: FileJs, color: 'text-yellow-400' },
    { name: 'React', icon: Globe, color: 'text-cyan-400' },
    { name: 'GSAP', icon: Lightning, color: 'text-green-400' },
    { name: 'Design', icon: Palette, color: 'text-purple-400' }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 md:py-32 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing Frame */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 glow-primary">
                <div className="w-full h-full bg-background rounded-full overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-secondary flex items-center justify-center">
                    <div className="text-6xl font-bold text-foreground/20">EP</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Ring */}
              <div className="absolute -inset-4 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-5xl font-light text-gradient-primary mb-4">
                About Us
              </h2>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Your Success, Our Obsession.
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At EPARIES, we’re more than just passionate consultants, strategists, 
                and engineers — we’re your partners in progress. With deep industry knowledge and a hands-on approach, 
                we embed ourselves in your goals to deliver outcomes — not just code. In a world full of complexity, 
                our mission is to bring clarity, accelerate delivery, and build unwavering, trusted partnerships.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We succeed by placing your vision, your goals, and your customers at the heart of everything we do. 
                Because we believe the most powerful technology isn’t just smart — it’s human. 
                It’s built with a deep understanding of the people who use it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That’s why our entire company is built around one core principle:
              </p>
              <p className="font-bold">
                You, The Customer, are at the absolute center of everything we do.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">Our Expertise</h4>
              <div ref={skillsRef} className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group glass-card p-4 text-center hover:glow-primary transition-all duration-300 hover:scale-105"
                  >
                    <skill.icon 
                      size={32} 
                      className={`mx-auto mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                    <div className="text-sm font-medium text-foreground">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
