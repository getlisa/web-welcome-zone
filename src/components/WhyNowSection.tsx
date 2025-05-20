
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const reasons = [
  {
    id: 1,
    title: "Trades is Changing",
    description: "Rising costs, tighter labor markets, and increased technology adoption are transforming the industry.",
    icon: "📈"
  },
  {
    id: 2,
    title: "AI is Finally Practical",
    description: "LISA is built specifically for trades businesses, not a generic solution from Silicon Valley.",
    icon: "🧠"
  },
  {
    id: 3,
    title: "No Need to Rebuild",
    description: "You don't have to change your existing systems. LISA adds intelligence to what you already have.",
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
            Why <span className="gradient-text">AI Now</span>
          </h2>
          <p className="text-lg text-lisa-text why-now-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            The timing has never been better to bring AI to your trades business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.id}
              className="glass-card p-8 text-center hover:bg-white/5 transition-all group why-now-reveal opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="text-4xl mb-6 mx-auto glass h-20 w-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-lisa-text">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto why-now-reveal opacity-0" style={{ animationDelay: '0.7s' }}>
          <div className="glass-card p-10 md:p-16 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">Ready to see what LISA can do for your business?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 h-14 px-10 text-lg rounded-xl">
                Get Started Free
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 h-14 px-10 text-lg rounded-xl">
                Schedule Demo
              </Button>
            </div>
            <p className="mt-8 text-white/60">No credit card required. Free AI readiness assessment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
