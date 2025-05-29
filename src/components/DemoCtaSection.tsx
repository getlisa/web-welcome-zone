
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const DemoCtaSection = () => {
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

  const openHubSpotForm = () => {
    // HubSpot form popup - placeholder for now
    console.log('Opening HubSpot form...');
    alert('HubSpot demo form would open here. Contact us at demo@lisa.com');
  };

  return (
    <section ref={sectionRef} className="py-32 opacity-0 animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="luxury-card bg-gradient-to-b from-trueBlack to-deepWine/30 max-w-4xl mx-auto">
          <div className="glass-card backdrop-blur-lg border border-white/10">
            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Want to see how your team could run faster, leaner, smarter with LISA?
              </h3>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button 
                  onClick={openHubSpotForm}
                  className="btn-3d bg-gradient-primary text-white hover:shadow-[0_0_20px_rgba(243,213,229,0.4)] rounded-xl h-14 px-8"
                >
                  <span className="mr-2">🧠</span> Book a Demo
                </Button>
                
                <Button variant="outline" className="btn-3d luxury-border bg-transparent border-0 text-white h-14 px-8 rounded-xl">
                  <span className="mr-2">⚡</span> Try an Agent Live
                </Button>
              </div>
              
              <p className="mt-6 text-white/60 text-sm">No credit card required. No commitment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoCtaSection;
