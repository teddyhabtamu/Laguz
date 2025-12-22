import React from 'react';
import { Anchor, ArrowUpRight, Phone, MapPin, Mail, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-900 pt-32 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 xl:grid-cols-12 gap-20 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-10">
            <Link to="/" className="flex items-center space-x-3 group">
              <Anchor className="w-10 h-10 text-cyan-600 group-hover:rotate-12 transition-transform" />
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-black tracking-tighter uppercase font-jakarta">LAGUZ</span>
                <span className="text-[10px] tracking-[0.6em] text-slate-400 font-black uppercase mt-1">LOGISTICS</span>
              </div>
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed italic max-w-sm uppercase tracking-widest leading-loose">
              Strength beyond borders. A leading Ethiopian partner in the global logistics network, specializing in maritime and industrial freight.
            </p>
          </div>

          {/* Corporate Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-cyan-600 font-jakarta">Corporate</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/why-laguz"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-600 transition-colors"
                >
                  Why Laguz
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-cyan-600 font-jakarta">Services</h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-600 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column - As Requested */}
          <div className="lg:col-span-2 xl:col-span-2 space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-cyan-600 font-jakarta italic">Regional Hub</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-slate-300 mt-0.5 group-hover:text-cyan-600 transition-colors" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-relaxed italic">
                  Bole Road, Flamingo, Tommy Tower,<br />
                  4th Floor, Room № 402
                </p>
              </div>
              <div className="flex items-start space-x-3 group">
                <Box className="w-4 h-4 text-slate-300 mt-0.5 group-hover:text-cyan-600 transition-colors" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 italic">
                  P.O.Box: 26609 Addis Ababa, Ethiopia.
                </p>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="w-4 h-4 text-slate-300 mt-0.5 group-hover:text-cyan-600 transition-colors" />
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 italic">
                    Mobile: +251 920 808080<br />
                    +251 921 929292 | +251 921 626262
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 italic border-t border-slate-50 pt-2">
                    Phone: +251 115 522423<br />
                    +251 115 518951
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / Uplink */}
          <div className="lg:col-span-2 xl:col-span-3 space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-cyan-600 font-jakarta">Uplink</h4>
            <form className="relative" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="STAKEHOLDER@MAIL" 
                className="w-full bg-slate-50 border-b border-slate-200 py-4 px-2 text-[10px] font-bold uppercase tracking-widest focus:border-cyan-600 outline-none transition-all placeholder:text-slate-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-600 transition-colors">
                <ArrowUpRight size={18} />
              </button>
            </form>
            <div className="flex space-x-6 pt-4">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 italic">SYSTEM_OPERATIONAL</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-[0.5em] text-slate-400">
          <p>© {new Date().getFullYear()} LAGUZ LOGISTICS // ETHIOPIAN MARITIME PARTNER</p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 mt-6 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-cyan-600 transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
            <div className="flex space-x-12">
              <a href="#" className="hover:text-cyan-600 transition-colors">Safety Protocol</a>
              <a href="#" className="hover:text-cyan-600 transition-colors">Legal Manifest</a>
              <a href="#" className="hover:text-cyan-600 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;