
import { useEffect, useRef } from 'react';

const steps = [
  {
    id: 1,
    title: "Assess Your Business",
    description: "We analyze your operations and identify the highest-impact areas for AI integration.",
    icon: "📊"
  },
  {
    id: 2,
    title: "Seamless Integration",
    description: "CLARA connects with your existing systems without disrupting your team's workflow.",
    icon: "🔄"
  },
  {
    id: 3,
    title: "Automate & Optimize",
    description: "Start with one key area and see immediate results with minimal training.",
    icon: "⚡"
  },
  {
    id: 4,
    title: "Scale As You Grow",
    description: "Add more functionality over time as your team gets comfortable with the technology.",
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
    <section id="how-it-works" ref={sectionRef} className="section-padding relative bg-lisa-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-in-scroll opacity-0">
            How <span className="text-lisa-green">CLARA</span> Works
          </h2>
          <p className="text-lg text-lisa-gray-600 fade-in-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            We designed CLARA to fit your business, not the other way around.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center group hover:shadow-lg hover:-translate-y-1 transition-all fade-in-scroll opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="text-4xl mb-6 bg-lisa-gray-100 h-20 w-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-lisa-gray-600">{step.description}</p>
              <div className="w-10 h-0.5 bg-lisa-green mt-6 transition-all group-hover:w-16"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white rounded-xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto fade-in-scroll opacity-0" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Works With What You Already Have
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {['CRM', 'Accounting', 'Dispatch', 'Inventory'].map((system) => (
              <div 
                key={system}
                className="bg-lisa-gray-100 rounded-xl p-4 text-center hover:bg-lisa-gray-200 transition-colors"
              >
                <p className="text-lg font-medium">{system}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-lisa-gray-600">
            No coding required. No tech expertise needed. CLARA adapts to your current setup.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
