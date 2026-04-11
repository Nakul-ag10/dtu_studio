import { motion } from "motion/react";
import { Mail, Phone, Camera, Video, Palette, Megaphone } from "lucide-react";

export default function StudioTeam() {
  const studioTeam = [
    {
      name: "Rahul Sharma",
      role: "Senior Photographer",
      designation: "Lead Photographer",
      image: "img2501.png",
      email: "rahul.sharma@dtu.ac.in",
      phone: "+91-9876543210",
      specialization: "Event & Portrait Photography",
      experience: "5+ years",
      icon: Camera
    },
    {
      name: "Priya Singh",
      role: "Videographer",
      designation: "Video Production Lead",
      image: "img2502.png",
      email: "priya.singh@dtu.ac.in",
      phone: "+91-9876543211",
      specialization: "Event Videography & Editing",
      experience: "4+ years",
      icon: Video
    },
    {
      name: "Arjun Kumar",
      role: "Graphic Designer",
      designation: "Creative Designer",
      image: "img2503.png",
      email: "arjun.kumar@dtu.ac.in",
      phone: "+91-9876543212",
      specialization: "Digital Design & Branding",
      experience: "3+ years",
      icon: Palette
    },
    {
      name: "Sneha Patel",
      role: "Social Media Manager",
      designation: "Digital Media Coordinator",
      image: "img2504.png",
      email: "sneha.patel@dtu.ac.in",
      phone: "+91-9876543213",
      specialization: "Content Strategy & Management",
      experience: "3+ years",
      icon: Megaphone
    },
    {
      name: "Vikram Rao",
      role: "Event Photographer",
      designation: "Campus Events Specialist",
      image: "img2505.png",
      email: "vikram.rao@dtu.ac.in",
      phone: "+91-9876543214",
      specialization: "Campus Events & Sports",
      experience: "4+ years",
      icon: Camera
    },
    {
      name: "Ananya Gupta",
      role: "Video Editor",
      designation: "Post-Production Specialist",
      image: "img2501.png",
      email: "ananya.gupta@dtu.ac.in",
      phone: "+91-9876543215",
      specialization: "Video Editing & Color Grading",
      experience: "3+ years",
      icon: Video
    },
    {
      name: "Karan Mehta",
      role: "Content Writer",
      designation: "Communications Specialist",
      image: "img2502.png",
      email: "karan.mehta@dtu.ac.in",
      phone: "+91-9876543216",
      specialization: "Press Releases & Blog Writing",
      experience: "2+ years",
      icon: Megaphone
    },
    {
      name: "Neha Jain",
      role: "Studio Assistant",
      designation: "Technical Support",
      image: "img2503.png",
      email: "neha.jain@dtu.ac.in",
      phone: "+91-9876543217",
      specialization: "Equipment Management & Support",
      experience: "2+ years",
      icon: Camera
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
            <h1 className="mb-4">Studio Team</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Meet our talented team of photographers, videographers, designers, and media professionals dedicated to capturing DTU's story.
            </p>
            <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded text-sm">
              📸 Professional Media Team - DTU Studio
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-4">Our Creative Professionals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of skilled media professionals committed to excellence in photography, videography, design, and digital content creation.
          </p>
        </div>

        <div className="space-y-4">
          {studioTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 flex-shrink-0">
                  <div className="relative h-48 md:h-full min-h-[200px] bg-secondary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 bg-primary/90 rounded-lg flex items-center justify-center">
                        <member.icon className="text-white" size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.designation}</p>
                      <p className="text-muted-foreground mb-3">{member.role}</p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-muted-foreground w-20">Specialty:</span>
                          <span>{member.specialization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-muted-foreground w-20">Experience:</span>
                          <span>{member.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail size={16} />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone size={16} />
                        <span>{member.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 border border-border text-center">
          <h3 className="mb-4">Work With Our Team</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Looking to collaborate on a project or need professional media services? Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Our Services
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-foreground border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}