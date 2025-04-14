
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20, 20, 30, 0.9), rgba(90, 60, 140, 0.8)), url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80)`,
        }}
      ></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
      </div>

      {/* Aesthetic geometric shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            Hello, I'm <span className="text-gradient-purple">Sudip Raj Kunwar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Senior Software Engineer with 4+ years of experience building modern web applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all transform hover:-translate-y-1"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full glass-morphism text-white font-medium hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
