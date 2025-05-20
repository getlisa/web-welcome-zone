
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-lisa-blue/5 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-lisa-purple/5 filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Floating elements that follow the mouse */}
      <div 
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-lisa-blue/10 to-transparent filter blur-xl"
        style={{ 
          left: `${mousePosition.x * 0.05}px`, 
          top: `${mousePosition.y * 0.05}px`,
          transition: 'left 0.3s ease-out, top 0.3s ease-out' 
        }}
      ></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMjM0NDIiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzFhMWIyNCIvPjwvZz48L3N2Zz4=')] opacity-5"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 reveal-on-scroll opacity-0 text-center leading-tight"
            style={{ animationDelay: '0.3s' }}
          >
            Your Team, Reinvented — <span className="gradient-text">One AI Agent at a Time.</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white/80 mb-12 reveal-on-scroll opacity-0 text-center"
            style={{ animationDelay: '0.6s' }}
          >
            LISA gives you a team of autonomous AI agents trained to execute, not assist. From lead generation to research, reporting, outreach, and beyond — LISA does the work, so your team can scale.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-on-scroll opacity-0"
            style={{ animationDelay: '0.9s' }}
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button className="btn-3d bg-gradient-primary text-white transition-all hover:scale-105 font-medium text-lg rounded-xl h-14 px-8 w-full sm:w-auto group">
                  <span className="z-10 flex items-center gap-2">
                    <span>▶️</span> 
                    <span>Try Your First Agent Free</span>
                  </span>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 glass border-0">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium gradient-text">No Credit Card Required</h4>
                  <p className="text-xs text-white/70">Get started with a fully functional AI agent today.</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <Button 
              variant="outline" 
              className="group flex items-center gap-2 text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-xl h-14 px-8 w-full sm:w-auto luxury-border"
            >
              <span>📅</span> Or Book a Live Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Split-screen animation preview */}
      <div className="absolute bottom-0 left-0 right-0 h-64 flex items-center justify-center reveal-on-scroll opacity-0" style={{ animationDelay: '1.2s' }}>
        <div className="glass-card p-4 w-full max-w-4xl flex gap-4 overflow-hidden">
          <div className="w-1/2 glass-card p-3 flex-shrink-0">
            <div className="h-6 flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="h-4 w-40 bg-white/10 rounded-md ml-auto"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-white/10 rounded-md w-3/4 shimmer-effect"></div>
              <div className="h-4 bg-white/10 rounded-md shimmer-effect"></div>
              <div className="h-4 bg-white/10 rounded-md w-5/6 shimmer-effect"></div>
            </div>
          </div>
          <div className="w-1/2 glass-card p-3 flex-shrink-0">
            <div className="h-6 flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="h-4 w-40 bg-white/10 rounded-md ml-auto"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-white/10 rounded-md w-2/3 shimmer-effect"></div>
              <div className="h-4 bg-white/10 rounded-md w-1/2 shimmer-effect"></div>
              <div className="h-4 bg-white/10 rounded-md w-4/5 shimmer-effect"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
