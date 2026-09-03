import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';

// Visual 1: E-Commerce MERN Architectural Blueprint
const ECommerceVisual = () => (
  <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0c0d14] via-[#05060a] to-[#12080a] p-5 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
    <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-b border-white/10 pb-2">
      <span className="text-red-400 font-bold">CLIENT-SERVER ARCHITECTURE</span>
      <span>REST & JWT PROTOCOL</span>
    </div>

    <div className="grid grid-cols-4 gap-2 my-auto py-3 items-center text-center">
      {/* Client */}
      <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/30 hover:border-blue-400 transition-colors">
        <span className="text-xs">⚛️</span>
        <p className="text-[11px] font-bold text-blue-300 mt-1">React Client</p>
        <p className="text-[9px] text-white/40 font-mono">Hooks · State</p>
      </div>

      {/* Arrow */}
      <div className="text-center font-mono text-xs text-white/40 flex flex-col items-center">
        <span className="text-[10px] text-emerald-400 animate-pulse">REST API</span>
        <span>⇄</span>
      </div>

      {/* Server */}
      <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 hover:border-amber-400 transition-colors">
        <span className="text-xs">🟢</span>
        <p className="text-[11px] font-bold text-amber-300 mt-1">Express API</p>
        <p className="text-[9px] text-white/40 font-mono">JWT Auth · Route</p>
      </div>

      {/* DB */}
      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-colors">
        <span className="text-xs">🍃</span>
        <p className="text-[11px] font-bold text-emerald-300 mt-1">MongoDB</p>
        <p className="text-[9px] text-white/40 font-mono">3NF Normalized</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-1.5 text-[9px] font-mono text-white/60 pt-2 border-t border-white/5">
      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">POST /api/auth/login</span>
      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">GET /api/products</span>
      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">POST /api/cart/checkout</span>
    </div>
  </div>
);

// Visual 2: Machine Learning Pipeline Graph
const MLPipelineVisual = () => (
  <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0c0915] via-[#05040a] to-[#120712] p-5 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
    <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-b border-white/10 pb-2">
      <span className="text-purple-400 font-bold">NEURAL PIPELINE FLOW</span>
      <span>TENSORFLOW ANN</span>
    </div>

    <div className="flex flex-col gap-2 my-auto py-2">
      <div className="flex items-center justify-between text-[10px] font-mono">
        <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80">
          ⛅ Weather Data
        </span>
        <span className="text-purple-400 text-xs">➔</span>
        <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80">
          ⚙️ Scaling & Cleaning
        </span>
        <span className="text-purple-400 text-xs">➔</span>
        <span className="px-2 py-1 rounded-lg bg-purple-900/40 border border-purple-500/40 text-purple-200">
          🧠 TensorFlow
        </span>
      </div>

      <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 text-center mt-1">
        <p className="text-[10px] font-mono text-purple-300">
          Input Layer (12 Features) ➔ Dense (64) + Dropout ➔ Output (Rainfall Probability)
        </p>
      </div>
    </div>

    <div className="flex justify-between items-center text-[9px] font-mono text-white/50 pt-2 border-t border-white/5">
      <span>Framework: TensorFlow 2.x</span>
      <span className="text-emerald-400">Status: Verified in Google Colab</span>
    </div>
  </div>
);

// Visual 3: Connected Smart City IoT Network
const IoTSmartCityVisual = () => (
  <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#071318] via-[#04080c] to-[#0d161a] p-5 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
    <div className="flex justify-between items-center text-[10px] font-mono text-white/50 border-b border-white/10 pb-2">
      <span className="text-cyan-400 font-bold">INTERCONNECTED TELEMETRY MESH</span>
      <span>IoT SYSTEMS PAPER</span>
    </div>

    <div className="grid grid-cols-2 gap-2.5 my-auto py-2">
      <div className="p-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
        <p className="text-[10px] font-bold text-cyan-300">🚦 Traffic Optimization</p>
        <p className="text-[9px] text-white/50 leading-snug mt-0.5">Dynamic signal routing from real-time sensors</p>
      </div>
      <div className="p-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
        <p className="text-[10px] font-bold text-cyan-300">⚡ Energy Conservation</p>
        <p className="text-[9px] text-white/50 leading-snug mt-0.5">Adaptive municipal lighting & power distribution</p>
      </div>
      <div className="p-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
        <p className="text-[10px] font-bold text-cyan-300">🚨 Public Safety Grid</p>
        <p className="text-[9px] text-white/50 leading-snug mt-0.5">Automated telemetry incident detection</p>
      </div>
      <div className="p-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
        <p className="text-[10px] font-bold text-cyan-300">📡 Edge Processing</p>
        <p className="text-[9px] text-white/50 leading-snug mt-0.5">Low-latency packet aggregation</p>
      </div>
    </div>

    <div className="flex justify-between items-center text-[9px] font-mono text-white/50 pt-2 border-t border-white/5">
      <span>Domain: IoT Urban Systems</span>
      <span className="text-cyan-300">Chandigarh University CSE</span>
    </div>
  </div>
);

// Project Card Component
const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(255,42,42,0.18)] transition-all duration-500 bg-[#0d0d0d] flex flex-col justify-between ${
        project.isFlagship ? 'col-span-1 lg:col-span-3 min-h-[460px]' : 'col-span-1 min-h-[420px]'
      }`}
    >
      {/* Top Banner / Technical Visualization */}
      <div className="p-6 pb-2 w-full">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
            {project.badge}
          </span>
          <span className="text-[10px] font-mono text-white/40 uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
            {project.duration}
          </span>
        </div>

        {/* Visual Architecture Representation */}
        <div className="w-full mb-4">
          {project.visualType === 'architecture' && <ECommerceVisual />}
          {project.visualType === 'pipeline' && <MLPipelineVisual />}
          {project.visualType === 'network' && <IoTSmartCityVisual />}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 pt-0 w-full flex flex-col justify-end">
        <h3 className="text-white text-2xl font-black mb-1.5 tracking-tight group-hover:text-red-400 transition-colors">
          {project.title}
        </h3>
        <p className="font-cursive text-lg text-red-300 mb-2 font-medium">
          {project.subtitle}
        </p>
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-mono font-bold text-white/80 bg-white/5 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details Action */}
        <div className="mt-4 flex items-center justify-between text-xs font-mono font-bold text-red-400 group-hover:text-white transition-colors">
          <span>Explore Architecture & Details</span>
          <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
};

// Modal Lightbox for Project Details
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 w-full h-full z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-white/15 rounded-3xl p-6 md:p-10 shadow-[0_25px_70px_rgba(255,42,42,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff2a2a] transition-all duration-300"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-white/50">• {project.category}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            {project.title}
          </h2>
          <p className="font-cursive text-xl md:text-2xl text-red-300 font-semibold mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Visual Architecture Representation inside Modal */}
        <div className="mb-6">
          {project.visualType === 'architecture' && <ECommerceVisual />}
          {project.visualType === 'pipeline' && <MLPipelineVisual />}
          {project.visualType === 'network' && <IoTSmartCityVisual />}
        </div>

        {/* Detailed Narrative */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2">System Overview</h4>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Engineering Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">Key Technical Contributions</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {project.highlights.map((item, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
                <span className="text-red-400 text-sm mt-0.5">✓</span>
                <span className="text-white/80 text-xs sm:text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2">Technologies Utilized</h4>
          <div className="flex flex-wrap gap-2">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono font-bold text-white bg-white/10 border border-white/15 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>

          <span className="text-[11px] font-mono text-white/50">
            Verified Project · Rishab Raj Kumar Singh
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-[#050505] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background Visual Spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs text-white/70 font-bold mb-5 shadow-sm bg-white/5 backdrop-blur-sm">
            ⭐ FEATURED WORK & ENGINEERING LAB
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-3 tracking-tight uppercase">
            Systems & Engineering Projects
          </h2>
          <p className="font-cursive text-2xl md:text-3xl text-red-400 font-semibold mb-3">
            Real architectures, predictive models, and research frameworks
          </p>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Click any project to inspect technical blueprints, data pipelines, and architectural highlights.
          </p>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
