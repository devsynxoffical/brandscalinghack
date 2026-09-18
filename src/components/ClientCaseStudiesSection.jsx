import React, { useState } from 'react';

export const showcaseCaseStudies = [
  {
    id: 'cs-1',
    brand: 'Ekster',
    logo: 'ekster',
    category: 'Amazon',
    metric: '$688,406',
    desc: 'Increase in yearly Amazon profit for 8-figure DTC accessories brand',
    image: '/assets/city_skyline.jpg'
  },
  {
    id: 'cs-2',
    brand: 'Motto Matcha',
    logo: 'motto',
    category: 'Amazon',
    metric: '$114,305',
    desc: 'Increase in monthly Amazon revenue for premium matcha brand',
    image: '/assets/instagram_thumbs/insta_1_Db3hW_mupo1.jpg'
  },
  {
    id: 'cs-3',
    brand: 'Wired Golf',
    logo: 'wired',
    category: 'Amazon',
    metric: '$305,771',
    desc: 'Increase in monthly Amazon revenue for golf equipment brand',
    image: '/assets/ugc_sunglasses.jpg'
  },
  {
    id: 'cs-4',
    brand: 'Wildride',
    logo: 'WILDRIDE',
    category: 'E-Commerce',
    metric: '$179,009',
    desc: 'Increase in monthly DTC revenue for kids carrier brand',
    image: '/assets/instagram_thumbs/insta_4_DbCVqzFhiLU.jpg'
  },
  {
    id: 'cs-5',
    brand: 'Colorfocus',
    logo: 'COLORFOCUS',
    category: 'E-Commerce',
    metric: '$1,098,692',
    desc: 'Increase in monthly DTC revenue for organic beauty & skincare brand',
    image: '/assets/instagram_thumbs/insta_2_DbBMshACSuX.jpg'
  },
  {
    id: 'cs-6',
    brand: 'Coat Defense',
    logo: 'COAT DEFENSE',
    category: 'E-Commerce',
    metric: '$699,786',
    desc: 'Increase in monthly DTC revenue for natural pet brand',
    image: '/assets/instagram_thumbs/insta_6_DZcJNI0EhWY.jpg'
  },
  {
    id: 'cs-7',
    brand: 'Chilemoy',
    logo: 'chilemoy',
    category: 'Amazon',
    metric: '$192,814',
    desc: 'Increase in monthly Amazon revenue for multi-brand Amazon seller',
    image: '/assets/instagram_thumbs/insta_5_DcO79UbMIFx.jpg'
  },
  {
    id: 'cs-8',
    brand: 'Bullstrap',
    logo: 'Bullstrap',
    category: 'Amazon',
    metric: '85%',
    desc: 'Increase in monthly Amazon revenue for premium leather goods brand',
    image: '/assets/gaurav_portrait.jpg'
  },
  {
    id: 'cs-9',
    brand: 'Cheen Skincare',
    logo: 'CHEEN',
    category: 'Amazon',
    metric: '$95,934',
    desc: 'Increase in monthly Amazon revenue for Japanese skincare brand',
    image: '/assets/instagram_thumbs/insta_1_Db3hW_mupo1.jpg'
  },
  {
    id: 'cs-10',
    brand: 'The Magic Scent',
    logo: 'THE MAGIC SCENT',
    category: 'E-Commerce',
    metric: '$361,500',
    desc: 'Increase in monthly DTC revenue for luxury home fragrance brand',
    image: '/assets/city_skyline.jpg'
  },
  {
    id: 'cs-11',
    brand: 'Joyfull Superfoods',
    logo: 'JOYFULL',
    category: 'E-Commerce',
    metric: '$250,744',
    desc: 'Increase in monthly DTC revenue for health & superfood brand',
    image: '/assets/gaurav_portrait.jpg'
  },
  {
    id: 'cs-12',
    brand: 'Hedonia Jewelry',
    logo: 'HEDONIA',
    category: 'E-Commerce',
    metric: '211%',
    desc: 'Increase in blended ROAS for luxury jewelry & accessories brand',
    image: '/assets/ugc_sunglasses.jpg'
  }
];

export default function ClientCaseStudiesSection({ onOpenBooking, onNavigate }) {
  const [activeTab, setActiveTab] = useState('All');

  const filteredStudies = showcaseCaseStudies.filter((item) => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  return (
    <section className="client-case-studies-section">
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Tag Pill */}
        <div style={{ marginBottom: '14px' }}>
          <span className="case-studies-kicker">
            04 — CASE STUDIES
          </span>
        </div>

        {/* Elegant Serif Headline matching screenshot */}
        <h2 className="case-studies-serif-heading">
          Work with people who treat your brand like their own
        </h2>

        {/* Subtitle */}
        <p className="case-studies-sub-copy">
          Full accountability for revenue and profit, on Amazon and DTC. The results below are what that looks like.
        </p>

        {/* Interactive Filter Pills */}
        <div className="case-studies-filter-row">
          {['All', 'Amazon', 'E-Commerce'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`case-filter-pill ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3x4 Case Study Grid */}
        <div className="showcase-studies-grid">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="showcase-study-card"
              onClick={() => onNavigate ? onNavigate('case-studies') : onOpenBooking()}
            >
              {/* Image Container with Brand Logo Badge */}
              <div className="showcase-img-wrap">
                <img src={study.image} alt={study.brand} className="showcase-card-img" />
                <div className="showcase-brand-badge">
                  <span>{study.logo}</span>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="showcase-card-body">
                <div className="showcase-card-metric">{study.metric}</div>
                <p className="showcase-card-desc">{study.desc}</p>
                <div className="showcase-card-link">
                  <span>READ CASE STUDY</span>
                  <div className="showcase-link-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
