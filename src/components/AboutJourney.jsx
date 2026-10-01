import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { AboutTimelineSvg } from './AboutTimelineSvg';

const VB = { w: 1118, h: 2166 };

/** Dot positions on the winding path (viewBox coordinates) */
const NODES = [
  { x: 1111.09, y: 6.5, side: 'right' },
  { x: 186.086, y: 341.5, side: 'left' },
  { x: 105.086, y: 739.5, side: 'left' },
  { x: 998.086, y: 1092.5, side: 'right' },
  { x: 582.086, y: 1482.5, side: 'left' },
  { x: 59.086, y: 1766.5, side: 'left' },
  { x: 458.086, y: 2129.5, side: 'left' },
];

const REVEAL_AT = [0.02, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84];
const CARD_STARTS = [
  '-45% top',
  '-22% top',
  '-4% top',
  '11% top',
  '20% top',
  '36% top',
  '58% top',
];

export const journeyTimelineData = {
  label: '12 YEARS. $50M+ IN AD SPEND. COUNTLESS BRANDS SCALED.',
  heading: 'It Started With A Simple Obsession:',
  headingLines: ['It Started With A Simple Obsession:', 'Understanding What Makes A Brand Grow.'],
  intro:
    "In 2014, I started my journey in eCommerce and paid advertising. I didn't have a playbook. I learned by doing — testing products, studying consumer behavior, launching campaigns, analyzing data, making mistakes, and figuring out what actually moves the needle. And that journey never stopped.",
  closingBadge: 'AND THAT BRINGS US HERE.',
  closingTitle: 'BRAND SCALING HACKS',
  closing: [
    "Brand Scaling Hacks isn't built from theory. It's built from 12 years of testing, scaling, failing, learning and doing it again.",
    "It's everything I've learned from being inside the ad accounts, inside the funnels, inside the numbers and alongside the founders actually building these businesses.",
    "12 years in the game. $50M+ in ad spend. Countless niches. 8 & 9-figure brands. And one obsession that hasn't changed since 2014:",
    "FIGURING OUT HOW TO SCALE A BRAND."
  ],
  timeline: [
    {
      year: "'14",
      fullYear: '2014',
      title: '2014 — THE BEGINNING',
      teaser:
        'I entered the world of eCommerce and performance marketing. The early years were all about learning the fundamentals — offers, creatives, audiences, funnels, and customer psychology.',
      full:
        'I entered the world of eCommerce and performance marketing. The early years were all about learning the fundamentals — offers, creatives, audiences, funnels, customer psychology and, most importantly, what makes people buy. Every campaign became a lesson. Every failure became data. Every win gave me another piece of the puzzle.',
      attribution: '@gauravecomm',
      timeAgo: 'the beginning',
      side: 'right',
    },
    {
      year: '15–17',
      fullYear: '2015–2017',
      title: '2015–2017 — LEARNING THE GAME',
      teaser:
        'I started working across different eCommerce models, products and markets. Different niches. Different audiences. Different challenges.',
      full:
        'I started working across different eCommerce models, products and markets. Different niches. Different audiences. Different challenges. But the objective was always the same: Find what works. Scale it. And build a system around it. Those years gave me something no course or textbook could: real-world experience.',
      attribution: '@gauravecomm',
      timeAgo: 'learning the game',
      side: 'left',
    },
    {
      year: '18–20',
      fullYear: '2018–2020',
      title: '2018–2020 — FROM CAMPAIGNS TO BRANDS',
      teaser:
        'This is where things started changing. I was looking at the bigger picture — how acquisition, offers, creatives, funnels and customer behavior work together.',
      full:
        "This is where things started changing. I wasn't just running ads anymore. I was looking at the bigger picture — how acquisition, offers, creatives, funnels and customer behavior work together to create a scalable brand. I began working with increasingly established businesses and helping them move beyond simply getting sales… toward building predictable growth.",
      attribution: '@gauravecomm',
      timeAgo: 'from campaigns to brands',
      side: 'left',
    },
    {
      year: '20–22',
      fullYear: '2020–2022',
      title: '2020–2022 — SCALING AT A DIFFERENT LEVEL',
      teaser:
        'The brands got bigger. The budgets got bigger. Working with 8-figure and 9-figure eCommerce brands to solve creative fatigue and scaling bottlenecks.',
      full:
        "The brands got bigger. The budgets got bigger. And the responsibility got bigger. I started working with 8-figure and 9-figure eCommerce brands, helping businesses that had already proven their model find new opportunities for growth. At this point, I had seen almost every kind of challenge an eCommerce brand could face: Creative fatigue. Rising acquisition costs. Scaling bottlenecks. Offer problems. Funnel leaks. Audience saturation. And the biggest one of all: How do you keep growing when you've already grown big?",
      attribution: '@gauravecomm',
      timeAgo: 'scaling at a different level',
      side: 'right',
    },
    {
      year: '22–24',
      fullYear: '2022–2024',
      title: "2022–2024 — BRANDS YOU'VE PROBABLY HEARD OF",
      teaser:
        'Working with brands that had earned significant recognition — including businesses that appeared on Shark Tank and Forbes.',
      full:
        "Over the years, I had the opportunity to work with brands that had already earned significant recognition — including businesses that had appeared on platforms like Shark Tank and Forbes. That experience taught me an important lesson: Big brands don't necessarily need more traffic. They need better systems for turning attention into customers and customers into long-term growth. That's when my approach to scaling became even more data-driven, systematic and focused on the entire customer journey.",
      attribution: '@gauravecomm',
      timeAgo: 'shark tank & forbes brands',
      side: 'left',
    },
    {
      year: '24–25',
      fullYear: '2024–2025',
      title: "2024–2025 — SHARING WHAT I'VE LEARNED",
      teaser:
        'Taking what I learned behind the scenes and sharing it publicly through live sessions, masterminds and training.',
      full:
        "After years of scaling brands behind the scenes, I started taking what I'd learned and sharing it publicly. Through live sessions, masterminds and training, I began helping other entrepreneurs understand the strategies, frameworks and principles that had taken years to develop. Because I realized something: Experience becomes far more valuable when you can transfer it.",
      attribution: '@gauravecomm',
      timeAgo: 'sharing knowledge',
      side: 'left',
    },
    {
      year: "'26",
      fullYear: '2026',
      title: '2026 — 12 YEARS LATER',
      teaser:
        'Today, $50M+ spent in advertising and 12+ years of experience scaling eCommerce brands across countless niches and business models.',
      full:
        "Today, I've spent $50M+ in advertising and accumulated 12+ years of experience scaling eCommerce brands across countless niches, products, markets and business models. I've worked with brands at completely different stages of the journey — from businesses trying to find product-market fit… to established companies doing millions in revenue… to 8- and 9-figure brands looking for their next level of growth. I've seen what works. I've seen what doesn't. I've made the mistakes. I've found the patterns. And I've spent years turning those experiences into repeatable systems.",
      attribution: '@gauravecomm',
      timeAgo: '12 years later',
      side: 'left',
    },
  ],
};

function splitCopy(text) {
  const words = text.split(' ');
  if (words.length < 6) return [text];
  const mid = Math.ceil(words.length * 0.55);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

function nodeStyle(index) {
  const node = NODES[index];
  const top = `${(node.y / VB.h) * 100}%`;
  const x = (node.x / VB.w) * 100;
  const last = index === NODES.length - 1;
  if (node.side === 'right') {
    return {
      top,
      right: `calc(${100 - x}% - 2px)`,
      transform: index === 0 ? 'translateY(4px)' : 'translateY(-18%)',
    };
  }
  return {
    top,
    left: `calc(${x}% - 2px)`,
    transform: last ? 'translateY(-92%)' : 'translateY(-18%)',
  };
}

function yearNumber(fullYear) {
  const match = fullYear.match(/(\d{4})(?!.*\d{4})/);
  const year = match?.[1] ?? fullYear.replace(/\D/g, '').slice(0, 4);
  return Number(year.slice(2));
}

function formatYear(n) {
  return `'${String(Math.round(n)).padStart(2, '0')}`;
}

function JourneyCard({
  index,
  open,
  onToggle,
  cardRef,
  yearRef,
  wrapRef,
}) {
  const entry = journeyTimelineData.timeline[index];
  const isRight = NODES[index].side === 'right';

  return (
    <article
      ref={wrapRef}
      data-side={isRight ? 'right' : 'left'}
      className="about-card-wrap"
      style={nodeStyle(index)}
    >
      {!isRight && (
        <div className="about-card-point-wrap">
          <div className="about-card-point-line" />
        </div>
      )}
      <div
        ref={cardRef}
        className={`journey-card-anim ${open ? 'journey-card-open' : 'journey-card-closed'}`}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div
            ref={yearRef}
            data-anim="year"
            data-expanded={open ? 'true' : 'false'}
            className="journey-year-text"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: open ? '#ffb300' : '#dc2626',
              textShadow: open ? '0 0 20px rgba(255, 179, 0, 0.4)' : 'none'
            }}
          >
            {open ? entry.fullYear : entry.year}
          </div>
          {open && (
            <button
              type="button"
              onClick={onToggle}
              className="journey-close-btn"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <h3
          className="journey-card-title"
          style={{
            marginTop: '8px',
            fontSize: 'clamp(1.05rem, 1.6vw, 1.45rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            color: open ? '#ffffff' : '#0f172a',
            letterSpacing: '-0.01em'
          }}
        >
          {splitCopy(entry.title).map((line, lIdx) => (
            <span key={lIdx} className="journey-split">
              <span data-anim="title-line" className="journey-split-line">
                {line}
              </span>
            </span>
          ))}
        </h3>

        {!open && (
          <p
            className="journey-card-teaser"
            style={{
              marginTop: '8px',
              fontSize: '0.88rem',
              lineHeight: 1.55,
              color: '#64748b'
            }}
          >
            {splitCopy(entry.teaser).map((line, lIdx) => (
              <span key={lIdx} className="journey-split">
                <span data-anim="teaser-line" className="journey-split-line">
                  {line}
                </span>
              </span>
            ))}
          </p>
        )}

        {open && (
          <p
            className="journey-card-full"
            style={{
              marginTop: '14px',
              maxWidth: '42ch',
              fontSize: '0.94rem',
              lineHeight: 1.65,
              color: '#e2e8f0'
            }}
          >
            {entry.full}
          </p>
        )}

        <div
          className="journey-card-footer"
          style={{
            marginTop: '16px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '12px',
            borderTop: open ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #f1f5f9',
            paddingTop: '12px'
          }}
        >
          <div data-anim="meta" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span data-anim="logo" style={{ display: 'inline-flex' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: open ? 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)' : 'rgba(220, 38, 38, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: open ? '#ffffff' : '#dc2626',
                  fontWeight: 900,
                  fontSize: '0.75rem'
                }}
              >
                BS
              </div>
            </span>
            <p
              style={{
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: 1.3,
                color: open ? 'rgba(255, 255, 255, 0.75)' : '#64748b'
              }}
            >
              <strong style={{ color: open ? '#ffffff' : '#0f172a', display: 'block' }}>
                {entry.attribution}
              </strong>
              <span>{entry.timeAgo}</span>
            </p>
          </div>

          {!open && (
            <button
              data-anim="cta"
              type="button"
              onClick={onToggle}
              className="journey-read-btn"
              aria-expanded={open}
            >
              <span>Read more</span>
              <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      {isRight && (
        <div className="about-card-point-wrap">
          <div className="about-card-point-line" />
        </div>
      )}
    </article>
  );
}

export function AboutJourney() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const overflowRef = useRef(null);
  const blobRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const cardRefs = useRef([]);
  const yearRefs = useRef([]);
  const wrapRefs = useRef([]);
  const revealedRef = useRef(journeyTimelineData.timeline.map(() => false));
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;
    const overflow = overflowRef.current;
    if (!section || !container || !overflow) return;

    const showCardFinal = (index) => {
      const card = cardRefs.current[index];
      if (!card) return;
      const yearEl = yearRefs.current[index];
      const wrap = wrapRefs.current[index];
      const entry = journeyTimelineData.timeline[index];
      const line = wrap?.querySelector('.about-card-point-line');
      const titleLines = card.querySelectorAll("[data-anim='title-line']");
      const teaserLines = card.querySelectorAll("[data-anim='teaser-line']");
      const meta = card.querySelector("[data-anim='meta']");
      const logo = card.querySelector("[data-anim='logo']");
      const cta = card.querySelector("[data-anim='cta']");

      gsap.set(card, { yPercent: 0, opacity: 1, scale: 1, clearProps: 'filter' });
      gsap.set(titleLines, { yPercent: 0, clearProps: 'transform' });
      gsap.set(teaserLines, { yPercent: 0, clearProps: 'transform' });
      if (meta) gsap.set(meta, { yPercent: 0, clearProps: 'transform' });
      if (logo) gsap.set(logo, { yPercent: 0, opacity: 1, scale: 1 });
      if (cta) gsap.set(cta, { opacity: 1 });
      if (line) gsap.set(line, { clipPath: 'inset(0% 0% 0% 0%)' });
      if (yearEl && yearEl.dataset.expanded !== 'true') {
        yearEl.textContent = entry.year;
      }
      revealedRef.current[index] = true;
    };

    const playCard = (index, reversed = false) => {
      const card = cardRefs.current[index];
      if (!card) return;
      if (!reversed && revealedRef.current[index]) return;
      if (reversed && !revealedRef.current[index]) return;
      if (reversed) revealedRef.current[index] = false;
      else revealedRef.current[index] = true;

      const yearEl = yearRefs.current[index];
      const wrap = wrapRefs.current[index];
      const entry = journeyTimelineData.timeline[index];
      const target = yearNumber(entry.fullYear);
      const line = wrap?.querySelector('.about-card-point-line');
      const titleLines = card.querySelectorAll("[data-anim='title-line']");
      const teaserLines = card.querySelectorAll("[data-anim='teaser-line']");
      const meta = card.querySelector("[data-anim='meta']");
      const logo = card.querySelector("[data-anim='logo']");
      const cta = card.querySelector("[data-anim='cta']");

      if (reversed) {
        gsap.set(card, { yPercent: 10, opacity: 0, scale: 0.6, transformOrigin: '50% 100%' });
        gsap.set(titleLines, { yPercent: 100 });
        gsap.set(teaserLines, { yPercent: 100 });
        if (meta) gsap.set(meta, { yPercent: 100 });
        if (logo) gsap.set(logo, { yPercent: 10, opacity: 0, scale: 0.6 });
        if (cta) gsap.set(cta, { opacity: 0 });
        if (line) gsap.set(line, { clipPath: 'inset(100% 0% 0% 0%)' });
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => showCardFinal(index),
      });

      tl.to(
        card,
        {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          delay: 0.3,
          ease: 'expo.out',
          transformOrigin: '50% 100%',
        },
        0
      );

      if (line) {
        tl.to(
          line,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.5,
            delay: 0.2,
            ease: 'expo.out',
          },
          0
        );
      }

      if (yearEl && yearEl.dataset.expanded !== 'true') {
        const counter = { n: 0 };
        yearEl.textContent = "'00";
        tl.to(
          counter,
          {
            n: target,
            duration: 1.5,
            delay: 0.2,
            ease: 'expo.out',
            overwrite: false,
            onUpdate: () => {
              if (yearEl.dataset.expanded === 'true') return;
              yearEl.textContent = formatYear(counter.n);
            },
            onComplete: () => {
              if (yearEl.dataset.expanded === 'true') return;
              yearEl.textContent = entry.year;
            },
          },
          0
        );
      }

      if (titleLines.length) {
        tl.to(
          titleLines,
          {
            yPercent: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.3,
            ease: 'expo.out',
          },
          0
        );
      }

      if (teaserLines.length) {
        tl.to(
          teaserLines,
          {
            yPercent: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.4,
            ease: 'expo.out',
          },
          0
        );
      }

      if (logo) {
        tl.to(
          logo,
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.45,
            ease: 'power3.inOut',
          },
          0
        );
      }

      if (meta) {
        tl.to(
          meta,
          {
            yPercent: 0,
            duration: 0.4,
            delay: 0.6,
            ease: 'expo.out',
          },
          0
        );
      }

      if (cta) {
        tl.to(
          cta,
          {
            opacity: 1,
            duration: 1.4,
            delay: 0.8,
            ease: 'expo.out',
          },
          0
        );
      }
    };

    const ctx = gsap.context(() => {
      // Parallax background glow
      gsap.to(blobRef.current, {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      const isDesktop = window.matchMedia('(min-width: 992px)').matches;

      // Initial state setup for cards
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const titleLines = card.querySelectorAll("[data-anim='title-line']");
        const teaserLines = card.querySelectorAll("[data-anim='teaser-line']");
        const meta = card.querySelector("[data-anim='meta']");
        const logo = card.querySelector("[data-anim='logo']");
        const cta = card.querySelector("[data-anim='cta']");
        const line = wrapRefs.current[index]?.querySelector('.about-card-point-line');

        gsap.set(card, {
          yPercent: 10,
          opacity: 0,
          scale: 0.6,
          transformOrigin: '50% 100%',
        });
        gsap.set(titleLines, { yPercent: 100 });
        gsap.set(teaserLines, { yPercent: 100 });
        if (meta) gsap.set(meta, { yPercent: 100 });
        if (logo) gsap.set(logo, { yPercent: 10, opacity: 0, scale: 0.6 });
        if (cta) gsap.set(cta, { opacity: 0 });
        if (line) gsap.set(line, { clipPath: 'inset(100% 0% 0% 0%)' });
      });

      revealedRef.current = journeyTimelineData.timeline.map(() => false);

      // Progressive SVG path height unmasking scrubbed to scroll
      if (isDesktop) {
        gsap.set(overflow, { height: '0%' });
        gsap.to(overflow, {
          ease: 'none',
          keyframes: [
            { height: '14%', duration: 2 },
            { height: '28%', duration: 1 },
            { height: '42%', duration: 1.5 },
            { height: '56%', duration: 2 },
            { height: '70%', duration: 1 },
            { height: '84%', duration: 1.5 },
            { height: '100%', duration: 2 },
          ],
          scrollTrigger: {
            trigger: container,
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              REVEAL_AT.forEach((at, i) => {
                if (self.progress >= at) playCard(i);
                else playCard(i, true);
              });
            },
            onRefresh: (self) => {
              REVEAL_AT.forEach((at, i) => {
                if (self.progress >= at) showCardFinal(i);
                else playCard(i, true);
              });
            },
          },
        });
      } else {
        gsap.set(overflow, { height: '100%' });
      }

      // Individual trigger points for each card
      wrapRefs.current.forEach((wrap, index) => {
        if (!wrap) return;
        ScrollTrigger.create({
          trigger: isDesktop ? container : wrap,
          start: isDesktop ? CARD_STARTS[index] : 'top 88%',
          end: 'bottom top',
          onEnter: () => playCard(index),
          onEnterBack: () => playCard(index),
          onLeave: () => playCard(index, true),
          onLeaveBack: () => playCard(index, true),
          onRefresh: (self) => {
            if (self.isActive || self.progress > 0) showCardFinal(index);
          },
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, section);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-journey-section"
      className="about-journey-root"
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#ffffff',
        padding: '100px 0 80px 0',
        overflow: 'hidden'
      }}
    >
      {/* Parallax glowing ambient blob with brand red/orange tones */}
      <div
        ref={blobRef}
        className="journey-ambient-blob"
        style={{
          position: 'absolute',
          left: '25%',
          top: '10%',
          zIndex: 0,
          width: '55vw',
          height: '55vw',
          maxHeight: '620px',
          maxWidth: '620px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, rgba(234, 88, 12, 0.05) 45%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '50px' }}>
          <span
            ref={labelRef}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(220, 38, 38, 0.08)',
              color: '#dc2626',
              border: '1px solid rgba(220, 38, 38, 0.25)',
              borderRadius: '9999px',
              padding: '6px 18px',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} />
            {journeyTimelineData.label}
          </span>

          <h2
            ref={headingRef}
            style={{
              fontSize: 'clamp(2.2rem, 4.4vw, 3.8rem)',
              color: '#0f172a',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              marginBottom: '16px'
            }}
          >
            {journeyTimelineData.headingLines[0]} <br />
            <span style={{ color: '#dc2626' }}>
              {journeyTimelineData.headingLines[1]}
            </span>
          </h2>

          <p
            ref={introRef}
            style={{
              maxWidth: '650px',
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.65,
              margin: 0
            }}
          >
            {journeyTimelineData.intro}
          </p>
        </div>

        {/* SVG Winding Road & Coordinate-Pinned Cards Container */}
        <div
          ref={containerRef}
          className="about-card-container"
        >
          {/* Background SVG Ribbon Mask */}
          <div className="about-svg-mask-wrap">
            <div
              ref={overflowRef}
              className="about-timeline-overflow"
              style={{ height: '0%' }}
            >
              <AboutTimelineSvg className="about-timeline-svg-el" />
            </div>
          </div>

          {/* Cards List */}
          <div className="about-cards-list">
            {journeyTimelineData.timeline.map((entry, index) => (
              <JourneyCard
                key={entry.year}
                index={index}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? null : index))
                }
                cardRef={(el) => {
                  cardRefs.current[index] = el;
                }}
                yearRef={(el) => {
                  yearRefs.current[index] = el;
                }}
                wrapRef={(el) => {
                  wrapRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutJourney;
