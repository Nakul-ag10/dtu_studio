import { motion } from "motion/react";
import { Camera, Video, Palette, Megaphone, Users, FileText, Calendar, Award } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "High-quality event photography, portrait sessions, and campus documentation with state-of-the-art equipment and professional photographers.",
      features: ["Event Coverage", "Portrait Photography", "Campus Documentation", "Product Photography"]
    },
    {
      icon: Video,
      title: "Videography Services",
      description: "Complete video production services including event recording, promotional videos, interviews, and post-production editing.",
      features: ["Event Recording", "Promotional Videos", "Interview Production", "Video Editing"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative design solutions for posters, banners, social media graphics, brochures, and digital marketing materials.",
      features: ["Poster Design", "Social Media Graphics", "Brochure Design", "Brand Identity"]
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Comprehensive social media strategy, content creation, community management, and analytics for DTU's online presence.",
      features: ["Content Strategy", "Community Management", "Analytics & Reporting", "Crisis Management"]
    },
    {
      icon: Users,
      title: "Event Coverage",
      description: "Full-service event documentation including photography, videography, live streaming, and real-time social media updates.",
      features: ["Multi-Camera Setup", "Live Streaming", "Real-time Updates", "Post-Event Coverage"]
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Professional content writing, press releases, blog posts, and multimedia content for various DTU communications.",
      features: ["Press Releases", "Blog Writing", "News Articles", "Multimedia Content"]
    },
    {
      icon: Calendar,
      title: "Event Planning Support",
      description: "Assistance with event planning, coordination, and execution including technical support and logistics management.",
      features: ["Technical Support", "Logistics Coordination", "Equipment Rental", "On-site Support"]
    },
    {
      icon: Award,
      title: "Training & Workshops",
      description: "Educational workshops and training sessions for students interested in photography, videography, and digital media skills.",
      features: ["Photography Workshops", "Video Production Training", "Design Workshops", "Media Skills Development"]
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
            <h1 className="mb-4">DTU Studio Services</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Professional media and creative services offered by DTU Media Cell to support university events, communications, and external clients.
            </p>
            <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded text-sm">
              📊 Professional Services - Available for DTU Events & External Clients
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DTU Studio provides comprehensive media and creative services to capture, create, and communicate the university's story through professional photography, videography, design, and digital media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 border border-border">
          <div className="text-center mb-8">
            <h2 className="mb-4">Service Request Process</h2>
            <p className="text-muted-foreground">
              For DTU internal events and external clients, follow these steps to request our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="mb-2">Submit Request</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the service request form with event details, requirements, and timeline.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="mb-2">Review & Planning</h3>
              <p className="text-sm text-muted-foreground">
                Our team reviews your request and provides a detailed proposal with timeline and costs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="mb-2">Service Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Professional execution of services with high-quality deliverables and post-service support.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}