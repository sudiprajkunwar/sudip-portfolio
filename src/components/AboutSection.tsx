
import { useState, useEffect, useRef } from "react";
import { Award, Briefcase, GraduationCap, User, MapPin, Mail, Code, Server, Database, Github } from "lucide-react";
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

  const skills = [
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "TypeScript", color: "bg-blue-400" },
    { name: "C++", color: "bg-purple-400" },
    { name: "HTML5", color: "bg-orange-500" },
    { name: "CSS3", color: "bg-blue-500" },
    { name: "ReactJS", color: "bg-cyan-400" },
    { name: "React Native", color: "bg-cyan-500" },
    { name: "Redux", color: "bg-purple-500" },
    { name: "Redux-Saga", color: "bg-purple-400" },
    { name: "Webpack", color: "bg-blue-300" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Express", color: "bg-gray-500" },
    { name: "NestJS", color: "bg-red-500" },
    { name: "Bootstrap", color: "bg-purple-600" },
    { name: "Material CSS", color: "bg-blue-600" },
    { name: "Ant Design", color: "bg-blue-400" },
    { name: "Testing", color: "bg-green-400" },
    { name: "MySQL", color: "bg-blue-600" },
    { name: "PostgreSQL", color: "bg-blue-500" },
    { name: "MS SQL Server", color: "bg-indigo-500" },
    { name: "Git", color: "bg-orange-600" },
    { name: "GitHub", color: "bg-gray-700" },
    { name: "Bitbucket", color: "bg-blue-700" },
    { name: "GitLab", color: "bg-orange-500" },
  ];

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

                <div className="pt-4">
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">Technical Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <Badge
                        key={skill.name}
                        className={`text-base py-2 px-4 ${skill.color} bg-opacity-20 border border-opacity-30 hover:bg-opacity-30 transition-all duration-300 hover:-translate-y-1`}
                        variant="outline"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section with chips */}
        <div 
          className={`glass-morphism p-8 rounded-3xl mt-12 transition-all duration-1000 delay-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Professional Experience</h3>
          
          <div className="space-y-12">
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
              <p className="text-gray-300 mb-4">
                Working with a team of software engineers to create high-quality software within agreed project deadlines. Making architectural decisions, designing and implementing business logic using REST APIs, and maintaining efficient, reusable, and reliable software.
              </p>
              
              <div className="mt-6">
                <h5 className="text-lg font-semibold text-white mb-3">Project: Vyaguta</h5>
                <p className="text-gray-300 mb-3">
                  Enterprise Resource Planning system for managing day-to-day business activities such as Employee Management, Project Management, and Resource Management.
                </p>
                <h6 className="text-md font-semibold text-purple-300 mb-2">Role:</h6>
                <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-4">
                  <li>Collaborated with team members to create efficient and scalable data models</li>
                  <li>Configured and wrote base code for both front end and back end</li>
                  <li>Developed front end using ReactJs and TypeScript</li>
                  <li>Developed back end using Express, NestJS, MySQL, and PostgreSQL</li>
                  <li>Deployed latest builds to development and production servers</li>
                </ul>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-semibold text-white mb-3">Project: SuperCare Health</h5>
                <p className="text-gray-300 mb-3">
                  Web application aimed at revolutionizing medical record management by facilitating paperless workflows for efficient maintenance of patient records.
                </p>
                <h6 className="text-md font-semibold text-purple-300 mb-2">Role:</h6>
                <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-4">
                  <li>Collaborated with team to design scalable data models</li>
                  <li>Developed front end using React.js and back end using Express and MongoDB</li>
                  <li>Designed and created user-friendly UI</li>
                  <li>Optimized application performance through research and feature implementation</li>
                </ul>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-semibold text-white mb-3">Project: Delivery Track</h5>
                <p className="text-gray-300 mb-3">
                  Mobile application designed to assist delivery drivers in efficiently navigating to customers' homes to deliver medical equipment.
                </p>
                <h6 className="text-md font-semibold text-purple-300 mb-2">Role:</h6>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  <li>Developed front end with React Native for a user-friendly interface</li>
                  <li>Built back end using Express.js and MongoDB for data management</li>
                  <li>Designed intuitive UI for delivery drivers</li>
                  <li>Created comprehensive API documentation</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-300">React</Badge>
                <Badge variant="outline" className="bg-blue-400/10 border-blue-400/30 text-blue-200">TypeScript</Badge>
                <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-300">React Native</Badge>
                <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-300">Node.js</Badge>
                <Badge variant="outline" className="bg-red-500/10 border-red-500/30 text-red-300">NestJS</Badge>
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-300">MySQL</Badge>
                <Badge variant="outline" className="bg-blue-600/10 border-blue-600/30 text-blue-300">PostgreSQL</Badge>
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
              <p className="text-gray-300 mb-4">
                Identified core technical problems and collaborated with team members to develop robust solutions. Created self-contained, reusable components and conducted code reviews to maintain integrity. Helped manage CI/CD processes and actively participated in improving organizational culture.
              </p>
              
              <div className="mt-6">
                <h5 className="text-lg font-semibold text-white mb-3">Project: Human Resources Management System</h5>
                <p className="text-gray-300 mb-3">
                  System developed to track clients and candidates, allowing users to update candidate status, send emails, and get updates on other candidates.
                </p>
                <h6 className="text-md font-semibold text-blue-300 mb-2">Role:</h6>
                <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-4">
                  <li>Collaborated with team members to develop efficient data models</li>
                  <li>Configured and wrote base code for the front end</li>
                  <li>Developed the application using ReactJS</li>
                  <li>Maintained code integrity using TypeScript</li>
                  <li>Deployed latest builds to development and production servers</li>
                </ul>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-semibold text-white mb-3">Project: Reporting Web Applications</h5>
                <p className="text-gray-300 mb-3">
                  Web application that helps users view candidates' and engineers' reports, update status, and see the rank of marketers, managers, and engineers.
                </p>
                <h6 className="text-md font-semibold text-blue-300 mb-2">Role:</h6>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  <li>Developed front-end web applications for sales automation</li>
                  <li>Collaborated with team members to solve existing problems</li>
                  <li>Refactored older code and added new features</li>
                  <li>Migrated the system to a newer version</li>
                  <li>Researched and implemented performance improvements</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-yellow-400/10 border-yellow-400/30 text-yellow-300">JavaScript</Badge>
                <Badge variant="outline" className="bg-blue-400/10 border-blue-400/30 text-blue-200">TypeScript</Badge>
                <Badge variant="outline" className="bg-cyan-400/10 border-cyan-400/30 text-cyan-300">React</Badge>
                <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-300">Redux</Badge>
                <Badge variant="outline" className="bg-indigo-500/10 border-indigo-500/30 text-indigo-300">CI/CD</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-1 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
