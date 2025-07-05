import { useState, useEffect, useRef } from 'react';
import {
  Code,
  Database,
  Server,
  Github,
  Globe,
  Cpu,
  Monitor,
  Layers,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';

type Skill = {
  name: string;
  color: string;
  category: 'language' | 'framework' | 'database' | 'tool';
};

const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', color: 'bg-gray-700', category: 'language' },
  { name: 'TypeScript', color: 'bg-gray-600', category: 'language' },
  { name: 'C++', color: 'bg-gray-700', category: 'language' },
  { name: 'HTML5', color: 'bg-gray-600', category: 'language' },
  { name: 'CSS3', color: 'bg-gray-700', category: 'language' },

  // Frameworks & Libraries
  { name: 'ReactJS', color: 'bg-gray-600', category: 'framework' },
  { name: 'React Native', color: 'bg-gray-700', category: 'framework' },
  { name: 'Redux', color: 'bg-gray-600', category: 'framework' },
  { name: 'Redux-Saga', color: 'bg-gray-700', category: 'framework' },
  { name: 'Webpack', color: 'bg-gray-600', category: 'framework' },
  { name: 'Node.js', color: 'bg-gray-700', category: 'framework' },
  { name: 'Express', color: 'bg-gray-600', category: 'framework' },
  { name: 'NestJS', color: 'bg-gray-700', category: 'framework' },
  { name: 'Bootstrap', color: 'bg-gray-600', category: 'framework' },
  { name: 'Material CSS', color: 'bg-gray-700', category: 'framework' },
  { name: 'Ant Design', color: 'bg-gray-600', category: 'framework' },
  { name: 'Testing', color: 'bg-gray-700', category: 'framework' },

  // Databases
  { name: 'MySQL', color: 'bg-gray-600', category: 'database' },
  { name: 'PostgreSQL', color: 'bg-gray-700', category: 'database' },
  { name: 'MS SQL Server', color: 'bg-gray-600', category: 'database' },

  // Tools
  { name: 'Git', color: 'bg-gray-700', category: 'tool' },
  { name: 'GitHub', color: 'bg-gray-600', category: 'tool' },
  { name: 'Bitbucket', color: 'bg-gray-700', category: 'tool' },
  { name: 'GitLab', color: 'bg-gray-600', category: 'tool' },
  { name: 'Trello', color: 'bg-gray-700', category: 'tool' },
  { name: 'Slack', color: 'bg-gray-600', category: 'tool' },
  { name: 'MS Teams', color: 'bg-gray-700', category: 'tool' },
  { name: 'Jira', color: 'bg-gray-600', category: 'tool' },
  { name: 'Scrum', color: 'bg-gray-700', category: 'tool' },
  { name: 'Kanban', color: 'bg-gray-600', category: 'tool' },
];

const iconByCategory = {
  language: <Code className="h-6 w-6 text-gray-300" />,
  framework: <Layers className="h-6 w-6 text-gray-300" />,
  database: <Database className="h-6 w-6 text-gray-300" />,
  tool: <Github className="h-6 w-6 text-gray-300" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TechnicalExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('all');
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

  const filteredSkills =
    activeTab === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-28 relative bg-gray-900 text-white"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMzJjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgNThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yOC0yYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em01NiA0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Specialized in modern web development technologies and frameworks
            with a focus on creating responsive and performant applications.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-morphism rounded-3xl overflow-hidden p-8 bg-gray-800/80 border border-gray-700">
            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-gray-700">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white text-gray-300"
                  >
                    All Skills
                  </TabsTrigger>
                  <TabsTrigger
                    value="language"
                    className="data-[state=active]:bg-gray-600 data-[state=active]:text-white text-gray-300"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Languages
                  </TabsTrigger>
                  <TabsTrigger
                    value="framework"
                    className="data-[state=active]:bg-gray-600 data-[state=active]:text-white text-gray-300"
                  >
                    <Layers className="mr-2 h-4 w-4" />
                    Frameworks
                  </TabsTrigger>
                  <TabsTrigger
                    value="database"
                    className="data-[state=active]:bg-gray-600 data-[state=active]:text-white text-gray-300"
                  >
                    <Database className="mr-2 h-4 w-4" />
                    Databases
                  </TabsTrigger>
                  <TabsTrigger
                    value="tool"
                    className="data-[state=active]:bg-gray-600 data-[state=active]:text-white text-gray-300"
                  >
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
                  animate={isVisible ? 'visible' : 'hidden'}
                >
                  {filteredSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="relative"
                    >
                      <div
                        className={`${skill.color} text-white border border-gray-600 rounded-lg p-4 flex flex-col items-center hover:transform hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden group`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="z-10 flex flex-col items-center">
                          <span className="font-medium text-white mb-2">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-morphism rounded-3xl overflow-hidden p-8 bg-gray-800/80 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-6 rounded-xl bg-gray-800 text-white">
                <Code className="h-12 w-12 text-gray-200 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Languages
                </h3>
                <p className="text-center text-gray-300">
                  Proficient in JavaScript, TypeScript, HTML5 and CSS3 with
                  solid understanding of C++
                </p>
              </div>

              <div className="flex flex-col items-center p-6 rounded-xl bg-gray-700 text-white">
                <Layers className="h-12 w-12 text-gray-200 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Frameworks
                </h3>
                <p className="text-center text-gray-300">
                  Expert in React.js ecosystem including Redux, along with
                  Node.js, Express and NestJS
                </p>
              </div>

              <div className="flex flex-col items-center p-6 rounded-xl bg-gray-800 text-white">
                <Database className="h-12 w-12 text-gray-200 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Databases
                </h3>
                <p className="text-center text-gray-300">
                  Experience with MySQL, PostgreSQL and Microsoft SQL Server for
                  data management
                </p>
              </div>

              <div className="flex flex-col items-center p-6 rounded-xl bg-gray-700 text-white">
                <Github className="h-12 w-12 text-gray-200 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Tools & Methods
                </h3>
                <p className="text-center text-gray-300">
                  Adept with Git, GitHub, JIRA and Agile methodologies including
                  Scrum and Kanban
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertiseSection;
