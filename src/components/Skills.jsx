import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologyEcosystem } from '../data/portfolioData';

const statusColors = {
  Core: 'bg-red-500/20 text-red-300 border-red-500/40',
  Proficient: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  Familiar: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  Applied: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  Research: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? technologyEcosystem.categories
      : technologyEcosystem.categories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="bg-[#080808] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-1.5 text-xs md:text-sm text-white/80 font-bold mb-5 shadow-sm bg-white/5 backdrop-blur-sm">
            <span>⚡</span>
            <span>INTERACTIVE TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-3">
            Technical Stacks & Architectures
          </h2>
          <p className="font-cursive text-2xl md:text-3xl text-red-400 font-semibold mb-3">
            Crafting resilient software with modern engineering tools
          </p>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Explored through academic coursework at Chandigarh University, hands-on full-stack development, and real-world system modeling.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)] scale-105'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              All Stacks
            </button>
            {technologyEcosystem.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeTab === cat.id
                    ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)] scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Technology Clusters Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence>
            {filteredCategories.map((category, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                key={category.id}
                className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-red-500/40 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                        {category.icon}
                      </span>
                      <h3 className="text-lg font-black text-white tracking-tight uppercase group-hover:text-red-400 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase">
                      {category.skills.length} competencies
                    </span>
                  </div>

                  {/* Skills Capsules */}
                  <div className="flex flex-col gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-2xl bg-black/40 border border-white/5 hover:border-white/20 hover:bg-black/60 transition-all duration-300 flex items-center justify-between"
                      >
                        <div className="flex flex-col">
                          <span className="text-white text-sm font-bold tracking-wide group-hover:text-white">
                            {skill.name}
                          </span>
                          <span className="text-[11px] text-white/50 font-mono mt-0.5">
                            {skill.tag}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                            statusColors[skill.status] || 'bg-white/10 text-white border-white/20'
                          }`}
                        >
                          {skill.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span className="font-cursive text-base text-red-300/80">Production verified</span>
                  <span>● Active</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Engineering Principles & Soft Competencies */}
        <div data-aos="fade-up" className="mt-8 pt-12 border-t border-white/10">
          <div className="text-center mb-10">
            <div className="inline-block border border-white/15 rounded-full px-4 py-1 text-xs text-white/60 font-bold mb-3 bg-white/5">
              COMPUTING METHODOLOGY
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Software Engineering Competencies
            </h3>
            <p className="font-cursive text-xl text-red-400 mt-1">
              Solid principles that drive clean architecture and reliable teamwork
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologyEcosystem.softSkills.map((skill, index) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-red-500/30 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="text-3xl p-2.5 rounded-xl bg-white/5 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-white text-base font-bold mb-1 group-hover:text-red-400 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
