
import { useState, useEffect, useRef } from "react";
import { Code, Smartphone, Server, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-gray-100" />,
      description: "Creating responsive, performant user interfaces with modern frameworks.",
      skills: [
        "React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Material UI"
      ],
      color: "from-gray-700 to-gray-900 border-gray-600"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 text-gray-100" />,
      description: "Building cross-platform mobile apps with native-like performance.",
      skills: [
        "React Native", "Expo", "Native APIs", "Mobile UI/UX"
      ],
      color: "from-gray-600 to-gray-800 border-gray-500"
    },
    {
      title: "Backend Engineering",
      icon: <Server className="h-8 w-8 text-gray-100" />,
      description: "Developing scalable APIs and server-side applications.",
      skills: [
        "Node.js", "Express", "NestJs", "RESTful APIs", "GraphQL"
      ],
      color: "from-gray-700 to-gray-900 border-gray-600"
    },
    {
      title: "Database Design",
      icon: <Database className="h-8 w-8 text-gray-100" />,
      description: "Designing efficient database structures for optimal data management.",
      skills: [
        "MongoDB", "PostgreSQL", "MySQL", "Redis"
      ],
      color: "from-gray-600 to-gray-800 border-gray-500"
    }
  ];

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-16 relative bg-gray-900 text-white"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 text-white transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Core <span className="text-gray-400">Technologies</span>
          </h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto mb-4 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          ></div>
          <p className={`text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Specialized in building scalable applications using these key technology areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className={`h-full bg-gradient-to-br ${area.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-opacity-30 text-white`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-full bg-white/10">
                      {area.icon}
                    </div>
                    <CardTitle className="text-lg text-white">{area.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-200 text-sm">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {area.skills.map(skill => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebMobileExpertiseSection;
