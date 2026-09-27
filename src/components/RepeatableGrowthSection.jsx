import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { instaVideosList } from '../data/instaVideosData';

// Divide the downloaded Instagram video reels across 3 seamless marquee rows
const totalCount = instaVideosList.length;
const chunkSize = Math.ceil(totalCount / 3);

export const row1Items = instaVideosList.slice(0, chunkSize);
export const row2Items = instaVideosList.slice(chunkSize, chunkSize * 2);
export const row3Items = instaVideosList.slice(chunkSize * 2);

function CreativeMediaCard({ item, onClick }) {
  return (
    <div className="tilted-card-pure" onClick={onClick}>
      {item.isVideo || item.video ? (
        <video
          src={item.video}
          poster={item.image}
          autoPlay
          loop
          muted
          playsInline
          className="tilted-pure-media"
        />
      ) : (
        <img
          src={item.image}
          alt={item.title || "Performance Creative"}
          className="tilted-pure-media"
          loading="lazy"
        />
      )}
    </div>
  );
}

export default function RepeatableGrowthSection({ onOpenBooking, onNavigate, onOpenInstagramModal }) {
  const handleItemClick = (item) => {
    if (onOpenInstagramModal) {
      onOpenInstagramModal(item);
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <section className="repeatable-growth-section">
      <div className="container">
        {/* Top Header Row */}
        <div className="growth-header-grid">
          {/* Left Column: Big Impact Typography */}
          <div className="growth-title-col">
            <span className="growth-kicker-tag">
              DTC PERFORMANCE MARKETING & GROWTH ENGINE
            </span>

            <h2 className="growth-mega-title">
              <span className="mega-word">BUILDING</span>
              <span className="mega-word">REPEATABLE GROWTH</span>
              
              <div className="mega-third-line">
                <span className="yellow-badge-box">
                  <span className="yellow-badge-text">A PERFORMANCE PARTNER FOR 7-8 FIGURE DTC BRANDS</span>
                  <span className="yellow-stripes">
                    <span></span><span></span><span></span><span></span>
                  </span>
                </span>
                <span className="mega-word-inline">FOR DTC BRANDS</span>
              </div>
            </h2>
          </div>

          {/* Right Column: Copy and Pill Button */}
          <div className="growth-cta-col">
            <p className="growth-subtext-copy">
              We build the creative, run the ads, fix the tracking, and give you a growth system you can trust.
            </p>

            <button className="btn-highbeam-talk" onClick={onOpenBooking}>
              <span>LET'S TALK</span>
              <div className="yellow-arrow-circle">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 3D Tilted Isometric Creative Collage Grid (High Beam Marketing Style - Light Theme & Zero Gap) */}
      <div className="tilted-grid-viewport">
        {/* Top and Bottom Seamless Gradient Masks */}
        <div className="tilted-mask-top" />
        <div className="tilted-mask-bottom" />

        <div className="tilted-grid-plane">
          {/* Row 1 - Scrolling Left */}
          <div className="tilted-row tilted-row-1">
            {[...row1Items, ...row1Items].map((item, idx) => (
              <CreativeMediaCard
                key={`r1-${item.id}-${idx}`}
                item={item}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="tilted-row tilted-row-2">
            {[...row2Items, ...row2Items].map((item, idx) => (
              <CreativeMediaCard
                key={`r2-${item.id}-${idx}`}
                item={item}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>

          {/* Row 3 - Scrolling Left */}
          <div className="tilted-row tilted-row-3">
            {[...row3Items, ...row3Items].map((item, idx) => (
              <CreativeMediaCard
                key={`r3-${item.id}-${idx}`}
                item={item}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
