import { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Server,
  Smartphone,
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  type: 'Web' | 'Mobile';
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Web Application',
      description:
        'Enterprise-level web application with comprehensive business management features.',
      technologies: [
        'ReactJs',
        'TypeScript',
        'Express',
        'NestJs',
        'MySQL',
        'PostgreSQL',
        'MongoDB',
      ],
      image:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      liveUrl: '#',
      githubUrl: '#',
      type: 'Web',
    },
    {
      id: 2,
      title: 'Mobile Application',
      description:
        'Delivery tracking application for efficient route management and customer service.',
      technologies: ['React Native', 'Express', 'MongoDB'],
      image:
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
      liveUrl: '#',
      githubUrl: '#',
      type: 'Mobile',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website showcasing my work and skills. Built with modern technologies and best practices for optimal performance.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      liveUrl: '#',
      githubUrl: '#',
      type: 'Web',
    },
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

  const getTypeIcon = (type: 'Web' | 'Mobile') => {
    if (type === 'Web') {
      return <Server size={16} className="mr-1" />;
    }
    return <Smartphone size={16} className="mr-1" />;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 relative bg-gradient-to-b from-background to-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 text-gradient-purple transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            My Projects
          </h2>
          <p
            className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Here are some of my recent projects showcasing my skills and
            expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-morphism rounded-xl overflow-hidden transition-all duration-1000 ease-out hover:transform hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs flex items-center">
                  {getTypeIcon(project.type)}
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 h-20 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
