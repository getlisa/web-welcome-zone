
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
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
      {/* Background subtle patterns */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-lisa-gray-300"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full border border-lisa-gray-300"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-16 h-16 rounded-xl rotate-12 animate-float bg-lisa-green opacity-10"></div>
      <div className="absolute bottom-1/4 left-[15%] w-20 h-20 rounded-full animate-float bg-lisa-teal opacity-10" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 reveal-on-scroll opacity-0 text-center"
            style={{ animationDelay: '0.3s' }}
          >
            Simplify your trades business with <span className="text-lisa-green">AI</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-lisa-gray-600 mb-12 reveal-on-scroll opacity-0 text-center"
            style={{ animationDelay: '0.6s' }}
          >
            LISA integrates with your existing systems to streamline operations, 
            automate paperwork, and help you make data-driven decisions.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll opacity-0"
            style={{ animationDelay: '0.9s' }}
          >
            <Button className="bg-lisa-green hover:bg-lisa-green/90 text-white transition-all hover:scale-105 font-medium text-lg rounded-xl h-14 px-8 w-full sm:w-auto">
              Get Your AI Assessment
            </Button>
            
            <Button 
              variant="outline" 
              className="group flex items-center gap-2 text-lisa-gray-900 border border-lisa-gray-300 hover:border-lisa-gray-400 hover:bg-lisa-gray-100 rounded-xl h-14 px-8 w-full sm:w-auto"
            >
              See How It Works
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-lisa-gray-500 text-sm mb-2">Scroll to explore</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-lisa-gray-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
