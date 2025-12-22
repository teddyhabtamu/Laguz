import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, Anchor, ChevronDown } from 'lucide-react';
import { SERVICES, STATS } from '../constants';
import ImageAnalyzer from '../components/ImageAnalyzer';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Full-Screen Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://plus.unsplash.com/premium_photo-1661963559074-9655a9404f1a?q=80&w=3928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVeluKUwgVxnTwFpF9b1IcPnmPXuP4kwSRp0_WgG_9g&s" 
            alt="Maritime Hero" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-white/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto reveal active">
            <h2 className="text-cyan-600 font-black uppercase tracking-[0.6em] text-[11px] mb-8 font-jakarta drop-shadow-sm">LAGUZ LOGISTICS</h2>
            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-10 font-jakarta">
              STRENGTH <br />
              <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">BEYOND BORDERS</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto mb-12 leading-relaxed font-medium bg-white/30 backdrop-blur-sm p-4 rounded-sm inline-block">
              A comprehensive ecosystem of shipping, maritime, and infrastructure services connecting the world to Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link to="/services" className="bg-slate-900 text-white px-12 py-5 font-black uppercase tracking-widest text-[11px] hover:bg-cyan-600 transition-all rounded-sm shadow-2xl">
                OUR SERVICES
              </Link>
              <Link to="/why-laguz" className="bg-white/90 text-slate-900 px-12 py-5 font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all rounded-sm border border-slate-200">
                WHY LAGUZ?
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50">
          <ChevronDown className="w-8 h-8 text-slate-900" />
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="reveal stagger-1">
                <div className="text-6xl font-black text-slate-900 mb-2 font-jakarta">
                  {stat.value}<span className="text-cyan-500">+</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Full Width Imagery) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8 reveal">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none uppercase font-jakarta">
                Core <br /><span className="text-cyan-500">Capabilities.</span>
              </h2>
            </div>
            <Link to="/services" className="text-xs font-black uppercase tracking-widest border-b-2 border-slate-900 pb-2 mb-2 hover:text-cyan-600 hover:border-cyan-600 transition-all">
              FULL SERVICES LIST
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {SERVICES.slice(0, 4).map((s, idx) => (
              <div key={s.id} className="reveal group bg-slate-50 p-2 rounded-sm border border-slate-100 hover:border-cyan-500 transition-all duration-700">
                <div className="relative h-[400px] overflow-hidden img-zoom-container mb-10">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="px-8 pb-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter font-jakarta">{s.title}</h3>
                    <div className="p-3 bg-white shadow-md text-cyan-500"><Anchor className="w-5 h-5" /></div>
                  </div>
                  <p className="text-slate-500 text-sm italic leading-relaxed mb-8 max-w-md">{s.description}</p>
                  <Link to={`/services/${s.id}`} className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-cyan-600 transition-colors">
                    READ MANIFEST <MoveRight className="ml-3 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Intelligence Block (Integrated) - COMMENTED OUT */}
      {/* <section className="py-40 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-16 text-center reveal mb-20">
          <span className="text-cyan-600 font-black uppercase tracking-[0.5em] text-[10px] block mb-6">DIGITAL TERMINAL</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter font-jakarta">Intelligent Cargo Analysis</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-10"></div>
        </div>
        <div className="reveal">
          <ImageAnalyzer />
        </div>
      </section> */}
    </div>
  );
};

export default Home;