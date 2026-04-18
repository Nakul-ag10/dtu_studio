import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar_copy() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Categories inspired by IITM structure
  const menuGroups = [
    {
      label: "Media",
      links: [
        { path: "/press-coverage", label: "Press Coverage" },
        { path: "/press-conferences", label: "Press Conferences" },
        { path: "/press-release", label: "Press Release" },
        { path: "/month-in-pictures", label: "Month in Pictures" },
      ],
    },
    {
      label: "Studio",
      links: [
        { path: "/services", label: "Studio Services" },
        { path: "/studio-charges", label: "Studio Charges" },
        { path: "/social-media", label: "Social Media" },
      ],
    },
    {
      label: "About",
      links: [
        { path: "/team", label: "People" },
        { path: "/studio-team", label: "Studio Team" },
        { path: "/contact", label: "Contact" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white border-b"}`}>
      
      {/* Top Utility Bar (IITM Inspired) */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-100 py-1.5">
        <div className="mx-auto px-8 max-w-[1400px] flex justify-end gap-6">
          <Link to="/contact" className="text-[11px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          <a href="https://dtu.ac.in" target="_blank" className="text-[11px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">DTU Main Site</a>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <motion.div whileHover={{ scale: 1.05 }} className="w-12 h-12 flex items-center justify-center">
              <img src="/dtu-logo.webp" alt="DTU Logo" className="object-contain" />
            </motion.div>
            <div className="flex flex-col border-l border-slate-200 pl-4">
              <span className="text-xl font-bold tracking-tight text-foreground leading-none">DTU STUDIO</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mt-1">Official Media Cell</span>
            </div>
          </Link>

          {/* Desktop Navigation Grouped */}
          <div className="hidden lg:flex items-center gap-2">
            <Link 
              to="/" 
              className={`px-4 py-2 text-sm font-medium transition-colors ${isActive('/') ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Home
            </Link>
            <Link 
              to="/team" 
              className={`px-4 py-2 text-sm font-medium transition-colors ${isActive('/team') ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              People
            </Link>
            <Link 
              to="/month-in-pictures" 
              className={`px-4 py-2 text-sm font-medium transition-colors ${isActive('/month-in-pictures') ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Month in Pictures
            </Link>

            {menuGroups.map((group) => (
              <div key={group.label} className="relative group/menu py-4">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground group-hover/menu:text-primary transition-colors">
                  {group.label}
                  <ChevronDown size={14} className="group-hover/menu:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* Minimalist Dropdown */}
                <div className="absolute top-full left-0 w-56 opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-200">
                  <div className="bg-white border border-slate-100 shadow-xl rounded-xl mt-1 overflow-hidden">
                    {group.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-5 py-3 text-xs font-medium transition-all hover:bg-slate-50 ${
                          isActive(link.path) ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-50 lg:hidden bg-white px-6 py-8"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)} className="p-2"><X size={32} /></button>
            </div>
            <div className="space-y-6">
              <Link to="/" onClick={() => setIsOpen(false)} className="block text-2xl font-bold">Home</Link>
              {menuGroups.map((group) => (
                <div key={group.label} className="space-y-3">
                  <h3 className="text-[10px] uppercase tracking-widest text-primary font-bold">{group.label}</h3>
                  <div className="grid grid-cols-1 gap-4 pl-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-lg text-slate-600 font-medium"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}