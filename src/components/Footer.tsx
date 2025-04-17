
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 bg-gradient-to-t from-black to-gray-900 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold inline-block mb-4">
              <span className="text-cyan-400">Sudip</span>
              <span className="text-white">Raj</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating beautiful digital experiences with modern technologies. Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sudiprajkunwar" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/sudiprajkunwar" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#expertise" className="text-gray-400 hover:text-cyan-400 transition-colors">Expertise</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block text-sm">Email:</span>
                <a href="mailto:sudiprajkunwar@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Mail size={14} />
                  sudiprajkunwar@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm">Location:</span>
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sudip Raj Kunwar. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
