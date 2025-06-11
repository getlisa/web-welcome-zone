
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const reasons = [
  {
    id: 1,
    title: "Industry Evolution",
    description: "Trades businesses face rising costs, labor shortages, and increasing customer expectations—AI helps you adapt.",
    icon: "📈"
  },
  {
    id: 2,
    title: "Practical AI Solutions",
    description: "CLARA offers trades-specific AI tools that solve real problems, not generic tech that creates more work.",
    icon: "🧠"
  },
  {
    id: 3,
    title: "Seamless Integration",
    description: "Keep your existing systems and workflows—CLARA simply adds intelligence where you need it most.",
    icon: "🔄"
  }
];

const WhyNowSection = () => {
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

    const elements = document.querySelectorAll('.why-now-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="why-now" ref={sectionRef} className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 why-now-reveal opacity-0">
            Why <span className="text-lisa-green">Now</span> Is The Time
          </h2>
          <p className="text-lg text-lisa-gray-600 why-now-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            The trades industry is changing rapidly. Those who adapt will thrive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.id}
              className="bg-white rounded-xl shadow-sm p-8 text-center border border-lisa-gray-200 hover:border-lisa-green hover:shadow-md transition-all group why-now-reveal opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="text-4xl mb-6 mx-auto bg-lisa-gray-100 h-20 w-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-lisa-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto why-now-reveal opacity-0" style={{ animationDelay: '0.7s' }}>
          <div className="bg-white rounded-xl shadow-sm border border-lisa-gray-200 p-10 md:p-16 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">Ready to transform your trades business?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-lisa-green hover:bg-lisa-green/90 text-white transition-all hover:scale-105 h-14 px-10 text-lg rounded-xl">
                Start Your Free Assessment
              </Button>
              <Button variant="outline" className="border-lisa-gray-300 hover:bg-lisa-gray-100 text-lisa-gray-900 h-14 px-10 text-lg rounded-xl">
                Schedule Demo
              </Button>
            </div>
            <p className="mt-8 text-lisa-gray-500">No credit card required. No commitment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
