
import { useState, useEffect, useRef } from "react";
import { Award, User, MapPin, Mail, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                <h3 className="text-2xl font-bold mb-2 text-white">Sudip Raj Kunwar</h3>
                <p className="text-lg text-purple-300 mb-6">Senior Software Engineer</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-300">
                    <Mail size={18} className="mr-3 text-purple-400" />
                    <span>sudip@example.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin size={18} className="mr-3 text-purple-400" />
                    <span>Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <GraduationCap size={18} className="mr-3 text-purple-400" />
                    <span>B.Sc. Computer Science</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Award size={18} className="mr-3 text-purple-400" />
                    <span>4+ Years Experience</span>
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
              <h3 className="text-2xl font-bold mb-6 text-white">Professional Summary</h3>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Skilled Software Engineer with 4+ years of hands-on experience building, 
                  optimizing, and supporting web-based applications for diverse industry 
                  organizations. Passionate about implementing and launching new projects.
                </p>
                
                <p>
                  Ability to identify core technical problems, find better solutions to existing problems, 
                  and translate business requirements into technical solutions. Driven individual with 
                  the ability to adapt to any situation and a proven potential to grow self and others.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience section - now in left column */}
          <div 
            className={`glass-morphism p-8 rounded-3xl transition-all duration-1000 delay-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Professional Experience</h3>
            
            <div className="space-y-8">
              {/* Company 1 */}
              <div className="border-l-2 border-purple-500 pl-6 relative">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
                <div className="flex flex-col md:flex-row md:items-center mb-3 gap-2">
                  <h4 className="text-xl font-semibold text-white">Senior Software Engineer</h4>
                  <div className="hidden md:block w-2 h-2 bg-gray-400 rounded-full mx-3"></div>
                  <span className="text-purple-400 font-medium">Leapfrog Technology</span>
                </div>
                <p className="text-gray-400 mb-2">September 2021 - Present</p>
                <p className="text-gray-300 mb-4">
                  Working with a team of software engineers to create high-quality software within agreed project deadlines.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-300">React</Badge>
                  <Badge variant="outline" className="bg-blue-400/10 border-blue-400/30 text-blue-200">TypeScript</Badge>
                  <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-300">Node.js</Badge>
                </div>
              </div>
              
              {/* Company 2 */}
              <div className="border-l-2 border-blue-500 pl-6 relative">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                <div className="flex flex-col md:flex-row md:items-center mb-3 gap-2">
                  <h4 className="text-xl font-semibold text-white">Front-End Developer</h4>
                  <div className="hidden md:block w-2 h-2 bg-gray-400 rounded-full mx-3"></div>
                  <span className="text-blue-400 font-medium">Alpha Beta Theta Technologies</span>
                </div>
                <p className="text-gray-400 mb-2">August 2020 - August 2021</p>
                <p className="text-gray-300 mb-4">
                  Identified core technical problems and collaborated with team members to develop robust solutions.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-yellow-400/10 border-yellow-400/30 text-yellow-300">JavaScript</Badge>
                  <Badge variant="outline" className="bg-cyan-400/10 border-cyan-400/30 text-cyan-300">React</Badge>
                  <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-300">Redux</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Education and Projects - now in right column */}
          <div className="space-y-8">
            <div 
              className={`glass-morphism p-8 rounded-xl transition-all duration-1000 delay-800 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient-purple">Education</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-semibold text-white">Bachelor of Science in Computer Science and Information Technology</h4>
                    <span className="text-gray-400 text-sm">2015 - 2020</span>
                  </div>
                  <p className="text-gray-300">College of Applied Business (Tribhuvan University)</p>
                </li>
              </ul>
            </div>
            
            <div 
              className={`glass-morphism p-8 rounded-xl transition-all duration-1000 delay-900 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient-purple">Key Projects</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold text-white mb-1">Vyaguta - Enterprise Resource Planning</h4>
                  <p className="text-gray-300 text-sm">Enterprise Resource Planning system for managing day-to-day business activities.</p>
                </li>
                <li>
                  <h4 className="font-semibold text-white mb-1">SuperCare Health</h4>
                  <p className="text-gray-300 text-sm">Web application for medical record management and paperless workflows.</p>
                </li>
                <li>
                  <h4 className="font-semibold text-white mb-1">Delivery Track</h4>
                  <p className="text-gray-300 text-sm">Mobile application for delivery drivers to navigate to customers' homes.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
