import { useState } from "react";
import { motion } from "motion/react";
import { Play, Calendar } from "lucide-react";

export default function PressConferences() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Videos from DTU Delhi YouTube channel: https://www.youtube.com/channel/UCZqfUb0w7w0NPsTx7I7RtsQ
  const videos = [
    {
      id: "1",
      videoId: "BLunEdRraqY", // Placeholder - replace with actual DTU video IDs
      title: "3rd National Conference on Social Responsibilies",
      date: "March 2026",
      thumbnail: `https://img.youtube.com/vi/BLunEdRraqY/maxresdefault.jpg`,
      duration: "45:30"
    },
    {
      id: "2",
      videoId: "ZoD3tLLbO-8",
      title: "Republic Day 2026",
      date: "February 2026",
      thumbnail: `https://img.youtube.com/vi/ZoD3tLLbO-8/maxresdefault.jpg`,
      duration: "28:15"
    },
    {
      id: "3",
      videoId: "j0cit5XHm70",
      title: "Entangles Podcast - 15",
      date: "February 2026",
      thumbnail: `https://img.youtube.com/vi/j0cit5XHm70/maxresdefault.jpg`,
      duration: "15:45"
    },
    {
      id: "4",
      videoId: "BLunEdRraqY",
      title: "International Collaboration Announcement",
      date: "January 2026",
      thumbnail: `https://img.youtube.com/vi/BLunEdRraqY/maxresdefault.jpg`,
      duration: "22:10"
    },
    {
      id: "5",
      videoId: "dQw4w9WgXcQ",
      title: "Placement Season 2025-26 - Results and Insights",
      date: "January 2026",
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      duration: "32:50"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="bg-primary text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4">Press Conferences</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Watch official press conferences, panel discussions and media briefings by Delhi Technological University.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
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
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                  {video.duration}
                </div>
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
