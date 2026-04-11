import { motion } from "motion/react";
import { DollarSign, Camera, Video, Palette, Users, FileText } from "lucide-react";

export default function StudioCharges() {
  const pricingCategories = [
    {
      icon: Camera,
      title: "Photography Services",
      services: [
        {
          name: "Event Photography (Half Day)",
          duration: "4-6 hours",
          price: "₹15,000",
          includes: ["2 Professional Photographers", "High-resolution images", "Basic editing", "Online gallery"]
        },
        {
          name: "Event Photography (Full Day)",
          duration: "8+ hours",
          price: "₹25,000",
          includes: ["2 Professional Photographers", "High-resolution images", "Advanced editing", "Online gallery", "Print release"]
        },
        {
          name: "Portrait Session",
          duration: "2 hours",
          price: "₹8,000",
          includes: ["Professional photographer", "Multiple looks", "High-resolution images", "Basic retouching"]
        },
        {
          name: "Product Photography",
          duration: "Per session",
          price: "₹12,000",
          includes: ["Studio setup", "Professional lighting", "Multiple angles", "Basic editing"]
        }
      ]
    },
    {
      icon: Video,
      title: "Videography Services",
      services: [
        {
          name: "Event Videography (Half Day)",
          duration: "4-6 hours",
          price: "₹20,000",
          includes: ["2 Person crew", "4K recording", "Basic editing", "Raw footage delivery"]
        },
        {
          name: "Event Videography (Full Day)",
          duration: "8+ hours",
          price: "₹35,000",
          includes: ["2 Person crew", "4K recording", "Professional editing", "Color grading", "Multiple formats"]
        },
        {
          name: "Promotional Video",
          duration: "Project based",
          price: "₹50,000 - ₹1,50,000",
          includes: ["Pre-production planning", "Professional shooting", "Advanced editing", "Sound design", "Multiple deliverables"]
        },
        {
          name: "Interview Production",
          duration: "Per interview",
          price: "₹15,000",
          includes: ["Professional setup", "Lighting & sound", "Basic editing", "Multiple formats"]
        }
      ]
    },
    {
      icon: Palette,
      title: "Design Services",
      services: [
        {
          name: "Graphic Design (Basic)",
          duration: "Per design",
          price: "₹5,000",
          includes: ["2-3 concepts", "2 revisions", "Source files", "Print-ready files"]
        },
        {
          name: "Brand Identity Package",
          duration: "Complete package",
          price: "₹25,000",
          includes: ["Logo design", "Brand guidelines", "Business cards", "Letterhead", "5 revisions"]
        },
        {
          name: "Social Media Graphics",
          duration: "Per month",
          price: "₹15,000",
          includes: ["20 graphics", "Brand consistency", "Multiple formats", "2 revisions each"]
        },
        {
          name: "Brochure/Magazine Design",
          duration: "Per project",
          price: "₹20,000",
          includes: ["Layout design", "Content integration", "Print-ready files", "3 revisions"]
        }
      ]
    },
    {
      icon: Users,
      title: "Event Coverage",
      services: [
        {
          name: "Full Event Coverage",
          duration: "Per event",
          price: "₹40,000",
          includes: ["Photography + Videography", "Live streaming setup", "Social media updates", "Post-event highlights"]
        },
        {
          name: "Live Streaming Setup",
          duration: "Per event",
          price: "₹25,000",
          includes: ["Professional streaming", "Multiple camera angles", "Technical support", "Recording backup"]
        },
        {
          name: "Social Media Management",
          duration: "Per month",
          price: "₹30,000",
          includes: ["Content strategy", "Daily posts", "Community management", "Monthly analytics report"]
        }
      ]
    },
    {
      icon: FileText,
      title: "Content & Training",
      services: [
        {
          name: "Content Writing",
          duration: "Per 1000 words",
          price: "₹3,000",
          includes: ["Research & writing", "SEO optimization", "2 revisions", "Plagiarism check"]
        },
        {
          name: "Press Release Writing",
          duration: "Per release",
          price: "₹5,000",
          includes: ["Professional writing", "Media distribution list", "2 revisions", "Distribution support"]
        },
        {
          name: "Photography Workshop",
          duration: "Full day",
          price: "₹8,000",
          includes: ["Professional instructor", "Equipment provided", "Hands-on training", "Certificate"]
        },
        {
          name: "Video Production Workshop",
          duration: "Full day",
          price: "₹10,000",
          includes: ["Professional instructor", "Equipment provided", "Project work", "Certificate"]
        }
      ]
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
            <h1 className="mb-4">Studio Charges</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Professional rates for DTU Studio services available to external clients, organizations, and businesses.
            </p>
            <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded text-sm">
              💰 External Client Pricing - Professional Services
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="mb-12">
          <div className="bg-white rounded-lg p-6 border border-border mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="mb-2">Important Notes</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All prices are exclusive of GST (18%)</li>
                  <li>• Travel charges may apply for locations outside Delhi</li>
                  <li>• Rush orders may incur additional charges (25-50%)</li>
                  <li>• Custom packages available for bulk requirements</li>
                  <li>• 50% advance payment required to confirm booking</li>
                  <li>• Cancellation charges: 24-48 hours (50%), less than 24 hours (100%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="mb-4">Service Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Competitive professional rates for high-quality media and creative services. Contact us for custom quotes and package deals.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {pricingCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg border border-border overflow-hidden"
            >
              <div className="bg-secondary/50 px-6 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </div>

              <div className="divide-y divide-border">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{service.name}</h4>
                          <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                            {service.duration}
                          </span>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1 mb-3">
                          {service.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:text-right">
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        <div className="text-sm text-muted-foreground">+ GST</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 border border-border text-center">
          <h3 className="mb-4">Need a Custom Package?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer customized packages for large events, long-term projects, and specific requirements.
            Contact us for personalized quotes and special pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+91-XXXXXXXXXX"
              className="px-6 py-3 bg-white text-foreground border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              Call for Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}