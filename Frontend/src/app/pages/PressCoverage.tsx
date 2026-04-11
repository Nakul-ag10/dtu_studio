import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Filter, ExternalLink } from "lucide-react";
import { useMemo } from "react";
import { useData } from "../contexts/DataContext";

export default function PressCoverage() {
  const { pressCoverages } = useData();
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  // Convert press coverages to news items format
  const newsItems = pressCoverages.map(coverage => ({
    id: coverage.id,
    title: coverage.title,
    source: coverage.source,
    date: new Date(coverage.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    year: new Date(coverage.date).getFullYear(),
    month: new Date(coverage.date).toLocaleDateString('en-US', { month: 'long' }),
    category: "News", // Default category
    thumbnail: "img2505.png", // Default thumbnail
    summary: coverage.title, // Use title as summary
    link: coverage.link
  }));

  const categories = ["all", "Achievement", "Research", "Event", "Entrepreneurship", "Culture", "Partnership"];
  const months = Array.from(new Set(newsItems.map((item) => item.month))).sort((a, b) => {
    const order = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return order.indexOf(a) - order.indexOf(b);
  });
  const years = useMemo(() => {
    return Array.from(new Set(newsItems.map((item) => item.year))).sort((a, b) => b - a);
  }, [newsItems]);

  const filteredNews = newsItems.filter((item) => {
    const categoryMatches = categoryFilter === "all" || item.category === categoryFilter;
    const monthMatches = monthFilter === "all" || item.month === monthFilter;
    const yearMatches = yearFilter === "all" || item.year === Number(yearFilter);
    return categoryMatches && monthMatches && yearMatches;
  });
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="bg-primary text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4">Press Coverage</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              How India's leading publications are covering Delhi Technological University.
            </p>
            <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded text-sm">
              📊 API DATA HERE - Backend Integration Ready
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter size={20} />
            <span>Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded text-sm transition-colors ${
                  categoryFilter === category
                    ? "bg-primary text-white"
                    : "bg-white text-foreground border border-border hover:border-primary"
                }`}
              >
                {category === "all" ? "All" : category}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground">Filter by month:</span>
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

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground">Filter by year:</span>
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
          {filteredNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-primary text-white text-xs rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-primary">{item.source}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {item.summary}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Read more
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
