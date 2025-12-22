
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
      <section className="relative h-[65vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549194388-f61be84a6e9e?q=80&w=2400" 
            alt="Maritime Assets" 
            className="w-full h-full object-cover opacity-10 grayscale scale-110"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-20">
          <div className="max-w-4xl reveal active">
            <h2 className="text-cyan-600 font-black uppercase tracking-[0.4em] text-[11px] block mb-8 font-jakarta">CAPABILITIES & ASSETS</h2>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-8 font-jakarta">
              Services <br /><span className="text-cyan-500">Manifest.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-40 container mx-auto px-6 lg:px-16 bg-white">
        <div className="grid lg:grid-cols-2 gap-y-48 gap-x-24">
          {SERVICES.map((s, i) => (
            <div 
              key={s.id} 
              ref={(el) => (serviceRefs.current[s.id] = el)}
              className="reveal group scroll-mt-40"
            >
              <div className="aspect-[16/10] overflow-hidden mb-12 shadow-2xl bg-slate-100 relative img-zoom-container rounded-sm border border-slate-100">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute top-10 left-10 text-white mix-blend-difference">
                   <span className="text-8xl font-black opacity-20">0{i + 1}</span>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="h-0.5 w-20 bg-cyan-500 group-hover:w-32 transition-all duration-700"></div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic font-jakarta group-hover:text-cyan-600 transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="text-xl text-slate-500 italic leading-relaxed max-w-xl font-medium">
                  {s.description}
                </p>
                <div className="pt-8 border-t border-slate-100 flex justify-between items-center">
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">LOGISTICS SECTOR: MARITIME & FREIGHT</span>
                   <Link to={`/services/${s.id}`} className="p-4 bg-slate-900 text-white rounded-full group-hover:bg-cyan-600 transition-all cursor-pointer">
                    <MoveRight className="w-6 h-6" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Infrastructure Spotlight */}
      <section className="py-40 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
               <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-12 font-jakarta">
                 Specialized <br /><span className="text-cyan-400">Industrial <br />Infrastructure.</span>
               </h2>
               <p className="text-2xl text-slate-300 italic leading-relaxed mb-12 font-medium">
                 From heavy-lift energy turbines to multimodal mining equipment logistics across East Africa.
               </p>
               <ul className="space-y-6">
                 {['Regional Feasibility Studies', 'Integrated Customs Brokerage', 'Route Risk Mitigation'].map((item, idx) => (
                   <li key={idx} className="flex items-center space-x-6 text-[11px] font-black uppercase tracking-widest text-cyan-400">
                     <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
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
