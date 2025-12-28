import React from 'react';
import { Phone, MapPin, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-900 pt-16 md:pt-24 pb-8 md:pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-12 gap-12 md:gap-16 lg:gap-20 mb-12 md:mb-20">
          {/* Brand Column */}
          <div className="md:col-span-1 lg:col-span-3 xl:col-span-3 space-y-6 md:space-y-8">
            <Link to="/" className="flex items-center group">
              <img
                src="/images/logo.png"
                alt="LAGUZ LOGISTICS"
                className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed italic max-w-sm">
              Strength beyond borders. A leading Ethiopian partner in the global logistics network, specializing in maritime and industrial freight.
            </p>
          </div>

          {/* Corporate Links */}
          <div className="md:col-span-1 lg:col-span-2 space-y-5 md:space-y-6">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#ff8c12] font-jakarta">Corporate</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-700 hover:text-[#ff8c12] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-700 hover:text-[#ff8c12] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/why-laguz"
                  className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-700 hover:text-[#ff8c12] transition-colors"
                >
                  Why Laguz
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-700 hover:text-[#ff8c12] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-700 hover:text-[#ff8c12] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-1 lg:col-span-2 xl:col-span-2 space-y-5 md:space-y-6">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#ff8c12] font-jakarta">Services</h4>
            <ul className="space-y-3 md:space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-700 hover:text-[#ff8c12] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-2 lg:col-span-5 xl:col-span-5 space-y-5 md:space-y-6">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#ff8c12] font-jakarta italic">Regional Hub</h4>
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 group-hover:text-[#ff8c12] transition-colors flex-shrink-0" />
                <p className="text-sm md:text-base font-medium text-slate-700 leading-relaxed">
                  Bole Road, African Ave, Dembel City Center,<br />
                  New Building, 4th Floor, Office FF-001
                </p>
              </div>
              <div className="flex items-start space-x-3 group">
                <Box className="w-5 h-5 text-slate-400 mt-0.5 group-hover:text-[#ff8c12] transition-colors flex-shrink-0" />
                <p className="text-sm md:text-base font-medium text-slate-700">
                  P.O.Box: 26609 Addis Ababa, Ethiopia.
                </p>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-slate-400 mt-0.5 group-hover:text-[#ff8c12] transition-colors flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-sm md:text-base font-medium text-slate-700">
                    Mobile: +251 920 808080<br />
                    +251 921 929292 | +251 921 626262
                  </p>
                  <p className="text-sm md:text-base font-medium text-slate-700 border-t border-slate-200 pt-2">
                    Phone: +251 115 522423<br />
                    +251 115 518951
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-slate-600 text-center md:text-left">
            © {new Date().getFullYear()} LAGUZ LOGISTICS // ETHIOPIAN MARITIME PARTNER
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs md:text-sm font-semibold uppercase tracking-wide text-slate-600 hover:text-[#ff8c12] transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-slate-600 hover:text-[#ff8c12] transition-colors">Safety Protocol</a>
              <a href="#" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-slate-600 hover:text-[#ff8c12] transition-colors">Legal Manifest</a>
              <a href="#" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-slate-600 hover:text-[#ff8c12] transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;