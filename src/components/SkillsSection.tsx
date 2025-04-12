
import { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const skills: Skill[] = [
    { name: "HTML & CSS", level: 90, icon: "🌐" },
    { name: "JavaScript", level: 85, icon: "📜" },
    { name: "TypeScript", level: 80, icon: "🔷" },
    { name: "React", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 75, icon: "🟢" },
    { name: "UI/UX Design", level: 80, icon: "🎨" },
    { name: "Tailwind CSS", level: 90, icon: "🌬️" },
    { name: "Next.js", level: 75, icon: "▲" },
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
            className={`text-3xl md:text-4xl font-bold mb-4 text-gradient-purple transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            My Skills & Expertise
          </h2>
          <p 
            className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Here's a breakdown of my technical skills and areas of expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-morphism p-6 rounded-xl transition-all duration-700 ease-out hover:transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                  style={{ 
                    width: `${skill.level}%`,
                    transition: "width 1s ease-out",
                    transitionDelay: `${index * 100 + 500}ms`
                  }}
                ></div>
              </div>

              <p className="text-right text-sm text-gray-400">{skill.level}%</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className={`glass-morphism p-8 rounded-xl transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient-purple">Education</h3>
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
            className={`glass-morphism p-8 rounded-xl transition-all duration-1000 delay-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient-purple">Experience</h3>
            <ul className="space-y-6">
              <li>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-white">Senior Frontend Developer</h4>
                  <span className="text-gray-400 text-sm">2021 - Present</span>
                </div>
                <p className="text-gray-300">Company Name</p>
              </li>
              <li>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-white">Web Developer</h4>
                  <span className="text-gray-400 text-sm">2019 - 2021</span>
                </div>
                <p className="text-gray-300">Company Name</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
