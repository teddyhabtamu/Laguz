
import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { MoveRight, Anchor, ShieldCheck } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const serviceId = params.get('id');
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (serviceId && serviceRefs.current[serviceId]) {
      serviceRefs.current[serviceId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [serviceId]);

  return (
    <div className="bg-white">
      {/* Services Hero */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549194388-f61be84a6e9e?q=80&w=2400"
            alt="Maritime Assets"
            className="w-full h-full object-cover opacity-10 grayscale scale-110"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-16 md:pt-20">
          <div className="max-w-4xl reveal active">
            <h2 className="text-[#ff8c12] font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] block mb-6 md:mb-8 font-jakarta">CAPABILITIES & ASSETS</h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8 font-jakarta">
              Services <br /><span className="text-[#ff8c12]">Manifest.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-20 md:py-40 container mx-auto px-6 lg:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-48 gap-x-12 md:gap-x-24">
          {SERVICES.map((s, i) => (
            <div 
              key={s.id} 
              ref={(el) => (serviceRefs.current[s.id] = el)}
              className="reveal group scroll-mt-40"
            >
              <div className="aspect-[16/10] overflow-hidden mb-8 md:mb-12 shadow-2xl bg-slate-100 relative img-zoom-container rounded-sm border border-slate-100">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute top-4 left-4 md:top-10 md:left-10 text-white mix-blend-difference">
                   <span className="text-6xl md:text-8xl font-black opacity-20">0{i + 1}</span>
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="h-0.5 w-12 md:w-20 bg-[#ff8c12] group-hover:w-20 md:group-hover:w-32 transition-all duration-700"></div>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase italic font-jakarta group-hover:text-[#ff8c12] transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-slate-500 italic leading-relaxed max-w-xl font-medium">
                  {s.description}
                </p>
                <div className="pt-6 md:pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                   <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 italic">LOGISTICS SECTOR: MARITIME & FREIGHT</span>
                   <Link to={`/services/${s.id}`} className="self-start sm:self-auto p-3 md:p-4 bg-slate-900 text-white rounded-full group-hover:bg-[#ff8c12] transition-all cursor-pointer">
                    <MoveRight className="w-5 h-5 md:w-6 md:h-6" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Infrastructure Spotlight */}
      <section className="py-20 md:py-40 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="reveal">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8 md:mb-12 font-jakarta">
                 Specialized <br /><span className="text-[#ff8c12]">Industrial <br />Infrastructure.</span>
               </h2>
               <p className="text-lg md:text-2xl text-slate-300 italic leading-relaxed mb-8 md:mb-12 font-medium">
                 From heavy-lift energy turbines to multimodal mining equipment logistics across East Africa.
               </p>
               <ul className="space-y-4 md:space-y-6">
                 {['Regional Feasibility Studies', 'Integrated Customs Brokerage', 'Route Risk Mitigation'].map((item, idx) => (
                   <li key={idx} className="flex items-center space-x-4 md:space-x-6 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#ff8c12]">
                     <span className="w-2 h-2 md:w-3 md:h-3 bg-[#ff8c12] rounded-full"></span>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="reveal stagger-2 relative p-4 border border-white/10 bg-white/5 shadow-3xl img-zoom-container overflow-hidden rounded-sm">
               <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Infrastructure" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
