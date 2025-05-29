
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProofStrip from "../components/ProofStrip";
import ExplainerSection from "../components/ExplainerSection";
import AgentsSection from "../components/AgentsSection";
import DemoCtaSection from "../components/DemoCtaSection";
import CalculatorSection from "../components/CalculatorSection";
import WhyLisaSection from "../components/WhyLisaSection";
import FinalCta from "../components/FinalCta";
import FooterSection from "../components/FooterSection";

const Index = () => {
  useEffect(() => {
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Animate elements on scroll
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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-lisa-dark text-white">
      <div className="fixed inset-0 -z-10 bg-gradient-dark"></div>
      <Navbar />
      <HeroSection />
      <ProofStrip />
      <ExplainerSection />
      <AgentsSection />
      <DemoCtaSection />
      <CalculatorSection />
      <WhyLisaSection />
      <FinalCta />
      <FooterSection />
    </div>
  );
};

export default Index;
