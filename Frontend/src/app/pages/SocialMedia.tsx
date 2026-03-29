import { SectionContainer } from "../components/ui/SectionContainer";
import { Card } from "../components/ui/Card";
import { Instagram, Twitter, Linkedin, Youtube, Facebook, Share2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function SocialMedia() {
  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@dtustudio",
      link: "https://instagram.com/dtustudio",
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
      description: "Daily highlights, campus life, and behind-the-scenes moments",
    },
    {
      name: "Twitter / X",
      icon: Twitter,
      handle: "@DTUStudio",
      link: "https://twitter.com/dtustudio",
      color: "bg-black",
      description: "Real-time updates, announcements, and news",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "DTU Studio - Media Cell",
      link: "https://linkedin.com/company/dtu-studio",
      color: "bg-blue-600",
      description: "Professional updates, achievements, and opportunities",
    },
    {
      name: "YouTube",
      icon: Youtube,
      handle: "DTU Studio",
      link: "https://youtube.com/@dtustudio",
      color: "bg-red-600",
      description: "Event coverage, interviews, and documentary content",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "DTU Studio Official",
      link: "https://facebook.com/dtustudio",
      color: "bg-blue-500",
      description: "Community engagement and event updates",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        {/* <ImageWithFallback
          src="https://images.unsplash.com/photo-1771461848585-d6f00b69691e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Social Media"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-10 text-center px-4">
          <Share2 className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl text-white mb-4">Social Media</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay connected with DTU Studio across all major social media platforms
          </p>
        </div>
      </div>

      <SectionContainer className="bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-center mb-8">Connect With Us</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card hoverable className="h-full hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 ${platform.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1">{platform.name}</h3>
                        <p className="text-sm text-primary mb-2">{platform.handle}</p>
                        <p className="text-sm text-muted-foreground">{platform.description}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>

          <Card className="text-center bg-gradient-to-br from-primary/5 to-blue-50 border-2 border-primary/20">
            <h3 className="mb-4">Follow Us for Daily Updates</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest news, event coverage, and exclusive behind-the-scenes content from DTU
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 ${platform.color} rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
                    aria-label={`Follow us on ${platform.name}`}
                  >
                    <Icon className="text-white" size={28} />
                  </a>
                );
              })}
            </div>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
}
