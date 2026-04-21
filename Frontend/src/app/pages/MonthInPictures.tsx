import { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, FileText, ZoomIn, ZoomOut, X, BookOpen } from "lucide-react";
import { useData } from "../contexts/DataContext";
import { Document, Page, pdfjs } from "react-pdf";

// Set up PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function MonthInPictures() {
  const { monthInPictures } = useData();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1);
  const [pageWidth, setPageWidth] = useState(680);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    setCurrentPage(1);
    setScale(1);
    setTotalPages(0);
  }, [selectedMonth]);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPageWidth(w - 48);
      else if (w < 1024) setPageWidth(560);
      else setPageWidth(680);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const monthsData = monthInPictures;

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

  const goNext = useCallback(() => {
    setFlipDirection("next");
    setCurrentPage((p) => Math.min(totalPages, p + 1));
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setFlipDirection("prev");
    setCurrentPage((p) => Math.max(1, p - 1));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedMonth) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setSelectedMonth(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedMonth, goNext, goPrev]);

  const selectedYearLabel = selectedYear ? `${selectedYear}` : "Archive";
  const progress = totalPages > 1 ? ((currentPage - 1) / (totalPages - 1)) * 100 : 0;

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Hero */}
      <div
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/campus.webp')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        {/* Subtle horizontal lines texture */}
        {/* <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(255,255,255,1) 38px, rgba(255,255,255,1) 39px)",
          }}
        /> */}
        <div className="relative mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <p className="text-xs uppercase tracking-[0.15em] text-white/50 font-medium">DTU Media Cell</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Month In Pictures</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              Explore our digital flipbooks — beautiful PDF magazines showcasing campus life, events, and memorable moments from Delhi Technological University.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

          {/* Sidebar */}
          <aside className="rounded-3xl bg-white/90 border border-border p-6 shadow-sm h-fit lg:sticky lg:top-6">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Archive</p>
              <h2 className="mt-2 text-2xl font-semibold">Browse by year</h2>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Current-year months are visible by default. Click any year to load its Images.
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
                    year === selectedYear
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-white text-foreground hover:border-primary/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">{year}</span>
                    {year === new Date().getFullYear() && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">Current</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {monthsData.filter((item) => item.year === year).length} flipbook
                    {monthsData.filter((item) => item.year === year).length === 1 ? "" : "s"}
                  </p>
                </button>
              ))}
            </div>
          </aside>

          {/* Grid */}
          <section>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Viewing Pictures for</p>
                <h2 className="text-3xl font-semibold">{selectedYearLabel}</h2>
              </div>
              <div className="rounded-2xl bg-white/90 border border-border px-4 py-3 text-sm text-muted-foreground">
                {filteredMonths.length} flipbook{filteredMonths.length === 1 ? "" : "s"} available
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
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-white text-left shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Book spine */}
                  <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-primary to-primary/70 z-10 rounded-l-3xl" />

                  <div className="relative h-72 overflow-hidden bg-gray-100 ml-2.5">
                    {month.thumbnail ? (
                      <img
                        src={month.thumbnail}
                        alt={month.month}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col items-center justify-center gap-3">
                        <FileText size={44} className="text-primary/30" />
                        <p className="text-xs text-primary/40 uppercase tracking-widest">Magazine</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Page curl */}
                    <div
                      className="absolute bottom-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: "linear-gradient(225deg, rgba(255,255,255,0.95) 45%, transparent 45%)",
                        boxShadow: "-3px -3px 8px rgba(0,0,0,0.12)",
                      }}
                    />

                    <div className="absolute bottom-4 left-5 text-white">
                      <div className="flex items-center gap-1.5 mb-1 opacity-70">
                        <BookOpen size={12} />
                        <span className="text-xs uppercase tracking-wider">Month-in-Pictures</span>
                      </div>
                      <h3 className="text-xl font-bold">{month.month}</h3>
                      <p className="text-xs text-white/60 mt-0.5">Digital Magazine · {month.year}</p>
                    </div>
                  </div>

                  <div className="ml-2.5 px-5 py-4 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Click to read</p>
                    <motion.div
                      className="flex items-center gap-1 text-primary text-xs font-medium"
                      initial={{ opacity: 0, x: -4 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      <span>Open</span>
                      <ChevronRight size={13} />
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        </div>

        {/* Flipbook Modal */}
        <AnimatePresence>
          {selectedMonth && (() => {
            const monthData = monthsData.find((m) => m.id === selectedMonth);
            if (!monthData) return null;

            return (
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                onClick={() => setSelectedMonth(null)}
              >
                <motion.div
                  key="modal"
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative w-full max-w-4xl rounded-2xl bg-white overflow-hidden shadow-2xl flex flex-col"
                  style={{ maxHeight: "92vh" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-white flex-shrink-0">
                    <div className="flex items-center gap-3">
                      {/* Mini book icon */}
                      <div className="flex h-9 w-7 overflow-hidden rounded shadow-md flex-shrink-0">
                        <div className="w-1.5 bg-primary" />
                        <div className="flex flex-1 items-center justify-center bg-primary/10">
                          <BookOpen size={11} className="text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base leading-tight">
                          {monthData.month} {monthData.year}
                        </h3>
                        <p className="text-xs text-muted-foreground">Digital Magazine</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMonth(null)}
                      className="rounded-full border border-border bg-white p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* PDF area */}
                  <div className="flex-1 overflow-auto bg-gray-100 flex justify-center min-h-0">
                    <Document
                      file={monthData.pdfPath}
                      onLoadSuccess={(pdf) => setTotalPages(pdf.numPages)}
                      loading={
                        <div className="flex flex-col items-center justify-center gap-4 p-20 text-gray-400">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full"
                          />
                          <p className="text-sm">Opening flipbook…</p>
                        </div>
                      }
                      error={
                        <div className="p-12 text-center text-red-500 text-sm">
                          Failed to load PDF. Please try again.
                        </div>
                      }
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentPage}
                          initial={{ opacity: 0, x: flipDirection === "next" ? 48 : -48 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: flipDirection === "next" ? -48 : 48 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="flex justify-center p-5"
                          style={{ filter: "drop-shadow(0 8px 28px rgba(0,0,0,0.18))" }}
                        >
                          <Page
                            pageNumber={currentPage}
                            scale={scale}
                            width={pageWidth}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </Document>
                  </div>

                  {/* Controls */}
                  <div className="border-t border-border bg-white px-6 py-3 flex-shrink-0">
                    {/* Progress bar */}
                    {totalPages > 0 && (
                      <div className="mb-3 h-1 w-full rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      {/* Page nav */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={goPrev}
                          disabled={currentPage <= 1}
                          className="flex items-center gap-1.5 rounded-xl border border-border bg-white px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                        >
                          <ChevronLeft size={16} />
                          <span className="hidden sm:inline">Prev</span>
                        </button>

                        <div className="rounded-xl border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-center min-w-[110px]">
                          {totalPages > 0 ? (
                            <>
                              {currentPage}{" "}
                              <span className="text-muted-foreground">/ {totalPages}</span>
                            </>
                          ) : (
                            <span className="text-muted-foreground">Loading…</span>
                          )}
                        </div>

                        <button
                          onClick={goNext}
                          disabled={currentPage >= totalPages}
                          className="flex items-center gap-1.5 rounded-xl border border-border bg-white px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                        >
                          <span className="hidden sm:inline">Next</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>

                      {/* Zoom */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setScale((s) => Math.max(0.5, parseFloat((s - 0.1).toFixed(1))))}
                          className="rounded-xl border border-border bg-white p-2 text-gray-600 hover:bg-gray-50 transition"
                        >
                          <ZoomOut size={16} />
                        </button>
                        <span className="text-sm font-medium text-gray-600 min-w-[44px] text-center">
                          {Math.round(scale * 100)}%
                        </span>
                        <button
                          onClick={() => setScale((s) => Math.min(2.5, parseFloat((s + 0.1).toFixed(1))))}
                          className="rounded-xl border border-border bg-white p-2 text-gray-600 hover:bg-gray-50 transition"
                        >
                          <ZoomIn size={16} />
                        </button>
                      </div>
                    </div>

                    <p className="mt-2 text-center text-xs text-muted-foreground/50">
                      ← → arrow keys to flip · Esc to close
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
}