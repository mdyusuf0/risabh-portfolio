import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '25%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const isConfigured =
      emailjsConfig.serviceId &&
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      // Instant mailto fallback directly to Rishab's inbox
      const mailtoLink = `mailto:${personalInfo.emails.primary}?subject=Portfolio Inquiry from ${encodeURIComponent(
        firstName + ' ' + lastName
      )}&body=${encodeURIComponent(
        `Hello Rishab,\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Rishab Raj Kumar Singh Portfolio`
      )}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#050505] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-white/10"
    >
      {/* Huge Background Parallax Typography */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-12 md:pt-8"
      >
        <h1
          className="text-[24vw] leading-[0.75] font-black text-white/[0.04] uppercase tracking-tighter select-none scale-y-[1.5] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          CONNECT
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between shadow-[0_-20px_60px_rgba(0,0,0,0.5)]"
        >
          {/* Top Row: Direct Channels */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-100">
                INITIATE CONTACT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Let's build something meaningful.
              </h3>
              <p className="font-cursive text-xl text-red-100 mt-1">
                Open to full-time roles, software engineering internships, & innovative projects
              </p>
            </div>

            {/* Quick Link Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-[#ff2a2a] border border-white/25 px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-sm"
              >
                LinkedIn
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-[#ff2a2a] border border-white/25 px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-sm"
              >
                GitHub
              </a>
              <a
                href={socialLinks.email}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-black hover:text-white px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-sm"
              >
                Email
              </a>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14 w-full">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    placeholder="First Name"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-2.5 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-2.5 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Your Email Address"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-2.5 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Discuss project requirements, role openings, or software collaborations..."
                    required
                    className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-2.5 text-base md:text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium resize-none rounded-none"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-t border-white/20 pt-6">
              {/* Phone & Location info */}
              <div className="text-xs text-red-100 font-mono space-y-1">
                <p>
                  Direct: <span className="text-white font-bold">{personalInfo.phone}</span>
                </p>
                <p>
                  Location: <span className="text-white font-bold">{personalInfo.location}</span>
                </p>
                <p>
                  Email: <a href={`mailto:${personalInfo.emails.primary}`} className="underline font-bold text-white hover:text-black">{personalInfo.emails.primary}</a>
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap self-start md:self-auto ${
                  status === 'sending'
                    ? 'opacity-50 cursor-not-allowed bg-white/10'
                    : status === 'success'
                    ? 'bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                    : status === 'error'
                    ? 'bg-black text-white'
                    : 'bg-black/30 hover:bg-white hover:text-[#ff2a2a] hover:border-white'
                }`}
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Dispatching...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2">Message Dispatched ✓</span>
                ) : status === 'error' ? (
                  <span className="flex items-center gap-2">Please Fill Required Fields</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
