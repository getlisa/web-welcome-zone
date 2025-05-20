
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import UseCasesSection from "../components/UseCasesSection";
import TailoredSection from "../components/TailoredSection";
import WhyNowSection from "../components/WhyNowSection";
import FooterSection from "../components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-lisa-bg">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <UseCasesSection />
      <TailoredSection />
      <WhyNowSection />
      <FooterSection />
    </div>
  );
};

export default Index;
