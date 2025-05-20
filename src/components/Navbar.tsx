
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
        isScrolled ? 'py-3 bg-white/95 shadow-sm backdrop-blur-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-sora font-bold text-lisa-gray-900">LISA</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-lisa-gray-700 hover:text-lisa-gray-900 font-medium transition-colors">
            How It Works
          </a>
          <a href="#use-cases" className="text-lisa-gray-700 hover:text-lisa-gray-900 font-medium transition-colors">
            Use Cases
          </a>
          <a href="#tailored" className="text-lisa-gray-700 hover:text-lisa-gray-900 font-medium transition-colors">
            For Your Business
          </a>
          <a href="#why-now" className="text-lisa-gray-700 hover:text-lisa-gray-900 font-medium transition-colors">
            Why Now
          </a>
          <Button className="bg-lisa-green hover:bg-lisa-green/90 text-white transition-all font-medium rounded-lg">
            Get Started
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button 
          className="md:hidden text-lisa-gray-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-lisa-gray-900 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-lisa-gray-900 transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 bg-lisa-gray-900 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white border-t border-lisa-gray-200 overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#how-it-works" className="text-lisa-gray-700 hover:text-lisa-gray-900 transition-colors py-2">
            How It Works
          </a>
          <a href="#use-cases" className="text-lisa-gray-700 hover:text-lisa-gray-900 transition-colors py-2">
            Use Cases
          </a>
          <a href="#tailored" className="text-lisa-gray-700 hover:text-lisa-gray-900 transition-colors py-2">
            For Your Business
          </a>
          <a href="#why-now" className="text-lisa-gray-700 hover:text-lisa-gray-900 transition-colors py-2">
            Why Now
          </a>
          <Button className="bg-lisa-green hover:bg-lisa-green/90 text-white transition-opacity py-2 font-medium rounded-lg w-full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
