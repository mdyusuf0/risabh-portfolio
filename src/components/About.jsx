import React from 'react';
import rishabAvatar from '../assets/rishab-avatar.png';
import { aboutContent, personalInfo } from '../data/portfolioData';

// Custom Official Tech Badges
const ReactBadge = () => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0f172a] border-2 border-[#61DAFB] rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(97,218,251,0.25)] group-hover:scale-110 transition-transform duration-300">
      <svg className="w-9 h-9 text-[#61DAFB] animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    </div>
    <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">React.js</span>
  </div>
);

const NodeBadge = () => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#051c0a] border-2 border-[#68A063] rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(104,160,99,0.25)] group-hover:scale-110 transition-transform duration-300">
      <span className="text-[#68A063] text-2xl md:text-3xl font-black font-mono select-none">JS</span>
    </div>
    <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">Node.js</span>
  </div>
);

const JavaBadge = () => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#251000] border-2 border-[#ED8B00] rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(237,139,0,0.25)] group-hover:scale-110 transition-transform duration-300">
      <span className="text-[#ED8B00] text-2xl md:text-3xl font-black font-serif select-none">☕</span>
    </div>
    <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">Java</span>
  </div>
);

const MongoBadge = () => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#021f10] border-2 border-[#47A248] rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(71,162,72,0.25)] group-hover:scale-110 transition-transform duration-300">
      <span className="text-[#47A248] text-2xl md:text-3xl font-black select-none">🍃</span>
    </div>
    <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">MongoDB</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-28 md:pt-24 pb-44 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 lg:gap-20 items-start">
        {/* Left Side: Hanging Lanyard ID Badge with Rishab's photo */}
        <div className="flex flex-col items-center w-full md:w-[360px] shrink-0 mt-6 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-20 md:-top-32 left-1/2 w-2.5 md:w-3.5 h-24 md:h-40 bg-black transform -translate-x-1/2 shadow-inner z-0" />
            {/* Lanyard metallic clip */}
            <div className="absolute -top-4 md:-top-6 left-1/2 w-4 md:w-6 h-8 md:h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.4)]" />

            {/* ID Badge Card */}
            <div className="bg-gray-950 w-full max-w-[240px] xs:max-w-[260px] md:max-w-[290px] rounded-3xl p-3.5 shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Top slot cutout hole */}
              <div className="absolute -top-2 md:-top-3 left-1/2 w-12 md:w-16 h-4 md:h-6 bg-gray-950 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-7 h-1.5 bg-black/40 rounded-full shadow-inner" />
              </div>

              {/* Photo Container */}
              <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900 border border-white/10 relative group">
                <img
                  src={rishabAvatar}
                  alt={`${personalInfo.name} — Full-Stack Developer`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-center">
                  <p className="text-white text-xs font-black tracking-wider uppercase">{personalInfo.brandName}</p>
                  <p className="text-red-400 font-mono text-[10px] font-bold">Chandigarh University</p>
                </div>
              </div>

              {/* Badge Footer Info */}
              <div className="mt-3 px-2 flex justify-between items-center text-[10px] font-mono text-white/60">
                <span>ID: ENG-2026</span>
                <span className="text-emerald-400">● Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <div className="inline-block px-3 py-1 rounded-full bg-black/30 border border-white/20 text-xs font-bold uppercase tracking-widest text-white mb-3">
            About the Developer
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-2 tracking-tight">
            {aboutContent.heading}
          </h2>

          <p className="font-cursive text-2xl md:text-3xl text-red-100 font-semibold mb-6">
            "{aboutContent.cursiveAccent}"
          </p>

          <p
            className="text-base md:text-lg font-medium mb-8 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Academic & Professional Metric Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {aboutContent.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-black/25 border border-white/15 rounded-xl p-3.5 backdrop-blur-sm hover:bg-black/35 transition-colors"
              >
                <div className="text-white text-lg md:text-xl font-black">{stat.value}</div>
                <div className="text-red-100 text-[11px] font-bold uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Key Tech Badges Row */}
          <div className="pt-2">
            <span className="text-xs font-mono font-bold text-black uppercase tracking-wider block mb-4">
              Core Technical Stacks:
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl">
                <ReactBadge />
              </div>
              <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl">
                <NodeBadge />
              </div>
              <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl">
                <JavaBadge />
              </div>
              <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl">
                <MongoBadge />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom transitioning smoothly to dark theme */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#080808]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative background stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-25 animate-pulse pointer-events-none">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
      <div className="absolute bottom-36 left-6 md:left-24 text-black opacity-25 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
