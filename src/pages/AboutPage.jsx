import React, { useState } from 'react';
import GauravAboutHero from '../components/GauravAboutHero';
import AboutJourney from '../components/AboutJourney';
import TeamCurvedSection from '../components/TeamCurvedSection';
import LiveSessionsSection from '../components/LiveSessionsSection';
import ExperienceCtaSection from '../components/ExperienceCtaSection';
import { 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Plus, 
  Minus, 
  Flame, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Target, 
  Zap,
  Play,
  Award
} from 'lucide-react';

export default function AboutPage({ onOpenBooking, onNavigate, onOpenVideo }) {
  const [openFaq, setOpenFaq] = useState(0);

  const milestones = [
    { 
      number: '12', 
      unit: 'Years', 
      title: '12 Years In The Game', 
      desc: 'Testing, scaling, failing, learning and building repeatable direct-to-consumer systems since 2014.' 
    },
    { 
      number: '$50M+', 
      unit: 'Ad Spend', 
      title: 'In Advertising Managed', 
      desc: 'Tested across countless niches, products, markets, and business models with proven unit economics.' 
    },
    { 
      number: '8 & 9', 
      unit: 'Figures', 
      title: '8 & 9-Figure Brands Scaled', 
      desc: 'Scaling high-growth eCommerce brands, including businesses featured on Shark Tank and Forbes.' 
    },
    { 
      number: '100+', 
      unit: 'Brands', 
      title: 'Countless Brands Scaled', 
      desc: 'From finding product-market fit to multi-million dollar predictable growth and category leadership.' 
    }
  ];

  const whatWeBuildPillars = [
    {
      icon: <Target size={24} color="#ff5722" />,
      title: "Paid Acquisition Engine",
      badge: "META & GOOGLE ADS",
      desc: "Advantage+ account structures, broad targeting algorithms, bid caps, and predictive scale systems engineered for stable high-budget efficiency."
    },
    {
      icon: <Flame size={24} color="#ff5722" />,
      title: "Viral Creative Machine",
      badge: "DIRECT-RESPONSE UGC",
      desc: "Weekly high-velocity testing matrices, creator briefs, psychological hooks, and iterative scaling that beats ad fatigue every single week."
    },
    {
      icon: <TrendingUp size={24} color="#ff5722" />,
      title: "Shopify CRO & Offer Funnels",
      badge: "HIGH-AOV ARCHITECTURE",
      desc: "Pre & post-purchase 1-click upsells, high-converting PDP redesigns, bundle architectures, and speed optimizations that convert traffic into cash."
    },
    {
      icon: <Layers size={24} color="#ff5722" />,
      title: "Retention & Lifecycle Engine",
      badge: "KLAVIYO AUTOMATION",
      desc: "Automated SMS and email flows, VIP segmentation, churn reduction, and zero-party data capture that turns one-time buyers into lifetime customers."
    }
  ];

  const faqs = [
    {
      question: "How is Brand Scaling Hacks different from typical marketing agencies?",
      answer: "Most traditional agencies delegate your brand to junior media buyers who simply cycle through basic interest targeting. Brand Scaling Hacks is a complete, connected eCommerce Growth Engine. We don't just tweak ad accounts — we engineer your entire revenue ecosystem: paid traffic, creative production, offer economics, CRO, and post-purchase retention systems backed by $50M+ in real ad spend experience."
    },
    {
      question: "What types of eCommerce brands do you work with?",
      answer: "We partner with ambitious direct-to-consumer (DTC) and eCommerce brands doing between $30k/month and $2M+/month that have proven product-market fit and want to build predictable 8 & 9-figure scaling systems. We work across apparel, beauty & skincare, wellness, home goods, electronics, supplements, and specialized luxury niches."
    },
    {
      question: "What is the minimum ad spend required to partner with you?",
      answer: "To ensure statistical significance and provide meaningful weekly creative iterations, our partners typically spend at least $10,000 to $20,000+ per month in paid ad spend, with the infrastructure to scale rapidly to $100k-$500k+/month as profit milestones are hit."
    },
    {
      question: "Do you handle creative scripting, UGC production, and video editing?",
      answer: "Yes, 100%. Direct-response creative is the #1 lever for Meta and TikTok ad performance. We write the data-backed scripts, source and manage vetted creators, produce high-converting UGC and motion design assets, and deploy 30–50+ angle iterations each month so your ad accounts never hit fatigue."
    },
    {
      question: "How quickly do we see results after launching?",
      answer: "During the first 7–14 days, we execute our Deep Diagnostic Audit, restructure ad accounts, rebuild high-converting PDPs/offers, and install our tracking infrastructure. We typically begin seeing measurable improvements in CPA, AOV, and ROAS within the first 2 to 4 weeks of launching our initial creative wave."
    },
    {
      question: "How does the initial Brand Growth Audit work?",
      answer: "Our Brand Growth Audit is a 1-on-1 diagnostic where Gaurav and our senior growth architects analyze your Meta ad accounts, creative performance, conversion rate bottlenecks, and offer unit economics. We identify exactly why you are stuck and deliver a customized step-by-step roadmap to scale."
    }
  ];

  return (
    <div style={{ paddingTop: '0px', minHeight: '100vh', background: '#ffffff', color: '#0f172a' }}>
      
      {/* 1. Gaurav Reference Hero Stage (Light Theme) */}
      <GauravAboutHero onOpenBooking={onOpenBooking} onNavigate={onNavigate} />

      {/* 2. 12-Year Evolution Winding Road Journey Section (Light Theme) */}
      <AboutJourney />

      {/* 3. Proven Track Record / Milestones Section (Light Theme) */}
      <section style={{ padding: '80px 0 90px 0', background: '#fafafa', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: 'rgba(255, 87, 34, 0.08)', 
              color: '#ff5722', 
              border: '1px solid rgba(255, 87, 34, 0.2)', 
              borderRadius: '999px', 
              padding: '6px 18px', 
              fontSize: '0.8rem', 
              fontWeight: 800, 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              marginBottom: '12px' 
            }}>
              <Award size={14} />
              PROVEN TRACK RECORD
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#0f172a', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>
              Numbers That Speak For Themselves
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '640px', margin: '12px auto 0 auto', lineHeight: 1.6 }}>
              Battle-tested performance across high-growth eCommerce brands, Shark Tank alumni, and category leaders.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #fed7aa',
                  borderRadius: '24px',
                  padding: '36px 28px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ff5722';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(255, 87, 34, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#fed7aa';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div style={{ fontSize: '3rem', fontWeight: 950, color: '#ff5722', lineHeight: 1, marginBottom: '6px', fontFamily: 'var(--font-primary)' }}>
                  {m.number}
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ea580c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                  {m.unit}
                </div>
                <div style={{ fontSize: '1.18rem', fontWeight: 850, color: '#0f172a', marginBottom: '8px' }}>
                  {m.title}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Build & Scale / Ecosystem Pillars */}
      <section style={{ padding: '95px 0', background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: 'rgba(255, 87, 34, 0.08)', 
              color: '#ff5722', 
              border: '1px solid rgba(255, 87, 34, 0.2)', 
              borderRadius: '999px', 
              padding: '6px 18px', 
              fontSize: '0.8rem', 
              fontWeight: 800, 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              marginBottom: '12px' 
            }}>
              <Zap size={14} />
              WHAT WE BUILD & SCALE
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', color: '#0f172a', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>
              The 4 Engines Behind Predictable Growth
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#64748b', margin: '14px auto 0 auto', lineHeight: 1.65 }}>
              No single tactic scales a brand. We connect all four critical growth pillars into one unified system.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {whatWeBuildPillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '24px',
                  padding: '34px 28px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ff5722';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(255, 87, 34, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div style={{ 
                  width: '52px', 
                  height: '52px', 
                  borderRadius: '16px', 
                  background: 'rgba(255, 87, 34, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px' 
                }}>
                  {p.icon}
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#ff5722', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {p.badge}
                </div>
                <h3 style={{ fontSize: '1.28rem', fontWeight: 850, color: '#0f172a', margin: '0 0 12px 0' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team Showcase (3D Curved Fan Perspective) */}
      <TeamCurvedSection onOpenBooking={onOpenBooking} />

      {/* 6. LIVE SESSIONS & MASTERCLASSES (Video Theater Style) */}
      <LiveSessionsSection onOpenVideo={onOpenVideo} />

      {/* 7. Frequently Asked Questions (Interactive Accordion - Light Theme) */}
      <section style={{ padding: '100px 0', background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: 'rgba(255, 87, 34, 0.08)', 
              color: '#ff5722', 
              border: '1px solid rgba(255, 87, 34, 0.2)', 
              borderRadius: '999px', 
              padding: '6px 18px', 
              fontSize: '0.8rem', 
              fontWeight: 800, 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              marginBottom: '12px' 
            }}>
              <ShieldCheck size={14} />
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', color: '#0f172a', fontWeight: 950, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>
              Still Got Questions? We've Got Answers.
            </h2>
            <p style={{ fontSize: '1.08rem', color: '#64748b', margin: '14px auto 0 auto', lineHeight: 1.65 }}>
              Everything you need to know about partnering with Gaurav & the Brand Scaling Hacks team.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`about-faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    className="about-faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <div className="about-faq-icon">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="about-faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. GROWTH BENCHMARK & SCALE BRAND CTA */}
      <ExperienceCtaSection onOpenBooking={onOpenBooking} />

    </div>
  );
}
