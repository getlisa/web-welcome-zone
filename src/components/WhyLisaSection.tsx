
import { useEffect, useRef } from 'react';

const features = [
  {
    icon: "🧠",
    title: "Pre-trained Agents",
    description: "Plug-and-play. Trained on real business workflows.",
    delay: 0
  },
  {
    icon: "🔁",
    title: "Customizable Logic",
    description: "Change prompts, rules, sequences — no code.",
    delay: 0.2
  },
  {
    icon: "⚡",
    title: "Fast Deployment",
    description: "Go from idea → agent in hours, not weeks.",
    delay: 0.4
  }
];

const WhyLisaSection = () => {
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
    <section id="why-lisa" ref={sectionRef} className="section-padding relative overflow-hidden opacity-0 animate-on-scroll">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-50 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Speed.</span> Designed for <span className="gradient-text">Scale.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="luxury-card transform transition-all hover:-translate-y-2"
              style={{ animationDelay: `${0.3 + feature.delay}s` }}
            >
              <div className="text-5xl mb-6 bg-gradient-to-br from-lisa-blue to-lisa-purple w-20 h-20 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(30,203,225,0.2)]">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/70 mb-4">{feature.description}</p>
              
              {/* Animated line */}
              <div className="w-12 h-0.5 bg-gradient-luxury"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block luxury-card py-3 px-6 text-white/80 text-lg">
            "We replaced 4 tools with LISA in 48 hours."
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLisaSection;
