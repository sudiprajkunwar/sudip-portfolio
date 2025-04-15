
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AestheticsSection from "@/components/AestheticsSection";
import TechnicalExpertiseSection from "@/components/TechnicalExpertiseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AestheticsSection />
        <TechnicalExpertiseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
