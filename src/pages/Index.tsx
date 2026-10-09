import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import WebMobileExpertiseSection from '@/components/WebMobileExpertiseSection';
const Index = () => {
  useEffect(() => {
    document.title = 'Sudip Raj Kunwar — Senior Software Engineer';
    const tags = { description: 'Sudip Raj Kunwar, Senior Software Engineer specializing in full-stack development, mobile applications, and system architecture.', 'og:title': 'Sudip Raj Kunwar — Senior Software Engineer', 'og:description': 'Full-stack development, mobile applications, and thoughtful system architecture.', 'og:type': 'website', 'twitter:card': 'summary' };
    Object.entries(tags).forEach(([name, content]) => {
      const attr = name.startsWith('og:') ? 'property' : 'name';
      let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attr, name); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    });
    if (!document.getElementById('portfolio-fonts')) {
      const link = document.createElement('link');
      link.id = 'portfolio-fonts'; link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Work+Sans:wght@400;500;600&display=swap';
      document.head.appendChild(link);
    }
  }, []);
  return <div className="min-h-screen bg-background"><Navbar /><main><HeroSection /><WebMobileExpertiseSection /><AboutSection /><SkillsSection /></main><Footer /></div>;
};
export default Index;
