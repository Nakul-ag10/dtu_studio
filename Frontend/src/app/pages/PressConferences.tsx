import { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Calendar } from "lucide-react";
import { useData } from "../contexts/DataContext";

export default function PressConferences() {
  const { pressConferences } = useData();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Convert press conferences to video format with year
  const videos = pressConferences.map(conf => ({
    id: conf.id.toString(),
    videoId: conf.youtubeLink.split('v=')[1] || conf.youtubeLink.split('/').pop() || '',
    title: conf.title,
    date: new Date(conf.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
    year: new Date(conf.date).getFullYear(),
    thumbnail: `https://img.youtube.com/vi/${conf.youtubeLink.split('v=')[1] || conf.youtubeLink.split('/').pop() || ''}/maxresdefault.jpg`,
    duration: "00:00" // Placeholder, could be added to data model later
  }));

  // Extract unique years and sort in descending order
  const years = useMemo(() => {
    return Array.from(new Set(videos.map((video) => video.year))).sort((a, b) => b - a);
  }, [videos]);

  // Set default year to current year if available, otherwise first available year
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const defaultYear = years.includes(currentYear) ? currentYear : years[0] ?? null;
    setSelectedYear(defaultYear);
  }, [years]);

  // Filter videos by selected year
  const filteredVideos = useMemo(
    () => selectedYear ? videos.filter((video) => video.year === selectedYear) : videos,
    [videos, selectedYear]
  );

  const selectedYearLabel = selectedYear ? `${selectedYear}` : "Archive";

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Hero */}
      <div
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-2.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">DTU Media Cell</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Press Conferences</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              Watch the latest press conferences and media briefings from Delhi Technological University, featuring key announcements, research highlights, and campus updates.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Archive Sidebar */}
          <aside className="rounded-3xl bg-white/90 border border-border p-6 shadow-sm h-fit">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Archive</p>
              <h2 className="mt-2 text-2xl font-semibold">Browse by year</h2>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Current-year conferences are visible by default. Click any year to load its conferences in the gallery.
            </p>
            <div className="space-y-3">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`w-full rounded-2xl px-4 py-3 text-left transition-all duration-200 border ${
                    year === selectedYear ? "border-primary bg-primary/10 text-primary" : "border-border bg-white text-foreground hover:border-primary/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">{year}</span>
                    {year === new Date().getFullYear() && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">Current</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {videos.filter((video) => video.year === year).length} conference{videos.filter((video) => video.year === year).length !== 1 ? "s" : ""}
                  </p>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <section>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Viewing conferences for</p>
                <h2 className="text-3xl font-semibold">{selectedYearLabel}</h2>
              </div>
              <div className="rounded-2xl bg-white/90 border border-border px-4 py-3 text-sm text-muted-foreground">
                {filteredVideos.length} conference{filteredVideos.length !== 1 ? "s" : ""} available
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedVideo(video.videoId)}
                  className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="text-primary ml-1" size={28} fill="currentColor" />
                      </div>
                    </div>
                    {/* <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                      {video.duration}
                    </div> */}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{video.date}</span>
                    </div>
                    <h3 className="line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-lg"
              >
                ✕ Close
              </button>
              <div className="aspect-video bg-black rounded overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
