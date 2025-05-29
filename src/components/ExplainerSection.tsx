
import { useEffect, useRef } from 'react';

const ExplainerSection = () => {
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
    <section ref={sectionRef} className="section-padding relative opacity-0 animate-on-scroll">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-deepWine/10 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-warmBlush/10 filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            An AI Workforce You <span className="gradient-text">Deploy</span> — Not Manage.
          </h2>
          
          <p className="text-xl text-white/80 mb-16 max-w-3xl mx-auto">
            LISA isn't just software. She's your new growth engine — made of AI agents that work like employees. Each one is purpose-built for a task. Train it once. Let it run. Scale instantly without adding headcount.
          </p>
          
          {/* LISA Brain Diagram */}
          <div className="relative w-full max-w-2xl mx-auto aspect-square">
            {/* Center circle - Now using an image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full glass luxury-border flex items-center justify-center z-10 animate-pulse-glow">
              <div className="text-center">
                <img 
                  src="https://zentrades.pro/wp-content/uploads/2025/05/Lisa-300-x-300-px.jpg" 
                  alt="LISA AI Brain" 
                  className="w-24 h-24 mx-auto mb-2"
                />
              </div>
            </div>
            
            {/* Orbital paths */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute inset-8 rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="absolute inset-16 rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]"></div>
            
            {/* Orbital agents - Now using images */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Call Agent" 
                    className="w-12 h-12 mx-auto"
                  />
                  <div className="text-xs mt-1">Call Agent</div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse]" style={{ animationDelay: '0.5s' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Research Agent" 
                    className="w-12 h-12 mx-auto"
                  />
                  <div className="text-xs mt-1">Research</div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 animate-[spin_25s_linear_infinite]" style={{ animationDelay: '0.8s' }}>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Invoice Agent" 
                    className="w-12 h-12 mx-auto"
                  />
                  <div className="text-xs mt-1">Invoice</div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 animate-[spin_22s_linear_infinite_reverse]" style={{ animationDelay: '1.2s' }}>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Calendar Agent" 
                    className="w-12 h-12 mx-auto"
                  />
                  <div className="text-xs mt-1">Calendar</div>
                </div>
              </div>
            </div>

            {/* Additional angles for more agents */}
            <div className="absolute inset-0 animate-[spin_18s_linear_infinite]" style={{ animationDelay: '0.3s' }}>
              <div className="absolute top-1/4 right-0 translate-x-1/3 luxury-card w-20 h-20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Email Agent" 
                    className="w-10 h-10 mx-auto"
                  />
                  <div className="text-xs mt-1">Email</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplainerSection;
