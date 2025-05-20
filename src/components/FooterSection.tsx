
import { ArrowRight } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-lisa-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 pb-16 border-b border-lisa-gray-200">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-sora font-bold text-lisa-gray-900">LISA</span>
            </div>
            <p className="text-lisa-gray-600 mb-6">
              The AI platform designed specifically for trades businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-lisa-gray-500 hover:text-lisa-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-lisa-gray-500 hover:text-lisa-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lisa-gray-900 font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#how-it-works" className="text-lisa-gray-600 hover:text-lisa-gray-900">How It Works</a></li>
              <li><a href="#use-cases" className="text-lisa-gray-600 hover:text-lisa-gray-900">Use Cases</a></li>
              <li><a href="#" className="text-lisa-gray-600 hover:text-lisa-gray-900">Pricing</a></li>
              <li><a href="#" className="text-lisa-gray-600 hover:text-lisa-gray-900">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lisa-gray-900 font-semibold text-lg mb-6">Industries</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-lisa-gray-600 hover:text-lisa-gray-900">HVAC</a></li>
              <li><a href="#" className="text-lisa-gray-600 hover:text-lisa-gray-900">Plumbing</a></li>
              <li><a href="#" className="text-lisa-gray-600 hover:text-lisa-gray-900">Electrical</a></li>
              <li><a href="#" className="text-lisa-gray-600 hover:text-lisa-gray-900">Fire Protection</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lisa-gray-900 font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-lisa-gray-600 mb-4">Get the latest AI trends for trades businesses.</p>
            <div className="bg-lisa-gray-100 rounded-lg p-1">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-transparent text-lisa-gray-900 px-4 py-2 flex-1 outline-none" 
                />
                <button className="bg-lisa-green p-2 rounded-lg text-white">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-lisa-gray-500 mb-4 md:mb-0">
            © 2025 LISA. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-lisa-gray-500 hover:text-lisa-gray-900">Privacy Policy</a>
            <a href="#" className="text-lisa-gray-500 hover:text-lisa-gray-900">Terms of Service</a>
            <a href="#" className="text-lisa-gray-500 hover:text-lisa-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
