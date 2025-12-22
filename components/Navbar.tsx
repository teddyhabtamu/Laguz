
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor, MoveRight, ChevronDown } from 'lucide-react';
import { SERVICES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restore scrolling and scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'WHY LAGUZ', path: '/why-laguz' },
    { name: 'ABOUT US', path: '/about' },
  ];

  const themeColor = 'text-slate-900';
  const accentColor = 'text-cyan-600';
  const yellowAccent = 'text-[#0000]'; // Refined gold for white background readability

  return (
    <nav className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 ${scrolled ? 'nav-glass py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className={`transition-all duration-300 ${accentColor} group-hover:rotate-12`}>
            <Anchor className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase font-jakarta ${themeColor}`}>LAGUZ</span>
            <span className={`text-[8px] md:text-[9px] tracking-[0.6em] font-black uppercase text-slate-400`}>LOGISTICS</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-black tracking-[0.2em] transition-all hover:text-cyan-600 font-jakarta ${
                location.pathname === link.path ? 'text-cyan-600' : themeColor
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown - White Theme */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center space-x-2 text-[10px] font-black tracking-[0.2em] transition-all hover:text-cyan-600 font-jakarta ${
                location.pathname.startsWith('/services') ? 'text-cyan-600' : themeColor
              }`}
            >
              <span>SERVICES</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div 
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute top-full left-0 mt-4 w-72 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 rounded-sm py-4 animate-in fade-in slide-in-from-top-2 duration-300"
              >
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-8 py-3.5 text-[10px] font-black uppercase tracking-widest text-black hover:bg-slate-50 hover:pl-10 transition-all border-l-2 border-transparent hover:border-cyan-500"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            key="CAREERS"
            to="/careers"
            className={`text-[10px] font-black tracking-[0.2em] transition-all hover:text-cyan-600 font-jakarta ${
              location.pathname === '/careers' ? 'text-cyan-600' : themeColor
            }`}
          >
            CAREERS
          </Link>

          <Link
            to="/contact"
            className="group flex items-center space-x-3 bg-slate-900 text-white px-8 py-3.5 text-[10px] font-black tracking-widest transition-all rounded-sm hover:bg-cyan-600 shadow-xl shadow-slate-200"
          >
            <span>CONTACT US</span>
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 ${themeColor}`}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[100] flex flex-col justify-start items-center space-y-8 animate-in fade-in duration-300 overflow-y-auto pt-24 pb-12">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-slate-900"><X size={32} /></button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black tracking-tighter text-slate-900 hover:text-cyan-600 font-jakarta"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col items-center space-y-6 w-full px-12">
            <span className="text-[10px] font-black text-slate-300 tracking-[0.5em] mb-4 uppercase">SERVICES</span>
            <div className="grid grid-cols-1 gap-4 text-center">
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-[#d4a017] hover:text-cyan-600 uppercase font-jakarta tracking-widest"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black tracking-tighter text-slate-900 hover:text-cyan-600 font-jakarta"
          >
            CAREERS
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black tracking-tighter text-cyan-600 font-jakarta pt-8"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
