
import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20"
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 z-0"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMzJjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgNThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yOC0yYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em01NiA0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]"></div>
      </div>

      {/* Glowing accent elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]"></div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Hero content */}
        <div className="md:w-3/5 text-center md:text-left">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Sudip Raj Kunwar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Senior Software Engineer with 4+ years of experience building modern web applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
              <a
                href="#about"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-1"
              >
                About Me
              </a>
              <a
                href="#expertise"
                className="px-8 py-3 rounded-full border border-white/20 text-white backdrop-blur-sm bg-white/5 font-medium hover:bg-white/10 transition-all"
              >
                My Expertise
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all">
                <Github size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all">
                <Mail size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all">
                <ExternalLink size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="md:w-2/5 mt-8 md:mt-0">
          <div className={`relative transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="relative p-2 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full">
              <div className="bg-indigo-950 p-2 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-purple-400 transition-colors">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
