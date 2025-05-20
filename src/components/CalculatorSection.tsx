
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
      {/* Vector graphics background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          <g>
            {/* Dollar signs */}
            {Array.from({ length: 8 }).map((_, i) => (
              <text 
                key={i} 
                x={100 + Math.random() * 600} 
                y={50 + Math.random() * 300}
                fill={Math.random() > 0.5 ? "#FF2C9C" : "#1ECBE1"}
                fontSize={10 + Math.random() * 20}
                opacity={0.3 + Math.random() * 0.4}
              >
                $
              </text>
            ))}
            
            {/* Graph lines */}
            <path d="M100,300 C200,250 300,270 400,200 S600,100 700,50" stroke="#1ECBE1" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.3" />
            <path d="M100,250 C200,300 300,200 400,250 S600,150 700,100" stroke="#FF2C9C" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.3" />
            
            {/* Data points */}
            {Array.from({ length: 5 }).map((_, i) => {
              const x = 100 + i * 150;
              const y1 = 300 - (50 + i * 50 + Math.random() * 20);
              const y2 = 250 - (i * 40 + Math.random() * 20);
              return (
                <g key={i}>
                  <circle cx={x} cy={y1} r="4" fill="#1ECBE1" opacity="0.5" />
                  <circle cx={x} cy={y2} r="4" fill="#FF2C9C" opacity="0.5" />
                </g>
              );
            })}
          </g>
        </svg>
      </div>

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
                    style={{
                      background: `linear-gradient(to right, #FF2C9C 0%, #7540EE ${(hourlyRate - 25) / (200 - 25) * 100}%, rgba(255, 255, 255, 0.1) ${(hourlyRate - 25) / (200 - 25) * 100}%)`,
                    }}
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
                    style={{
                      background: `linear-gradient(to right, #FF2C9C 0%, #7540EE ${hoursPerWeek / 20 * 100}%, rgba(255, 255, 255, 0.1) ${hoursPerWeek / 20 * 100}%)`,
                    }}
                  />
                  <div className="text-2xl font-bold text-white mt-2">{hoursPerWeek} hours</div>
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>1 hour</span>
                    <span>20 hours</span>
                  </div>
                </div>
              </div>
              
              {/* 3D Button with icon */}
              <Button className="btn-3d bg-gradient-primary w-full text-white text-lg py-6 rounded-xl mt-4 group relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full">
                  <svg viewBox="0 0 100 40" className="w-full h-full opacity-10">
                    <path d="M0,20 L100,20" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                    <path d="M50,0 L50,40" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
                    {Array.from({ length: 5 }).map((_, i) => (
                      <circle key={i} cx={10 + i * 20} cy="20" r="1" fill="white" />
                    ))}
                  </svg>
                </span>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xl">🎯</span> 
                  Get Your Savings Report
                </span>
                <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
            </div>
            
            <div className="luxury-card h-full">
              {/* Vector graphic savings visualization */}
              <div className="absolute top-6 right-6 opacity-20">
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                  <circle cx="30" cy="30" r="29" stroke="#FF2C9C" strokeWidth="1" fill="none" />
                  <path d="M30,10 L30,30 L50,30" stroke="#FF2C9C" strokeWidth="2" fill="none" />
                  <circle cx="30" cy="30" r="3" fill="#FF2C9C" />
                </svg>
              </div>
              
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
                
                <div className="bg-white/5 p-4 rounded-lg relative overflow-hidden">
                  {/* Abstract vector pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <path d="M0,25 Q25,0 50,25 T100,25" stroke="#FF2C9C" strokeWidth="0.5" fill="none" />
                      <path d="M0,35 Q25,10 50,35 T100,35" stroke="#7540EE" strokeWidth="0.5" fill="none" />
                      <path d="M0,15 Q25,40 50,15 T100,15" stroke="#1ECBE1" strokeWidth="0.5" fill="none" />
                    </svg>
                  </div>
                  
                  <div className="flex items-start relative z-10">
                    <div className="text-2xl mr-3 bg-gradient-luxury w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">💡</div>
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
