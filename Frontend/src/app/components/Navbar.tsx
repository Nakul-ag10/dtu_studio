import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/team", label: "People" },
    { path: "/month-in-pictures", label: "Month in Pictures" },
    { path: "/press-coverage", label: "Press Coverage" },
    { path: "/social-media", label: "Social Media" },
    { path: "/services", label: "Studio Services" },
    { path: "/studio-team", label: "Studio Team" },
    { path: "/studio-charges", label: "Studio Charges" },
    { path: "/press-conferences", label: "Press Conferences" },
    { path: "/press-release", label: "Press Release" },
    { path: "/contact", label: "Contact" },
    { path: "/admin", label : "Faculty Login" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 shadow-md">

      {/* ── Top bar ── */}
      <div className="bg-primary text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] flex items-center justify-between h-8">
          <p className="text-[11px] tracking-wide font-medium opacity-90">
            Delhi Technological University
          </p>
          <div className="flex items-center gap-4 text-[11px] font-medium opacity-80">
            <a href="https://dtu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              DTU Website
            </a>
            <span className="opacity-40">|</span>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">
              Contact
            </Link>
            <span className="opacity-40">|</span>
            <Link to="/admin" className="hover:opacity-100 transition-opacity">
              Faculty Login
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div className="bg-white border-b border-border">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <img src="/dtu-logo.webp" alt="DTU Logo" className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  DTU Studio
                </div>
                <div className="text-[11px] text-muted-foreground tracking-wide uppercase">
                  Media Cell
                </div>
              </div>
              {/* Red left-border accent on logo — IITM style */}
              <div className="hidden sm:block w-px h-10 bg-primary/25 mx-1" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center h-full">
              {navLinks.filter(l => l.path !== "/contact" && l.path !== "/admin").map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 h-16 flex items-center text-sm font-medium transition-colors group ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  {/* Active / hover underline bar */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t transition-transform duration-200 origin-bottom ${
                      isActive(link.path)
                        ? "scale-y-100"
                        : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5 max-h-[75vh] overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "text-foreground hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {isActive(link.path) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    )}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}