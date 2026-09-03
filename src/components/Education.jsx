import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-[#060606] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-1.5 text-xs text-white/70 font-bold mb-4 shadow-sm bg-white/5 backdrop-blur-sm">
            <span>🎓</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-3">
            Education & Coursework
          </h2>
          <p className="font-cursive text-2xl md:text-3xl text-red-400 font-semibold mb-3">
            Grounded in core Computer Science fundamentals
          </p>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Rigorous undergraduate training at Chandigarh University paired with foundational schooling in mathematics and science.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12">
          {education.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-black border-2 border-red-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-[#ff2a2a] transition-all duration-300 shadow-[0_0_15px_rgba(255,42,42,0.6)]">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Education Card */}
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 hover:border-red-500/40 hover:bg-white/[0.05] transition-all duration-300 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 w-fit">
                    {item.period}
                  </span>
                  <span className="text-sm font-bold text-emerald-400 font-mono bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-500/20 w-fit">
                    {item.score}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-1 group-hover:text-red-300 transition-colors">
                  {item.degree}
                </h3>

                <p className="text-sm md:text-base font-semibold text-white/70 mb-4">
                  {item.institution} <span className="text-white/40 font-normal">· {item.location}</span>
                </p>

                {/* Subject Pills */}
                <div>
                  <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider block mb-2">
                    Core Coursework & Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 text-xs font-mono text-white/70 bg-black/40 rounded-full border border-white/5 hover:border-white/20 transition-colors"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
