import { motion } from "motion/react";
import { Mail, Linkedin } from "lucide-react";

export default function Team() {
  const teamStructure = [
    {
      category: "Head",
      members: [
        {
          name: "Dr. Yashna Sharma",
          role: "Faculty In-Charge (Media Cell)",
          image: "",
          initials: "Dr. YS",
          email: "rajesh.kumar@dtu.ac.in",
          linkedin: "#"
        }
      ]
    },
    {
      category: "Faculty Coordinators",
      members: [
        {
          name: "Dr. Sucheta Sardar",
          role: "University Promotional Materials/Newsletters",
          image: "",
          initials: "Dr. SS",
          email: "priya@dtu.ac.in",
          linkedin: "#"
        },
        {
          name: "Dr. Pooja Gupta",
          role: "Outreach through University Website",
          image: "",
          initials: "Dr. PG",
          email: "arjun@dtu.ac.in",
          linkedin: "#"
        },
        {
          name: "Dr. Prama Vishnoi",
          role: "Online Gift Shop/Mechandise Management",
          image: "",
          initials: "Dr. PV",
          email: "sneha@dtu.ac.in",
          linkedin: "#"
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* <div className=" text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]"> */}
        <div
        className="relative overflow-hidden text-white py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/campus.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4 text-3xl">Faculty</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Meet the dedicated individuals behind DTU Media Cell who work tirelessly to capture and share our university's story
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-7 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        {teamStructure.map((section, sectionIndex) => (
          <div key={section.category} className={sectionIndex > 0 ? "mt-16" : ""}>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 text-center text-primary text-3xl font-semibold"
            >
              {section.category}
            </motion.h2>

            <div className={`grid gap-8 ${
              section.category === "Head"
                ? "grid-cols-1 md:grid-cols-1 max-w-[16rem] mx-auto"
                : section.category === "Coordinators"
                ? "grid-cols-2 md:grid-cols-3 max-w-[48rem] mx-auto"
                : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 max-w-[48rem] mx-auto"
            }`}>
              {section.members.map((member, index) => (
                <motion.div
                  key={member.email}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden max-w-sm mx-auto">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-primary text-white flex items-center justify-center text-4xl font-bold group-hover:scale-105 transition-transform duration-500">
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className="p-7 text-center">
                    <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-primary mb-4">{member.role}</p>
                    <div className="flex gap-3 justify-center">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-10 h-10 bg-secondary rounded hover:bg-primary hover:text-white transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-secondary rounded hover:bg-[#0A66C2] hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {sectionIndex < teamStructure.length - 1 && (
              <div className="mt-8 border-t border-border" />
            )}
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-white rounded-lg p-8 border border-border"
        >
          <h3 className="mb-4">Join Our Team</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interested in becoming part of DTU Media Cell? We're always looking for passionate individuals with skills in photography, videography, content creation, and design.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
