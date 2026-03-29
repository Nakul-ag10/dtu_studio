import { useState } from "react";
import { SectionContainer } from "../components/ui/SectionContainer";
import { MediaCard } from "../components/ui/MediaCard";
import { Calendar, Filter, Newspaper } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function PressCoverage() {
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  // API DATA HERE - This will be fetched from backend
  const pressItems = [
    {
      id: 1,
      title: "DTU Students Win National Hackathon Championship",
      source: "The Times of India",
      date: "March 25, 2026",
      category: "Achievement",
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      excerpt: "DTU's team secures first place in the prestigious national-level coding competition..."
    },
    {
      id: 2,
      title: "Research Breakthrough in Renewable Energy at DTU",
      source: "The Hindu",
      date: "March 20, 2026",
      category: "Research",
      thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop",
      excerpt: "Innovative solar panel technology developed by DTU researchers shows promising results..."
    },
    {
      id: 3,
      title: "DTU Hosts International Tech Summit 2026",
      source: "Indian Express",
      date: "March 15, 2026",
      category: "Events",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      excerpt: "Global tech leaders gather at Delhi Technological University for annual summit..."
    },
    {
      id: 4,
      title: "New Incubation Center Launched at DTU",
      source: "Business Standard",
      date: "March 10, 2026",
      category: "Infrastructure",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      excerpt: "State-of-the-art startup incubation facility inaugurated to support student entrepreneurs..."
    },
    {
      id: 5,
      title: "DTU Alumni Raises $10M for AI Startup",
      source: "Economic Times",
      date: "March 5, 2026",
      category: "Alumni",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      excerpt: "Former DTU student's artificial intelligence company secures major funding round..."
    },
    {
      id: 6,
      title: "Cultural Festival Draws Thousands to DTU Campus",
      source: "Hindustan Times",
      date: "February 28, 2026",
      category: "Events",
      thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      excerpt: "Annual cultural extravaganza showcases student talent and creativity..."
    },
  ];

  const categories = ["all", "Achievement", "Research", "Events", "Infrastructure", "Alumni"];

  const filteredItems = category === "all"
    ? pressItems
    : pressItems.filter(item => item.category === category);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        {/* <ImageWithFallback
          src="https://images.unsplash.com/photo-1771324965021-883a7e9969ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Press Coverage"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-10 text-center px-4">
          <Newspaper className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl text-white mb-4">Press Coverage</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Latest media coverage and news articles featuring Delhi Technological University
          </p>
          <div className="mt-6 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm shadow-lg">
            📡 API DATA HERE
          </div>
        </div>
      </div>

      <SectionContainer className="bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-center mb-8">Media Coverage</h2>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-primary" />
            <span>Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  category === cat
                    ? "bg-gradient-to-r from-primary to-red-600 text-white shadow-md transform scale-105"
                    : "bg-secondary text-foreground hover:bg-muted hover:shadow-sm"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
                <div className="aspect-video bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-12 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MediaCard
                key={item.id}
                image={item.thumbnail}
                title={item.title}
                description={item.excerpt}
                date={item.date}
              >
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.source}</span>
                  <span className="px-2 py-1 bg-secondary rounded">{item.category}</span>
                </div>
              </MediaCard>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No press coverage found for this category.</p>
          </div>
        )}
      </SectionContainer>
    </>
  );
}
