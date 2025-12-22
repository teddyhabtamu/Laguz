import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import { HIGHLIGHTS } from './constants';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple Careers Placeholder
const Careers = () => (
  <div className="min-h-screen bg-white pt-60 container mx-auto px-6 lg:px-16">
    <h1 className="text-7xl font-black text-slate-900 uppercase tracking-tighter mb-10 font-jakarta">Join the <br /><span className="text-cyan-500">Manifest.</span></h1>
    <p className="text-xl text-slate-500 italic leading-relaxed max-w-2xl">We are always looking for maritime experts and logistical engineers to join our growing hub in Addis Ababa.</p>
    <div className="mt-20 p-10 bg-slate-50 border border-slate-100">
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Status</p>
      <h3 className="text-2xl font-black text-slate-900 mt-4 uppercase font-jakarta italic">No active openings.</h3>
    </div>
  </div>
);

// Full Why Laguz Page
const WhyLaguz = () => (
  <div className="min-h-screen bg-white pt-60 pb-40 container mx-auto px-6 lg:px-16">
    <div className="reveal active">
      <span className="text-cyan-600 font-black uppercase tracking-widest text-[10px] block mb-6">WHY LAGUZ</span>
      <h1 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter mb-20 font-jakarta">Reliability in <br /><span className="text-cyan-500">Every Manifest.</span></h1>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-24 items-start">
      <div className="space-y-16 reveal active stagger-1">
        <div className="space-y-6">
          <p className="text-2xl text-slate-700 leading-relaxed font-bold italic">Independence, Expertise, and Unmatched Local Knowledge.</p>
          <p className="text-slate-500 text-lg italic leading-relaxed">Unlike global conglomerates, Laguz provides focused, personalized attention to your Ethiopian logistics needs, leveraging deep-rooted connections and professional integrity.</p>
        </div>
        
        <div className="space-y-10">
          {HIGHLIGHTS.map((h, i) => (
            <div key={i} className="flex items-start space-x-6">
              <div className="p-4 bg-slate-50 shadow-sm rounded-full text-cyan-500">
                <h.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2 font-jakarta">{h.title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed italic">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="reveal active stagger-2">
        <div className="img-zoom-container shadow-3xl rounded-sm border border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZ28lMjBzaGlwfGVufDB8fDB8fHww" 
            alt="Laguz Infrastructure Focus" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
          />
        </div>
        <div className="mt-12 p-10 bg-slate-900 text-white rounded-sm">
           <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic font-jakarta">Stakeholder Commitment</h4>
           <p className="text-xs text-slate-400 leading-relaxed tracking-widest uppercase italic">Every project is overseen directly by our active shareholders, ensuring zero compromise on the manifest quality.</p>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-cyan-100 selection:text-cyan-900">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Portfolio />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/why-laguz" element={<WhyLaguz />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;