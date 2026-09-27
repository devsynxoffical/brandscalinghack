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
  label: 'OUR 12-YEAR EVOLUTION',
  heading: 'We Never Planned To Build An Ecosystem.',
  headingLines: ['We Never Planned', 'To Build An Ecosystem.'],
  intro:
    'It happened one problem at a time. Every new scaling system began with a direct-to-consumer brand saying, "We need help with this too"—and us engineering a scientific, repeatable framework to conquer it.',
  closingTitle: 'Built In The Scaling Trenches',
  closing:
    'None of these frameworks began as theory. Each one was forged through $50M+ in real ad spend, testing real customer psychology, and solving severe growth bottlenecks. What began as a mission to eliminate agency guesswork has evolved into one complete direct-to-consumer growth ecosystem.',
  timeline: [
    {
      year: '14–19',
      fullYear: '2014–19',
      title: 'The Problem I Couldn’t Ignore',
      teaser:
        'Five years managing direct-response ad spend. Same excuses everywhere: agencies only manage ads, creatives aren’t included, nobody optimizes funnels.',
      full:
        'Founders were left juggling fragmented freelancers, burning thousands on generic ad copies, and still had no one accountable for net profit. I knew there had to be an end-to-end framework—one unified growth partner responsible for the entire cash-flow outcome.',
      attribution: '@gauravecomm',
      timeAgo: 'the early years',
      side: 'right',
    },
    {
      year: "'19",
      fullYear: '2019',
      title: 'Direct-Response Creative Lab',
      teaser:
        'The first critical bottleneck was creative fatigue. Ad accounts stalled without high-converting angles—or ran aesthetic ads that didn’t convert cold traffic.',
      full:
        'We engineered direct-response video frameworks designed for one single metric: stop the scroll, agitate acute customer pain points, and trigger immediate high-AOV buying decisions.',
      attribution: '@gauravecomm',
      timeAgo: '7 years ago',
      side: 'left',
    },
    {
      year: "'20",
      fullYear: '2020',
      title: 'Partnerships Built On Real Accountability',
      teaser:
        'Our partner brands entrusted us with their capital—and that trust came with uncompromising responsibility.',
      full:
        'Through rapid pandemic shifts and iOS algorithmic turbulence, every test proved that eCommerce founders needed partners who obsess over contribution margin, landed COGS, and cash-flow liquidation rather than vanity ROAS.',
      attribution: '@gauravecomm',
      timeAgo: '6 years ago',
      side: 'left',
    },
    {
      year: "'21",
      fullYear: '2021',
      title: 'Advantage+ & Scientific Media Engine',
      teaser:
        'High-converting creatives were firing—so we built systematic Advantage+ and broad media buying architectures.',
      full:
        'Sending clients to fragmented media buyers destroyed ROI. We unified weekly creative testing cadences with automated horizontal scaling rules to keep customer acquisition costs predictable at scale.',
      attribution: '@gauravecomm',
      timeAgo: '5 years ago',
      side: 'right',
    },
    {
      year: '22–23',
      fullYear: '2022–23',
      title: 'Conversion Rate & Funnel Reconstruction',
      teaser:
        'Ads were generating tens of thousands of clicks—but slow Shopify pages and checkout friction were bleeding profit.',
      full:
        'Traffic was arriving, yet unoptimized mobile funnels leaked 60%+ of potential buyers. We rebuilt product pages for sub-1s load times, added dynamic multi-unit quantity tiers, and deployed high-margin 1-click post-purchase upsells.',
      attribution: '@gauravecomm',
      timeAgo: '3–4 years ago',
      side: 'left',
    },
    {
      year: "'24",
      fullYear: '2024',
      title: 'The Million Dollar Funnel™ (MDF™)',
      teaser:
        'We crystallized the complete MDF™ system—turning cold paid ad spend into a self-funding scaling engine.',
      full:
        'The Million Dollar Funnel™ integrated offer economics, viral hook variations, fast-loading mobile storefronts, and automated retention loops into one seamless machine—driving single campaigns past $1.52M+ in revenue.',
      attribution: '@gauravecomm',
      timeAgo: '2 years ago',
      side: 'left',
    },
    {
      year: "'26",
      fullYear: '2026',
      title: 'Brand Scaling Hacks Global Ecosystem',
      teaser:
        'Providing 7 & 8-figure brands with complete end-to-end infrastructure, live mentoring, and private equity readiness.',
      full:
        'Today, Brand Scaling Hacks partners with ambitious brand founders worldwide to eliminate scaling bottlenecks, transition winning products into defensible enterprise brands, and execute predictable 8-figure scaling roadmaps.',
      attribution: '@gauravecomm',
      timeAgo: 'now',
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

      const isDesktop = window.matchMedia('(min-width: 768px)').matches;

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

        {/* Section Closing */}
        <div style={{ maxWidth: '780px', margin: '60px auto 0 auto', textAlign: 'center' }}>
          <h3
            style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px'
            }}
          >
            {journeyTimelineData.closingTitle}
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#64748b',
              lineHeight: 1.65,
              margin: 0
            }}
          >
            {journeyTimelineData.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutJourney;
