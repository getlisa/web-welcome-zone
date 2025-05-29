
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const agents = [
  {
    id: 'calling',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="url(#callingGradient)" className="opacity-80" />
        <path d="M50,30 C53,33 55,37 55,42 C55,47 53,51 50,54" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M45,35 C47,37 48,39 48,42 C48,45 47,47 45,49" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M28,28 L36,24 C38,23 40,24 41,26 L43,30 C43.5,31.5 43,33 42,34 L39,37 C40,40 43,44 47,46 L49.5,43.5 C50.5,42.5 52,42 53.5,42.5 L57.5,44.5 C59.5,45.5 60,47.5 59,49.5 L55,57 C54,59 51.5,60 49,59 C38,56 29,47 26,36 C25,33.5 26,31 28,30 L28,28 Z" fill="white" />
        <defs>
          <linearGradient id="callingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3d5e5" />
            <stop offset="100%" stopColor="#3e0c29" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'AI Calling',
    description: 'LISA answers all your calls, engages prospects, and never misses a lead. Always on, always professional.',
    color: 'from-warmBlush to-deepWine',
    delay: 0,
    hasLink: true,
    link: 'https://lisa-calling-demo.com'
  },
  {
    id: 'scheduling',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="url(#schedulingGradient)" className="opacity-80" />
        <rect x="25" y="25" width="30" height="30" rx="4" stroke="white" strokeWidth="2" fill="none" />
        <line x1="25" y1="35" x2="55" y2="35" stroke="white" strokeWidth="2" />
        <line x1="35" y1="25" x2="35" y2="55" stroke="white" strokeWidth="2" />
        <line x1="45" y1="25" x2="45" y2="55" stroke="white" strokeWidth="2" />
        <circle cx="35" cy="45" r="2" fill="white" />
        <circle cx="45" cy="40" r="2" fill="white" />
        <defs>
          <linearGradient id="schedulingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#f3d5e5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Smart Scheduling',
    description: 'Optimize technician routes and appointment slots to maximize productivity and minimize downtime.',
    color: 'from-coolGray to-warmBlush',
    delay: 0.1,
    hasLink: true,
    link: 'https://lisa-scheduling-demo.com'
  },
  {
    id: 'invoice',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="url(#invoiceGradient)" className="opacity-80" />
        <path d="M30,25 L50,25 C52,25 53,26 53,28 L53,52 C53,54 52,55 50,55 L30,55 C28,55 27,54 27,52 L27,28 C27,26 28,25 30,25 Z" stroke="white" strokeWidth="2" fill="none" />
        <line x1="33" y1="35" x2="47" y2="35" stroke="white" strokeWidth="2" />
        <line x1="33" y1="40" x2="47" y2="40" stroke="white" strokeWidth="2" />
        <line x1="33" y1="45" x2="42" y2="45" stroke="white" strokeWidth="2" />
        <path d="M45,46 L49,50 L45,54" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
        <defs>
          <linearGradient id="invoiceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3d5e5" />
            <stop offset="100%" stopColor="#4A4A4A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Invoice Management',
    description: 'Automate invoice follow-ups and payment tracking — get paid faster with less hassle.',
    color: 'from-warmBlush to-coolGray',
    delay: 0.2,
    hasLink: false
  },
  {
    id: 'field',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="url(#fieldGradient)" className="opacity-80" />
        <path d="M25,35 L38,27 L55,35" stroke="white" strokeWidth="2" fill="none" />
        <path d="M30,38 L30,52" stroke="white" strokeWidth="2" />
        <path d="M40,38 L40,52" stroke="white" strokeWidth="2" />
        <path d="M50,38 L50,52" stroke="white" strokeWidth="2" />
        <path d="M25,55 L55,55" stroke="white" strokeWidth="2" />
        <path d="M25,38 L55,38" stroke="white" strokeWidth="2" />
        <circle cx="45" cy="31" r="3" fill="white" />
        <defs>
          <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3e0c29" />
            <stop offset="100%" stopColor="#4A4A4A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Field Operations',
    description: 'Real-time job tracking and technician coordination keep your projects on time and on budget.',
    color: 'from-deepWine to-coolGray',
    delay: 0.3,
    hasLink: false
  },
  {
    id: 'analytics',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="url(#analyticsGradient)" className="opacity-80" />
        <rect x="25" y="55" width="6" height="15" transform="rotate(180 25 55)" fill="white" />
        <rect x="35" y="55" width="6" height="25" transform="rotate(180 35 55)" fill="white" />
        <rect x="45" y="55" width="6" height="20" transform="rotate(180 45 55)" fill="white" />
        <rect x="55" y="55" width="6" height="30" transform="rotate(180 55 55)" fill="white" />
        <path d="M23,30 L35,38 L47,25 L60,32" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="35" cy="38" r="2" fill="white" />
        <circle cx="47" cy="25" r="2" fill="white" />
        <defs>
          <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#3e0c29" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Data Analytics',
    description: 'Actionable insights and reports give you a clear view of your business health and growth opportunities.',
    color: 'from-coolGray to-deepWine',
    delay: 0.4,
    hasLink: false
  },
  {
    id: 'integration',
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="38" fill="url(#integrationGradient)" className="opacity-80" />
        <path d="M30,30 L50,30 L50,50 L30,50 Z" stroke="white" strokeWidth="2" fill="none" />
        <path d="M30,40 L20,40" stroke="white" strokeWidth="2" />
        <path d="M60,40 L50,40" stroke="white" strokeWidth="2" />
        <path d="M40,30 L40,20" stroke="white" strokeWidth="2" />
        <path d="M40,60 L40,50" stroke="white" strokeWidth="2" />
        <circle cx="20" cy="40" r="3" fill="white" />
        <circle cx="60" cy="40" r="3" fill="white" />
        <circle cx="40" cy="20" r="3" fill="white" />
        <circle cx="40" cy="60" r="3" fill="white" />
        <defs>
          <linearGradient id="integrationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3d5e5" />
            <stop offset="100%" stopColor="#4A4A4A" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'AI Integration',
    description: 'Seamlessly connect LISA with your existing tools, CRMs, and software for smooth, end-to-end workflows.',
    color: 'from-warmBlush to-coolGray',
    delay: 0.5,
    hasLink: false
  }
];

const AgentsSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
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

  const openHubSpotForm = () => {
    // HubSpot form popup - placeholder for now
    console.log('Opening HubSpot form...');
    alert('HubSpot demo form would open here. Contact us at demo@lisa.com');
  };

  const handleTryNowClick = (agent: typeof agents[0]) => {
    if (agent.hasLink && agent.link) {
      window.open(agent.link, '_blank');
    } else {
      openHubSpotForm();
    }
  };

  return (
    <section id="agents" ref={sectionRef} className="section-padding relative opacity-0 animate-on-scroll">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-deepWine/10 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pick the Agents That <span className="gradient-text">Work For You.</span>
          </h2>
          <p className="text-lg text-white/80">
            Each agent is purpose-built to take over a core business function — seamlessly and reliably.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {agents.map((agent) => (
            <div 
              key={agent.id}
              className="relative"
              style={{ animationDelay: `${0.3 + agent.delay}s` }}
              onMouseEnter={() => setActiveCard(agent.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card className={`luxury-card h-full transform transition-all duration-500 ${activeCard === agent.id ? 'scale-105 z-10' : activeCard ? 'scale-95 opacity-80' : ''}`}>
                <CardContent className="p-6">
                  <div className={`flex items-center justify-center w-24 h-24 rounded-full mb-6 bg-gradient-to-br ${agent.color} shadow-lg mx-auto`}>
                    {agent.icon}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">{agent.title}</h3>
                  
                  <p className="text-white/80 mb-6 text-center">
                    {agent.description}
                  </p>
                  
                  <Button 
                    onClick={() => handleTryNowClick(agent)}
                    className="btn-3d bg-gradient-to-r from-deepWine to-warmBlush text-white w-full"
                  >
                    Try Now
                  </Button>
                </CardContent>
              </Card>
              
              {/* Decorative elements */}
              <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-xl bg-gradient-to-br ${agent.color} opacity-0 blur-xl transition-opacity duration-500 ${activeCard === agent.id ? 'opacity-20' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
