
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Eye, Image, Layers, Type, Paintbrush } from "lucide-react";

const AestheticsSection = () => {
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

  const aestheticItems = [
    {
      icon: <Palette size={24} className="text-gray-700" />,
      title: "Minimalist Design",
      description: "Clean aesthetics with a focus on simplicity and functionality"
    },
    {
      icon: <Type size={24} className="text-gray-700" />,
      title: "Typography",
      description: "Careful selection of fonts that enhance readability and visual appeal"
    },
    {
      icon: <Image size={24} className="text-gray-700" />,
      title: "Visual Balance",
      description: "Strategic use of white space and layout for optimal visual balance"
    },
    {
      icon: <Layers size={24} className="text-gray-700" />,
      title: "Composition",
      description: "Thoughtful arrangement of elements to create harmonious layouts"
    },
    {
      icon: <Eye size={24} className="text-gray-700" />,
      title: "User Experience",
      description: "Designing interfaces that are intuitive and enjoyable to use"
    },
    {
      icon: <Paintbrush size={24} className="text-gray-700" />,
      title: "Theme Design",
      description: "Sophisticated color palette for elegant visual identity"
    }
  ];

  return (
    <section
      id="aesthetics"
      ref={sectionRef}
      className="py-16 bg-white text-black relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div 
          className={`text-center mb-10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
            Aesthetic <span className="text-gray-700">Approach</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-700 to-black mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My design philosophy centers around minimalist elegance and thoughtful visual communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aestheticItems.map((item, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 transition-all duration-700 ease-out hover:shadow-lg hover:border-gray-300 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mb-4 border border-gray-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div 
            className={`relative overflow-hidden rounded-lg transition-all duration-1000 delay-300 ease-out border border-gray-200 shadow-lg ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
              alt="Minimalist Design" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
          </div>
          <div 
            className={`space-y-6 transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-black">Design Philosophy</h3>
            <p className="text-gray-700">
              I believe that great design finds beauty in simplicity. My approach removes distractions 
              and allows the content and functionality to take center stage.
            </p>
            <p className="text-gray-700">
              By carefully considering every element's purpose and placement, I create interfaces that are both 
              aesthetically pleasing and highly functional, resulting in memorable user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-1 bg-gray-600"></div>
                <span className="text-sm text-gray-700">Simplicity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-1 bg-gray-800"></div>
                <span className="text-sm text-gray-700">Contrast</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-1 bg-gray-400"></div>
                <span className="text-sm text-gray-700">Balance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AestheticsSection;
