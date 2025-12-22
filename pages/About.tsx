
import React from 'react';
import { Users, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2400&auto=format&fit=crop"
            alt="Corporate Industrial"
            className="w-full h-full object-cover grayscale opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-16 md:pt-20">
          <div className="max-w-4xl reveal active">
            <span className="text-cyan-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] block mb-6 md:mb-8">IDENTITY & VISION</span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-6 md:mb-10 font-jakarta">
              Pioneering <br />Ethical <span className="text-cyan-500">Flow.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About Laguz */}
      <section className="py-20 md:py-40 container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-8 md:mb-10 font-jakarta">About Laguz</h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-bold italic">
                Laguz is a robust professional company providing excellent services in the fields of shipping, logistics and project logistics and supply management.
              </p>
              <p className="text-slate-500 leading-relaxed italic text-base md:text-lg">
                It aspires to be one of the leading and innovative companies that provide custom designed logistics and shipping solutions to clients in the manufacturing, oil & gas, energy and mining as well as service sector, in various locations including remote areas.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 reveal stagger-2">
            <div className="img-zoom-container shadow-2xl">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800" className="w-full h-64 md:h-96 object-cover grayscale" alt="Team" />
            </div>
            <div className="img-zoom-container shadow-2xl mt-8 md:mt-16">
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800" className="w-full h-64 md:h-96 object-cover grayscale" alt="Office" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-40 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center reveal mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-8 md:mb-10 font-jakarta">How We Work</h2>
            <div className="w-12 h-1 md:w-16 bg-cyan-400 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto reveal">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-bold italic mb-6 md:mb-8 text-center">
              We promote Laguz to build its reputation on efficient service delivery and explore opportunities whereby we can test the limits of satisfying clients' expectations.
            </p>
            <p className="text-slate-500 leading-relaxed italic text-base md:text-lg mb-6 md:mb-8">
              This company ethos is supported by Laguz's track record in listening to and investing in innovative client solutions. Laguz seeks on-going and meaningful relationships with its clients and major supplier partners, and it is through this approach that the company desires to achieve the level of understanding, openness and collaboration necessary to develop the right solutions to the most challenging issues that could be faced.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Management */}
      <section className="py-20 md:py-40 container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-8 md:mb-10 font-jakarta">Mission & Goal</h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-bold italic">
                Our aim to be the long-term partner of choice for project freight forwarding and shipping in the manufacturing, oil & gas, energy and mining industries.
              </p>
              <p className="text-slate-500 leading-relaxed italic text-base md:text-lg">
                We provide cutting edge solutions tailored to specific client needs and foster mutual and unwavering success with our esteemed clients. It is Laguz's goal to continue expansion, with a focus on regions with higher economic growth rate throughout the world, within the coming 5-7 years.
              </p>
            </div>
          </div>

          <div className="reveal stagger-1">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-8 md:mb-10 font-jakarta">Management Team</h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-bold italic">
                Laguz is uniquely passionate about remaining an independent and privately-owned company.
              </p>
              <p className="text-slate-500 leading-relaxed italic text-base md:text-lg">
                Since its foundation, the shareholders have always been directly and actively involved in the managing and directing the company. We believe this approach is the cornerstone of our business, that derives the commitment and sense of ownership which is shared by the management and employees in delivering the services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
