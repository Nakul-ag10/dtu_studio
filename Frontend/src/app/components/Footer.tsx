import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded flex items-center justify-center">
                <img src="dtu-logo.webp" alt="LOGO" />
              </div>
              <div>
                <div className="text-lg font-semibold">DTU Studio</div>
                <div className="text-sm text-gray-400">Media Cell</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Capturing moments and amplifying voices at Delhi Technological University
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/month-in-pictures" className="text-gray-400 hover:text-white transition-colors">
                  Month in Pictures
                </Link>
              </li>
              <li>
                <Link to="/press-coverage" className="text-gray-400 hover:text-white transition-colors">
                  Press Coverage
                </Link>
              </li>
              <li>
                <Link to="/press-release" className="text-gray-400 hover:text-white transition-colors">
                  Press Release
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Delhi Technological University, Shahbad Daulatpur, Main Bawana Road, Delhi-110042</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="flex-shrink-0" />
                <span>mediacell@dtu.ac.in</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91-XXXX-XXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Delhi Technological University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
