import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const skills = [
    { name: 'JavaScript', icon: '📜', color: 'bg-gray-600' },
    { name: 'TypeScript', icon: '🔷', color: 'bg-gray-700' },
    { name: 'C++', icon: '⚙️', color: 'bg-gray-600' },
    { name: 'HTML5', icon: '🌐', color: 'bg-gray-700' },
    { name: 'CSS3', icon: '🎨', color: 'bg-gray-600' },
    { name: 'React', icon: '⚛️', color: 'bg-gray-700' },
    { name: 'React Native', icon: '📱', color: 'bg-gray-600' },
    { name: 'Redux', icon: '🔄', color: 'bg-gray-700' },
    { name: 'Redux-Saga', icon: '🧵', color: 'bg-gray-600' },
    { name: 'Node.js', icon: '🟢', color: 'bg-gray-700' },
    { name: 'Express', icon: '🚂', color: 'bg-gray-600' },
    { name: 'NestJS', icon: '🏗️', color: 'bg-gray-700' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-gray-600' },
    { name: 'PostgreSQL', icon: '🐘', color: 'bg-gray-700' },
    { name: 'MySQL', icon: '🐬', color: 'bg-gray-600' },
    { name: 'Microsoft SQL', icon: '📊', color: 'bg-gray-700' },
    { name: 'Docker', icon: '🐳', color: 'bg-gray-600' },
    { name: 'C#', icon: '🔷', color: 'bg-gray-600' },
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
      className="py-20 md:py-32 relative bg-gray-900 text-white"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMzJjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgNThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yOC0yYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wLTI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em01NiA0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px] opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Experience
            </span>
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mb-6 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
          <p
            className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Here's an overview of my technical skills and professional
            experience
          </p>
        </div>

        <div
          className={`glass-morphism p-6 rounded-2xl mb-16 transition-all duration-1000 delay-400 ease-out bg-gray-800/80 border border-gray-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-wrap gap-1.5 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={skill.name}
                className={`text-xs py-0.5 px-2 ${skill.color} text-white bg-opacity-90 border border-gray-600 hover:bg-opacity-100 transition-all duration-300 hover:-translate-y-1`}
                variant="outline"
              >
                <span className="text-xs mr-1">{skill.icon}</span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>

        <div
          className={`glass-morphism p-8 rounded-2xl transition-all duration-1000 delay-600 ease-out bg-gray-800/80 border border-gray-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold mb-8 text-white text-center">
            Professional Experience
          </h3>

          <div className="space-y-10">
            {/* Company 1 */}
            <div className="border-l-2 border-purple-500 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
              <div className="flex flex-col md:flex-row md:items-center mb-3 gap-2">
                <h4 className="text-xl font-semibold text-white">
                  Senior Software Engineer
                </h4>
                <div className="hidden md:block w-2 h-2 bg-purple-400 rounded-full mx-3"></div>
                <span className="text-gray-300 font-medium">
                  Leapfrog Technology
                </span>
                <div className="hidden md:block w-2 h-2 bg-purple-400 rounded-full mx-3"></div>
                <span className="text-gray-400">September 2021 - Present</span>
              </div>
              <ul className="text-gray-300 mb-4 space-y-2 list-disc list-inside text-sm">
                <li>
                  Work with a team of software engineers in the creation of
                  high-quality software within agreed project deadlines
                </li>
                <li>
                  Make architectural decisions in collaboration with technology
                  experts
                </li>
                <li>
                  Design, build, and maintain efficient, reusable, and reliable
                  software
                </li>
                <li>Designing and developing business logic using REST APIs</li>
                <li>
                  Preparation, drafting, and review of software documentation
                  and project reports
                </li>
                <li>
                  Implementing new software features and maintaining existing
                  features
                </li>
                <li>
                  Refactoring, debugging, testing, and implementing changes to
                  existing applications
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-gray-700 text-white border-gray-600"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gray-600 text-white border-gray-600"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gray-700 text-white border-gray-600"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gray-600 text-white border-gray-600"
                >
                  NestJS
                </Badge>
              </div>
            </div>

            {/* Company 2 */}
            <div className="border-l-2 border-purple-500 pl-6 relative">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
              <div className="flex flex-col md:flex-row md:items-center mb-3 gap-2">
                <h4 className="text-xl font-semibold text-white">
                  Front-End Developer
                </h4>
                <div className="hidden md:block w-2 h-2 bg-purple-400 rounded-full mx-3"></div>
                <span className="text-gray-300 font-medium">
                  Alpha Beta Theta Technologies
                </span>
                <div className="hidden md:block w-2 h-2 bg-purple-400 rounded-full mx-3"></div>
                <span className="text-gray-400">August 2020 - August 2021</span>
              </div>
              <ul className="text-gray-300 mb-4 space-y-2 list-disc list-inside text-sm">
                <li>
                  Identify core technical problems and collaborate with team
                  members to come up with a robust solution
                </li>
                <li>Creating self-contained, reusable components</li>
                <li>
                  Research and document new technologies and find better
                  solutions to existing problems
                </li>
                <li>Help manage CI/CD processes</li>
                <li>
                  Conduct code reviews to maintain the integrity of the code
                </li>
                <li>
                  Actively participate in improving organizational culture,
                  processes, and standards
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-gray-700 text-white border-gray-600"
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gray-600 text-white border-gray-600"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gray-700 text-white border-gray-600"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-gray-600 text-white border-gray-600"
                >
                  Redux
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div
          className={`mt-16 transition-all duration-1000 delay-800 ease-out ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          }`}
        >
          <h3 className="text-2xl font-bold mb-8 text-white text-center">
            Education
          </h3>

          <div className="max-w-3xl mx-auto">
            <div className="glass-morphism p-8 rounded-xl border-t-4 border-purple-500 bg-gray-800/80 border border-gray-700 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/20 hover:shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-white" />
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-white">
                    Bachelor's in Computer Science and Information Technology
                  </h4>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-purple-400" />
                      <span>
                        Tribhuvan University, College of Applied Business
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-purple-400" />
                      <span>2015 - 2020</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-purple-400" />
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm">
                    Studied core computer science principles, data structures,
                    algorithms, and software engineering practices. Specialized
                    in web development and full-stack technologies.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge
                      variant="outline"
                      className="text-xs bg-gray-700 text-white border-gray-600"
                    >
                      Computer Science
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs bg-gray-600 text-white border-gray-600"
                    >
                      Information Technology
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs bg-gray-700 text-white border-gray-600"
                    >
                      Software Development
                    </Badge>
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

export default SkillsSection;
