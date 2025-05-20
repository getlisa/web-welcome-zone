
import { useEffect, useRef } from 'react';

const steps = [
  {
    id: 1,
    title: "Free AI Readiness Consultation",
    description: "We analyze your current systems and processes to identify where AI can make the biggest impact.",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Identify Pain Points",
    description: "Together, we pinpoint the specific challenges that are costing you time and money.",
    icon: "💡"
  },
  {
    id: 3,
    title: "Deploy AI to Solve One",
    description: "We implement LISA to tackle your most pressing issue with minimal disruption.",
    icon: "🚀"
  },
  {
    id: 4,
    title: "Expand to More Areas",
    description: "As you see results, easily expand LISA's capabilities to other parts of your business.",
    icon: "📈"
  }
];

const HowItWorksSection = () => {
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

    const elements = document.querySelectorAll('.fade-in-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[80%] bg-lisa-violet/10 rounded-full blur-[120px] opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-in-scroll opacity-0">
            How <span className="gradient-text">LISA</span> Works
          </h2>
          <p className="text-lg text-lisa-text fade-in-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            We take a phased approach to integrate AI into your business without disrupting your existing workflows.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="glass-card p-8 flex flex-col items-center text-center group hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 fade-in-scroll opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="text-4xl mb-4 glass h-20 w-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-lisa-text">{step.description}</p>
              <div className="w-10 h-0.5 bg-gradient-primary mt-6 transition-all group-hover:w-16"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass-card p-8 md:p-12 max-w-4xl mx-auto fade-in-scroll opacity-0" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Integrates With Your Existing Systems
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {['CRM', 'Accounting', 'Dispatch', 'Inventory'].map((system, index) => (
              <div 
                key={system}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
              >
                <p className="text-lg font-medium">{system}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-lisa-text">
            No coding required, no tech expertise needed. LISA works with what you already have.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
