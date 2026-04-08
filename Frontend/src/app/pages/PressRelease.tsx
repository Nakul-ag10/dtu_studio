import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Download, FileText } from "lucide-react";

export default function PressRelease() {
  const [selectedRelease, setSelectedRelease] = useState<number | null>(null);

  // Mock data - API DATA HERE
  const pressReleases = [
    {
      id: 1,
      title: "DTU Announces New Center for Artificial Intelligence Excellence",
      date: "March 20, 2026",
      summary: "Delhi Technological University is proud to announce the establishment of a state-of-the-art Center for Artificial Intelligence Excellence, set to become a leading research hub in AI innovation.",
      fullContent: "Delhi Technological University is proud to announce the establishment of a state-of-the-art Center for Artificial Intelligence Excellence. This new facility will serve as a leading research hub for AI innovation, bringing together faculty, students, and industry partners to advance the field of artificial intelligence. The center will focus on cutting-edge research in machine learning, natural language processing, computer vision, and robotics. With an investment of ₹50 crores, the center will feature advanced computing infrastructure, dedicated research labs, and collaborative spaces designed to foster innovation and interdisciplinary work.",
      pdfLink: "#"
    },
    {
      id: 2,
      title: "Record Placement Season: 95% Students Placed with Top Packages",
      date: "March 5, 2026",
      summary: "DTU achieves remarkable success in placement season 2025-26 with 95% placement rate and highest domestic package of ₹1.2 crores per annum.",
      fullContent: "Delhi Technological University has recorded its most successful placement season to date, with 95% of eligible students securing positions across leading companies. The placement drive saw participation from over 200 companies, including top technology firms, consulting groups, and financial institutions. The highest domestic package stood at ₹1.2 crores per annum, while the average package increased by 15% compared to the previous year. This achievement reflects DTU's commitment to academic excellence and industry-relevant education, preparing students for successful careers in their chosen fields.",
      pdfLink: "#"
    },
    {
      id: 3,
      title: "DTU Collaborates with Leading European Universities for Joint Research Program",
      date: "February 18, 2026",
      summary: "Strategic partnership established with five premier European institutions to facilitate student exchange and collaborative research initiatives.",
      fullContent: "Delhi Technological University has entered into a strategic collaboration with five premier European universities to establish joint research programs and student exchange initiatives. This partnership will enable DTU students and faculty to participate in cutting-edge research projects, access world-class facilities, and engage in cultural exchange. The collaboration covers multiple disciplines including engineering, technology, management, and applied sciences. Students will have opportunities for semester-long exchanges, joint degree programs, and international internships, enhancing their global perspectives and professional networks.",
      pdfLink: "#"
    },
    {
      id: 4,
      title: "Launch of Innovation and Entrepreneurship Development Cell",
      date: "February 1, 2026",
      summary: "New initiative to support student entrepreneurs with mentorship, funding, and infrastructure for startup development.",
      fullContent: "DTU announces the launch of its Innovation and Entrepreneurship Development Cell, a comprehensive initiative designed to nurture the entrepreneurial spirit among students and faculty. The cell will provide aspiring entrepreneurs with mentorship from industry experts, access to seed funding, co-working spaces, and legal support for business incorporation. The program includes workshops, networking events, and pitch competitions to help students transform their innovative ideas into successful ventures. With an initial corpus of ₹10 crores, the cell aims to incubate at least 50 startups over the next three years.",
      pdfLink: "#"
    },
    {
      id: 5,
      title: "Research Paper by DTU Faculty Published in Nature",
      date: "January 15, 2026",
      summary: "Groundbreaking research on sustainable materials by DTU faculty team featured in prestigious international journal.",
      fullContent: "A team of faculty members from DTU's Department of Applied Chemistry has achieved a significant milestone with their research paper published in Nature, one of the world's most prestigious scientific journals. The research presents a novel approach to developing sustainable materials using bio-based polymers, with potential applications in packaging, construction, and medical devices. This publication highlights DTU's growing reputation in cutting-edge research and its contribution to addressing global sustainability challenges. The research was funded by the Department of Science and Technology and conducted in collaboration with international research institutions.",
      pdfLink: "#"
    }
  ];

  const selectedItem = selectedRelease ? pressReleases.find(r => r.id === selectedRelease) : null;

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="bg-primary text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4">Press Releases</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Official statements, announcements, and communications from Delhi Technological University.
            </p>
            <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded text-sm">
              📊 API DATA HERE - Backend Integration Ready
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        {!selectedRelease ? (
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.article
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                    <FileText className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{release.date}</span>
                    </div>
                    <h3 className="mb-3 hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedRelease(release.id)}>
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {release.summary}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelectedRelease(release.id)}
                        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm"
                      >
                        Read Full Release
                      </button>
                      <a
                        href={release.pdfLink}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-foreground border border-border rounded hover:bg-secondary transition-colors text-sm"
                      >
                        <Download size={16} />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg p-8 border border-border"
          >
            <button
              onClick={() => setSelectedRelease(null)}
              className="mb-6 text-primary hover:underline"
            >
              ← Back to all releases
            </button>

            {selectedItem && (
              <>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={14} />
                  <span>{selectedItem.date}</span>
                </div>

                <h1 className="mb-6">{selectedItem.title}</h1>

                <div className="prose max-w-none mb-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    {selectedItem.summary}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {selectedItem.fullContent}
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <a
                    href={selectedItem.pdfLink}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                  >
                    <Download size={20} />
                    Download Full Release (PDF)
                  </a>
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
