import { motion } from "motion/react";
import { DollarSign, Camera, Video, Palette, Users, FileText, CogIcon, AlertCircle } from "lucide-react";

export default function StudioCharges() {
  const pricingCategories = [
    {
      icon: Camera,
      title: "Base Rent",
      services: [
        {
          name: "Rent on Hourly Basis",
          duration: "1-hour",
          price: "₹1,500/hr",
          // includes: ["2 Professional Photographers", "High-resolution images", "Basic editing", "Online gallery"]
        },
        {
          name: "Rent For a Day (10:00 AM - 5:00 PM)",
          duration: "7 hours",
          price: "₹8,000",
          // includes: ["2 Professional Photographers", "High-resolution images", "Advanced editing", "Online gallery", "Print release"]
        }
        
      ]
    },
    {
      icon: Video,
      title: "Honorarium for 2 Cameramen",
      services: [
        {
          name: "Rent on Hourly Basis",
          duration: "1-hour",
          price: "₹500/hr",
          includes: ["2 Person crew", "4K recording", "Basic editing", "Raw footage delivery"]
        },
        {
          name: "Rent for a Day (10:00 AM - 5:00 PM)",
          duration: "7 hours",
          price: "₹2,700",
          includes: ["2 Person crew", "4K recording", "Professional editing", "Color grading", "Multiple formats"]
        },
        
      ]
    },
    {
      icon: Palette,
      title: "Total",
      services: [
        {
          name: "Rent on Hourly Basis",
          duration: "Min 2 hrs",
          price: "₹2000/hr",
          includes: ["2-3 concepts", "2 revisions", "Source files", "Print-ready files"]
        },
        {
          name: "Rent for a Day (10:00 AM - 5:00 PM)",
          duration: "7 hours",
          price: "₹10,700",
          includes: ["Logo design", "Brand guidelines", "Business cards", "Letterhead", "5 revisions"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Hero */}
      <div
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/campus.webp')" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">DTU Media Cell</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Studio Charges</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              The DTU Studio offers a comprehensive range of media production services, including professional photography, video production, live streaming, podcasting, graphic design, and social media management — serving the diverse communication needs of Delhi Technological University.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="mb-12">
          <div className="bg-white rounded-lg p-6 border border-border mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="mb-2">Important Note</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 2 cameramens are necessarily needed for recording</li>
                  <li>• The deliverables after the recording will be raw unfiltered video of the recording done at our Studio</li>
                  <li>• For editing services, the honorarium for the editors is Rs. 1000/30 min of edited video delivered to the institution</li>
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
                        {/* <ul className="text-sm text-muted-foreground space-y-1 mb-3">
                          {service.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul> */}
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
          <h3 className="mb-4">Need to Contact Us?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  For reservations or any further query regarding our services, please contact us at{" pro@dtu.ac.in"}

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href={`mailto:${"pro@dtu.ac.in"}`}
              className="px-6 py-3 bg-secondary text-black rounded-lg border hover:bg-white/90 transition-colors"
            >
              Mail
            </a>
          </div>
        </div> 
      </div>
    </div>
  );
}