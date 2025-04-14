
import { useState, useEffect, useRef } from "react";
import { Award, User, MapPin, Mail, GraduationCap, Briefcase, ExternalLink } from "lucide-react";
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
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900 to-background opacity-70"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Animated Glow */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-28 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Profile and Info */}
          <div 
            className={`lg:col-span-5 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold mb-1 text-white">Sudip Raj Kunwar</h3>
                  <p className="text-cyan-400 font-medium">Senior Software Engineer</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center text-gray-300 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-cyan-500/20 transition-colors">
                      <Mail size={18} className="text-cyan-400" />
                    </div>
                    <span className="ml-3">sudip@example.com</span>
                  </div>
                  <div className="flex items-center text-gray-300 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-cyan-500/20 transition-colors">
                      <MapPin size={18} className="text-cyan-400" />
                    </div>
                    <span className="ml-3">Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center text-gray-300 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-cyan-500/20 transition-colors">
                      <GraduationCap size={18} className="text-cyan-400" />
                    </div>
                    <span className="ml-3">B.Sc. Computer Science</span>
                  </div>
                  <div className="flex items-center text-gray-300 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-cyan-500/20 transition-colors">
                      <Award size={18} className="text-cyan-400" />
                    </div>
                    <span className="ml-3">4+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio and Experience */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bio section */}
            <div 
              className={`transition-all duration-1000 delay-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <User size={20} className="text-cyan-400" />
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
            </div>

            {/* Experience section */}
            <div 
              className={`transition-all duration-1000 delay-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <Briefcase size={20} className="text-cyan-400" />
                  Work Experience
                </h3>
                
                <div className="space-y-8">
                  {/* Company 1 */}
                  <div className="relative pl-8 border-l-2 border-cyan-500/50">
                    <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-1"></div>
                    <div className="mb-2">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-xl font-semibold text-white">Senior Software Engineer</h4>
                        <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-300">
                          Present
                        </Badge>
                      </div>
                      <div className="flex items-center text-cyan-400 font-medium">
                        Leapfrog Technology
                      </div>
                      <p className="text-gray-400 mt-1">September 2021 - Present</p>
                    </div>
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
                  <div className="relative pl-8 border-l-2 border-purple-500/50">
                    <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold text-white mb-1">Front-End Developer</h4>
                      <div className="flex items-center text-purple-400 font-medium">
                        Alpha Beta Theta Technologies
                      </div>
                      <p className="text-gray-400 mt-1">August 2020 - August 2021</p>
                    </div>
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
            </div>

            {/* Education */}
            <div 
              className={`transition-all duration-1000 delay-800 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <GraduationCap size={20} className="text-cyan-400" />
                  Education
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-semibold text-white text-lg">Bachelor of Science in Computer Science and Information Technology</h4>
                    <span className="text-gray-400 text-sm">2015 - 2020</span>
                  </div>
                  <p className="text-gray-300">College of Applied Business (Tribhuvan University)</p>
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
