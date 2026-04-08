import { Link } from "react-router";
import { motion } from "motion/react";
import { Camera, Newspaper, FileText, Video, Users, Mail } from "lucide-react";
import Button from "../components/Button";

export default function Home() {
  const highlights = [
    { icon: Camera, title: "Month in Pictures", description: "Visual documentation of DTU's vibrant campus life", link: "/month-in-pictures" },
    { icon: Newspaper, title: "Press Coverage", description: "Media mentions and news features", link: "/press-coverage" },
    { icon: FileText, title: "Press Releases", description: "Official announcements and updates", link: "/press-release" },
    { icon: Video, title: "Press Conferences", description: "Watch our official video coverage", link: "/press-conferences" },
    { icon: Users, title: "Our Team", description: "Meet the people behind DTU Media Cell", link: "/team" },
    { icon: Mail, title: "Contact Us", description: "Get in touch for collaborations", link: "/contact" },
  ];

  return (
    <div>
      <section className="relative h-[calc(100vh-4rem)] min-h-[600px] flex items-center bg-gradient-to-br from-primary/5 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('campus.webp')] bg-cover opacity-30 backdrop-blur-sm" />

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Delhi Technological University
            </div>

            <h1 className="mb-6 leading-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-2">
                DTU Media Cell
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
                Capturing Moments. Amplifying Voices.
              </span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground max-w-2xl">
              The official media and documentation hub of Delhi Technological University, preserving our institution's journey through compelling visual narratives and comprehensive coverage.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/month-in-pictures">
                <Button variant="primary">Explore Gallery</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-t from-primary to-[#3c0000]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white font-bold">About DTU Media Cell</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              DTU Media Cell serves as the official visual documentation and communication arm of Delhi Technological University. We chronicle the university's academic achievements, cultural vibrancy, and institutional milestones through professional photography, videography, and comprehensive media coverage. Our mission is to preserve the legacy of DTU while showcasing its dynamic present to stakeholders, media partners, and the broader community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="mb-4">What We Do</h2>
            <p className="text-muted-foreground">Explore our services and resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block p-6 bg-white border border-border rounded hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full group"
                >
                  <div className="mb-4 w-12 h-12 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
