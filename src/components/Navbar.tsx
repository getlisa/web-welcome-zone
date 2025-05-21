
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass backdrop-blur-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#" className="flex items-center mb-4 md:mb-0 md:mr-auto">
            <img 
              src="/placeholder.svg" 
              alt="LISA Logo" 
              className="h-8 mr-2"
            />
            <span className="text-xl md:text-2xl font-semibold gradient-text">LISA</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#agents" 
              className="text-white/80 hover:text-warmBlush relative overflow-hidden group transition-colors"
            >
              <span>Agents</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-luxury transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-warmBlush relative overflow-hidden group transition-colors"
            >
              <span>Testimonials</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-luxury transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </a>
            <a 
              href="#why-lisa" 
              className="text-white/80 hover:text-warmBlush relative overflow-hidden group transition-colors"
            >
              <span>Why LISA</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-luxury transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </a>
            <Button 
              className="btn-3d bg-gradient-primary hover:shadow-[0_0_15px_rgba(243,213,229,0.4)] text-white rounded-xl"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden text-white p-2 absolute right-4 top-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-gradient-luxury transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 bg-gradient-luxury transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full glass overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#agents" className="text-white hover:text-warmBlush transition-colors py-2">
            Agents
          </a>
          <a href="#testimonials" className="text-white hover:text-warmBlush transition-colors py-2">
            Testimonials
          </a>
          <a href="#why-lisa" className="text-white hover:text-warmBlush transition-colors py-2">
            Why LISA
          </a>
          <Button className="btn-3d bg-gradient-primary text-white py-2 font-medium rounded-xl w-full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
