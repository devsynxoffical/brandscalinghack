#!/usr/bin/env python3
import os
import sys
import re
import json
import shutil
import csv
import zipfile
import html

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
EXPORT_DIR = os.path.join(PROJECT_ROOT, 'case_studies_export')
ZIP_FILE = os.path.join(PROJECT_ROOT, 'case_studies_export.zip')

def resolve_file(rel_path):
    if not rel_path:
        return None
    rel_path = rel_path.lstrip('/')
    candidates = [
        os.path.join(PROJECT_ROOT, 'public', rel_path),
        os.path.join(PROJECT_ROOT, rel_path),
        os.path.join(PROJECT_ROOT, 'dist', rel_path)
    ]
    for c in candidates:
        if os.path.exists(c) and os.path.isfile(c):
            return c
    return None

def build_detail_html(cs, idx, total, prev_folder, next_folder, local_img_name, local_vid_name):
    title = html.escape(cs.get('title') or f"Case Study #{idx}")
    summary = html.escape(cs.get('summary') or '')
    full_caption = html.escape(cs.get('fullCaption') or cs.get('summary') or '')
    category = html.escape(cs.get('category') or 'Direct-Response DTC')
    revenue = html.escape(cs.get('revenue') or 'Verified Scale')
    roas = html.escape(cs.get('roas') or 'N/A')
    niche = html.escape(cs.get('niche') or cs.get('brand') or 'eCommerce')
    system = html.escape(cs.get('system') or 'Meta Video Ads & Scaling Systems')
    timeframe = html.escape(cs.get('timeframe') or 'Verified Instagram Proof')
    insta_url = cs.get('instagramUrl') or ''
    has_video = bool(local_vid_name)

    metrics = cs.get('metrics') or [
        {"label": "Verified Revenue", "value": revenue},
        {"label": "Target ROAS", "value": roas},
        {"label": "Niche", "value": niche},
        {"label": "Scaling Framework", "value": system}
    ]

    growth_points = cs.get('growthPoints') or [
        f"Scaled under the {system} with documented profitability.",
        f"Generated {revenue} utilizing aggressive creative angle testing.",
        f"Maintained {roas} across Meta broad audience & Advantage+ structures."
    ]

    metrics_html = "".join([
        f"""
        <div class="metric-card">
          <div class="metric-label">{html.escape(m.get('label', ''))}</div>
          <div class="metric-value">{html.escape(str(m.get('value', '')))}</div>
        </div>
        """ for m in metrics
    ])

    growth_points_html = "".join([
        f"""
        <div class="growth-point-item">
          <svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5722" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <p>{html.escape(p)}</p>
        </div>
        """ for p in growth_points
    ])

    media_block = ""
    if has_video:
        media_block = f"""
        <video controls autoplay loop playsinline poster="{local_img_name}" class="media-element">
          <source src="{local_vid_name}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        """
    elif local_img_name:
        media_block = f"""
        <img src="{local_img_name}" alt="{title}" class="media-element media-img" />
        """
    else:
        media_block = """<div class="no-media">No media file attached</div>"""

    prev_link = f'<a href="../{prev_folder}/index.html" class="nav-btn">← Previous</a>' if prev_folder else '<span class="nav-btn disabled">← Previous</span>'
    next_link = f'<a href="../{next_folder}/index.html" class="nav-btn">Next →</a>' if next_folder else '<span class="nav-btn disabled">Next →</span>'

    raw_caption_escaped = cs.get('fullCaption') or cs.get('summary') or ''
    # json encode for JS safe copy
    raw_caption_json = json.dumps(raw_caption_escaped)

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Brand Scaling Case Study #{idx}</title>
  <style>
    *, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #05070c;
      color: #f8fafc;
      line-height: 1.6;
      min-height: 100vh;
      padding: 0 0 80px 0;
    }}
    .container {{
      max-width: 1080px;
      margin: 0 auto;
      padding: 0 24px;
    }}
    /* Top Header Bar */
    .top-bar {{
      background: rgba(10, 14, 23, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 14px 0;
      margin-bottom: 30px;
    }}
    .top-bar-inner {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }}
    .back-link {{
      color: #ff7043;
      text-decoration: none;
      font-weight: 800;
      font-size: 0.9rem;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;
    }}
    .back-link:hover {{
      color: #ffab91;
    }}
    .nav-group {{
      display: flex;
      align-items: center;
      gap: 8px;
    }}
    .nav-btn {{
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
      text-decoration: none;
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 700;
      transition: all 0.2s;
    }}
    .nav-btn:hover:not(.disabled) {{
      background: rgba(255, 87, 34, 0.2);
      color: #ffffff;
      border-color: #ff5722;
    }}
    .nav-btn.disabled {{
      opacity: 0.35;
      cursor: not-allowed;
    }}
    .counter-badge {{
      font-family: ui-monospace, monospace;
      font-size: 0.85rem;
      font-weight: 800;
      color: #ff7043;
      padding: 4px 8px;
    }}
    /* Header Section */
    .header-section {{
      text-align: center;
      margin-bottom: 40px;
    }}
    .badges-row {{
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }}
    .pill-badge {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 87, 34, 0.12);
      color: #ff7043;
      border: 1px solid rgba(255, 87, 34, 0.35);
      padding: 6px 18px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }}
    .revenue-pill {{
      display: inline-block;
      background: rgba(255, 255, 255, 0.06);
      color: #cbd5e1;
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 6px 16px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 800;
      text-transform: uppercase;
    }}
    .case-title {{
      font-size: clamp(1.8rem, 4vw, 2.9rem);
      font-weight: 950;
      line-height: 1.2;
      letter-spacing: -0.02em;
      margin-bottom: 18px;
      color: #ffffff;
    }}
    .case-summary {{
      font-size: 1.1rem;
      color: #94a3b8;
      max-width: 820px;
      margin: 0 auto;
      line-height: 1.6;
    }}
    /* Media Stage */
    .media-stage {{
      position: relative;
      background: #090c13;
      border: 1.5px solid rgba(255, 87, 34, 0.35);
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 87, 34, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 480px;
      max-height: 78vh;
      margin-bottom: 45px;
    }}
    .media-element {{
      position: relative;
      z-index: 2;
      width: 100%;
      max-height: 76vh;
      object-fit: contain;
      display: block;
    }}
    .media-img {{
      padding: 16px;
      border-radius: 16px;
    }}
    /* Metrics Grid */
    .metrics-grid {{
      display: grid;
      grid-templateColumns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      background: linear-gradient(145deg, #0e131f 0%, #080c14 100%);
      padding: 28px;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      margin-bottom: 45px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    }}
    .metric-card {{
      text-align: center;
      padding: 12px;
    }}
    .metric-label {{
      font-size: 0.76rem;
      font-weight: 800;
      color: #ff7043;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 6px;
    }}
    .metric-value {{
      font-size: 1.55rem;
      font-weight: 950;
      color: #ffffff;
      letter-spacing: -0.02em;
    }}
    /* Notes & Strategy Card */
    .notes-card {{
      background: linear-gradient(145deg, #111827 0%, #080c14 100%);
      border: 1.5px solid rgba(255, 87, 34, 0.3);
      border-radius: 24px;
      padding: 38px 34px;
      margin-bottom: 45px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    }}
    .notes-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 24px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }}
    .notes-title {{
      font-size: 1.35rem;
      font-weight: 900;
      color: #ffffff;
    }}
    .notes-subtitle {{
      font-size: 0.82rem;
      color: #ffb300;
      font-weight: 800;
      text-transform: uppercase;
      display: block;
      margin-top: 2px;
    }}
    .action-btn {{
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #ffffff;
      padding: 8px 18px;
      border-radius: 999px;
      font-size: 0.84rem;
      font-weight: 800;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      transition: all 0.2s;
    }}
    .action-btn:hover {{
      background: #ff5722;
      border-color: #ff5722;
      color: #ffffff;
    }}
    .caption-box {{
      background: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 24px;
      font-size: 0.95rem;
      line-height: 1.75;
      color: #e2e8f0;
      white-space: pre-line;
      margin-bottom: 34px;
    }}
    .section-subtitle {{
      font-size: 1.15rem;
      font-weight: 900;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 16px;
    }}
    .growth-points {{
      display: flex;
      flex-direction: column;
      gap: 14px;
    }}
    .growth-point-item {{
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }}
    .growth-point-item p {{
      font-size: 0.96rem;
      color: #cbd5e1;
      line-height: 1.55;
    }}
    /* Bottom Navigation */
    .bottom-nav {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }}
    @media (max-width: 640px) {{
      .notes-card {{ padding: 24px 20px; }}
      .metrics-grid {{ grid-template-columns: 1fr; }}
    }}
  </style>
</head>
<body>

  <!-- Top Sticky Navigation Bar -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <a href="../../index.html" class="back-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        <span>All 126 Case Studies Catalog</span>
      </a>
      <div class="nav-group">
        {prev_link}
        <span class="counter-badge">{idx} / {total}</span>
        {next_link}
      </div>
    </div>
  </div>

  <div class="container">
    <!-- Header -->
    <header class="header-section">
      <div class="badges-row">
        <span class="pill-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <span>{category}</span>
        </span>
        <span class="revenue-pill">{revenue}</span>
      </div>
      <h1 class="case-title">{title}</h1>
      <p class="case-summary">{summary}</p>
    </header>

    <!-- Media Stage -->
    <div class="media-stage">
      {media_block}
    </div>

    <!-- Verified Metrics Grid -->
    <div class="metrics-grid">
      {metrics_html}
    </div>

    <!-- Campaign Notes & Original Caption -->
    <div class="notes-card">
      <div class="notes-header">
        <div>
          <h2 class="notes-title">Original Campaign Strategy & Notes</h2>
          <span class="notes-subtitle">Verified Instagram Breakdown (@gauravecomm)</span>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button id="copyBtn" class="action-btn" onclick="copyCaption()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span id="copyBtnText">Copy Description</span>
          </button>
          {'<a href="' + insta_url + '" target="_blank" rel="noopener noreferrer" class="action-btn">View on Instagram ↗</a>' if insta_url else ''}
        </div>
      </div>

      <div class="caption-box">
{full_caption}
      </div>

      <h3 class="section-subtitle">Key Growth & Scaling Insights</h3>
      <div class="growth-points">
        {growth_points_html}
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
      {prev_link}
      <a href="../../index.html" class="back-link">Back to Master Index</a>
      {next_link}
    </div>
  </div>

  <script>
    const fullCaptionText = {raw_caption_json};
    function copyCaption() {{
      navigator.clipboard.writeText(fullCaptionText).then(() => {{
        const btn = document.getElementById('copyBtnText');
        btn.innerText = 'Copied to Clipboard!';
        setTimeout(() => {{
          btn.innerText = 'Copy Description';
        }}, 2200);
      }}).catch(err => {{
        alert('Description copied to clipboard');
      }});
    }}
  </script>
</body>
</html>
"""

def build_master_gallery_html(all_studies):
    cards_html = []
    for s in all_studies:
        idx = s['index']
        folder = s['folder_name']
        title = html.escape(s.get('title') or f"Case Study #{idx}")
        category = html.escape(s.get('category') or 'Direct-Response DTC')
        revenue = html.escape(s.get('revenue') or 'Verified Scale')
        roas = html.escape(s.get('roas') or 'N/A')
        img_name = s.get('local_image') or ''
        has_video = bool(s.get('local_video'))
        badge_type = 'VIDEO PROOF' if has_video else 'ANALYTICS BREAKDOWN'
        type_class = 'type-video' if has_video else 'type-image'
        rel_link = f"cases/{folder}/index.html"
        thumb_link = f"cases/{folder}/{img_name}" if img_name else ''

        card = f"""
        <div class="study-card {type_class}" data-type="{'video' if has_video else 'image'}" data-title="{title.lower()}" data-rev="{revenue.lower()}">
          <a href="{rel_link}" class="card-link">
            <div class="card-thumb-wrap">
              <img src="{thumb_link}" alt="{title}" loading="lazy" class="card-thumb" />
              <div class="thumb-badge {'badge-video' if has_video else 'badge-img'}">
                {badge_type}
              </div>
              <div class="roas-tag">{roas}</div>
            </div>
            <div class="card-body">
              <div class="card-meta">
                <span class="card-cat">{category}</span>
                <span class="card-idx">#{idx:03d}</span>
              </div>
              <h3 class="card-title">{title}</h3>
              <div class="card-footer">
                <span class="card-rev">{revenue}</span>
                <span class="view-btn">View Details →</span>
              </div>
            </div>
          </a>
        </div>
        """
        cards_html.append(card)

    cards_joined = "\n".join(cards_html)
    total_count = len(all_studies)
    video_count = sum(1 for s in all_studies if s.get('local_video'))
    img_count = total_count - video_count

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brand Scaling Hacks — 126 Verified Case Studies Master Archive</title>
  <style>
    *, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #04060b;
      color: #ffffff;
      line-height: 1.6;
      min-height: 100vh;
      padding-bottom: 90px;
    }}
    .container {{
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 24px;
    }}
    /* Top Brand Hero */
    .hero-banner {{
      text-align: center;
      padding: 60px 0 40px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      margin-bottom: 40px;
      background: radial-gradient(circle at top, rgba(255, 87, 34, 0.12) 0%, transparent 70%);
    }}
    .brand-kicker {{
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      color: #ff7043;
      text-transform: uppercase;
      background: rgba(255, 87, 34, 0.1);
      border: 1px solid rgba(255, 87, 34, 0.3);
      padding: 6px 18px;
      border-radius: 999px;
      margin-bottom: 18px;
    }}
    .hero-title {{
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 950;
      line-height: 1.15;
      letter-spacing: -0.025em;
      margin-bottom: 16px;
    }}
    .hero-title span {{
      color: #ff5722;
      background: linear-gradient(135deg, #ff7a50 0%, #ff5722 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }}
    .hero-subtitle {{
      font-size: 1.15rem;
      color: #94a3b8;
      max-width: 800px;
      margin: 0 auto;
    }}
    /* Controls Bar */
    .controls-bar {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 16px 24px;
      border-radius: 20px;
      margin-bottom: 35px;
    }}
    .filters-group {{
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }}
    .filter-btn {{
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
      padding: 8px 18px;
      border-radius: 999px;
      font-size: 0.86rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.2s;
    }}
    .filter-btn:hover, .filter-btn.active {{
      background: #ff5722;
      border-color: #ff5722;
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(255, 87, 34, 0.35);
    }}
    .search-input {{
      background: #090d16;
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #ffffff;
      padding: 10px 18px;
      border-radius: 999px;
      font-size: 0.9rem;
      min-width: 260px;
      outline: none;
      transition: border-color 0.2s;
    }}
    .search-input:focus {{
      border-color: #ff5722;
    }}
    /* Gallery Grid */
    .gallery-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 24px;
    }}
    .study-card {{
      background: #0d121c;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      overflow: hidden;
      transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
      display: flex;
      flex-direction: column;
    }}
    .study-card:hover {{
      transform: translateY(-5px);
      border-color: rgba(255, 87, 34, 0.5);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 87, 34, 0.12);
    }}
    .card-link {{
      color: inherit;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      height: 100%;
    }}
    .card-thumb-wrap {{
      position: relative;
      width: 100%;
      height: 260px;
      background: #000000;
      overflow: hidden;
    }}
    .card-thumb {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.35s;
    }}
    .study-card:hover .card-thumb {{
      transform: scale(1.05);
    }}
    .thumb-badge {{
      position: absolute;
      top: 12px;
      left: 12px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.05em;
      padding: 4px 10px;
      border-radius: 999px;
      text-transform: uppercase;
      box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    }}
    .badge-video {{
      background: rgba(255, 87, 34, 0.95);
      color: #ffffff;
    }}
    .badge-img {{
      background: rgba(30, 41, 59, 0.95);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.3);
    }}
    .roas-tag {{
      position: absolute;
      bottom: 12px;
      right: 12px;
      background: rgba(0, 0, 0, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #4ade80;
      font-size: 0.78rem;
      font-weight: 900;
      padding: 4px 10px;
      border-radius: 8px;
    }}
    .card-body {{
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
    }}
    .card-meta {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }}
    .card-cat {{
      font-size: 0.75rem;
      font-weight: 800;
      color: #ff7043;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }}
    .card-idx {{
      font-family: ui-monospace, monospace;
      font-size: 0.76rem;
      color: #64748b;
      font-weight: 700;
    }}
    .card-title {{
      font-size: 1.05rem;
      font-weight: 850;
      line-height: 1.35;
      color: #ffffff;
      margin-bottom: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }}
    .card-footer {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 14px;
      margin-top: auto;
    }}
    .card-rev {{
      font-size: 0.92rem;
      font-weight: 950;
      color: #ffffff;
    }}
    .view-btn {{
      font-size: 0.82rem;
      font-weight: 800;
      color: #ff7043;
    }}
    .empty-state {{
      text-align: center;
      padding: 60px 0;
      color: #94a3b8;
      display: none;
    }}
  </style>
</head>
<body>

  <header class="hero-banner">
    <div class="container">
      <span class="brand-kicker">BRAND SCALING HACKS • COMPLETE OFFLINE ARCHIVE</span>
      <h1 class="hero-title">126 Verified <span>Case Studies</span> Catalog</h1>
      <p class="hero-subtitle">
        Every single real case study with its full detail page, original strategy notes, metrics, video screen recordings, and high-res analytics dashboards.
      </p>
    </div>
  </header>

  <div class="container">
    <div class="controls-bar">
      <div class="filters-group">
        <button class="filter-btn active" onclick="setFilter('all', this)">All Case Studies ({total_count})</button>
        <button class="filter-btn" onclick="setFilter('video', this)">Video Proofs ({video_count})</button>
        <button class="filter-btn" onclick="setFilter('image', this)">Dashboard Breakdowns ({img_count})</button>
      </div>
      <div>
        <input type="text" id="searchInput" class="search-input" placeholder="Search by title, revenue, ROAS..." oninput="handleSearch()" />
      </div>
    </div>

    <div class="gallery-grid" id="galleryGrid">
      {cards_joined}
    </div>

    <div class="empty-state" id="emptyState">
      <h3>No case studies matched your filter criteria</h3>
    </div>
  </div>

  <script>
    let currentFilter = 'all';

    function setFilter(filter, btn) {{
      currentFilter = filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards();
    }}

    function handleSearch() {{
      filterCards();
    }}

    function filterCards() {{
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.study-card');
      let visibleCount = 0;

      cards.forEach(card => {{
        const type = card.getAttribute('data-type');
        const title = card.getAttribute('data-title');
        const rev = card.getAttribute('data-rev');

        const matchesType = (currentFilter === 'all') || (type === currentFilter);
        const matchesQuery = !query || title.includes(query) || rev.includes(query);

        if (matchesType && matchesQuery) {{
          card.style.display = 'flex';
          visibleCount++;
        }} else {{
          card.style.display = 'none';
        }}
      }});

      document.getElementById('emptyState').style.display = visibleCount === 0 ? 'block' : 'none';
    }}
  </script>
</body>
</html>
"""

def main():
    print(f"Creating export directory: {EXPORT_DIR}")
    if os.path.exists(EXPORT_DIR):
        shutil.rmtree(EXPORT_DIR)
    os.makedirs(EXPORT_DIR, exist_ok=True)

    cases_dir = os.path.join(EXPORT_DIR, 'cases')
    os.makedirs(cases_dir, exist_ok=True)

    with open(os.path.join(PROJECT_ROOT, 'src', 'data', 'allCaseStudies.js'), 'r') as f:
        content = f.read()
    
    match = re.search(r'export const allCaseStudies = (\[[\s\S]*\]);?', content)
    if not match:
        print("Failed to parse allCaseStudies.js")
        sys.exit(1)
        
    case_studies = json.loads(match.group(1))
    total_count = len(case_studies)
    print(f"Found {total_count} case studies to export.")

    processed_studies = []
    csv_rows = []

    for i, cs in enumerate(case_studies):
        idx = i + 1
        cs_id = cs.get('id') or f"case_{idx}"
        folder_name = f"{idx:03d}_{cs_id}"
        case_folder = os.path.join(cases_dir, folder_name)
        os.makedirs(case_folder, exist_ok=True)

        # Copy image
        raw_img = cs.get('image') or ''
        resolved_img = resolve_file(raw_img)
        local_img_name = ''
        if resolved_img:
            _, ext = os.path.splitext(resolved_img)
            local_img_name = f"image{ext}"
            shutil.copy2(resolved_img, os.path.join(case_folder, local_img_name))

        # Copy video
        raw_vid = cs.get('videoUrl') or ''
        resolved_vid = resolve_file(raw_vid)
        local_vid_name = ''
        if resolved_vid:
            _, ext = os.path.splitext(resolved_vid)
            local_vid_name = f"video{ext}"
            shutil.copy2(resolved_vid, os.path.join(case_folder, local_vid_name))

        # Store metadata
        meta = dict(cs)
        meta['index'] = idx
        meta['local_image'] = local_img_name
        meta['local_video'] = local_vid_name
        meta['folder_name'] = folder_name

        processed_studies.append(meta)

        # Write metadata.json
        with open(os.path.join(case_folder, 'metadata.json'), 'w', encoding='utf-8') as f:
            json.dump(meta, f, indent=2, ensure_ascii=False)

        # Write description.txt
        caption = cs.get('fullCaption') or cs.get('summary') or ''
        with open(os.path.join(case_folder, 'description.txt'), 'w', encoding='utf-8') as f:
            f.write(caption)

        # Write details.md
        md_content = f"""# {cs.get('title')}

- **Case Study #**: {idx} of {total_count}
- **Category**: {cs.get('category')}
- **Verified Revenue**: {cs.get('revenue')}
- **Target ROAS**: {cs.get('roas')}
- **Niche**: {cs.get('niche') or cs.get('brand')}
- **Framework**: {cs.get('system')}
- **Instagram URL**: {cs.get('instagramUrl') or 'N/A'}
- **Media**: {'Video Proof (' + local_vid_name + ')' if local_vid_name else 'Image Dashboard (' + local_img_name + ')'}

## Summary
{cs.get('summary')}

## Original Campaign Strategy & Notes
```
{caption}
```

## Key Growth & Scaling Insights
"""
        for pt in cs.get('growthPoints', []):
            md_content += f"- {pt}\n"

        with open(os.path.join(case_folder, 'details.md'), 'w', encoding='utf-8') as f:
            f.write(md_content)

        # Prepare CSV row
        csv_rows.append({
            'Index': idx,
            'ID': cs_id,
            'Title': cs.get('title'),
            'Revenue': cs.get('revenue'),
            'ROAS': cs.get('roas'),
            'Category': cs.get('category'),
            'Niche': cs.get('niche') or cs.get('brand'),
            'Type': 'video' if local_vid_name else 'image',
            'Image_File': f"cases/{folder_name}/{local_img_name}" if local_img_name else '',
            'Video_File': f"cases/{folder_name}/{local_vid_name}" if local_vid_name else '',
            'Instagram_URL': cs.get('instagramUrl') or '',
            'Detail_Page': f"cases/{folder_name}/index.html"
        })

    # Now generate index.html for each case study with proper prev/next links
    print("Generating individual detail pages...")
    for i, meta in enumerate(processed_studies):
        idx = i + 1
        folder_name = meta['folder_name']
        case_folder = os.path.join(cases_dir, folder_name)

        prev_folder = processed_studies[i - 1]['folder_name'] if i > 0 else processed_studies[-1]['folder_name']
        next_folder = processed_studies[i + 1]['folder_name'] if i < len(processed_studies) - 1 else processed_studies[0]['folder_name']

        html_content = build_detail_html(
            cs=meta,
            idx=idx,
            total=total_count,
            prev_folder=prev_folder,
            next_folder=next_folder,
            local_img_name=meta['local_image'],
            local_vid_name=meta['local_video']
        )

        with open(os.path.join(case_folder, 'index.html'), 'w', encoding='utf-8') as f:
            f.write(html_content)

    # Master Gallery index.html
    print("Generating master gallery index.html...")
    gallery_html = build_master_gallery_html(processed_studies)
    with open(os.path.join(EXPORT_DIR, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(gallery_html)

    # Master JSON
    with open(os.path.join(EXPORT_DIR, 'case_studies_data.json'), 'w', encoding='utf-8') as f:
        json.dump(processed_studies, f, indent=2, ensure_ascii=False)

    # Master CSV
    with open(os.path.join(EXPORT_DIR, 'case_studies_summary.csv'), 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['Index', 'ID', 'Title', 'Revenue', 'ROAS', 'Category', 'Niche', 'Type', 'Image_File', 'Video_File', 'Instagram_URL', 'Detail_Page']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(csv_rows)

    # Create README in export folder
    readme_text = f"""# Brand Scaling Hacks — 126 Case Studies Offline Archive

This package contains the complete offline archive of all **126 verified case studies** from Brand Scaling Hacks.

## Contents
- **`index.html`**: Master visual catalog with filters (All, Video Proofs, Image Breakdowns) and instant search. Double-click to open in any web browser.
- **`case_studies_summary.csv`**: Complete tabular spreadsheet of all 126 case studies with revenue, ROAS, links, and filenames.
- **`case_studies_data.json`**: Master JSON export containing all structured data.
- **`cases/`**: 126 dedicated subdirectories (one for each case study):
  - `index.html`: Fully styled, standalone detail page with video/image player, verified metrics, copy description button, and strategy notes.
  - `details.md`: Formatted Markdown report.
  - `description.txt`: Original text caption / campaign breakdown.
  - `metadata.json`: Individual structured data.
  - Media files (`video.mp4` / `image.jpg`) copied locally into each case study folder.

Total Case Studies: {total_count}
Video Proofs: {sum(1 for s in processed_studies if s.get('local_video'))}
Image Proofs: {sum(1 for s in processed_studies if not s.get('local_video'))}
"""
    with open(os.path.join(EXPORT_DIR, 'README.md'), 'w', encoding='utf-8') as f:
        f.write(readme_text)

    # Create ZIP Archive
    print(f"Creating zip file: {ZIP_FILE} ...")
    if os.path.exists(ZIP_FILE):
        os.remove(ZIP_FILE)

    with zipfile.ZipFile(ZIP_FILE, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as zipf:
        for root, dirs, files in os.walk(EXPORT_DIR):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, os.path.dirname(EXPORT_DIR))
                zipf.write(file_path, arcname)

    zip_size_mb = os.path.getsize(ZIP_FILE) / (1024 * 1024)
    print(f"Zip created successfully! Size: {zip_size_mb:.2f} MB")
    print("Done!")

if __name__ == '__main__':
    main()
