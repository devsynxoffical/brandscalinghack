import os
import json
import glob
import re
import subprocess

video_dir = 'public/assets/insta-video'
mp4_files = glob.glob(os.path.join(video_dir, '*.mp4'))

processed = []

for mp4 in mp4_files:
    try:
        shortcode = os.path.basename(mp4).replace('.mp4', '')
        info_file = os.path.join(video_dir, f"{shortcode}.info.json")
        thumb_file = os.path.join(video_dir, f"{shortcode}.jpg")

        # Generate thumbnail with ffmpeg if not present
        if not os.path.exists(thumb_file) or os.path.getsize(thumb_file) < 100:
            subprocess.run([
                "ffmpeg", "-y", "-ss", "00:00:01", "-i", mp4, "-vframes", "1", "-q:v", "2", thumb_file
            ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

        title = f"Growth & Scaling Breakdown #{shortcode}"
        caption = "Performance creative, ad scaling strategies, and eCommerce growth engine results."
        
        if os.path.exists(info_file):
            with open(info_file, 'r', encoding='utf-8') as jf:
                data = json.load(jf)
                caption = data.get('description') or ''
                if caption:
                    lines = [l.strip() for l in caption.split('\n') if l.strip()]
                    if lines:
                        title = lines[0]

        # Clean title
        clean_title = title.strip()
        if len(clean_title) > 65:
            clean_title = clean_title[:62] + '...'
            
        video_src = f"/assets/insta-video/{shortcode}.mp4"
        thumb_src = f"/assets/insta-video/{shortcode}.jpg"
        
        # Extract revenue / ROAS from caption
        rev_match = re.search(r'(\$[\d,]+(?:\.\d+)?|\b\d+k\b|\b\d+M\b)', caption, re.IGNORECASE)
        roas_match = re.search(r'(\d+(?:\.\d+)?x?\s*ROAS)', caption, re.IGNORECASE)
        
        revenue = rev_match.group(1).upper() if rev_match else "$50,000+ Scaled"
        roas = roas_match.group(1).upper() if roas_match else "4.2x ROAS"
        
        processed.append({
            "id": f"insta-vid-{shortcode}",
            "shortcode": shortcode,
            "title": clean_title,
            "subtitle": "eCommerce Performance Reel",
            "video": video_src,
            "image": thumb_src,
            "isVideo": True,
            "revenue": revenue,
            "roas": roas,
            "badge": "INSTAGRAM REEL",
            "caption": caption if caption else "Performance creative and scaling breakdown from live campaigns.",
            "url": f"https://www.instagram.com/reel/{shortcode}/",
            "instagramUrl": f"https://www.instagram.com/reel/{shortcode}/"
        })
    except Exception as e:
        print(f"Error processing {mp4}: {e}")

print(f"Processed {len(processed)} downloaded videos.")

# Sort nicely
processed.sort(key=lambda x: x['shortcode'])

with open('src/data/instaVideosData.js', 'w', encoding='utf-8') as out:
    out.write("export const instaVideosList = " + json.dumps(processed, indent=2) + ";\n")

print("Generated src/data/instaVideosData.js successfully!")
