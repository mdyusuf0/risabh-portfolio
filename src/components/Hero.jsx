import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Play error:", err);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[660px] overflow-hidden bg-black"
    >
      {/* Background Video with Poster Fallback (No dark faded layer, completely clear) */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        poster={heroContent.posterUrl}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroContent.videoUrl} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* RIGHT-SIDE Floating Social Bar (Desktop) - Gmail, LinkedIn, GitHub on RIGHT SIDE */}
      <div className="hidden lg:flex flex-col items-center gap-5 fixed right-7 top-1/2 -translate-y-1/2 z-50">
        <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-white/30 to-red-500/60 mb-1" />

        {/* Gmail Icon */}
        <a
          href={socialLinks.email}
          className="group relative w-11 h-11 rounded-full bg-black/70 border border-white/25 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-white hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:scale-115 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,42,42,0.6)]"
          aria-label="Email Rishab Raj Kumar Singh"
          title="Email: 24686rishu@gmail.com"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="absolute right-14 font-mono text-[11px] bg-black/90 text-white px-2.5 py-1 rounded-md border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            24686rishu@gmail.com
          </span>
        </a>

        {/* LinkedIn Icon */}
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-11 h-11 rounded-full bg-black/70 border border-white/25 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-white hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:scale-115 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,42,42,0.6)]"
          aria-label="Rishab Singh LinkedIn"
          title="LinkedIn Profile"
        >
          <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span className="absolute right-14 font-mono text-[11px] bg-black/90 text-white px-2.5 py-1 rounded-md border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            LinkedIn / rishabsingh19
          </span>
        </a>

        {/* GitHub Icon */}
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-11 h-11 rounded-full bg-black/70 border border-white/25 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-white hover:border-[#ff2a2a] hover:bg-[#ff2a2a] hover:scale-115 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,42,42,0.6)]"
          aria-label="Rishab Singh GitHub"
          title="GitHub Profile"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span className="absolute right-14 font-mono text-[11px] bg-black/90 text-white px-2.5 py-1 rounded-md border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            GitHub / Rishab620174
          </span>
        </a>

        <div className="w-[1px] h-14 bg-gradient-to-t from-transparent via-white/30 to-red-500/60 mt-1" />
      </div>

      {/* Main Content Area — Shifted more to the left, smaller text */}
      <div className="absolute inset-0 z-20 pl-4 sm:pl-6 md:pl-10 lg:pl-14 pr-4 sm:pr-8 md:pr-14 pb-12 md:pb-[5%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end w-full">
        {/* Left Side: Scaled down & shifted left text container */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          {/* Status Badge */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 border border-white/20 backdrop-blur-md mb-3.5 shadow-lg select-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] md:text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
              Available for Full-Time Roles & Relocation
            </span>
          </div>

          {/* Mobile Socials fallback */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex items-center gap-3 mb-3.5 lg:hidden"
          >
            <span className="text-[10px] font-mono text-white/70 uppercase tracking-wider">Connect:</span>
            <a
              href={socialLinks.email}
              className="w-7 h-7 rounded-full bg-black/75 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#ff2a2a] transition-all"
              aria-label="Email"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-black/75 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#ff2a2a] transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-black/75 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#ff2a2a] transition-all"
              aria-label="GitHub"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>

          {/* Main Headline: Tuned smaller with strong text shadow for readability */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black mb-1.5 tracking-tight leading-[1.15] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          >
            {personalInfo.name}{' '}
            <span className="block text-lg sm:text-xl md:text-2xl font-cursive font-medium text-red-400 mt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Subtitle: Tuned smaller */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white/90 text-xs sm:text-sm md:text-[15px] font-medium mb-4 max-w-md md:max-w-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
          >
            {heroContent.subtitle}
          </p>

          {/* Information Pills: Scaled down */}
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="flex flex-wrap items-center gap-1.5 mb-6"
          >
            {heroContent.pills.map((pill) => (
              <span
                key={pill}
                className="px-2.5 py-0.5 text-[10px] md:text-xs font-semibold rounded-full bg-black/65 border border-white/20 text-white backdrop-blur-md hover:border-red-500/60 hover:bg-red-500/20 transition-all duration-300 select-none shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Action Buttons: Scaled down slightly */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-2.5 w-full"
          >
            {/* Primary Button */}
            <a
              href={heroContent.ctaPrimary.href}
              className="px-4.5 py-2 text-xs sm:text-sm rounded-full bg-white text-black font-bold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              {heroContent.ctaPrimary.text}
            </a>

            {/* Journey Button */}
            <a
              href={heroContent.ctaSecondary.href}
              className="px-4.5 py-2 text-xs sm:text-sm rounded-full bg-black/65 border border-white/35 text-white font-semibold hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume Button */}
            <a
              href={heroContent.ctaResume.href}
              download
              className="px-4.5 py-2 text-xs sm:text-sm rounded-full bg-black/65 border border-[#ff2a2a] text-white font-semibold hover:bg-[#ff2a2a] transition-all duration-300 backdrop-blur-md flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Video Player Controls */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-6 md:mt-0 flex flex-row md:flex-col items-center gap-2.5 cursor-pointer group self-start md:self-auto"
        >
          <div
            onClick={toggleVideo}
            className="w-14 h-14 md:w-18 md:h-18 rounded-full border border-white/40 bg-black/60 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:border-red-400 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.8)]"
            title={isPlaying ? "Pause Video" : "Play Video"}
          >
            {!isPlaying ? (
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {!isPlaying ? 'Play Video' : 'Pause Video'}
            </span>
            <button
              onClick={toggleAudio}
              className="text-[10px] font-mono text-white/70 hover:text-white mt-0.5 underline decoration-dotted transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            >
              {isMuted ? '🔇 Sound Muted' : '🔊 Sound On'}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Bounce Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce flex flex-col items-center gap-1">
          <span className="font-cursive text-xs text-white/70 tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">explore work</span>
          <svg
            className="w-4 h-4 text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
