import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Youtube, ExternalLink, X, XIcon, FacebookIcon, Facebook } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
export default function SocialMedia() {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@dtu.delhi",
      icon: Instagram,
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
      link: "https://www.instagram.com/dtu.delhi/?hl=en",
      description: "Visual stories from campus life"
    },
    {
      name: "X (Twitter)",
      handle: "@dtu_delhi",
      icon: FaXTwitter,
      color: "bg-black",
      link: "https://x.com/dtu_delhi",
      description: "Real-time updates and announcements"
    },
    {
      name: "LinkedIn",
      handle: "PRO, DELHI TECHNOLOGICAL UNIVERSITY",
      icon: Linkedin,
      color: "bg-[#0A66C2]",
      link: "https://www.linkedin.com/in/pro-delhi-technological-university-delhi-397129209/",
      description: "Professional network and achievements"
    },
    {
      name: "YouTube",
      handle: "@dtustudio",
      icon: Youtube,
      color: "bg-[#FF0000]",
      link: "https://www.youtube.com/@dtustudio",
      description: "Video coverage and documentaries"
    },
    {
      name: "Facebook",
      handle: "DTU_Official",
      icon: Facebook,
      color: "bg-[#3b5998]",
      link: "https://www.facebook.com/profile.php?id=100065103819173",
      description: "Community engagement and event highlights"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Hero */}
      <div
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-5.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">DTU Media Cell</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Social Media</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              Connect with Delhi Technological University on social media to stay updated on campus news, events, and student life.
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
