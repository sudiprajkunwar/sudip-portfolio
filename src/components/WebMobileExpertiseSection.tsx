
import { useState, useEffect, useRef } from "react";
import { Code, Smartphone, Server, Database, Layers, LayoutGrid } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WebMobileExpertiseSection = () => {
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

  const expertiseAreas = [
    {
      title: "Web Development",
      icon: <Code className="h-10 w-10 text-purple-500" />,
      description: "Building high-performance, responsive web applications with modern frameworks and best practices.",
      skills: [
        "ReactJs", "TypeScript", "Next.js", "Express", "NestJs", "RESTful APIs", 
        "GraphQL", "Redux", "Tailwind CSS", "Material UI", "Responsive Design"
      ],
      projects: "Enterprise-level web applications with comprehensive business management features."
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-10 w-10 text-blue-500" />,
      description: "Creating cross-platform mobile applications with native-like performance and exceptional user experience.",
      skills: [
        "React Native", "Expo", "Native APIs", "Push Notifications", 
        "Offline Storage", "Mobile UI/UX", "Authentication"
      ],
      projects: "Delivery tracking applications for efficient route management and customer service."
    },
    {
      title: "Backend Development",
      icon: <Server className="h-10 w-10 text-green-500" />,
      description: "Developing robust server-side applications with scalable architecture and efficient performance.",
      skills: [
        "Node.js", "Express", "NestJs", "TypeScript", "API Development", 
        "Authentication & Authorization", "Microservices"
      ],
      projects: "RESTful and GraphQL APIs that power frontend applications."
    },
    {
      title: "Database Management",
      icon: <Database className="h-10 w-10 text-yellow-500" />,
      description: "Designing and implementing efficient database structures for optimal data management.",
      skills: [
        "MongoDB", "PostgreSQL", "MySQL", "Redis", "Database Design", 
        "Data Modeling", "Performance Optimization"
      ],
      projects: "Complex data architectures for enterprise applications."
    }
  ];

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-20 md:py-32 relative bg-gradient-to-b from-black to-purple-950/30"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-5xl font-bold mb-4 text-gradient-purple transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Technical Expertise
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
            Specialized in building modern web and mobile applications with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className={`glass-morphism rounded-xl overflow-hidden transition-all duration-1000 ease-out hover:transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                  <div className="p-4 rounded-full bg-white/5 border border-white/10">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {area.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-purple-400 mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map(skill => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-purple-400 mb-3">Experience</h4>
                  <p className="text-gray-300 text-sm">
                    {area.projects}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebMobileExpertiseSection;
