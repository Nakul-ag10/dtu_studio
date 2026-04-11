import { useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function MonthInPictures() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedMonth]);

  const monthsData = [
    {
      id: 1,
      month: "March 2026",
      year: 2026,
      thumbnail: "img2501.png",
      imageCount: 45,
      images: ["img2501.png", "img2501.png", "img2501.png", "img2501.png", "img2501.png"],
    },
    {
      id: 2,
      month: "February 2026",
      year: 2026,
      thumbnail: "img2502.png",
      imageCount: 38,
      images: ["img2502.png", "img2502.png", "img2502.png", "img2502.png"],
    },
    {
      id: 3,
      month: "January 2026",
      year: 2026,
      thumbnail: "img2503.png",
      imageCount: 52,
      images: ["img2503.png", "img2503.png", "img2503.png", "img2503.png", "img2503.png", "img2503.png"],
    },
    {
      id: 4,
      month: "December 2025",
      year: 2025,
      thumbnail: "img2504.png",
      imageCount: 41,
      images: ["img2504.png", "img2504.png", "img2504.png"],
    },
    {
      id: 5,
      month: "November 2025",
      year: 2025,
      thumbnail: "img2505.png",
      imageCount: 36,
      images: ["img2504.png", "img2504.png"],
    },
  ];

  const years = useMemo(() => {
    return Array.from(new Set(monthsData.map((item) => item.year))).sort((a, b) => b - a);
  }, [monthsData]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const defaultYear = years.includes(currentYear) ? currentYear : years[0] ?? null;
    setSelectedYear(defaultYear);
  }, [years]);

  const filteredMonths = useMemo(
    () => monthsData.filter((month) => month.year === selectedYear),
    [monthsData, selectedYear]
  );

  const selectedYearLabel = selectedYear ? `${selectedYear}` : "Archive";

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="bg-primary text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl bg-white/90 border border-border p-6 shadow-sm">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Archive</p>
              <h2 className="mt-2 text-2xl font-semibold">Browse by year</h2>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Current-year months are visible by default. Click any year to load its images in the gallery.
            </p>
            <div className="space-y-3">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setSelectedMonth(null);
                  }}
                  className={`w-full rounded-2xl px-4 py-3 text-left transition-all duration-200 border ${
                    year === selectedYear ? "border-primary bg-primary/10 text-primary" : "border-border bg-white text-foreground hover:border-primary/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">{year}</span>
                    {year === new Date().getFullYear() && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">Current</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {monthsData.filter((item) => item.year === year).length} months
                  </p>
                </button>
              ))}
            </div>
          </aside>

          <section>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Viewing images for</p>
                <h2 className="text-3xl font-semibold">{selectedYearLabel}</h2>
              </div>
              <div className="rounded-2xl bg-white/90 border border-border px-4 py-3 text-sm text-muted-foreground">
                {filteredMonths.length} month{filteredMonths.length === 1 ? "" : "s"} available
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMonths.map((month, index) => (
                <motion.button
                  key={month.id}
                  onClick={() => setSelectedMonth(month.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group overflow-hidden rounded-3xl border border-border bg-white text-left shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={month.thumbnail}
                      alt={month.month}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{month.month}</h3>
                      <p className="text-sm text-white/80">{month.imageCount} images</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground">
                      Click to open the full month gallery.
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        </div>

        {selectedMonth && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedMonth(null)}
          >
            <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedMonth(null)}
                className="absolute right-4 top-4 rounded-full border border-border bg-white p-2 text-gray-600 shadow-sm hover:bg-gray-50"
              >
                ✕
              </button>
              {(() => {
                const monthData = monthsData.find((m) => m.id === selectedMonth);
                if (!monthData) return null;

                const nextImage = () => {
                  setCurrentImageIndex((prev) => (prev + 1) % monthData.images.length);
                };

                const prevImage = () => {
                  setCurrentImageIndex((prev) => (prev - 1 + monthData.images.length) % monthData.images.length);
                };

                return (
                  <>
                    <h3 className="mb-4 text-2xl font-semibold">{monthData.month} - Flipbook Gallery</h3>
                    <div className="relative aspect-video overflow-hidden rounded-3xl bg-secondary">
                      <img
                        src={monthData.images[currentImageIndex]}
                        alt={`${monthData.month} - Image ${currentImageIndex + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-between p-4">
                        <button
                          onClick={prevImage}
                          className="rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                          disabled={monthData.images.length <= 1}
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                          disabled={monthData.images.length <= 1}
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-black/50 px-4 py-2 text-white">
                        {currentImageIndex + 1} / {monthData.images.length}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {monthData.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-3 w-3 rounded-full transition ${
                            index === currentImageIndex ? "bg-primary" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
