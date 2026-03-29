import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { SectionContainer } from "../components/ui/SectionContainer";
import { Card } from "../components/ui/Card";
import { Camera, FileText, Users, Award, Video, Globe, Mail, Newspaper } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";

export default function HomePage() {
  const heroImages = [
    "https://images.unsplash.com/photo-1631599143419-ea8539ed4fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    "https://images.unsplash.com/photo-1680226426952-514723cee6b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    "https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    "https://images.unsplash.com/photo-1680226425348-cedaf70ec06d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: Camera,
      title: "Month in Pictures",
      description: "Visual storytelling of DTU's monthly highlights and events",
      link: "/month-in-pictures",
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1774451606966-4ab827d85f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      icon: FileText,
      title: "Press Coverage",
      description: "Latest media coverage and news featuring DTU",
      link: "/press-coverage",
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1771324965021-883a7e9969ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Meet the dedicated members of DTU Studio",
      link: "/team",
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      icon: Award,
      title: "Press Releases",
      description: "Official announcements and achievements from DTU",
      link: "/press-release",
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
  ];

  const quickAccess = [
    {
      icon: Video,
      title: "Press Conferences",
      description: "Watch recorded press conferences and official university announcements",
      link: "/press-conferences",
      gradient: "from-red-500/90 to-pink-600/90",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      icon: Globe,
      title: "Social Media",
      description: "Follow us on various social platforms for daily updates",
      link: "/social-media",
      gradient: "from-indigo-500/90 to-blue-600/90",
      image: "https://images.unsplash.com/photo-1771461848585-d6f00b69691e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      icon: Mail,
      title: "Collaboration",
      description: "Interested in our services? View our collaboration charges and get in touch",
      link: "/contact",
      gradient: "from-teal-500/90 to-cyan-600/90",
      image: "https://images.unsplash.com/photo-1772657577424-1ae6f223919d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
  ];

  return (
    <>
      {/* Hero Section with Changing Backgrounds */}
      <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Images with Transition */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={image}
              alt={`DTU Campus ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white drop-shadow-lg">
            DTU Media Cell
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 drop-shadow-lg">
            Capturing Moments. Amplifying Voices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/press-coverage">
              <Button variant="primary" className="text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform">
                Explore Press Coverage
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary shadow-2xl hover:scale-105 transition-transform">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* About Section with Background */}
      <SectionContainer className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <Newspaper className="w-16 h-16 text-primary mx-auto" />
          </div>
          <h2 className="mb-6">About DTU Studio</h2>
          <p className="text-muted-foreground mb-4 text-lg">
            DTU Studio is the official media cell of Delhi Technological University, dedicated to
            documenting and sharing the vibrant campus life, achievements, and milestones of our
            institution. We serve as the bridge between DTU and the media, ensuring comprehensive
            coverage of university events, innovations, and accomplishments.
          </p>
          <p className="text-muted-foreground text-lg">
            Our team of skilled photographers, videographers, and content creators work tirelessly
            to capture the essence of DTU's academic excellence, cultural diversity, and
            technological innovation.
          </p>
        </div>
      </SectionContainer>

      {/* Highlights Section - What We Do */}
      <SectionContainer background="gray">
        <h2 className="text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} to={item.link}>
                <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  {/* Background Image */}
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br bg-primary opacity-60 group-hover:opacity-90 transition-opacity`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={40} />
                    </div>
                    <h3 className="mb-3 text-white text-2xl">{item.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </SectionContainer>

      {/* Quick Navigation - Quick Access */}
      <SectionContainer className="bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-center mb-12">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {quickAccess.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} to={item.link}>
                <div className="group relative h-64 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  {/* Background Image */}
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:opacity-95 transition-opacity`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="mb-3 group-hover:transform group-hover:-translate-y-2 transition-transform">
                      <Icon size={36} className="mb-2" />
                      <h3 className="text-white text-2xl mb-2">{item.title}</h3>
                      <p className="text-sm text-white/90 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </SectionContainer>
    </>
  );
}
