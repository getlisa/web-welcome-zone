
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const FooterSection = () => {
  useEffect(() => {
    // Initialize HubSpot form for footer with enhanced targeting and error handling
    const initFooterForm = () => {
      if (window.hbspt && window.hbspt.forms) {
        const targetElement = document.getElementById("footer-hubspot-form");
        if (targetElement) {
          // Clear any existing content in the target
          targetElement.innerHTML = '';
          
          console.log('Initializing footer HubSpot form...');
          
          try {
            window.hbspt.forms.create({
              portalId: "45865556",
              formId: "e3b6b5f4-4fc1-4784-87cd-06155d7de3d6",
              region: "na1",
              target: targetElement,
              onFormReady: () => {
                console.log('Footer HubSpot form ready');
                
                // Style the form container
                const form = targetElement.querySelector('.hs-form') as HTMLElement;
                if (form) {
                  form.style.cssText = `
                    max-width: 100% !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                  `;
                  
                  // Style form fields
                  const inputs = form.querySelectorAll('input[type="email"], input[type="text"]');
                  inputs.forEach(input => {
                    const el = input as HTMLElement;
                    el.style.cssText = `
                      width: 100% !important;
                      padding: 12px 16px !important;
                      border: 1px solid rgba(255, 255, 255, 0.2) !important;
                      border-radius: 8px !important;
                      background: rgba(255, 255, 255, 0.1) !important;
                      color: white !important;
                      font-size: 14px !important;
                      margin-bottom: 12px !important;
                      backdrop-filter: blur(10px) !important;
                    `;
                    
                    // Add placeholder styling
                    el.setAttribute('placeholder', el.getAttribute('placeholder') || 'Enter your email');
                  });
                  
                  // Style submit button
                  const submitBtn = form.querySelector('input[type="submit"]') as HTMLElement;
                  if (submitBtn) {
                    submitBtn.style.cssText = `
                      width: 100% !important;
                      padding: 12px 16px !important;
                      background: linear-gradient(135deg, #3b82f6, #1d4ed8) !important;
                      color: white !important;
                      border: none !important;
                      border-radius: 8px !important;
                      font-weight: 600 !important;
                      cursor: pointer !important;
                      transition: all 0.2s ease !important;
                      margin-top: 8px !important;
                    `;
                    
                    submitBtn.addEventListener('mouseenter', () => {
                      submitBtn.style.transform = 'translateY(-1px)';
                      submitBtn.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                    });
                    
                    submitBtn.addEventListener('mouseleave', () => {
                      submitBtn.style.transform = 'translateY(0)';
                      submitBtn.style.boxShadow = 'none';
                    });
                  }
                  
                  // Hide HubSpot branding/labels if any
                  const labels = form.querySelectorAll('label');
                  labels.forEach(label => {
                    const el = label as HTMLElement;
                    el.style.display = 'none';
                  });
                }
              },
              onFormSubmitted: () => {
                console.log('Footer form submitted');
                // Show success message
                const targetElement = document.getElementById("footer-hubspot-form");
                if (targetElement) {
                  targetElement.innerHTML = `
                    <div style="
                      text-align: center;
                      padding: 20px;
                      background: rgba(34, 197, 94, 0.1);
                      border: 1px solid rgba(34, 197, 94, 0.3);
                      border-radius: 8px;
                      color: #22c55e;
                    ">
                      <p style="margin: 0; font-weight: 600;">Thank you for subscribing!</p>
                      <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.8;">You'll receive the latest AI trends for business operations.</p>
                    </div>
                  `;
                }
              }
            });
          } catch (error) {
            console.error('Error creating footer HubSpot form:', error);
            targetElement.innerHTML = '<p style="color: white; opacity: 0.7; text-align: center; padding: 16px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px;">Unable to load newsletter form.</p>';
          }
        }
      } else {
        console.log('HubSpot script not ready for footer, retrying...');
        setTimeout(initFooterForm, 1000);
      }
    };

    // Try to initialize immediately and with delays
    initFooterForm();
    const timer1 = setTimeout(initFooterForm, 2000);
    const timer2 = setTimeout(initFooterForm, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <footer className="bg-lisa-darker pt-20 pb-8 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 pb-16 border-b border-white/10">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-sora font-bold gradient-text">LISA</span>
            </div>
            <p className="text-white/70 mb-6">
              The AI platform designed specifically for autonomous business operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/50 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-white/50 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Use Cases</h3>
            <ul className="space-y-4">
              <li><a href="#explainer" className="text-white/70 hover:text-lisa-blue transition-colors">How Lisa Works</a></li>
              <li><a href="#agents" className="text-white/70 hover:text-lisa-blue transition-colors">Use Cases</a></li>
              <li><a href="#why-lisa" className="text-white/70 hover:text-lisa-blue transition-colors">Tailored for you</a></li>
              <li><a href="#calculator" className="text-white/70 hover:text-lisa-blue transition-colors">Why AI</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Stay Updated</h3>
            <p className="text-white/70 mb-6">Get the latest AI trends for business operations.</p>
            <div 
              id="footer-hubspot-form" 
              className="w-full"
            ></div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 mb-4 md:mb-0">
            © 2025 LISA AI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-lisa-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-lisa-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-lisa-blue transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
