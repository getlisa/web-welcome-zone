
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const useCases = [
  {
    id: 1,
    title: "Streamline Collections",
    description: "Reduce aging by 35% through intelligent prioritization and automated follow-ups that get you paid faster.",
    icon: "💰",
    gradient: "from-lisa-green to-lisa-green/70"
  },
  {
    id: 2,
    title: "Optimize Dispatching",
    description: "Smart scheduling and route optimization to reduce drive time and fit more jobs into each day.",
    icon: "🚚",
    gradient: "from-lisa-teal to-lisa-teal/70"
  },
  {
    id: 3,
    title: "Accelerate Estimates",
    description: "Generate professional quotes faster with smart pricing recommendations based on job history and current market.",
    icon: "📊",
    gradient: "from-lisa-green to-lisa-teal"
  },
  {
    id: 4,
    title: "Automate Office Work",
    description: "Reduce paperwork through intelligent document processing, auto-replies, and task summarization.",
    icon: "📝",
    gradient: "from-lisa-teal/80 to-lisa-green/80"
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
    <section id="use-cases" ref={sectionRef} className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 use-case-reveal opacity-0">
            Real <span className="text-lisa-green">Impact</span> For Your Business
          </h2>
          <p className="text-lg text-lisa-gray-600 use-case-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            See how CLARA transforms critical areas of your trades business with practical AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.id}
              className="bg-white rounded-xl shadow-sm border border-lisa-gray-200 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 use-case-reveal opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-lisa-gray-100 rounded-xl h-16 w-16 flex items-center justify-center flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-lisa-gray-600 mb-6">
                      {useCase.description}
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-lisa-green gap-2 text-sm font-medium group/link"
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
          <p className="text-xl text-lisa-gray-700 max-w-2xl mx-auto">
            Each solution is tailored to your specific business needs and industry challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
