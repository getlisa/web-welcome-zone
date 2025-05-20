
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
        isScrolled ? 'py-3 glass shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-sora font-bold gradient-text">LISA</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#use-cases" className="text-white/80 hover:text-white transition-colors">
            Use Cases
          </a>
          <a href="#tailored" className="text-white/80 hover:text-white transition-colors">
            Tailored for You
          </a>
          <a href="#why-now" className="text-white/80 hover:text-white transition-colors">
            Why Now
          </a>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity font-medium rounded-xl">
            Get Started
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-lisa-bg glass-card border-t border-white/10 overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors py-2">
            How It Works
          </a>
          <a href="#use-cases" className="text-white/80 hover:text-white transition-colors py-2">
            Use Cases
          </a>
          <a href="#tailored" className="text-white/80 hover:text-white transition-colors py-2">
            Tailored for You
          </a>
          <a href="#why-now" className="text-white/80 hover:text-white transition-colors py-2">
            Why Now
          </a>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity py-2 font-medium rounded-xl w-full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
