import { useEffect, useState } from 'react';
import { ChevronDown, Github, Instagram, Linkedin } from 'lucide-react';

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
      {/* Background with classic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMzJjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgNThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yOC0yYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em01NiA0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]"></div>
      </div>

      {/* Subtle accent lighting */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Hero content */}
        <div className="md:w-3/5 text-center md:text-left">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Sudip Raj Kunwar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Senior Software Engineer specializing in full-stack development
              with React, Node, and modern JavaScript.
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
              <a
                href="https://github.com/sudiprajkunwar"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/in/sudiprajkunwar"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/sudiprajkunwar"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="md:w-2/5 mt-8 md:mt-0">
          <div
            className={`relative transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="relative p-1 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full">
              <div className="bg-gray-900 p-1 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Developer Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-white/80 hover:text-purple-400 transition-colors"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
