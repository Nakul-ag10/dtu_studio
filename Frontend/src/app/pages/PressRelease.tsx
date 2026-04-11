import { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, Download, FileText, Filter } from "lucide-react";

export default function PressRelease() {
  const [monthFilter, setMonthFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  // Mock data - API DATA HERE
  const pressReleases = [
    {
      id: 1,
      title: "DTU Announces New Center for Artificial Intelligence Excellence",
      date: "March 20, 2026",
      year: 2026,
      month: "March",
      thumbnail: "img2501.png",
      summary: "Delhi Technological University is proud to announce the establishment of a state-of-the-art Center for Artificial Intelligence Excellence, set to become a leading research hub in AI innovation.",
      fullContent: "Delhi Technological University is proud to announce the establishment of a state-of-the-art Center for Artificial Intelligence Excellence. This new facility will serve as a leading research hub for AI innovation, bringing together faculty, students, and industry partners to advance the field of artificial intelligence. The center will focus on cutting-edge research in machine learning, natural language processing, computer vision, and robotics. With an investment of ₹50 crores, the center will feature advanced computing infrastructure, dedicated research labs, and collaborative spaces designed to foster innovation and interdisciplinary work. The center aims to produce high-impact research, develop industry-relevant AI solutions, and train the next generation of AI experts. It will also host conferences, workshops, and training programs to promote knowledge sharing and collaboration within the AI community. This initiative underscores DTU's commitment to academic excellence and its vision to be at the forefront of technological advancements in India and globally.",
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
      fullContent: "Delhi Technological University has recorded its most successful placement season to date, with 95% of eligible students securing positions across leading companies. The placement drive saw participation from over 200 companies, including top technology firms, consulting groups, and financial institutions. The highest domestic package stood at ₹1.2 crores per annum, while the average package increased by 15% compared to the previous year. This achievement reflects DTU's commitment to academic excellence and industry-relevant education, preparing students for successful careers in their chosen fields.",
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
      fullContent: "Delhi Technological University has entered into a strategic collaboration with five premier European universities to establish joint research programs and student exchange initiatives. This partnership will enable DTU students and faculty to participate in cutting-edge research projects, access world-class facilities, and engage in cultural exchange. The collaboration covers multiple disciplines including engineering, technology, management, and applied sciences. Students will have opportunities for semester-long exchanges, joint degree programs, and international internships, enhancing their global perspectives and professional networks.",
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
      fullContent: "DTU announces the launch of its Innovation and Entrepreneurship Development Cell, a comprehensive initiative designed to nurture the entrepreneurial spirit among students and faculty. The cell will provide aspiring entrepreneurs with mentorship from industry experts, access to seed funding, co-working spaces, and legal support for business incorporation. The program includes workshops, networking events, and pitch competitions to help students transform their innovative ideas into successful ventures. With an initial corpus of ₹10 crores, the cell aims to incubate at least 50 startups over the next three years.",
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
      fullContent: "A team of faculty members from DTU's Department of Applied Chemistry has achieved a significant milestone with their research paper published in Nature, one of the world's most prestigious scientific journals. The research presents a novel approach to developing sustainable materials using bio-based polymers, with potential applications in packaging, construction, and medical devices. This publication highlights DTU's growing reputation in cutting-edge research and its contribution to addressing global sustainability challenges. The research was funded by the Department of Science and Technology and conducted in collaboration with international research institutions.",
      pdfLink: "#"
    }
  ];

  const months = useMemo(() => {
    return Array.from(new Set(pressReleases.map((item) => item.month))).sort((a, b) => {
      const order = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return order.indexOf(a) - order.indexOf(b);
    });
  }, [pressReleases]);

  const years = useMemo(() => {
    return Array.from(new Set(pressReleases.map((item) => item.year))).sort((a, b) => b - a);
  }, [pressReleases]);

  const filteredReleases = pressReleases.filter((release) => {
    const monthMatches = monthFilter === "all" || release.month === monthFilter;
    const yearMatches = yearFilter === "all" || release.year === Number(yearFilter);
    return monthMatches && yearMatches;
  });

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
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter size={20} />
            <span>Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Month:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setMonthFilter("all")}
                  className={`px-3 py-2 rounded text-sm transition-colors ${
                    monthFilter === "all"
                      ? "bg-primary text-white"
                      : "bg-white text-foreground border border-border hover:border-primary"
                  }`}
                >
                  All
                </button>
                {months.map((month) => (
                  <button
                    key={month}
                    onClick={() => setMonthFilter(month)}
                    className={`px-3 py-2 rounded text-sm transition-colors ${
                      monthFilter === month
                        ? "bg-primary text-white"
                        : "bg-white text-foreground border border-border hover:border-primary"
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Year:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setYearFilter("all")}
                  className={`px-3 py-2 rounded text-sm transition-colors ${
                    yearFilter === "all"
                      ? "bg-primary text-white"
                      : "bg-white text-foreground border border-border hover:border-primary"
                  }`}
                >
                  All
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setYearFilter(String(year))}
                    className={`px-3 py-2 rounded text-sm transition-colors ${
                      yearFilter === String(year)
                        ? "bg-primary text-white"
                        : "bg-white text-foreground border border-border hover:border-primary"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReleases.map((release, index) => (
            <motion.article
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={release.thumbnail}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-primary text-white text-xs rounded">
                    {release.month} {release.year}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={14} />
                  <span>{release.date}</span>
                </div>
                <h3 className="mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  <Link to={`/press-release/${release.id}`} className="hover:underline">
                    {release.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {release.summary}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/press-release/${release.id}`}
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm"
                  >
                    Read Full Release
                  </Link>
                  <a
                    href={release.pdfLink}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-foreground border border-border rounded hover:bg-secondary transition-colors text-sm"
                  >
                    <Download size={16} />
                    PDF
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
