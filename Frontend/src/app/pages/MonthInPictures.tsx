import { useState } from "react";
import { SectionContainer } from "../components/ui/SectionContainer";
import { MediaCard } from "../components/ui/MediaCard";
import { Modal } from "../components/ui/Modal";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function MonthInPictures() {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // API DATA HERE - This will be fetched from backend
  const monthlyArchives = [
    { id: 1, month: "March 2026", year: "2026", thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop", imageCount: 45 },
    { id: 2, month: "February 2026", year: "2026", thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop", imageCount: 38 },
    { id: 3, month: "January 2026", year: "2026", thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop", imageCount: 52 },
    { id: 4, month: "December 2025", year: "2025", thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop", imageCount: 41 },
    { id: 5, month: "November 2025", year: "2025", thumbnail: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop", imageCount: 35 },
    { id: 6, month: "October 2025", year: "2025", thumbnail: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop", imageCount: 48 },
  ];

  const flipbookImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=800&fit=crop",
  ];

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % flipbookImages.length);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + flipbookImages.length) % flipbookImages.length);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        {/* <ImageWithFallback
          src="https://images.unsplash.com/photo-1774451606966-4ab827d85f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Month in Pictures"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-10 text-center px-4">
          <Camera className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl text-white mb-4">Month in Pictures</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our visual archive capturing the vibrant moments and milestones of DTU throughout the months
          </p>
          <div className="mt-6 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm shadow-lg">
            📡 Data fetched via API
          </div>
        </div>
      </div>

      <SectionContainer className="bg-gradient-to-b from-gray-50 to-white"  >

        <h2 className="text-center mb-8">Visual Archives</h2>

        {/* Archive Selection */}
        <div className="mb-8 flex justify-center">
          <div className="inline-block">
            <label className="block mb-3 text-sm">Filter by Year</label>
            <select className="px-6 py-3 border-2 border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm hover:shadow-md transition-shadow">
              <option>All Years</option>
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
            </select>
          </div>
        </div>

        {/* Month Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {monthlyArchives.map((archive) => (
            <MediaCard
              key={archive.id}
              image={archive.thumbnail}
              title={archive.month}
              description={`${archive.imageCount} photos`}
              onClick={() => setSelectedMonth(archive.id)}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Flipbook Modal */}
      <Modal
        isOpen={selectedMonth !== null}
        onClose={() => {
          setSelectedMonth(null);
          setCurrentPage(0);
        }}
        title={monthlyArchives.find(a => a.id === selectedMonth)?.month}
      >
        <div className="relative">
          <img
            src={flipbookImages[currentPage]}
            alt={`Page ${currentPage + 1}`}
            className="w-full h-auto rounded"
          />
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrevPage}
              className="p-2 rounded bg-secondary hover:bg-muted transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-sm text-muted-foreground">
              {currentPage + 1} / {flipbookImages.length}
            </span>
            <button
              onClick={handleNextPage}
              className="p-2 rounded bg-secondary hover:bg-muted transition-colors"
              aria-label="Next page"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
