import React, { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#0f0202] border-b border-red-500/20 py-3'
          : isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Side: Brand Name */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="text-white text-2xl font-black tracking-tight whitespace-nowrap group flex items-center gap-1.5">
            <span className="font-extrabold tracking-tighter group-hover:text-red-400 transition-colors">
              {personalInfo.brandName}
            </span>
            <span className="text-[#ff2a2a] text-3xl leading-none">.</span>
            <span className="hidden sm:inline-block text-xs font-cursive font-medium text-white/50 pl-1 group-hover:text-white/80 transition-colors">
              Portfolio
            </span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden lg:flex space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium relative group transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download
            className="px-5 py-2 rounded-full text-xs uppercase font-bold tracking-wider bg-white/10 border border-white/20 text-white hover:bg-[#ff2a2a] hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300 backdrop-blur-md flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>

          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-xs uppercase font-bold tracking-wider bg-[#ff2a2a] text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,42,42,0.3)]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100 py-5 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-red-500/20' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-[#ff2a2a] font-semibold text-base py-1.5 border-b border-white/5 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-white/30 text-xs">→</span>
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={personalInfo.resumeUrl}
              download
              onClick={() => setIsOpen(false)}
              className="py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-center text-sm hover:bg-white hover:text-black transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-2.5 rounded-full bg-[#ff2a2a] text-white font-bold text-center text-sm hover:bg-white hover:text-[#ff2a2a] transition-colors shadow-lg"
            >
              Connect with Rishab
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
