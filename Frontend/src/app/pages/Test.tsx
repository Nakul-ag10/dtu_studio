import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export default function Test() {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedMonth]);

  // Mock data - API DATA HERE
  const monthsData = [
    { 
      id: 1, 
      month: "March 2026", 
      year: 2026, 
      thumbnail: "img2501.png", 
      imageCount: 45,
      images: [
        "img2501.png",
        "img2501.png",
        "img2501.png",
        "img2501.png",
        "img2501.png"
      ]
    },
    { 
      id: 2, 
      month: "February 2026", 
      year: 2026, 
      thumbnail: "img2502.png", 
      imageCount: 38,
      images: [
        "img2502.png",
        "img2502.png",
        "img2502.png",
        "img2502.png"
      ]
    },
    { 
      id: 3, 
      month: "January 2026", 
      year: 2026, 
      thumbnail: "img2503.png", 
      imageCount: 52,
      images: [
        "img2503.png",
        "img2503.png",
        "img2503.png",
        "img2503.png",
        "img2503.png",
        "img2503.png"
      ]
    },
    { 
      id: 4, 
      month: "December 2025", 
      year: 2025, 
      thumbnail: "img2504.png", 
      imageCount: 41,
      images: [
        "img2504.png",
        "img2504.png",
        "img2504.png"
      ]
    },
    { 
      id: 5, 
      month: "November 2025", 
      year: 2025, 
      thumbnail: "img2505.png", 
      imageCount: 36,
      images: [
        "img2504.png",
        "img2504.png"
      ]
    },
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
              {(() => {
                const monthData = monthsData.find(m => m.id === selectedMonth);
                if (!monthData) return null;
                
                const nextImage = () => {
                  setCurrentImageIndex((prev) => (prev + 1) % monthData.images.length);
                };
                
                const prevImage = () => {
                  setCurrentImageIndex((prev) => (prev - 1 + monthData.images.length) % monthData.images.length);
                };
                
                return (
                  <>
                    <h3 className="mb-4">{monthData.month} - Flipbook Gallery</h3>
                    <div className="relative aspect-video bg-secondary rounded overflow-hidden">
                      <img
                        src={monthData.images[currentImageIndex]}
                        alt={`${monthData.month} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-between p-4">
                        <button
                          onClick={prevImage}
                          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                          disabled={monthData.images.length <= 1}
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                          disabled={monthData.images.length <= 1}
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded">
                        {currentImageIndex + 1} / {monthData.images.length}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-2">
                      {monthData.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
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
