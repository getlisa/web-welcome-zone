
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
    <section id="explainer" ref={sectionRef} className="section-padding relative opacity-0 animate-on-scroll">
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
          <div className="relative w-full max-w-4xl mx-auto aspect-square">
            {/* Center circle - Now using an image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full glass flex items-center justify-center z-10 animate-pulse-glow">
              <div className="text-center">
                <img 
                  src="https://zentrades.pro/wp-content/uploads/2025/05/52213e-540-x-540-px-2.png" 
                  alt="LISA AI Brain" 
                  className="w-24 h-24 mx-auto mb-2"
                />
              </div>
            </div>
            
            {/* Orbital paths with much larger gaps */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute inset-20 rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="absolute inset-40 rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-60 rounded-full border border-dashed border-white/10 animate-[spin_22s_linear_infinite_reverse]"></div>
            
            {/* Orbital agents - each positioned on their corresponding orbital path */}
            {/* AI Call Agent on outermost orbit (inset-0) */}
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="https://zentrades.pro/wp-content/uploads/2025/05/2-2.svg" 
                    alt="AI Call Agent" 
                    className="w-12 h-12 mx-auto"
                  />
                  <div className="text-xs mt-1">AI Call Agent</div>
                </div>
              </div>
            </div>
            
            {/* AI Collection on second orbit (inset-20) */}
            <div className="absolute inset-20 animate-[spin_30s_linear_infinite_reverse]" style={{ animationDelay: '0.5s' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="https://zentrades.pro/wp-content/uploads/2025/05/3-2.svg" 
                    alt="Research Agent" 
                    className="w-12 h-12 mx-auto"
                  />
                  <div className="text-xs mt-1">AI Collection</div>
                </div>
              </div>
            </div>
            
            {/* AI Scheduler on third orbit (inset-40) */}
            <div className="absolute inset-40 animate-[spin_20s_linear_infinite]" style={{ animationDelay: '0.8s' }}>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="https://zentrades.pro/wp-content/uploads/2025/05/4.svg" 
                    alt="Invoice Agent" 
                    className="w-12 h-12 mx-auto"
                  />
                  <div className="text-xs mt-1">AI Scheduler</div>
                </div>
              </div>
            </div>
            
            {/* AI Fleet on innermost orbit (inset-60) */}
            <div className="absolute inset-60 animate-[spin_22s_linear_infinite_reverse]" style={{ animationDelay: '1.2s' }}>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="https://zentrades.pro/wp-content/uploads/2025/05/5.svg" 
                    alt="Calendar Agent" 
                    className="w-12 h-12 mx-auto"
                  />
                  <div className="text-xs mt-1">AI Fleet</div>
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
