
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const personas = [
  {
    id: "owners",
    title: "Business Owners",
    benefits: [
      "Full visibility across your entire operation",
      "Reduce operational costs by 15-20%",
      "Make better decisions with real-time insights"
    ],
    icon: "👑"
  },
  {
    id: "operations",
    title: "Operations Managers",
    benefits: [
      "Optimize scheduling and resource allocation",
      "Automate routine decisions and workflows",
      "Improve team productivity metrics"
    ],
    icon: "⚙️"
  },
  {
    id: "finance",
    title: "Finance Teams",
    benefits: [
      "Reduce days sales outstanding (DSO)",
      "Prioritize collection efforts intelligently",
      "Automate customer payment reminders"
    ],
    icon: "💵"
  },
  {
    id: "field",
    title: "Field Teams",
    benefits: [
      "Better coordination between office and field",
      "Reduce paperwork and manual data entry",
      "Real-time updates on job status and needs"
    ],
    icon: "🔧"
  }
];

const TailoredSection = () => {
  const [activePersona, setActivePersona] = useState("owners");
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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll('.tailored-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const currentPersona = personas.find(p => p.id === activePersona) || personas[0];

  return (
    <section id="tailored" ref={sectionRef} className="section-padding relative bg-lisa-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tailored-reveal opacity-0">
            Designed For <span className="text-lisa-green">Everyone</span> On Your Team
          </h2>
          <p className="text-lg text-lisa-gray-600 tailored-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            LISA adapts to each team member's role and helps solve their specific challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-center">
          {/* Persona selector */}
          <div className="order-2 lg:order-1 tailored-reveal opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-xl shadow-sm p-10 h-full">
              <div className="text-4xl mb-6 bg-lisa-gray-100 h-20 w-20 rounded-full flex items-center justify-center">
                {currentPersona.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-6">{currentPersona.title}</h3>
              <ul className="space-y-4">
                {currentPersona.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-lisa-green text-lg">✓</span>
                    <span className="text-lisa-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="bg-lisa-green hover:bg-lisa-green/90 text-white transition-all hover:scale-105 rounded-lg">
                  See How It Works For {currentPersona.title}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="order-1 lg:order-2 tailored-reveal opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-2 gap-6">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  className={`bg-white rounded-xl p-6 text-center transition-all ${
                    activePersona === persona.id 
                      ? 'shadow-md border-2 border-lisa-green' 
                      : 'border border-lisa-gray-200 hover:border-lisa-green/50'
                  }`}
                  onClick={() => setActivePersona(persona.id)}
                >
                  <div className="text-3xl mb-4">{persona.icon}</div>
                  <h4 className="text-xl font-medium">{persona.title}</h4>
                  <div 
                    className={`w-10 h-0.5 bg-lisa-green mx-auto mt-4 transition-all ${
                      activePersona === persona.id ? 'w-16 opacity-100' : 'w-8 opacity-50'
                    }`}>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 border border-lisa-gray-200 shadow-sm">
              <p className="text-lg text-center text-lisa-gray-700">
                "LISA understands each role in your business, providing targeted assistance where it's needed most."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredSection;
