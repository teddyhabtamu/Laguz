
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { MoveRight, Anchor, ShieldCheck, Globe, ChevronLeft } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* Full-Screen Hero Image */}
      <section className="relative h-[70vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover scale-105 animate-pulse-slow transition-transform duration-[10s] hover:scale-100"
          />
          <div className="absolute inset-0 bg-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <Link to="/services" className="inline-flex items-center space-x-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 md:mb-12 hover:text-cyan-600 transition-colors">
            <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
            <span>Back to all services</span>
          </Link>
          <div className="max-w-4xl reveal active">
            <h2 className="text-[#d4a017] font-black uppercase tracking-[0.5em] text-[10px] md:text-[12px] mb-6 md:mb-8 font-jakarta">LOGISTICS MANIFEST</h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] font-black text-slate-900 leading-[0.85] tracking-tighter uppercase mb-6 md:mb-10 font-jakarta">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? 'text-cyan-500 block' : 'block'}>
                  {word}
                </span>
              ))}
            </h1>
            <div className="w-24 h-1 md:w-32 md:h-2 bg-slate-900 mb-8 md:mb-12"></div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 md:py-40 container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="reveal">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-8 md:mb-12 font-jakarta">Operational Overview</h3>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-bold italic mb-8 md:mb-10">
              {service.description}
            </p>
            <div className="space-y-6 md:space-y-8 text-slate-500 text-base md:text-lg leading-relaxed italic">
              <p>
                Laguz Logistics provides world-class execution for {service.title}. Our deep integration into the global maritime network ensures that every manifest is handled with absolute precision, from the point of origin to the final terminal destination in Ethiopia.
              </p>
              <p>
                We specialize in navigating the complexities of international trade routes, leveraging our local expertise in the region to provide seamless transit and documentation management.
              </p>
            </div>
            
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
               <div className="p-6 md:p-8 bg-slate-50 border-l-4 border-[#d4a017]">
                  <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-cyan-600 mb-4 md:mb-6" />
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-3 md:mb-4">Compliance</h4>
                  <p className="text-[10px] md:text-[11px] text-slate-400 font-medium leading-relaxed italic">Strict adherence to ISO and maritime safety protocols.</p>
               </div>
               <div className="p-6 md:p-8 bg-slate-50 border-l-4 border-cyan-500">
                  <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#d4a017] mb-4 md:mb-6" />
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-3 md:mb-4">Network</h4>
                  <p className="text-[10px] md:text-[11px] text-slate-400 font-medium leading-relaxed italic">Connected to 120+ international ports globally.</p>
               </div>
            </div>
          </div>

          <div className="space-y-8 md:space-y-12 reveal stagger-2">
            <div className="aspect-[4/5] bg-slate-100 shadow-3xl img-zoom-container rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
               <img
                 src={service.image}
                 alt="Operational Visual"
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="bg-slate-900 p-8 md:p-12 text-white shadow-2xl">
               <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-6 md:mb-8 font-jakarta">Key Advantages</h4>
               <ul className="space-y-4 md:space-y-6">
                 {['24/7 Digital Tracking', 'End-to-End Asset Control', 'Disaster Recovery Protocols', 'Customized Route Engineering'].map((item, idx) => (
                   <li key={idx} className="flex items-center space-x-3 md:space-x-4 group">
                     <span className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform"></span>
                     <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">{item}</span>
                   </li>
                 ))}
               </ul>
               <Link to="/contact" className="mt-8 md:mt-12 inline-flex items-center space-x-3 md:space-x-4 text-cyan-400 font-black uppercase tracking-widest text-[9px] md:text-[10px] border-b border-cyan-400 pb-2 hover:text-white hover:border-white transition-all">
                 <span>REQUEST MANIFEST</span>
                 <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell Other Services */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 mb-16">
           <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-4">EXPLORE OTHER ASSETS</h4>
        </div>
        <div className="flex space-x-12 px-6 lg:px-16">
           {SERVICES.filter(s => s.id !== serviceId).slice(0, 4).map(s => (
             <Link key={s.id} to={`/services/${s.id}`} className="flex-shrink-0 w-80 group">
                <div className="aspect-video overflow-hidden mb-6 bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700">
                   <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <h5 className="text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-cyan-600 transition-colors">{s.title}</h5>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
