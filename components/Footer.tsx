import React from 'react';
import { Anchor, ArrowUpRight, Phone, MapPin, Mail, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-900 pt-16 md:pt-32 pb-8 md:pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-12 gap-12 md:gap-16 lg:gap-20 mb-16 md:mb-32">
          {/* Brand Column */}
          <div className="md:col-span-1 lg:col-span-3 xl:col-span-3 space-y-6 md:space-y-10">
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
              <Anchor className="w-8 h-8 md:w-10 md:h-10 text-[#ff8c12] group-hover:rotate-12 transition-transform" />
              <div className="flex flex-col leading-none">
                <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase font-jakarta">LAGUZ</span>
                <span className="text-[9px] md:text-[10px] tracking-[0.6em] text-slate-400 font-black uppercase mt-1">LOGISTICS</span>
              </div>
            </Link>
            <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed italic max-w-sm uppercase tracking-widest leading-loose">
              Strength beyond borders. A leading Ethiopian partner in the global logistics network, specializing in maritime and industrial freight.
            </p>
          </div>

          {/* Corporate Links */}
          <div className="md:col-span-1 lg:col-span-2 space-y-6 md:space-y-8">
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-[#ff8c12] font-jakarta">Corporate</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#ff8c12] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#ff8c12] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/why-laguz"
                  className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#ff8c12] transition-colors"
                >
                  Why Laguz
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#ff8c12] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#ff8c12] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-1 lg:col-span-2 xl:col-span-2 space-y-6 md:space-y-8">
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-[#ff8c12] font-jakarta">Services</h4>
            <ul className="space-y-3 md:space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#ff8c12] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column - As Requested */}
          <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 space-y-6 md:space-y-8">
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-[#ff8c12] font-jakarta italic">Regional Hub</h4>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-slate-300 mt-0.5 group-hover:text-[#ff8c12] transition-colors flex-shrink-0" />
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-relaxed italic">
                  Bole Road, Flamingo, Tommy Tower,<br />
                  4th Floor, Room № 402
                </p>
              </div>
              <div className="flex items-start space-x-3 group">
                <Box className="w-4 h-4 text-slate-300 mt-0.5 group-hover:text-[#ff8c12] transition-colors flex-shrink-0" />
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 italic">
                  P.O.Box: 26609 Addis Ababa, Ethiopia.
                </p>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="w-4 h-4 text-slate-300 mt-0.5 group-hover:text-[#ff8c12] transition-colors flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 italic">
                    Mobile: +251 920 808080<br />
                    +251 921 929292 | +251 921 626262
                  </p>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 italic border-t border-slate-50 pt-2">
                    Phone: +251 115 522423<br />
                    +251 115 518951
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / Uplink */}
          <div className="md:col-span-2 lg:col-span-2 xl:col-span-3 space-y-6 md:space-y-8">
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-[#ff8c12] font-jakarta">Uplink</h4>
            <form className="relative" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="STAKEHOLDER@MAIL"
                className="w-full bg-slate-50 border-b border-slate-200 py-3 md:py-4 px-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest focus:border-[#ff8c12] outline-none transition-all placeholder:text-slate-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#ff8c12] transition-colors">
                <ArrowUpRight size={16} className="md:w-5 md:h-5" />
              </button>
            </form>
            <div className="flex space-x-4 md:space-x-6 pt-4">
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 italic">SYSTEM_OPERATIONAL</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] text-slate-400">
          <p className="text-center md:text-left">© {new Date().getFullYear()} LAGUZ LOGISTICS // ETHIOPIAN MARITIME PARTNER</p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 mt-6 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#ff8c12] transition-colors cursor-pointer text-[9px] md:text-[10px]"
            >
              Back to Top ↑
            </button>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <a href="#" className="hover:text-[#ff8c12] transition-colors">Safety Protocol</a>
              <a href="#" className="hover:text-[#ff8c12] transition-colors">Legal Manifest</a>
              <a href="#" className="hover:text-[#ff8c12] transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;