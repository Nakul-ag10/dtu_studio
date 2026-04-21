import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-auto">

      {/* ── Main footer content ── */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                <img src="/dtu-logo.webp" alt="DTU Logo" className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold">DTU Studio</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wide">Media Cell</div>
              </div>
            </div>
            <div className="w-8 h-[3px] bg-primary rounded mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Capturing moments and amplifying voices at Delhi Technological University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/month-in-pictures", label: "Month in Pictures" },
                { to: "/press-coverage", label: "Press Coverage" },
                { to: "/press-release", label: "Press Release" },
                { to: "/team", label: "Our Team" },
                { to: "/services", label: "Studio Services" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span className="leading-relaxed">
                  Delhi Technological University, Shahbad Daulatpur,<br />
                  Main Bawana Road, Delhi — 110042
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={15} className="shrink-0 text-primary" />
                <a href="mailto:mediacell@dtu.ac.in" className="hover:text-white transition-colors">
                  pro@dtu.ac.in
                </a>
              </li>
              
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="bg-primary/20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] h-9 flex items-center justify-between">
          <p className="text-[11px] text-white/80 font-medium">
            © 2026 Delhi Technological University. All rights reserved.
          </p>
          <a
            href="https://dtu.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-white/70 hover:text-white transition-colors font-medium"
          >
            dtu.ac.in ↗
          </a>
        </div>
      </div>

    </footer>
  );
}