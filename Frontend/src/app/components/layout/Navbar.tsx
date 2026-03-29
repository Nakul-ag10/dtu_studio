import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/month-in-pictures", label: "Month in Pictures" },
    { path: "/press-coverage", label: "Press Coverage" },
    { path: "/press-release", label: "Press Release" },
    { path: "/press-conferences", label: "Press Conferences" },
    { path: "/social-media", label: "Social Media" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-16 h-16 bg-none rounded flex items-center justify-center">
              {/* <span className="text-white font-bold">DTU</span> */}
              <img src="dtu-logo.webp" alt="DTU-LOGO" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-foreground">DTU Studio</div>
              <div className="text-xs text-muted-foreground">Media Cell</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
