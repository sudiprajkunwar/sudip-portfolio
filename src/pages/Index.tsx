
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WebMobileExpertiseSection from "@/components/WebMobileExpertiseSection";
import AestheticsSection from "@/components/AestheticsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WebMobileExpertiseSection />
        <AestheticsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
