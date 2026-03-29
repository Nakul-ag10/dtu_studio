import { useState } from "react";
import { SectionContainer } from "../components/ui/SectionContainer";
import { MediaCard } from "../components/ui/MediaCard";
import { Modal } from "../components/ui/Modal";
import { Play, Video } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function PressConferences() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const conferences = [
    {
      id: 1,
      title: "Annual Convocation 2026 - Vice Chancellor's Address",
      date: "March 20, 2026",
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "45:30",
    },
    {
      id: 2,
      title: "Research Innovation Showcase - New AI Center Announcement",
      date: "March 15, 2026",
      thumbnail: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "32:15",
    },
    {
      id: 3,
      title: "International Tech Summit 2026 Opening Ceremony",
      date: "March 10, 2026",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "1:05:20",
    },
    {
      id: 4,
      title: "Student Achievement Awards Ceremony",
      date: "February 28, 2026",
      thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "28:45",
    },
    {
      id: 5,
      title: "Industry Partnership Announcement with Tech Giants",
      date: "February 20, 2026",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "40:10",
    },
    {
      id: 6,
      title: "Campus Infrastructure Expansion - Press Briefing",
      date: "February 15, 2026",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "35:50",
    },
  ];

  const currentConference = conferences.find(c => c.videoId === selectedVideo);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        {/* <ImageWithFallback
          src="https://images.unsplash.com/photo-1560523160-754a9e25c68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Press Conferences"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-10 text-center px-4">
          <Video className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl text-white mb-4">Press Conferences</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Watch recordings of official press conferences, announcements, and university events
          </p>
        </div>
      </div>

      <SectionContainer className="bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-center mb-8">Video Archives</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferences.map((conference) => (
            <div key={conference.id} className="relative group">
              <MediaCard
                image={conference.thumbnail}
                title={conference.title}
                date={conference.date}
                onClick={() => setSelectedVideo(conference.videoId)}
              >
                <div className="mt-2 text-xs text-muted-foreground">
                  Duration: {conference.duration}
                </div>
              </MediaCard>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-4 rounded-full shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={32} fill="white" />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Video Modal */}
      <Modal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        title={currentConference?.title}
      >
        {selectedVideo && (
          <div className="aspect-video bg-black rounded overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Modal>
    </>
  );
}
