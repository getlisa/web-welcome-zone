
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "I replaced two contractors with one LISA agent. It doesn't call in sick. It doesn't stop.",
    name: "Alex Morgan",
    role: "Operations Director",
    company: "TechFlow Inc.",
    avatar: "👨‍💼"
  },
  {
    id: 2,
    quote: "Our research agent builds pitch decks in 1/10th the time. Clients are shocked.",
    name: "Sarah Chen",
    role: "Agency Owner",
    company: "Quantum Media",
    avatar: "👩‍💼"
  },
  {
    id: 3,
    quote: "I set up a sales agent. It booked 17 demos in 3 days. Unreal.",
    name: "Marcus Johnson",
    role: "Growth Lead",
    company: "Elevate SaaS",
    avatar: "👨‍💻",
    video: true
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

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

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-lisa-darker relative opacity-0 animate-on-scroll">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-lisa-purple/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">"LISA Took Over Half My Workload —</span> No Training Needed."
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Video/image area */}
          <div ref={videoRef} className="luxury-card aspect-video flex items-center justify-center">
            {testimonials[activeIndex].video ? (
              <div className="text-center">
                <div className="w-24 h-24 glass rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/60 text-sm">Click to play testimonial video</p>
              </div>
            ) : (
              <div className="text-6xl animate-float">{testimonials[activeIndex].avatar}</div>
            )}
          </div>
          
          {/* Testimonial content */}
          <div>
            <blockquote className="mb-8">
              <div className="text-6xl text-white/20 mb-4">"</div>
              <p className="text-2xl md:text-3xl font-sora mb-6">
                {testimonials[activeIndex].quote}
              </p>
              <footer className="flex items-center">
                <div className="h-12 w-1 bg-gradient-luxury rounded-full mr-4"></div>
                <div>
                  <p className="font-sora text-white">{testimonials[activeIndex].name}</p>
                  <p className="text-white/60 text-sm">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </footer>
            </blockquote>
            
            {/* Navigation dots */}
            <div className="flex gap-3 mt-8">
              {testimonials.map((testimonial, index) => (
                <button 
                  key={testimonial.id}
                  className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-gradient-luxury w-10' : 'bg-white/20'}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
