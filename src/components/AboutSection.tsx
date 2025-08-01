import { useState, useEffect, useRef } from 'react';
import {
  Award,
  User,
  MapPin,
  Mail,
  GraduationCap,
  Briefcase,
  Code,
  Clock,
  ExternalLink,
  Instagram,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div
          className={`text-center mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            About <span className="text-gray-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left Column - Image and Education */}
          <div
            className={`md:col-span-5 space-y-6 transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Profile Card */}
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-800 bg-gray-800 p-4">
              <img
                src="https://avatars.githubusercontent.com/u/52486716?v=4"
                alt="Profile"
                className="w-full h-auto grayscale rounded-lg shadow-md transition-transform duration-700 hover:grayscale-0"
              />

              <div className="mt-3">
                <h3 className="text-xl font-bold text-white">
                  Sudip Raj Kunwar
                </h3>
                <p className="mt-1 text-gray-400 text-sm">
                  Senior Software Engineer
                </p>

                <div className="space-y-1 text-sm pt-2 flex flex-col gap-1">
                  <a
                    href="https://www.instagram.com/sudiprajkunwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start text-gray-300"
                  >
                    <Instagram
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0 mt-0.5"
                    />
                    <span className="break-all leading-tight">
                      sudiprajkunwar
                    </span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/aRiKvR7x9orke5Yk7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start text-gray-300"
                  >
                    <MapPin
                      size={14}
                      className="text-gray-500 mr-2 flex-shrink-0"
                    />
                    <span className="break-all leading-tight">
                      Kathmandu, Nepal
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                <GraduationCap size={16} className="text-gray-400" />
                Education
              </h3>

              <div className="relative pl-7">
                <div className="absolute w-3 h-3 bg-gray-600 rounded-full left-0 top-1.5"></div>
                <div>
                  <h4 className="text-white font-medium">
                    B.S. Computer Science and Information Technology
                  </h4>
                  <p className="text-gray-400 text-xs">
                    Tribhuvan University, College of Applied Business
                  </p>
                  <p className="text-gray-500 text-xs">2015 - 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Summary and Experience */}
          <div
            className={`md:col-span-7 space-y-4 transition-all duration-1000 delay-400 ease-out ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Professional Summary */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                <User size={16} className="text-gray-400" />
                Professional Overview
              </h3>

              <div className="space-y-3 text-gray-300 text-sm">
                <p className="leading-relaxed">
                  Skilled Software Engineer with 4+ years of hands-on experience
                  building, optimizing, and supporting web-based applications
                  for diverse industry organizations. Passionate about
                  implementing and launching new projects.
                </p>

                <p className="leading-relaxed">
                  Ability to identify core technical problems, find better
                  solutions to existing problems, and translate business
                  requirements into technical solutions. Driven individual with
                  the ability to adapt to any situation and a proven potential
                  to grow self and others.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-lg">
              <h3 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                <Briefcase size={16} className="text-gray-400" />
                Experience
              </h3>

              <div className="space-y-4 relative">
                <div className="absolute h-full w-0.5 bg-gray-700 left-1.5 top-1.5 z-0"></div>

                {/* Job 1 */}
                <div className="relative pl-7">
                  <div className="absolute w-3 h-3 bg-white rounded-full left-0 top-1.5 z-10"></div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium">
                        Senior Software Engineer
                      </h4>
                      <Badge
                        variant="outline"
                        className="text-xs bg-gray-700 border-gray-600 text-gray-300"
                      >
                        Present
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-xs">Leapfrog Technology</p>
                    <p className="text-gray-500 text-xs mb-1">
                      September 2021 - Present
                    </p>
                    <p className="text-gray-400 text-sm">
                      Working on enterprise applications, designing
                      architectural solutions, and building scalable software
                      with React and Node.js.
                    </p>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="relative pl-7">
                  <div className="absolute w-3 h-3 bg-gray-600 rounded-full left-0 top-1.5 z-10"></div>
                  <div>
                    <h4 className="text-white font-medium">
                      Front-End Developer
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Alpha Beta Theta Technologies
                    </p>
                    <p className="text-gray-500 text-xs mb-1">
                      August 2020 - August 2021
                    </p>
                    <p className="text-gray-400 text-sm">
                      Developed responsive web applications, created reusable
                      components, and implemented new features for existing
                      systems.
                    </p>
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

export default AboutSection;
