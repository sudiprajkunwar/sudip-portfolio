
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
      className="py-20 md:py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-gray-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Image */}
          <div 
            className={`lg:col-span-5 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-auto grayscale transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - Professional Summary */}
          <div 
            className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Professional Summary */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <User size={20} className="text-gray-400" />
                Professional Summary
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Skilled Software Engineer with 4+ years of hands-on experience building, 
                  optimizing, and supporting web-based applications for diverse industry 
                  organizations. Passionate about implementing and launching new projects.
                </p>
                
                <p className="leading-relaxed">
                  Ability to identify core technical problems, find better solutions to existing problems, 
                  and translate business requirements into technical solutions. Driven individual with 
                  the ability to adapt to any situation and a proven potential to grow self and others.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Personal Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center text-gray-300 group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <span className="ml-3">sudip@example.com</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <MapPin size={18} className="text-gray-400" />
                  </div>
                  <span className="ml-3">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <GraduationCap size={18} className="text-gray-400" />
                  </div>
                  <span className="ml-3">B.Sc. Computer Science</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <Award size={18} className="text-gray-400" />
                  </div>
                  <span className="ml-3">4+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <Briefcase size={20} className="text-gray-400" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {/* Company 1 */}
                <div className="relative pl-8 border-l-2 border-gray-800">
                  <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-[9px] top-1"></div>
                  <div className="mb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-xl font-semibold text-white">Senior Software Engineer</h4>
                      <Badge variant="outline" className="bg-gray-800 border-gray-700 text-gray-300">
                        Present
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-400 font-medium">
                      Leapfrog Technology
                    </div>
                    <p className="text-gray-500 mt-1">September 2021 - Present</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-gray-800 border-gray-700 text-gray-300">React</Badge>
                    <Badge variant="outline" className="bg-gray-800 border-gray-700 text-gray-300">TypeScript</Badge>
                    <Badge variant="outline" className="bg-gray-800 border-gray-700 text-gray-300">Node.js</Badge>
                  </div>
                </div>
                
                {/* Company 2 */}
                <div className="relative pl-8 border-l-2 border-gray-800">
                  <div className="absolute w-4 h-4 bg-gray-700 rounded-full -left-[9px] top-1"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold text-white mb-1">Front-End Developer</h4>
                    <div className="flex items-center text-gray-400 font-medium">
                      Alpha Beta Theta Technologies
                    </div>
                    <p className="text-gray-500 mt-1">August 2020 - August 2021</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-gray-800 border-gray-700 text-gray-300">JavaScript</Badge>
                    <Badge variant="outline" className="bg-gray-800 border-gray-700 text-gray-300">React</Badge>
                    <Badge variant="outline" className="bg-gray-800 border-gray-700 text-gray-300">Redux</Badge>
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
