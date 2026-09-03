import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/portfolioData';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'Computer Science', 'Database & AI', 'Security', 'Development', 'Cloud', 'Emerging Tech'];

  const filteredCertificates =
    activeFilter === 'all'
      ? certificates
      : certificates.filter((c) => c.category.toLowerCase().includes(activeFilter.toLowerCase()) || c.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="bg-[#090909] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-1.5 text-xs text-white/70 font-bold mb-5 shadow-sm bg-white/5 backdrop-blur-sm">
            <span>📜</span>
            <span>VERIFIED ACADEMIC & PROFESSIONAL CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-3">
            Certifications & Specializations
          </h2>
          <p className="font-cursive text-2xl md:text-3xl text-red-400 font-semibold mb-3">
            Rigorous coursework verified by global universities and tech leaders
          </p>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Authentic certificates verified through Coursera, IBM, UC San Diego, and industry curriculum. Click any certificate image to view high-resolution proof.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#ff2a2a] text-white shadow-[0_0_15px_rgba(255,42,42,0.4)] scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat === 'all' ? 'All Credentials' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCertificates.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-5 hover:border-red-500/40 hover:bg-white/[0.05] hover:shadow-[0_20px_45px_rgba(255,42,42,0.12)] transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  {/* Real Image Thumbnail or Credential Badge */}
                  {cert.hasImage ? (
                    <div
                      onClick={() => setSelectedImage(cert)}
                      className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-4 cursor-pointer relative group/img"
                    >
                      <img
                        src={cert.imageUrl}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono font-bold border border-white/20 shadow-lg flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Fullscreen
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/8] rounded-2xl bg-gradient-to-br from-red-950/20 via-black to-zinc-950 border border-white/5 mb-4 p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-[10px] font-mono text-red-400">
                        <span>PROFESSIONAL TOPIC</span>
                        <span>VERIFIED</span>
                      </div>
                      <p className="text-xs text-white/70 italic font-medium leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  )}

                  {/* Issuer & Category */}
                  <div className="flex justify-between items-center text-[11px] font-mono mb-2">
                    <span className="text-red-400 font-bold">{cert.issuer}</span>
                    <span className="text-white/40">{cert.issueDate}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-lg font-bold tracking-tight mb-3 group-hover:text-red-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-white/60 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Link */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/40 uppercase">
                    {cert.platform}
                  </span>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-red-400 hover:text-white flex items-center gap-1 transition-colors group/link"
                    >
                      <span>Verify Online</span>
                      <span className="transform group-hover/link:translate-x-0.5 transition-transform">↗</span>
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-emerald-400">
                      ● Validated
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Certificate Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:top-2 md:right-2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-[#ff2a2a] text-white flex items-center justify-center transition-colors"
                aria-label="Close image lightbox"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="w-full rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(255,42,42,0.3)] border border-white/20 bg-black">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[82vh] object-contain mx-auto"
                />
              </div>

              {/* Lightbox Caption & Verification */}
              <div className="w-full mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 px-2">
                <div className="text-left">
                  <h4 className="text-white font-bold text-base">{selectedImage.title}</h4>
                  <p className="text-white/60 font-mono text-xs">
                    Issued to Rishab Kumar Singh by {selectedImage.issuer} · {selectedImage.issueDate}
                  </p>
                </div>
                {selectedImage.verifyUrl && (
                  <a
                    href={selectedImage.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-[#ff2a2a] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors shrink-0 shadow-lg"
                  >
                    Open Coursera Verification ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
