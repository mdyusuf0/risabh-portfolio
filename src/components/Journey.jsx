import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { engineeringJourney } from '../data/portfolioData';

const JourneyTagCard = ({
  number,
  title,
  subtitle,
  text,
  tag,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;

    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || 'fade-up'}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-84 md:w-96 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20" />
      </div>

      {/* Inner container */}
      <div
        className={`w-full h-full rounded-[1.5rem] mt-8 p-7 flex flex-col min-h-[230px] transition-colors duration-700 ${
          isActive ? 'bg-red-700/50' : 'bg-[#f6f6f6]'
        }`}
      >
        <div className="flex justify-between items-center mb-2">
          <span
            className={`text-xl font-bold font-serif italic transition-colors duration-700 ${
              isActive ? 'text-red-200' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          <span
            className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-colors duration-700 ${
              isActive ? 'bg-white/20 text-white border-white/30' : 'bg-gray-200 text-gray-700 border-gray-300'
            }`}
          >
            {tag}
          </span>
        </div>

        <h3
          className={`text-xl md:text-2xl font-black tracking-tight mb-1 transition-colors duration-700 ${
            isActive ? 'text-white' : 'text-gray-900'
          }`}
        >
          {title}
        </h3>

        <h4
          className={`text-xs font-mono font-semibold uppercase tracking-wider mb-3 transition-colors duration-700 ${
            isActive ? 'text-red-200' : 'text-[#ff2a2a]'
          }`}
        >
          {subtitle}
        </h4>

        <p
          className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
            isActive ? 'text-red-100' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const Journey = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  // 5-Step timeline path coordinates
  const pathD =
    'M 700,100 C 450,200 200,300 300,450 C 400,600 750,550 700,750 C 650,950 200,900 300,1050 C 400,1200 700,1250 650,1350 C 600,1450 400,1450 300,1500';

  return (
    <section
      id="journey"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1680px]">
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-8 left-0 md:w-[460px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs text-gray-700 font-bold mb-6 shadow-sm bg-white">
            {engineeringJourney.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-4 tracking-tight">
            {engineeringJourney.heading}
          </h2>
          <p className="font-cursive text-2xl text-[#ff2a2a] font-semibold mb-4">
            Systematic execution from schema to production
          </p>
          <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
            {engineeringJourney.description}
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1620px] pointer-events-none z-0"
          viewBox="0 0 1000 1620"
          preserveAspectRatio="none"
        >
          <path
            d={pathD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2.5"
            strokeDasharray="8 10"
          />

          <mask id="journey-path-mask">
            <motion.path
              d={pathD}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          <path
            d={pathD}
            fill="none"
            stroke="#ff2a2a"
            strokeWidth="3"
            strokeDasharray="8 10"
            mask="url(#journey-path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="journey-path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#ff2a2a"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#journey-path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          {engineeringJourney.cards.map((card, index) => {
            const positions = [
              'md:absolute md:top-[10px] md:right-[5%] lg:right-[8%] rotate-1 md:rotate-3',
              'md:absolute md:top-[350px] md:left-[5%] lg:left-[8%] -rotate-1 md:-rotate-3',
              'md:absolute md:top-[700px] md:right-[5%] lg:right-[12%] rotate-1 md:rotate-2',
              'md:absolute md:top-[1050px] md:left-[5%] lg:left-[12%] -rotate-1 md:-rotate-2',
              'md:absolute md:top-[1370px] md:right-[8%] lg:right-[16%] rotate-1 md:rotate-3',
            ];
            const aosTypes = ['fade-left', 'fade-right', 'fade-left', 'fade-right', 'fade-left'];
            const aosDelays = ['100', '200', '300', '400', '500'];

            return (
              <JourneyTagCard
                key={card.number}
                number={card.number}
                title={card.title}
                subtitle={card.subtitle}
                text={card.text}
                tag={card.tag}
                className={positions[index]}
                aosType={aosTypes[index]}
                aosDelay={aosDelays[index]}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            );
          })}

          {/* Cursive end text matching user request */}
          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1580px] left-[40%] font-cursive text-3xl md:text-4xl text-gray-700 rotate-3 select-none"
          >
            "{engineeringJourney.endText}"
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
