
import { useState, useEffect, useRef } from "react";
import { Code, Database, Server, Github, Globe, Cpu, Monitor, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

type Skill = {
  name: string;
  color: string;
  level?: number; // 1-5 for skill level
  category: 'language' | 'framework' | 'database' | 'tool';
};

const skills: Skill[] = [
  // Languages
  { name: "JavaScript", color: "bg-yellow-400", level: 5, category: 'language' },
  { name: "TypeScript", color: "bg-blue-400", level: 4, category: 'language' },
  { name: "C++", color: "bg-purple-400", level: 3, category: 'language' },
  { name: "HTML5", color: "bg-orange-500", level: 5, category: 'language' },
  { name: "CSS3", color: "bg-blue-500", level: 5, category: 'language' },
  
  // Frameworks & Libraries
  { name: "ReactJS", color: "bg-cyan-400", level: 5, category: 'framework' },
  { name: "React Native", color: "bg-cyan-500", level: 4, category: 'framework' },
  { name: "Redux", color: "bg-purple-500", level: 4, category: 'framework' },
  { name: "Redux-Saga", color: "bg-purple-400", level: 3, category: 'framework' },
  { name: "Webpack", color: "bg-blue-300", level: 3, category: 'framework' },
  { name: "Node.js", color: "bg-green-500", level: 4, category: 'framework' },
  { name: "Express", color: "bg-gray-500", level: 4, category: 'framework' },
  { name: "NestJS", color: "bg-red-500", level: 3, category: 'framework' },
  { name: "Bootstrap", color: "bg-purple-600", level: 4, category: 'framework' },
  { name: "Material CSS", color: "bg-blue-600", level: 4, category: 'framework' },
  { name: "Ant Design", color: "bg-blue-400", level: 4, category: 'framework' },
  { name: "Testing", color: "bg-green-400", level: 3, category: 'framework' },
  
  // Databases
  { name: "MySQL", color: "bg-blue-600", level: 4, category: 'database' },
  { name: "PostgreSQL", color: "bg-blue-500", level: 4, category: 'database' },
  { name: "MS SQL Server", color: "bg-indigo-500", level: 3, category: 'database' },
  
  // Tools
  { name: "Git", color: "bg-orange-600", level: 5, category: 'tool' },
  { name: "GitHub", color: "bg-gray-700", level: 5, category: 'tool' },
  { name: "Bitbucket", color: "bg-blue-700", level: 4, category: 'tool' },
  { name: "GitLab", color: "bg-orange-500", level: 4, category: 'tool' },
  { name: "Trello", color: "bg-blue-500", level: 4, category: 'tool' },
  { name: "Slack", color: "bg-emerald-500", level: 5, category: 'tool' },
  { name: "MS Teams", color: "bg-indigo-600", level: 4, category: 'tool' },
  { name: "Jira", color: "bg-blue-600", level: 4, category: 'tool' },
  { name: "Scrum", color: "bg-teal-500", level: 4, category: 'tool' },
  { name: "Kanban", color: "bg-teal-600", level: 4, category: 'tool' },
];

const iconByCategory = {
  language: <Code className="h-6 w-6 text-purple-400" />,
  framework: <Layers className="h-6 w-6 text-blue-400" />,
  database: <Database className="h-6 w-6 text-green-400" />,
  tool: <Github className="h-6 w-6 text-orange-400" />
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const TechnicalExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");
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

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-28 relative bg-gradient-to-b from-black to-background"
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
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Specialized in modern web development technologies and frameworks with a focus on creating responsive and performant applications.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="glass-morphism rounded-3xl overflow-hidden p-8">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
                    All Skills
                  </TabsTrigger>
                  <TabsTrigger value="language" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-400 data-[state=active]:text-white">
                    <Code className="mr-2 h-4 w-4" />
                    Languages
                  </TabsTrigger>
                  <TabsTrigger value="framework" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-400 data-[state=active]:text-white">
                    <Layers className="mr-2 h-4 w-4" />
                    Frameworks
                  </TabsTrigger>
                  <TabsTrigger value="database" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-400 data-[state=active]:text-white">
                    <Database className="mr-2 h-4 w-4" />
                    Databases
                  </TabsTrigger>
                  <TabsTrigger value="tool" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-orange-400 data-[state=active]:text-white">
                    <Github className="mr-2 h-4 w-4" />
                    Tools
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  {filteredSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="relative"
                    >
                      <div className={`${skill.color} bg-opacity-20 border border-opacity-30 rounded-lg p-4 flex flex-col items-center hover:transform hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden group`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="z-10 flex flex-col items-center">
                          <span className="font-medium text-white mb-2">{skill.name}</span>
                          
                          {skill.level && (
                            <div className="flex space-x-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`w-1.5 h-6 rounded-full transition-all ${
                                    i < skill.level! ? skill.color : 'bg-gray-700'
                                  }`} 
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="glass-morphism rounded-3xl overflow-hidden p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-500/30">
                <Code className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
                <p className="text-center text-gray-300">Proficient in JavaScript, TypeScript, HTML5 and CSS3 with solid understanding of C++</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-500/30">
                <Layers className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Frameworks</h3>
                <p className="text-center text-gray-300">Expert in React.js ecosystem including Redux, along with Node.js, Express and NestJS</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-green-700/20 border border-green-500/30">
                <Database className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Databases</h3>
                <p className="text-center text-gray-300">Experience with MySQL, PostgreSQL and Microsoft SQL Server for data management</p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-700/20 border border-orange-500/30">
                <Github className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Tools & Methods</h3>
                <p className="text-center text-gray-300">Adept with Git, GitHub, JIRA and Agile methodologies including Scrum and Kanban</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertiseSection;
