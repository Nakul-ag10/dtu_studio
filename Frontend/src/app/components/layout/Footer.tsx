import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="mb-4">DTU Studio</h3>
            <p className="text-sm text-gray-300">
              The official Media Cell of Delhi Technological University.
              Capturing moments, amplifying voices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/press-coverage" className="text-sm text-gray-300 hover:text-white transition-colors">
                Press Coverage
              </Link>
              <Link to="/team" className="text-sm text-gray-300 hover:text-white transition-colors">
                Team
              </Link>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">studio@dtu.ac.in</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Delhi Technological University, Shahbad Daulatpur, Delhi - 110042
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <p className="text-sm text-gray-300 mb-4">
              Stay connected with DTU Studio on social media
            </p>
            <Link
              to="/social-media"
              className="inline-block px-4 py-2 bg-primary rounded hover:bg-primary/90 transition-colors text-sm"
            >
              View Social Links
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} DTU Studio - Media Cell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
