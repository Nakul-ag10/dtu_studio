import { useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, FileText, ZoomIn, ZoomOut, X } from "lucide-react";
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

  useEffect(() => {
    setCurrentPage(1);
    setScale(1);
  }, [selectedMonth]);

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

  const selectedYearLabel = selectedYear ? `${selectedYear}` : "Archive";

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Hero */}
      <div
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/campus.webp')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">DTU Media Cell</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Month In Pictures</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              Explore our digital flipbooks - beautiful PDF magazines showcasing campus life, events, and memorable moments from Delhi Technological University.
            </p>
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
              Current-year months are visible by default. Click any year to load its flipbooks.
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
                    {monthsData.filter((item) => item.year === year).length} flipbook{monthsData.filter((item) => item.year === year).length === 1 ? "" : "s"}
                  </p>
                </button>
              ))}
            </div>
          </aside>

          <section>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Viewing flipbooks for</p>
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
                  className="group overflow-hidden rounded-3xl border border-border bg-white text-left shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden bg-gray-200">
                    {month.thumbnail ? (
                      <img
                        src={month.thumbnail}
                        alt={month.month}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <FileText size={48} className="text-primary/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                      <FileText size={18} />
                      <div>
                        <h3 className="text-lg font-semibold">{month.month}</h3>
                        <p className="text-sm text-white/80">Digital Magazine</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground">
                      Click to open the flipbook.
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedMonth(null)}
          >
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-auto rounded-2xl bg-white" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedMonth(null)}
                className="sticky top-4 right-4 float-right z-10 rounded-full border border-border bg-white p-2 text-gray-600 shadow-md hover:bg-gray-50 m-4"
              >
                <X size={20} />
              </button>
              {(() => {
                const monthData = monthsData.find((m) => m.id === selectedMonth);
                if (!monthData) return null;

                return (
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-semibold mb-2">{monthData.month} - Digital Magazine</h3>
                      <p className="text-sm text-muted-foreground">Interactive PDF Flipbook</p>
                    </div>

                    {/* Controls */}
                    <div className="mb-6 flex items-center justify-between bg-secondary/50 rounded-2xl p-4 flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage <= 1}
                          className="rounded-lg border border-border bg-white p-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <div className="text-sm font-medium min-w-[100px] text-center">
                          Page {currentPage} of {totalPages}
                        </div>
                        <button
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage >= totalPages}
                          className="rounded-lg border border-border bg-white p-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setScale(Math.max(0.5, scale - 0.1))}
                          className="rounded-lg border border-border bg-white p-2 text-gray-600 hover:bg-gray-50 transition"
                        >
                          <ZoomOut size={20} />
                        </button>
                        <div className="text-sm font-medium min-w-[50px] text-center">
                          {Math.round(scale * 100)}%
                        </div>
                        <button
                          onClick={() => setScale(Math.min(2, scale + 0.1))}
                          className="rounded-lg border border-border bg-white p-2 text-gray-600 hover:bg-gray-50 transition"
                        >
                          <ZoomIn size={20} />
                        </button>
                      </div>
                    </div>

                    {/* PDF Viewer */}
                    <div className="relative bg-gray-100 rounded-2xl overflow-auto flex justify-center" style={{ maxHeight: 'calc(90vh - 300px)' }}>
                      <Document
                        file={monthData.pdfPath}
                        onLoadSuccess={(pdf) => setTotalPages(pdf.numPages)}
                        loading={<div className="p-8 text-center text-gray-600">Loading PDF...</div>}
                        error={<div className="p-8 text-center text-red-600">Failed to load PDF</div>}
                      >
                        <div className="flex justify-center p-4">
                          <Page
                            pageNumber={currentPage}
                            scale={scale}
                          />
                        </div>
                      </Document>
                    </div>

                    {/* Footer Info */}
                    <div className="mt-6 text-center text-sm text-muted-foreground">
                      <p>{monthData.month} Flipbook</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
