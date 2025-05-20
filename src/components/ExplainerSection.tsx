
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
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-lisa-purple/5 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-lisa-blue/5 filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full glass luxury-border flex items-center justify-center z-10 animate-pulse-glow">
              <div className="text-center">
                <div className="text-3xl mb-2 gradient-text font-bold">LISA</div>
                <div className="text-white/70 text-sm">AI Brain</div>
                
                {/* Brain visualization */}
                <svg viewBox="0 0 60 40" className="w-16 h-16 mx-auto mt-2 opacity-70">
                  <path d="M30,5 C40,5 50,15 50,25 C50,35 40,45 30,45 C20,45 10,35 10,25 C10,15 20,5 30,5 Z" stroke="#FF2C9C" strokeWidth="0.5" fill="none" />
                  <path d="M30,10 C37.5,10 45,17.5 45,25 C45,32.5 37.5,40 30,40 C22.5,40 15,32.5 15,25 C15,17.5 22.5,10 30,10 Z" stroke="#1ECBE1" strokeWidth="0.5" fill="none" />
                  <path d="M20,15 C20,15 25,25 30,25 C35,25 40,15 40,15" stroke="#1ECBE1" strokeWidth="0.5" fill="none" />
                  <path d="M20,35 C20,35 25,25 30,25 C35,25 40,35 40,35" stroke="#FF2C9C" strokeWidth="0.5" fill="none" />
                  <path d="M28,25 L32,25" stroke="#FFFFFF" strokeWidth="0.5" />
                  <circle cx="25" cy="20" r="1" fill="#1ECBE1" />
                  <circle cx="35" cy="20" r="1" fill="#1ECBE1" />
                  <circle cx="30" cy="25" r="2.5" fill="#FFFFFF" />
                </svg>
              </div>
            </div>
            
            {/* Orbital paths */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute inset-8 rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="absolute inset-16 rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]"></div>
            
            {/* Orbital agents - Each with SVG icon representng its function */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto">
                    <circle cx="20" cy="20" r="15" fill="url(#callAgent)" className="opacity-80" />
                    <path d="M14,14 L18,12 C19,11.5 20,12 20.5,13 L21.5,15 C21.75,15.75 21.5,16.5 21,17 L19.5,18.5 C20,20 21.5,22 23.5,23 L24.75,21.75 C25.25,21.25 26,21 26.75,21.25 L28.75,22.25 C29.75,22.75 30,23.75 29.5,24.75 L27.5,28.5 C27,29.5 25.75,30 24.5,29.5 C19,28 14.5,23.5 13,18 C12.5,16.75 13,15.5 14,15 L14,14 Z" fill="white" />
                    <defs>
                      <linearGradient id="callAgent" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1ECBE1" />
                        <stop offset="100%" stopColor="#7540EE" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-xs mt-1">Call Agent</div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse]" style={{ animationDelay: '0.5s' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto">
                    <circle cx="20" cy="20" r="15" fill="url(#researchAgent)" className="opacity-80" />
                    <path d="M25,25 L28,28" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="18" r="8" stroke="white" strokeWidth="2" fill="none" />
                    <path d="M18,16 L22,16 M18,18 L22,18 M18,20 L20,20" stroke="white" strokeLinecap="round" strokeWidth="1" />
                    <defs>
                      <linearGradient id="researchAgent" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7540EE" />
                        <stop offset="100%" stopColor="#FF2C9C" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-xs mt-1">Research</div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 animate-[spin_25s_linear_infinite]" style={{ animationDelay: '0.8s' }}>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto">
                    <circle cx="20" cy="20" r="15" fill="url(#invoiceAgent)" className="opacity-80" />
                    <path d="M15,12 L25,12 C26,12 27,13 27,14 L27,26 C27,27 26,28 25,28 L15,28 C14,28 13,27 13,26 L13,14 C13,13 14,12 15,12 Z" stroke="white" strokeWidth="1.5" fill="none" />
                    <path d="M16,17 L24,17 M16,20 L24,20 M16,23 L21,23" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="invoiceAgent" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#19E4D9" />
                        <stop offset="100%" stopColor="#1ECBE1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-xs mt-1">Invoice</div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 animate-[spin_22s_linear_infinite_reverse]" style={{ animationDelay: '1.2s' }}>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 luxury-card w-24 h-24 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto">
                    <circle cx="20" cy="20" r="15" fill="url(#calendarAgent)" className="opacity-80" />
                    <rect x="12" y="12" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
                    <line x1="12" y1="17" x2="28" y2="17" stroke="white" strokeWidth="1.5" />
                    <line x1="17" y1="12" x2="17" y2="28" stroke="white" strokeWidth="1.5" />
                    <line x1="23" y1="12" x2="23" y2="28" stroke="white" strokeWidth="1.5" />
                    <circle cx="17" cy="23" r="1" fill="white" />
                    <circle cx="23" cy="20" r="1" fill="white" />
                    <defs>
                      <linearGradient id="calendarAgent" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF2C9C" />
                        <stop offset="100%" stopColor="#7540EE" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-xs mt-1">Calendar</div>
                </div>
              </div>
            </div>

            {/* Additional angles for more agents */}
            <div className="absolute inset-0 animate-[spin_18s_linear_infinite]" style={{ animationDelay: '0.3s' }}>
              <div className="absolute top-1/4 right-0 translate-x-1/3 luxury-card w-20 h-20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto">
                    <circle cx="20" cy="20" r="15" fill="url(#emailAgent)" className="opacity-80" />
                    <path d="M12,14 L28,14 L28,26 L12,26 Z" stroke="white" strokeWidth="1.5" fill="none" />
                    <path d="M12,14 L20,21 L28,14" stroke="white" strokeWidth="1.5" fill="none" />
                    <defs>
                      <linearGradient id="emailAgent" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1ECBE1" />
                        <stop offset="100%" stopColor="#19E4D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-xs mt-1">Email</div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 animate-[spin_28s_linear_infinite_reverse]" style={{ animationDelay: '1.5s' }}>
              <div className="absolute bottom-1/4 left-0 -translate-x-1/3 luxury-card w-20 h-20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto">
                    <circle cx="20" cy="20" r="15" fill="url(#chatAgent)" className="opacity-80" />
                    <path d="M15,27 L15,22 L12,22 C11.4,22 11,21.6 11,21 L11,13 C11,12.4 11.4,12 12,12 L28,12 C28.6,12 29,12.4 29,13 L29,21 C29,21.6 28.6,22 28,22 L19,22 L15,27 Z" stroke="white" strokeWidth="1.5" fill="none" />
                    <path d="M16,16 L24,16 M16,19 L20,19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="chatAgent" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF2C9C" />
                        <stop offset="100%" stopColor="#1ECBE1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-xs mt-1">Chat</div>
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
