import { motion } from "motion/react";
import { Mail, Linkedin } from "lucide-react";

export default function Team() {
  const teamStructure = [
    {
      category: "In-Charge",
      members: [
        {
          name: "Dr. Yashna Sharma",
          role: "Faculty In-Charge (Media Cell)",
          image: "DrYSharma.jpeg",
          designation: "Asstt. Professor, ECE",
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
          role: "University Promotional Materials / Newsletters",
          designation: "Asstt. Professor, USME",
          image: "DrSucheta.jpeg",
          initials: "Dr. SS",
          email: "priya@dtu.ac.in",
          linkedin: "#"
        },
        {
          name: "Dr. Pooja Gupta",
          role: "Outreach through University Website",
          designation: "Asstt. Professor, CSE",
          image: "DrPgupta.jpeg",
          initials: "Dr. PG",
          email: "arjun@dtu.ac.in",
          linkedin: "#"
        },
        {
          name: "Dr. Prama Vishnoi",
          role: "Online Gift Shop / Merchandise Management",
          designation: "Asstt. Professor, DSM",
          image: "DrPVishnoi.jpeg",
          initials: "Dr. PV",
          email: "sneha@dtu.ac.in",
          linkedin: "#"
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/20">

      {/* Hero */}
      <div
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-9.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">DTU Media Cell</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Faculty</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              Meet the dedicated individuals behind DTU Media Cell who work tirelessly to capture and share our university's story.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 lg:px-8 max-w-5xl py-14">

        {teamStructure.map((section, sectionIndex) => (
          <div key={section.category} className={sectionIndex > 0 ? "mt-16" : ""}>

            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="flex-1 h-px bg-border" />
              <h2 className="text-4xl font-semibold text-primary shrink-0">{section.category}</h2>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            {/* In-Charge — horizontal card */}
            {section.category === "In-Charge" && (
              <div className="flex justify-center">
                {section.members.map((member, index) => (
                  <motion.div
                    key={member.email}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-border rounded-xl overflow-hidden flex flex-col sm:flex-row max-w-lg w-full hover:shadow-lg transition-shadow duration-300 group"
                  >
                    {/* Photo */}
                    <div className="sm:w-52 w-full shrink-0 overflow-hidden bg-secondary/30">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-56 sm:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-56 sm:h-full bg-primary text-white flex items-center justify-center text-3xl font-bold">
                          {member.initials}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col justify-center">
                      {/* <span className="inline-block text-[10px] uppercase tracking-widest font-medium text-primary border border-primary/20 rounded-full px-3 py-1 w-fit mb-3">
                        In-Charge
                      </span> */}
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-md font-semibold text-primary mb-1 leading-snug">{member.role}</p>
                      <p className="text-sm font-semibold text-muted-foreground mb-5">{member.designation}</p>
                      <div className="flex gap-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-colors"
                          aria-label="Email"
                        >
                          <Mail size={15} />
                        </a>
                        {/* <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary hover:bg-[#0A66C2] hover:text-white transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={15} />
                        </a> */}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Coordinators — portrait cards */}
            {section.category !== "In-Charge" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {section.members.map((member, index) => (
                  <motion.div
                    key={member.email}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                  >
                    {/* Photo */}
                    <div className="overflow-hidden bg-secondary/30">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-56 bg-primary text-white flex items-center justify-center text-3xl font-bold">
                          {member.initials}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-1 leading-snug">{member.name}</h3>
                      <p className="text-md font-semibold text-primary mb-1 leading-snug">{member.role}</p>
                      <p className="text-sm font-semibold text-muted-foreground mb-5">{member.designation}</p>
                      <div className="flex gap-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-colors"
                          aria-label="Email"
                        >
                          <Mail size={14} />
                        </a>
                        {/* <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary hover:bg-[#0A66C2] hover:text-white transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={14} />
                        </a> */}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {sectionIndex < teamStructure.length - 1 && (
              <div className="mt-16 border-t border-border" />
            )}
          </div>
        ))}

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-white rounded-xl p-10 border border-border"
        >
          <h3 className="text-2xl font-semibold mb-3">Join Our Team</h3>
          <div className="w-8 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground mb-7 max-w-xl mx-auto text-sm leading-relaxed">
            Interested in becoming part of DTU Media Cell? We're always looking for passionate individuals with skills in photography, videography, content creation, and design.
          </p>
          <a
            href="/contact"
            className="inline-block px-7 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </div>
  );
}