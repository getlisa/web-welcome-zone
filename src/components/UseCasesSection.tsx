
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const useCases = [
  {
    id: 1,
    title: "Supercharge Collections",
    description: "Reduce aging by 35% with automated follow-ups, prioritized accounts, and predictive analytics.",
    icon: "💰",
    gradient: "from-[#1ECBE1] to-[#18A8B9]"
  },
  {
    id: 2,
    title: "Boost Dispatch Efficiency",
    description: "Optimize routes, reduce drive time, and increase jobs completed per day with AI-powered scheduling.",
    icon: "🚚",
    gradient: "from-[#7540EE] to-[#5A31B8]"
  },
  {
    id: 3,
    title: "Quote Faster",
    description: "Turn estimates into revenue with AI-generated quotes, smart pricing recommendations, and faster approvals.",
    icon: "📊",
    gradient: "from-[#1ECBE1] to-[#7540EE]"
  },
  {
    id: 4,
    title: "Streamline Back Office",
    description: "Auto-replies, task summaries, and SOP suggestions keep your operations running smoothly.",
    icon: "📝",
    gradient: "from-[#5A31B8] to-[#7540EE]"
  }
];

const UseCasesSection = () => {
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

    const elements = document.querySelectorAll('.use-case-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="use-cases" ref={sectionRef} className="section-padding relative bg-gradient-to-b from-lisa-bg to-[#111224]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 use-case-reveal opacity-0">
            Real Business <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-lisa-text use-case-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            See how LISA transforms different areas of your trades business with practical AI applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.id}
              className="glass-card p-1 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 use-case-reveal opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className={`h-full rounded-2xl p-8 bg-gradient-to-br ${useCase.gradient} opacity-[0.02] group-hover:opacity-[0.05] transition-opacity`}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl glass rounded-xl h-16 w-16 flex items-center justify-center flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-lisa-text mb-6">
                      {useCase.description}
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-white gap-2 text-sm font-medium group/link"
                    >
                      Learn more 
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 use-case-reveal opacity-0" style={{ animationDelay: '0.7s' }}>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Each use case is tailored to your business size and specific industry challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
