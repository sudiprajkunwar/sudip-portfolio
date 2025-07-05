import {
  ArrowUp,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
              Creating beautiful digital experiences with modern technologies.
              Let's work together to bring your ideas to life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('expertise')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Expertise
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Socials</h3>
            <ul className="flex gap-2">
              <li className="text-gray-400">
                <a
                  target="_blank"
                  aria-label="Github"
                  rel="noopener noreferrer"
                  href="https://github.com/sudiprajkunwar"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Github size={16} className="text-white" />
                </a>
              </li>

              <li className="text-gray-400">
                <a
                  target="_blank"
                  aria-label="LinkedIn"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/sudiprajkunwar"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={16} className="text-white" />
                </a>
              </li>

              <li className="text-gray-400">
                <a
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/sudiprajkunwar"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} className="text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sudip Raj Kunwar. All rights
            reserved.
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
