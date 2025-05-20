
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const agents = [
  {
    id: 'calling',
    icon: '📞',
    title: 'AI Calling',
    description: 'LISA answers all your calls, engages prospects, and never misses a lead. Always on, always professional.',
    color: 'from-lisa-blue to-lisa-cyan',
    delay: 0
  },
  {
    id: 'scheduling',
    icon: '📅',
    title: 'Smart Scheduling',
    description: 'Optimize technician routes and appointment slots to maximize productivity and minimize downtime.',
    color: 'from-lisa-purple to-lisa-blue',
    delay: 0.1
  },
  {
    id: 'invoice',
    icon: '🧾',
    title: 'Invoice Management',
    description: 'Automate invoice follow-ups and payment tracking — get paid faster with less hassle.',
    color: 'from-lisa-cyan to-lisa-blue',
    delay: 0.2
  },
  {
    id: 'field',
    icon: '🚚',
    title: 'Field Operations',
    description: 'Real-time job tracking and technician coordination keep your projects on time and on budget.',
    color: 'from-lisa-pink to-lisa-purple',
    delay: 0.3
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Data Analytics',
    description: 'Actionable insights and reports give you a clear view of your business health and growth opportunities.',
    color: 'from-lisa-purple to-lisa-pink',
    delay: 0.4
  },
  {
    id: 'integration',
    icon: '🔗',
    title: 'AI Integration',
    description: 'Seamlessly connect LISA with your existing tools, CRMs, and software for smooth, end-to-end workflows.',
    color: 'from-lisa-blue to-lisa-purple',
    delay: 0.5
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

  return (
    <section id="agents" ref={sectionRef} className="section-padding relative opacity-0 animate-on-scroll">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-lisa-purple/5 filter blur-3xl animate-pulse"></div>
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
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-br ${agent.color} shadow-lg`}>
                    <span className="text-3xl">{agent.icon}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">{agent.title}</h3>
                  
                  <p className="text-white/80 mb-6">
                    {agent.description}
                  </p>
                  
                  <Button className="btn-3d bg-gradient-to-r from-lisa-blue to-lisa-purple text-white w-full">
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
