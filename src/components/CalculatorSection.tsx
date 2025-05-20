
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const CalculatorSection = () => {
  const [hourlyRate, setHourlyRate] = useState(75);
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
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
  
  const calculateMonthlySavings = () => {
    return hourlyRate * hoursPerWeek * 4;
  };
  
  const calculateYearlySavings = () => {
    return calculateMonthlySavings() * 12;
  };

  return (
    <section ref={sectionRef} className="section-padding relative opacity-0 animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto glass rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Hidden Cost of <span className="gradient-text">Doing It Manually</span>
            </h2>
            <p className="text-white/80">
              Enter your average hourly cost, task frequency, and LISA will show you how much time and money you're losing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-8">
                <label className="block text-white/80 mb-2">Hourly cost (salary + overhead):</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80">$</span>
                  <input
                    type="range"
                    min="25"
                    max="200"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-2xl font-bold text-white mt-2">${hourlyRate}</div>
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>$25</span>
                    <span>$200</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-white/80 mb-2">Hours spent per week on manual tasks:</label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-2xl font-bold text-white mt-2">{hoursPerWeek} hours</div>
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>1 hour</span>
                    <span>20 hours</span>
                  </div>
                </div>
              </div>
              
              <Button className="btn-3d bg-gradient-primary w-full text-white text-lg py-6 rounded-xl mt-4">
                🎯 Get Your Savings Report
              </Button>
            </div>
            
            <div className="luxury-card h-full">
              <h3 className="text-2xl font-sora mb-6">Your Potential Savings</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <p className="text-white/70">Monthly savings</p>
                    <p className="text-3xl font-bold text-white">${calculateMonthlySavings().toLocaleString()}</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    {hoursPerWeek * 4} hours/month
                  </div>
                </div>
                
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <p className="text-white/70">Yearly savings</p>
                    <p className="text-4xl font-bold gradient-text">${calculateYearlySavings().toLocaleString()}</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    {hoursPerWeek * 4 * 12} hours/year
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="text-2xl mr-3">💡</div>
                    <p className="text-white/80 text-sm">
                      "Replacing {hoursPerWeek} hours of weekly tasks could save your company ${calculateYearlySavings().toLocaleString()} annually. Our clients typically see ROI within the first month."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
