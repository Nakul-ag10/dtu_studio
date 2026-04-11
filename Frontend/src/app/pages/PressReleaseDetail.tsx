import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, Download, ArrowLeft } from "lucide-react";

export default function PressReleaseDetail() {
  const { id } = useParams();
  const releaseId = parseInt(id || "0");

  // Mock data - API DATA HERE (should match PressRelease.tsx data)
  const pressReleases = [
    {
      id: 1,
      title: "DTU Announces New Center for Artificial Intelligence Excellence",
      date: "March 20, 2026",
      year: 2026,
      month: "March",
      thumbnail: "img2501.png",
      summary: "Delhi Technological University is proud to announce the establishment of a state-of-the-art Center for Artificial Intelligence Excellence, set to become a leading research hub in AI innovation.",
      fullContent: `Delhi Technological University is proud to announce the establishment of a state-of-the-art Center for Artificial Intelligence Excellence. This new facility will serve as a leading research hub for AI innovation, bringing together faculty, students, and industry partners to advance the field of artificial intelligence.

The center will focus on cutting-edge research in machine learning, natural language processing, computer vision, and robotics. With an investment of ₹50 crores, the center will feature advanced computing infrastructure, dedicated research labs, and collaborative spaces designed to foster innovation and interdisciplinary work.

The center aims to produce high-impact research, develop industry-relevant AI solutions, and train the next generation of AI experts. It will also host conferences, workshops, and training programs to promote knowledge sharing and collaboration within the AI community.

This initiative underscores DTU's commitment to academic excellence and its vision to be at the forefront of technological advancements in India and globally.

For more information about the center's research programs, visit our [AI Excellence Center website](https://dtu.ac.in/ai-center).`,
      pdfLink: "#"
    },
    {
      id: 2,
      title: "Record Placement Season: 95% Students Placed with Top Packages",
      date: "March 5, 2026",
      year: 2026,
      month: "March",
      thumbnail: "img2502.png",
      summary: "DTU achieves remarkable success in placement season 2025-26 with 95% placement rate and highest domestic package of ₹1.2 crores per annum.",
      fullContent: `Delhi Technological University has recorded its most successful placement season to date, with 95% of eligible students securing positions across leading companies. The placement drive saw participation from over 200 companies, including top technology firms, consulting groups, and financial institutions.

The highest domestic package stood at ₹1.2 crores per annum, while the average package increased by 15% compared to the previous year. This achievement reflects DTU's commitment to academic excellence and industry-relevant education, preparing students for successful careers in their chosen fields.

Key highlights of the placement season include:
- 95% overall placement rate
- Highest package: ₹1.2 crores per annum
- Average package: ₹12 lakhs per annum
- 200+ participating companies
- International offers from 15+ countries

The placement cell worked tirelessly to provide students with comprehensive training, mock interviews, and industry connections. Our students' success is a testament to the quality of education and the strong industry-academia collaboration at DTU.

Learn more about our placement programs at [DTU Placements](https://dtu.ac.in/placements).`,
      pdfLink: "#"
    },
    {
      id: 3,
      title: "DTU Collaborates with Leading European Universities for Joint Research Program",
      date: "February 18, 2026",
      year: 2026,
      month: "February",
      thumbnail: "img2503.png",
      summary: "Strategic partnership established with five premier European institutions to facilitate student exchange and collaborative research initiatives.",
      fullContent: `Delhi Technological University has entered into a strategic collaboration with five premier European universities to establish joint research programs and student exchange initiatives. This partnership will enable DTU students and faculty to participate in cutting-edge research projects, access world-class facilities, and engage in cultural exchange.

The collaboration covers multiple disciplines including engineering, technology, management, and applied sciences. Students will have opportunities for semester-long exchanges, joint degree programs, and international internships, enhancing their global perspectives and professional networks.

Partner institutions include:
- Technical University of Munich, Germany
- ETH Zurich, Switzerland
- Imperial College London, UK
- KTH Royal Institute of Technology, Sweden
- Delft University of Technology, Netherlands

This partnership represents a significant step towards internationalization of DTU's academic programs and research activities. It will provide our students with exposure to diverse educational systems and research methodologies, preparing them for global careers.

For detailed information about exchange programs, visit our [International Relations office](https://dtu.ac.in/international).`,
      pdfLink: "#"
    },
    {
      id: 4,
      title: "Launch of Innovation and Entrepreneurship Development Cell",
      date: "February 1, 2026",
      year: 2026,
      month: "February",
      thumbnail: "img2504.png",
      summary: "New initiative to support student entrepreneurs with mentorship, funding, and infrastructure for startup development.",
      fullContent: `DTU announces the launch of its Innovation and Entrepreneurship Development Cell, a comprehensive initiative designed to nurture the entrepreneurial spirit among students and faculty. The cell will provide aspiring entrepreneurs with mentorship from industry experts, access to seed funding, co-working spaces, and legal support for business incorporation.

The program includes workshops, networking events, and pitch competitions to help students transform their innovative ideas into successful ventures. With an initial corpus of ₹10 crores, the cell aims to incubate at least 50 startups over the next three years.

Key features of the Innovation and Entrepreneurship Development Cell:
- Mentorship from successful entrepreneurs and industry leaders
- Seed funding up to ₹5 lakhs per startup
- State-of-the-art co-working spaces
- Legal and financial advisory services
- Regular workshops and training programs
- Pitch competitions and demo days
- Access to angel investors and venture capital networks

This initiative is part of DTU's broader strategy to promote innovation and entrepreneurship among its students. We believe that fostering an entrepreneurial culture will not only create job creators but also drive technological innovation and economic growth.

Interested students can apply through our [Innovation Cell portal](https://dtu.ac.in/innovation-cell).`,
      pdfLink: "#"
    },
    {
      id: 5,
      title: "Research Paper by DTU Faculty Published in Nature",
      date: "January 15, 2026",
      year: 2026,
      month: "January",
      thumbnail: "img2505.png",
      summary: "Groundbreaking research on sustainable materials by DTU faculty team featured in prestigious international journal.",
      fullContent: `A team of faculty members from DTU's Department of Applied Chemistry has achieved a significant milestone with their research paper published in Nature, one of the world's most prestigious scientific journals. The research presents a novel approach to developing sustainable materials using bio-based polymers, with potential applications in packaging, construction, and medical devices.

This publication highlights DTU's growing reputation in cutting-edge research and its contribution to addressing global sustainability challenges. The research was funded by the Department of Science and Technology and conducted in collaboration with international research institutions.

The research focuses on developing biodegradable polymers from renewable sources, offering an eco-friendly alternative to traditional petroleum-based plastics. The new materials demonstrate superior mechanical properties while being completely biodegradable under natural conditions.

Key contributions of the research:
- Novel synthesis method for bio-based polymers
- Enhanced mechanical properties compared to existing biodegradable materials
- Cost-effective production process
- Potential applications in multiple industries
- Significant reduction in carbon footprint

This achievement underscores DTU's commitment to research excellence and its role in addressing pressing global challenges like plastic pollution and climate change.

Read the full research paper at [Nature Journal](https://nature.com/article-link).`,
      pdfLink: "#"
    }
  ];

  const release = pressReleases.find(r => r.id === releaseId);

  if (!release) {
    return (
      <div className="min-h-screen bg-secondary/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Press Release Not Found</h1>
          <Link to="/press-release" className="text-primary hover:underline">
            ← Back to Press Releases
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="bg-primary text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Link to="/press-release" className="text-white/80 hover:text-white transition-colors">
                <ArrowLeft size={24} />
              </Link>
              <h1 className="text-3xl font-bold">Press Release</h1>
            </div>
            <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded text-sm">
              📊 API DATA HERE - Backend Integration Ready
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg overflow-hidden border border-border shadow-sm"
        >
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={release.thumbnail}
              alt={release.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Calendar size={16} />
                <span>{release.date}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {release.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {release.summary}
              </p>

              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {release.fullContent.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <a
                href={release.pdfLink}
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Download size={20} />
                Download Full Release (PDF)
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}