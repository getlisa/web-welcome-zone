
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-text-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-lisa-cyan/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-lisa-violet/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/3 right-[15%] w-16 h-16 glass rounded-2xl rotate-12 animate-float opacity-60"></div>
      <div className="absolute bottom-1/4 left-[10%] w-24 h-24 glass rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 reveal-on-scroll opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            The Only <span className="gradient-text">AI</span> Your Trades Business Needs
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-lisa-text mb-12 reveal-on-scroll opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            LISA plugs into your existing systems to add intelligence across your operations—from collections to dispatch to sales.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll opacity-0"
            style={{ animationDelay: '0.9s' }}
          >
            <Button className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 font-medium text-lg rounded-xl h-14 px-8 w-full sm:w-auto">
              Get Your AI Readiness Report
            </Button>
            
            <Button 
              variant="ghost" 
              className="group flex items-center gap-2 text-white border border-white/10 hover:bg-white/5 rounded-xl h-14 px-8 w-full sm:w-auto"
            >
              Book Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
