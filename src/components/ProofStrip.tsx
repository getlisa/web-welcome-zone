
import { useEffect, useRef } from 'react';

const companies = [
  { name: "Startups", detail: "80% faster research cycles" },
  { name: "Agencies", detail: "Triple client throughput" },
  { name: "PE-backed", detail: "47% operational cost savings" },
  { name: "Enterprise", detail: "24/7 global support coverage" },
  { name: "Tech", detail: "90% reduction in response time" }
];

const ProofStrip = () => {
  const stripRef = useRef<HTMLDivElement>(null);

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

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => {
      if (stripRef.current) observer.unobserve(stripRef.current);
    };
  }, []);

  return (
    <div ref={stripRef} className="py-16 glass backdrop-blur-md border-y border-white/10 opacity-0 animate-on-scroll">
      <div className="container mx-auto px-4">
        <p className="text-center text-white/80 text-lg mb-8">
          Trusted by operators, founders, and teams who move fast.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div 
              key={company.name} 
              className="relative group flex flex-col items-center"
            >
              <div className="text-lg font-sora gradient-text font-semibold">{company.name}</div>
              
              {/* Hover detail */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 glass rounded-lg p-2 text-center text-sm text-white">
                {company.detail}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white/10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProofStrip;
