
import { useState, useEffect, useRef } from "react";
import { Award, User, MapPin, Mail, GraduationCap, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
      className="py-16 bg-black text-white relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div 
          className={`text-center mb-10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            About <span className="text-gray-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Image */}
          <div 
            className={`lg:col-span-4 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-auto grayscale transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - Professional Summary */}
          <div 
            className={`lg:col-span-8 space-y-5 transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Professional Summary */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <User size={18} className="text-gray-400" />
                Professional Summary
              </h3>
              
              <div className="space-y-3 text-gray-300 text-sm md:text-base">
                <p className="leading-relaxed">
                  Skilled Software Engineer with 4+ years of hands-on experience building, 
                  optimizing, and supporting web-based applications for diverse industry 
                  organizations. Passionate about implementing and launching new projects.
                </p>
                
                <p className="leading-relaxed">
                  Ability to identify core technical problems, find better solutions to existing problems, 
                  and translate business requirements into technical solutions.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-white">Personal Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-300 group">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <Mail size={16} className="text-gray-400" />
                  </div>
                  <span className="ml-2">sudip@example.com</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <MapPin size={16} className="text-gray-400" />
                  </div>
                  <span className="ml-2">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <GraduationCap size={16} className="text-gray-400" />
                  </div>
                  <span className="ml-2">B.Sc. Computer Science</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <Award size={16} className="text-gray-400" />
                  </div>
                  <span className="ml-2">4+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Work Experience - Condensed */}
            <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                <Briefcase size={16} className="text-gray-400" />
                Work Experience
              </h3>
              
              <div className="space-y-4 text-sm">
                {/* Company 1 */}
                <div className="relative pl-6 border-l border-gray-800">
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[6px] top-1"></div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-semibold text-white">Senior Software Engineer</h4>
                      <Badge variant="outline" className="text-xs bg-gray-800 border-gray-700 text-gray-300">
                        Present
                      </Badge>
                    </div>
                    <div className="text-gray-400 text-xs">Leapfrog Technology</div>
                    <p className="text-gray-500 text-xs">September 2021 - Present</p>
                  </div>
                </div>
                
                {/* Company 2 */}
                <div className="relative pl-6 border-l border-gray-800">
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[6px] top-1"></div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Front-End Developer</h4>
                    <div className="text-gray-400 text-xs">Alpha Beta Theta Technologies</div>
                    <p className="text-gray-500 text-xs">August 2020 - August 2021</p>
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
