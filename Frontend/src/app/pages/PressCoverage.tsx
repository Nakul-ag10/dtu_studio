import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Filter, ExternalLink } from "lucide-react";

export default function PressCoverage() {
  const [filter, setFilter] = useState("all");

  // Mock data - API DATA HERE
  const newsItems = [
    {
      id: 1,
      title: "DTU Students Win National Innovation Challenge",
      source: "The Times of India",
      date: "March 15, 2026",
      category: "Achievement",
      thumbnail: "img2505.png",
      summary: "DTU team secures first place in national-level innovation competition with groundbreaking AI solution.",
      link: "#"
    },
    {
      id: 2,
      title: "Research Breakthrough in Renewable Energy",
      source: "Hindustan Times",
      date: "March 10, 2026",
      category: "Research",
      thumbnail: "img2504.png",
      summary: "DTU researchers develop efficient solar panel technology with 40% improved energy conversion.",
      link: "#"
    },
    {
      id: 3,
      title: "DTU Hosts International Tech Summit 2026",
      source: "Indian Express",
      date: "February 28, 2026",
      category: "Event",
      thumbnail: "img2503.png",
      summary: "Three-day international summit brings together industry leaders and academia for technology discourse.",
      link: "#"
    },
    {
      id: 4,
      title: "Startup Incubator Launches 10 New Ventures",
      source: "Business Standard",
      date: "February 20, 2026",
      category: "Entrepreneurship",
      thumbnail: "img2502.png",
      summary: "DTU's incubation center celebrates successful launch of 10 student-led startups.",
      link: "#"
    },
    {
      id: 5,
      title: "Cultural Festival Sets New Attendance Record",
      source: "Delhi Times",
      date: "February 15, 2026",
      category: "Culture",
      thumbnail: "img2501.png",
      summary: "Annual cultural fest attracts over 15,000 participants from across the country.",
      link: "#"
    }
  ];

  const categories = ["all", "Achievement", "Research", "Event", "Entrepreneurship", "Culture", "Partnership"];

  const filteredNews = filter === "all"
    ? newsItems
    : newsItems.filter(item => item.category === filter);

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
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter size={20} />
            <span>Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded text-sm transition-colors ${
                  filter === category
                    ? "bg-primary text-white"
                    : "bg-white text-foreground border border-border hover:border-primary"
                }`}
              >
                {category === "all" ? "All" : category}
              </button>
            ))}
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
