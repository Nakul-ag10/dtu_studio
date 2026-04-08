import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function MonthInPictures() {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  // Mock data - API DATA HERE
  const monthsData = [
    { id: 1, month: "March 2026", year: 2026, thumbnail: "img2502.png", imageCount: 45 },
    { id: 2, month: "February 2026", year: 2026, thumbnail: "img2504.png", imageCount: 38 },
    { id: 3, month: "January 2026", year: 2026, thumbnail: "img2501.png", imageCount: 52 },
    { id: 4, month: "December 2025", year: 2025, thumbnail: "img2501.png", imageCount: 41 },
    { id: 5, month: "November 2025", year: 2025, thumbnail: "img2501.png", imageCount: 36 },
    { id: 6, month: "October 2025", year: 2025, thumbnail: "img2501.png", imageCount: 48 },
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="bg-primary text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4">Month in Pictures</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              A curated photographic record of campus life, events, and milestones — month by month.
              </p>
            <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded text-sm">
              📊 API DATA HERE - Backend Integration Ready
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Calendar size={20} />
            <span>Select a month to view the complete gallery</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monthsData.map((month, index) => (
            <motion.div
              key={month.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMonth(month.id)}
              className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={month.thumbnail}
                  alt={month.month}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{month.month}</h3>
                  <p className="text-sm text-white/90">{month.imageCount} images</p>
                </div>
              </div>
              <div className="p-4">
                <button className="w-full px-4 py-2 bg-primary/10 text-primary rounded hover:bg-primary hover:text-white transition-colors">
                  View Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedMonth && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMonth(null)}
          >
            <div className="relative max-w-4xl w-full bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedMonth(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h3 className="mb-4">Flipbook Gallery</h3>
              <div className="aspect-video bg-secondary rounded flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="mb-2">Flipbook-style viewer would be integrated here</p>
                  <p className="text-sm">Page-turn navigation with image gallery</p>
                  <div className="mt-4 flex gap-2 justify-center">
                    <button className="p-2 bg-primary text-white rounded">
                      <ChevronLeft size={20} />
                    </button>
                    <button className="p-2 bg-primary text-white rounded">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
