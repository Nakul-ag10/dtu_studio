import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { Calendar, Download, ArrowLeft } from "lucide-react";
import { useData } from "../contexts/DataContext";

export default function PressReleaseDetail() {
  const { id } = useParams();
  const releaseId = parseInt(id || "0");
  const { pressReleases } = useData();

  const release = pressReleases.find(r => r.id === releaseId);

  if (!release) {
    return (
      <div className="min-h-screen bg-secondary/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Press Release Not Found</h1>
          <Link to="/press-release" className="text-primary hover:underline">
            ← Back to Press Releases
          </Link>
        </div>
      </div>
    );
  }

  // Calculate additional fields from the data
  const releaseDate = new Date(release.date);
  const year = releaseDate.getFullYear();
  const month = releaseDate.toLocaleDateString('en-US', { month: 'long' });
  const formattedDate = releaseDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Use content as both summary and full content, split by first paragraph or use first 200 chars
  const contentParts = release.content.split('\n\n');
  const summary = contentParts[0] || release.content.substring(0, 200) + (release.content.length > 200 ? '...' : '');
  const fullContent = release.content;
  const pdfLink = "#"; // Placeholder since not in DataContext

  return (
    <div className="min-h-screen bg-secondary/20">
      <div
        className="relative overflow-hidden text-white py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/campus.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Link to="/press-release" className="text-white/80 hover:text-white transition-colors">
                <ArrowLeft size={24} />
              </Link>
              <h1 className="text-3xl font-bold">Press Release</h1>
            </div>
            <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded text-sm">
              📊 API DATA HERE - Backend Integration Ready
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg overflow-hidden border border-border shadow-sm"
        >
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={release.thumbnail}
              alt={release.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Calendar size={16} />
                <span>{formattedDate}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {release.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {summary}
              </p>

              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {fullContent.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <a
                href={pdfLink}
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Download size={20} />
                Download Full Release (PDF)
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}