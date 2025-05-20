
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square rounded-full bg-lisa-blue/10 filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 aspect-square rounded-full bg-lisa-purple/10 filter blur-[80px]"></div>
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
            <Button className="btn-3d relative bg-gradient-primary text-white hover:shadow-[0_0_30px_rgba(30,203,225,0.4)] text-lg py-7 px-8 rounded-xl overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <span>▶️</span> 
                Try Your First Agent Free
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              className="luxury-border bg-transparent text-white text-lg py-7 px-8 rounded-xl"
            >
              <span className="mr-2">📅</span> Or Book a Personalized Demo
            </Button>
          </div>
          
          {/* Pulsing circle animation */}
          <div className="relative h-40 mt-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-luxury animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
