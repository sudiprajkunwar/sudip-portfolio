
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="w-full h-[500px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 border-4 border-purple-500 rounded-xl"></div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-purple">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-6"></div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate web developer with a strong focus on creating beautiful, 
              functional, and user-friendly digital experiences. With expertise in modern 
              frontend technologies, I bring ideas to life through clean code and 
              thoughtful design.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              My journey in web development started over 5 years ago, and I've been 
              in love with coding ever since. When I'm not crafting websites, you'll 
              find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Personal Info</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <span className="font-medium mr-2">Name:</span> Your Name
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="font-medium mr-2">Experience:</span> 5+ Years
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="font-medium mr-2">Location:</span> Your Location
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Interests</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <span className="font-medium mr-2">UX/UI Design</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="font-medium mr-2">Web Development</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="font-medium mr-2">Mobile Apps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
