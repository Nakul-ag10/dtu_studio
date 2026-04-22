import { Link } from "react-router";
import { motion } from "motion/react";
import { Camera, Newspaper, FileText, Video, Users, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";

export default function Home() {
  const highlights = [
    { icon: Camera, title: "Month in Pictures", description: "Visual documentation of DTU's vibrant campus life", link: "/month-in-pictures" },
    { icon: Newspaper, title: "Press Coverage", description: "Media mentions and news features", link: "/press-coverage" },
    { icon: FileText, title: "Press Releases", description: "Official announcements and updates", link: "/press-release" },
    { icon: Video, title: "Press Conferences", description: "Watch our official video coverage", link: "/press-conferences" },
    { icon: Users, title: "Our Team", description: "Meet the people behind DTU Media Cell", link: "/team" },
    { icon: Mail, title: "Contact Us", description: "Get in touch for collaborations", link: "/contact" },
  ];

  const backgroundImages = [
    "/bg1.jpeg",
    "/bg2.jpeg",
    "/bg3.jpeg",
    "/bg4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const intervalRef = useRef(0);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      goNext();
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]);

  const goNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
      setIsAnimating(false);
    }, 600);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
      setIsAnimating(false);
    }, 600);
  };

  const handlePrev = () => {
    stopAutoPlay();
    goPrev();
  };

  const handleNext = () => {
    stopAutoPlay();
    goNext();
  };

  const prevIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
  const nextIndex = (currentIndex + 1) % backgroundImages.length;

  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[600px] flex items-center overflow-hidden bg-black">

        {/* Film-strip carousel track */}
        <div className="absolute inset-0 flex">
          {/* Previous image (sliding out to the left) */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out "
            style={{
              backgroundImage: `url(${backgroundImages[prevIndex]})`,
              transform: isAnimating && direction === 1 ? 'translateX(-100%)' : 'translateX(-100%)',
              opacity: 0.45,
            }}
          />

          {/* Current image */}
          <div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentIndex]})`,
              transform: isAnimating
                ? direction === 1 ? 'translateX(-100%)' : 'translateX(100%)'
                : 'translateX(0%)',
              transition: isAnimating ? 'transform 0.65s cubic-bezier(0.77,0,0.175,1)' : 'none',
              opacity: 0.45,
            }}
          />

          {/* Next image (sliding in from the right) */}
          <div
            key={`next-${currentIndex}`}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[nextIndex]})`,
              transform: isAnimating && direction === 1
                ? 'translateX(0%)'
                : isAnimating && direction === -1
                  ? 'translateX(0%)'
                  : direction === 1 ? 'translateX(100%)' : 'translateX(-100%)',
              transition: isAnimating ? 'transform 0.65s cubic-bezier(0.77,0,0.175,1)' : 'none',
              opacity: 0.45,
            }}
          />
        </div>

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Delhi Technological University
            </div>

            <h1 className="mb-6 leading-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2">
                DTU Media Cell
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-white/70">
                Capturing Moments. Amplifying Voices.
              </span>
            </h1>

            <p className="mb-8 text-lg text-white/60 max-w-2xl">
              The official media and documentation hub of Delhi Technological University, preserving our institution's journey through compelling visual narratives and comprehensive coverage.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/month-in-pictures">
                <Button variant="primary">Explore Gallery</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors duration-200 border border-white/20 backdrop-blur-sm"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors duration-200 border border-white/20 backdrop-blur-sm"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {backgroundImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopAutoPlay();
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 bg-white'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="py-20 bg-gradient-to-t from-primary to-[#3c0000]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white font-bold">About DTU Media Cell</h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              DTU Media Cell serves as the official visual documentation and communication arm of Delhi Technological University. We chronicle the university's academic achievements, cultural vibrancy, and institutional milestones through professional photography, videography, and comprehensive media coverage. Our mission is to preserve the legacy of DTU while showcasing its dynamic present to stakeholders, media partners, and the broader community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What We Do Section ── */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="mb-4">What We Do</h2>
            <p className="text-muted-foreground">Explore our services and resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block p-6 bg-white border border-border rounded hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full group"
                >
                  <div className="mb-4 w-12 h-12 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}