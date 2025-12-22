import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, MoveRight, Clock, Anchor, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Ocean Freight');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceOptions = [
    'Ocean Freight',
    'Customs Clearance',
    'Heavy Project Logistics',
    'Warehousing'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2400&auto=format&fit=crop"
            alt="Logistics Harbor"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-16 md:pt-20">
          <div className="max-w-4xl reveal active">
            <span className="text-[#ff8c12] font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] block mb-6 md:mb-8">GLOBAL NETWORK</span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8 font-jakarta">
              Inquire <br /><span className="text-[#ff8c12]">Directly.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-40 container mx-auto px-6 lg:px-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          {/* Info */}
          <div className="lg:col-span-5 space-y-16 md:space-y-24 reveal">
            <div className="space-y-12 md:space-y-16">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 font-jakarta">Regional HQ</h3>
              <div className="space-y-8 md:space-y-12">
                <div className="flex items-start space-x-4 md:space-x-8">
                  <div className="p-3 md:p-4 bg-slate-50 rounded-full text-[#ff8c12] shadow-sm"><MapPin className="w-5 h-5 md:w-6 md:h-6" /></div>
                  <div>
                    <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2 md:mb-4 italic">Addis Ababa, Ethiopia</h5>
                    <p className="text-lg md:text-xl font-bold text-slate-900 italic leading-relaxed uppercase font-jakarta">
                      Bole Road, African Ave,<br />Dembel City Center, New Building,<br />4th Floor, Office FF-001.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 md:space-x-8">
                  <div className="p-3 md:p-4 bg-slate-50 rounded-full text-[#ff8c12] shadow-sm"><Phone className="w-5 h-5 md:w-6 md:h-6" /></div>
                  <div>
                    <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2 md:mb-4 italic">Communication Uplink</h5>
                    <p className="text-lg md:text-xl font-bold text-slate-900 italic uppercase font-jakarta">+251 115 522423</p>
                    <p className="text-lg md:text-xl font-bold text-slate-900 italic uppercase font-jakarta">+251 920 808080</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 md:space-x-8">
                  <div className="p-3 md:p-4 bg-slate-50 rounded-full text-[#ff8c12] shadow-sm"><Mail className="w-5 h-5 md:w-6 md:h-6" /></div>
                  <div>
                    <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2 md:mb-4 italic">Official Manifest</h5>
                    <p className="text-lg md:text-xl font-bold text-slate-900 italic uppercase font-jakarta text-[#ff8c12]">info@laguzlogistics.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-square bg-slate-50 grayscale overflow-hidden border border-slate-100 shadow-2xl relative img-zoom-container">
               <img src="https://swifterralogistics.com/wp-content/uploads/2023/12/track-a-ravel-section-2.jpeg" alt="Terminal" className="w-full h-full object-cover opacity-30" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Anchor className="w-16 h-16 md:w-20 md:h-20 text-slate-100" />
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-2 border border-slate-100 shadow-3xl reveal stagger-1">
             <div className="bg-slate-50 p-8 md:p-12 lg:p-20 rounded-sm">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-12 md:mb-16 text-slate-900 font-jakarta">Project Brief</h3>
                <form className="space-y-8 md:space-y-12" onSubmit={e => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div className="border-b border-slate-300 pb-3 md:pb-4 focus-within:border-[#ff8c12] transition-colors">
                         <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-2 md:mb-3">Principal Name</label>
                         <input type="text" className="bg-transparent w-full outline-none font-bold italic text-slate-900 uppercase font-jakarta text-sm md:text-base" placeholder="John Doe" />
                      </div>
                      <div className="border-b border-slate-300 pb-3 md:pb-4 focus-within:border-[#ff8c12] transition-colors">
                         <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-2 md:mb-3">Corporate Email</label>
                         <input type="email" className="bg-transparent w-full outline-none font-bold italic text-slate-900 uppercase font-jakarta text-sm md:text-base" placeholder="Email@Corporate.com" />
                      </div>
                   </div>
                   <div ref={dropdownRef} className="border-b border-slate-300 pb-3 md:pb-4 focus-within:border-[#ff8c12] transition-colors relative">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-2 md:mb-3">Service Sector</label>
                      <div
                        className="bg-transparent w-full outline-none font-bold italic text-slate-900 uppercase cursor-pointer font-jakarta text-sm md:text-base flex items-center justify-between"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>{selectedService}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </div>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 shadow-lg z-50 max-h-48 overflow-y-auto">
                          {serviceOptions.map((option, index) => (
                            <div
                              key={option}
                              className="px-4 py-3 font-bold italic text-slate-900 uppercase cursor-pointer hover:bg-slate-50 transition-colors font-jakarta text-sm md:text-base border-b border-slate-100 last:border-b-0"
                              onClick={() => {
                                setSelectedService(option);
                                setIsDropdownOpen(false);
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                   </div>
                   <div className="border-b border-slate-300 pb-3 md:pb-4 focus-within:border-[#ff8c12] transition-colors">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-2 md:mb-3">Logistics Requirements</label>
                      <textarea rows={4} className="bg-transparent w-full outline-none font-bold italic text-slate-900 resize-none uppercase text-xs md:text-sm leading-relaxed font-jakarta" placeholder="Specify tonnage, origin, and cargo type..."></textarea>
                   </div>
                   <button className="bg-slate-900 text-white px-8 md:px-16 py-4 md:py-7 font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] hover:bg-[#ff8c12] transition-all flex items-center group w-full justify-center shadow-xl">
                     TRANSMIT BRIEFING <MoveRight className="ml-3 md:ml-5 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-3 transition-transform" />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-40 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6 md:mb-10 font-jakarta">
              Find Our Location
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Visit our headquarters in Addis Ababa, Ethiopia. We're strategically located to serve the East African logistics corridor.
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <div className="aspect-[16/9] md:aspect-[21/9] bg-white shadow-2xl rounded-lg overflow-hidden border border-slate-200">
              <iframe
                src="https://maps.google.com/maps?q=Bole%20Road%20African%20Ave%20Dembel%20City%20Center%20Addis%20Ababa%20Ethiopia&hl=en&z=17&output=embed&iwloc=near&markers=color:red%7Clabel:L%7C9.0054,38.7636"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Laguz Logistics Location - Bole Road, African Ave, Dembel City Center, Addis Ababa, Ethiopia"
              ></iframe>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-white px-6 py-4 rounded-lg shadow-lg border border-slate-200">
              <div className="text-left">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Address</p>
                <p className="text-slate-900 font-medium">Bole Road, African Ave</p>
                <p className="text-slate-900 font-medium">Dembel City Center, New Building</p>
                <p className="text-slate-900 font-medium">4th Floor, Office FF-001</p>
                <p className="text-slate-600 text-sm">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;