
import { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML & CSS", icon: "🌐", color: "from-pink-500 to-rose-500" },
        { name: "JavaScript", icon: "📜", color: "from-yellow-400 to-amber-500" },
        { name: "TypeScript", icon: "🔷", color: "from-blue-400 to-blue-600" },
        { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-600" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
        { name: "Express", icon: "🚂", color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-600" },
        { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-indigo-600" }
      ]
    },
    {
      title: "Design",
      skills: [
        { name: "UI/UX Design", icon: "🎨", color: "from-purple-400 to-purple-600" },
        { name: "Figma", icon: "🖌️", color: "from-purple-500 to-violet-600" },
        { name: "Tailwind CSS", icon: "🌬️", color: "from-cyan-500 to-blue-500" },
        { name: "Responsive Design", icon: "📱", color: "from-indigo-400 to-indigo-600" }
      ]
    }
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

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200 + 400}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="glass-morphism rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-3xl mr-3">{skill.icon}</span>
                        <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className={`glass-morphism p-8 rounded-xl transition-all duration-1000 delay-1000 ease-out ${
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
            className={`glass-morphism p-8 rounded-xl transition-all duration-1000 delay-1200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient-purple">Experience</h3>
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
