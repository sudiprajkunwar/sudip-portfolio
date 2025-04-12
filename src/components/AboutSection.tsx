
import { useState, useEffect, useRef } from "react";
import { Award, Briefcase, GraduationCap, User, MapPin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      className="py-20 md:py-32 relative bg-gradient-to-b from-background to-black"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-purple">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile image and info cards */}
          <div 
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="glass-morphism rounded-3xl overflow-hidden mb-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Your Name</h3>
                <p className="text-lg text-purple-300 mb-6">Web Developer & UI/UX Designer</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-300">
                    <Mail size={18} className="mr-3 text-purple-400" />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin size={18} className="mr-3 text-purple-400" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <GraduationCap size={18} className="mr-3 text-purple-400" />
                    <span>Computer Science Degree</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Award size={18} className="mr-3 text-purple-400" />
                    <span>Available for Freelance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio section */}
          <div 
            className={`transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="glass-morphism p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  I'm a passionate web developer with a strong focus on creating beautiful, 
                  functional, and user-friendly digital experiences. With expertise in modern 
                  frontend technologies, I bring ideas to life through clean code and 
                  thoughtful design.
                </p>
                
                <p>
                  My journey in web development started over 5 years ago, and I've been 
                  in love with coding ever since. When I'm not crafting websites, you'll 
                  find me exploring new technologies, contributing to open-source projects, 
                  or enjoying outdoor activities.
                </p>

                <div className="pt-4">
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">What I Do</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center bg-white/5 rounded-lg p-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      <span>Frontend Development</span>
                    </div>
                    <div className="flex items-center bg-white/5 rounded-lg p-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      <span>Responsive Design</span>
                    </div>
                    <div className="flex items-center bg-white/5 rounded-lg p-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>UI/UX Design</span>
                    </div>
                    <div className="flex items-center bg-white/5 rounded-lg p-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Full Stack Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
