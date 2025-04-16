
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const skills = [
    { name: "HTML & CSS", icon: "🌐", color: "bg-pink-500" },
    { name: "JavaScript", icon: "📜", color: "bg-yellow-400" },
    { name: "TypeScript", icon: "🔷", color: "bg-blue-400" },
    { name: "React", icon: "⚛️", color: "bg-cyan-400" },
    { name: "Node.js", icon: "🟢", color: "bg-green-400" },
    { name: "Express", icon: "🚂", color: "bg-gray-400" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-500" },
    { name: "PostgreSQL", icon: "🐘", color: "bg-blue-500" },
    { name: "UI/UX Design", icon: "🎨", color: "bg-purple-400" },
    { name: "Figma", icon: "🖌️", color: "bg-purple-500" },
    { name: "Tailwind CSS", icon: "🌬️", color: "bg-cyan-500" },
    { name: "Responsive Design", icon: "📱", color: "bg-indigo-400" }
  ];

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
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 relative bg-black"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-5xl font-bold mb-4 text-gradient-purple transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Skills & Expertise
          </h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          ></div>
          <p 
            className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Here's an overview of my technical skills and areas of expertise
          </p>
        </div>

        <div 
          className={`glass-morphism p-6 rounded-2xl mb-16 transition-all duration-1000 delay-400 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap gap-1.5 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={skill.name}
                className={`text-xs py-0.5 px-2 ${skill.color} bg-opacity-20 border border-opacity-30 hover:bg-opacity-30 transition-all duration-300 hover:-translate-y-1`}
                variant="outline"
              >
                <span className="text-xs mr-1">{skill.icon}</span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        <div 
          className={`glass-morphism p-8 rounded-2xl transition-all duration-1000 delay-600 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Professional Experience</h3>
          
          <div className="space-y-10">
            {/* Company 1 */}
            <div className="border-l-2 border-purple-500 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
              <div className="flex flex-col md:flex-row md:items-center mb-3 gap-2">
                <h4 className="text-xl font-semibold text-white">Senior Software Engineer</h4>
                <div className="hidden md:block w-2 h-2 bg-gray-400 rounded-full mx-3"></div>
                <span className="text-purple-400 font-medium">Leapfrog Technology</span>
                <div className="hidden md:block w-2 h-2 bg-gray-400 rounded-full mx-3"></div>
                <span className="text-gray-400">September 2021 - Present</span>
              </div>
              <ul className="text-gray-300 mb-4 space-y-2 list-disc list-inside text-sm">
                <li>Work with a team of software engineers in the creation of high-quality software within agreed project deadlines</li>
                <li>Make architectural decisions in collaboration with technology experts</li>
                <li>Design, build, and maintain efficient, reusable, and reliable software</li>
                <li>Designing and developing business logic using REST APIs</li>
                <li>Preparation, drafting, and review of software documentation and project reports</li>
                <li>Implementing new software features and maintaining existing features</li>
                <li>Refactoring, debugging, testing, and implementing changes to existing applications</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-300">React</Badge>
                <Badge variant="outline" className="bg-blue-400/10 border-blue-400/30 text-blue-200">TypeScript</Badge>
                <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-300">Tailwind CSS</Badge>
                <Badge variant="outline" className="bg-red-500/10 border-red-500/30 text-red-300">Jest</Badge>
              </div>
            </div>
            
            {/* Company 2 */}
            <div className="border-l-2 border-blue-500 pl-6 relative">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
              <div className="flex flex-col md:flex-row md:items-center mb-3 gap-2">
                <h4 className="text-xl font-semibold text-white">Front-End Developer</h4>
                <div className="hidden md:block w-2 h-2 bg-gray-400 rounded-full mx-3"></div>
                <span className="text-blue-400 font-medium">Alpha Beta Theta Technologies</span>
                <div className="hidden md:block w-2 h-2 bg-gray-400 rounded-full mx-3"></div>
                <span className="text-gray-400">August 2020 - August 2021</span>
              </div>
              <ul className="text-gray-300 mb-4 space-y-2 list-disc list-inside text-sm">
                <li>Identify core technical problems and collaborate with team members to come up with a robust solution</li>
                <li>Creating self-contained, reusable components</li>
                <li>Research and document new technologies and find better solutions to existing problems</li>
                <li>Help manage CI/CD processes</li>
                <li>Conduct code reviews to maintain the integrity of the code</li>
                <li>Actively participate in improving organizational culture, processes, and standards</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-yellow-400/10 border-yellow-400/30 text-yellow-300">JavaScript</Badge>
                <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-300">Node.js</Badge>
                <Badge variant="outline" className="bg-green-600/10 border-green-600/30 text-green-400">MongoDB</Badge>
                <Badge variant="outline" className="bg-indigo-500/10 border-indigo-500/30 text-indigo-300">Express</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className={`glass-morphism p-8 rounded-xl transition-all duration-1000 delay-800 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient-purple">Education</h3>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-white">Bachelor's in Computer Science</h4>
                  <span className="text-gray-400 text-sm">2016 - 2020</span>
                </div>
                <p className="text-gray-300">University Name</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-white">Web Development Bootcamp</h4>
                  <span className="text-gray-400 text-sm">2021</span>
                </div>
                <p className="text-gray-300">Coding Academy</p>
              </li>
            </ul>
          </div>

          <div 
            className={`glass-morphism p-8 rounded-xl transition-all duration-1000 delay-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient-purple">Certifications</h3>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-white">AWS Certified Developer</h4>
                  <span className="text-gray-400 text-sm">2022</span>
                </div>
                <p className="text-gray-300">Amazon Web Services</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-white">Professional Scrum Master I</h4>
                  <span className="text-gray-400 text-sm">2021</span>
                </div>
                <p className="text-gray-300">Scrum.org</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
