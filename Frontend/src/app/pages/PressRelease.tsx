import { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, Download, FileText, Filter } from "lucide-react";
import { useData } from "../contexts/DataContext";

export default function PressRelease() {
  const { pressReleases } = useData();
  const [monthFilter, setMonthFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  // Convert press releases to the expected format
  const releases = pressReleases.map(release => ({
    id: release.id,
    title: release.title,
    date: new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    year: new Date(release.date).getFullYear(),
    month: new Date(release.date).toLocaleDateString('en-US', { month: 'long' }),
    thumbnail: release.thumbnail || "img2501.png",
    summary: release.content.substring(0, 200) + "...",
    fullContent: release.content,
    pdfLink: "#" // Placeholder
  }));

  const months = useMemo(() => {
    return Array.from(new Set(releases.map((item) => item.month))).sort((a, b) => {
      const order = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return order.indexOf(a) - order.indexOf(b);
    });
  }, [releases]);

  const years = useMemo(() => {
    return Array.from(new Set(releases.map((item) => item.year))).sort((a, b) => b - a);
  }, [releases]);

  const filteredReleases = releases.filter((release) => {
    const monthMatches = monthFilter === "all" || release.month === monthFilter;
    const yearMatches = yearFilter === "all" || release.year === Number(yearFilter);
    return monthMatches && yearMatches;
  });

  return (
    <div className="min-h-screen bg-secondary/20">
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
            <h1 className="mb-4 text-3xl">Press Releases</h1>
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
