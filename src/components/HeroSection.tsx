
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
      {/* Circular animation from footer - positioned top left */}
      <div className="absolute top-20 left-20 w-64 h-64">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-luxury animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
        
        {/* AI Assistant vector icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <circle cx="25" cy="25" r="12" fill="url(#aiAssistantGradient)" />
            <path d="M20,22 C20,20.3 21.3,19 23,19 L27,19 C28.7,19 30,20.3 30,22 L30,28 C30,29.7 28.7,31 27,31 L23,31 C21.3,31 20,29.7 20,28 L20,22 Z" stroke="white" strokeWidth="0.5" fill="white" fillOpacity="0.3" />
            <circle cx="25" cy="25" r="2" fill="white" />
            <path d="M25,15 L25,12 M25,38 L25,35 M15,25 L12,25 M38,25 L35,25" stroke="white" strokeWidth="1" strokeLinecap="round" />
            <defs>
              <linearGradient id="aiAssistantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3e0c29" />
                <stop offset="100%" stopColor="#f3d5e5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Hero background with tech-related imagery */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        
        {/* Neural network visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-5xl mx-auto opacity-30">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              <g className="nodes">
                {Array.from({ length: 40 }).map((_, i) => (
                  <circle 
                    key={i}
                    cx={200 + Math.random() * 400}
                    cy={100 + Math.random() * 400}
                    r={2 + Math.random() * 4}
                    fill={Math.random() > 0.5 ? '#f3d5e5' : '#4A4A4A'}
                    className="animate-pulse-glow"
                    style={{ animationDelay: `${Math.random() * 5}s` }}
                  />
                ))}
              </g>
              <g className="connections">
                {Array.from({ length: 60 }).map((_, i) => {
                  const x1 = 200 + Math.random() * 400;
                  const y1 = 100 + Math.random() * 400;
                  const x2 = 200 + Math.random() * 400;
                  const y2 = 100 + Math.random() * 400;
                  return (
                    <line 
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={Math.random() > 0.5 ? '#3e0c29' : '#f3d5e5'}
                      strokeWidth="0.5"
                      strokeOpacity="0.3"
                    />
                  );
                })}
              </g>
            </svg>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-deepWine/20 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-warmBlush/10 filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Floating elements that follow the mouse */}
      <div 
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-deepWine/10 to-transparent filter blur-xl"
        style={{ 
          left: `${mousePosition.x * 0.05}px`, 
          top: `${mousePosition.y * 0.05}px`,
          transition: 'left 0.3s ease-out, top 0.3s ease-out' 
        }}
      ></div>
      
      {/* Virtual assistant vector image */}
      <div className="absolute right-10 bottom-20 w-64 h-64 md:w-96 md:h-96 hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-float">
          {/* Abstract AI assistant representation */}
          <circle cx="50" cy="50" r="20" fill="url(#assistantGradient)" className="opacity-80" />
          <circle cx="50" cy="50" r="30" stroke="#3e0c29" strokeWidth="0.5" fill="none" className="opacity-30" />
          <circle cx="50" cy="50" r="40" stroke="#4A4A4A" strokeWidth="0.3" fill="none" className="opacity-20" />
          
          {/* Orbital elements */}
          <g className="animate-orbit" style={{ transformOrigin: '50px 50px' }}>
            <circle cx="90" cy="50" r="4" fill="#f3d5e5" className="opacity-80" />
          </g>
          <g className="animate-orbit" style={{ transformOrigin: '50px 50px', animationDelay: '0.5s', animationDuration: '8s' }}>
            <circle cx="85" cy="50" r="3" fill="#3e0c29" className="opacity-80" />
          </g>
          
          {/* Sound wave visualization */}
          <g transform="translate(20, 50)">
            {Array.from({ length: 5 }).map((_, i) => (
              <path 
                key={i}
                d={`M0,0 C2.5,${-5 - i * 2} 5,${5 + i * 2} 10,0`} 
                stroke="#f3d5e5"
                strokeWidth="0.7"
                fill="none"
                className="opacity-70"
              />
            ))}
          </g>
          
          <defs>
            <radialGradient id="assistantGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#4A4A4A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f3d5e5" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 reveal-on-scroll opacity-0 text-center leading-tight"
            style={{ animationDelay: '0.3s' }}
          >
            Your Team, Reinvented  <span className="gradient-text">The Only AI your business Needs.</span>
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
                <Button 
                  asChild
                  className="btn-3d bg-gradient-primary text-white transition-all hover:scale-105 font-medium text-lg rounded-xl h-14 px-8 w-full sm:w-auto group"
                >
                  <a href="#" rel="noopener noreferrer">
                    <span className="z-10 flex items-center gap-2">
                      <span>▶️</span> 
                      <span>Try Your First Agent Free</span>
                    </span>
                  </a>
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
              className="btn-3d group flex items-center gap-2 text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-xl h-14 px-8 w-full sm:w-auto luxury-border"
            >
              <span>📅</span> Or Book a Live Demo
            </Button>
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
