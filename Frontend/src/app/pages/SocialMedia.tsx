import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Youtube, ExternalLink } from "lucide-react";

export default function SocialMedia() {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@dtumedia",
      icon: Instagram,
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
      link: "https://instagram.com",
      description: "Visual stories from campus life"
    },
    {
      name: "Twitter",
      handle: "@DTU_Media",
      icon: Twitter,
      color: "bg-[#1DA1F2]",
      link: "https://twitter.com",
      description: "Real-time updates and announcements"
    },
    {
      name: "LinkedIn",
      handle: "DTU Media Cell",
      icon: Linkedin,
      color: "bg-[#0A66C2]",
      link: "https://linkedin.com",
      description: "Professional network and achievements"
    },
    {
      name: "YouTube",
      handle: "DTU Delhi",
      icon: Youtube,
      color: "bg-[#FF0000]",
      link: "https://www.youtube.com/channel/UCZqfUb0w7w0NPsTx7I7RtsQ",
      description: "Video coverage and documentaries"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="bg-primary text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4">Connect With Us</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Follow DTU Media Cell on social media for the latest updates, behind-the-scenes content, and campus highlights
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white rounded-xl p-8 border border-border hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${platform.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`} />

              <div className="relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${platform.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <platform.icon className="text-white" size={32} />
                </div>

                <h3 className="mb-2 group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>

                <p className="text-muted-foreground mb-3">{platform.handle}</p>

                <p className="text-sm text-muted-foreground mb-4">
                  {platform.description}
                </p>

                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span>Visit Profile</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-lg p-8 border border-border max-w-2xl">
            <h3 className="mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Follow us across all platforms to never miss an update from DTU. From daily stories to major announcements, we keep you connected with campus life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center hover:scale-110 transition-transform`}
                  aria-label={platform.name}
                >
                  <platform.icon className="text-white" size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
