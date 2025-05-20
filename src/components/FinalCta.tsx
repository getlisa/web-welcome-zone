
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const FinalCta = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative opacity-0 animate-on-scroll">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square rounded-full bg-deepWine/10 filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 aspect-square rounded-full bg-warmBlush/10 filter blur-[80px]"></div>
      </div>
      
      {/* Vector animation */}
      <div className="absolute inset-0 -z-5">
        <svg viewBox="0 0 800 600" className="w-full h-full opacity-10">
          <g>
            {Array.from({ length: 10 }).map((_, i) => (
              <path 
                key={i}
                d={`M${100 + i * 60},100 C${150 + i * 60},${200 + i * 20} ${200 + i * 60},${220 - i * 15} ${250 + i * 60},300 S${350 + i * 60},${400 + i % 3 * 50} ${400 + i * 60},500`} 
                stroke={i % 2 === 0 ? "#3e0c29" : "#f3d5e5"} 
                strokeWidth="1"
                fill="none"
                className="opacity-50"
              />
            ))}
          </g>
          
          {/* Nodes */}
          <g>
            {Array.from({ length: 20 }).map((_, i) => (
              <circle 
                key={i}
                cx={100 + Math.random() * 600}
                cy={100 + Math.random() * 400}
                r={2 + Math.random() * 4}
                fill={i % 2 === 0 ? "#3e0c29" : "#f3d5e5"}
                className="opacity-40"
              />
            ))}
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            AI Doesn't Do Slow. <span className="gradient-text">Only Lightning Speed.</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-12">
            Let LISA handle the work that drains your team. No more delays. No more burnout. Just execution — on autopilot.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="btn-3d relative bg-gradient-primary text-white hover:shadow-[0_0_30px_rgba(243,213,229,0.4)] text-lg py-7 px-8 rounded-xl overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <span>▶️</span> 
                Try Your First Agent Free
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-3d luxury-border bg-transparent text-white text-lg py-7 px-8 rounded-xl"
            >
              <span className="mr-2">📅</span> Or Book a Personalized Demo
            </Button>
          </div>
          
          {/* Pulsing circle animation */}
          <div className="relative h-40 mt-20">
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
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
