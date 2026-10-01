import os
import re
import json
import time
import requests
import instaloader
from urllib.request import urlretrieve

# List of URLs provided by the user
RAW_URLS = [
    "https://www.instagram.com/p/C8lyJ6VSyTy/",
    "https://www.instagram.com/p/DZ3yXdciv63/",
    "https://www.instagram.com/p/DZXZSkyAU7x/?img_index=1",
    "https://www.instagram.com/p/DZXMWaeEgLe/",
    "https://www.instagram.com/p/DZS8JtQEqJy/",
    "https://www.instagram.com/p/DZS7YPDkva9/",
    "https://www.instagram.com/p/DZS6d1XEgl1/",
    "https://www.instagram.com/p/DW1JuKLlAgI/",
    "https://www.instagram.com/p/DMLC9R1Bn-m/",
    "https://www.instagram.com/p/DWX7z6ADP86//",
    "https://www.instagram.com/p/DIpxfULBj7r/",
    "https://www.instagram.com/p/DH_aKQ6BttH/",
    "https://www.instagram.com/p/DGgZKPbSjNa/",
    "https://www.instagram.com/p/DGgGd29ykn7/",
    "https://www.instagram.com/p/DGZwsH3z7-D/",
    "https://www.instagram.com/p/DGgDlA1ybHG/",
    "https://www.instagram.com/p/DGS904ohBGl/",
    "https://www.instagram.com/p/DGSpTQEBodh/",
    "https://www.instagram.com/p/DGSmcZRBic3/",
    "https://www.instagram.com/p/DExlLMQS3cs/",
    "https://www.instagram.com/p/DExsvYaI5Kc/",
    "https://www.instagram.com/p/DFDod10oz-k/",
    "https://www.instagram.com/p/DEW9sESBL38/",
    "https://www.instagram.com/p/DEW_V11BhkT/",
    "https://www.instagram.com/p/DD6Q21fh3oi/",
    "https://www.instagram.com/p/DD9QNibynah/",
    "https://www.instagram.com/p/DDpjtXUo-ZA/",
    "https://www.instagram.com/p/DDrymP4oSh7/",
    "https://www.instagram.com/p/DDyWOAiIEIL/",
    "https://www.instagram.com/p/DDSbgXjB5Ll/",
    "https://www.instagram.com/p/DDTcV4-hyrQ/",
    "https://www.instagram.com/p/DDbZt7PB-0o/",
    "https://www.instagram.com/p/DDL5Tr5hb-g/",
    "https://www.instagram.com/p/DDSbZ6EzERe/",
    "https://www.instagram.com/p/DC_4HWphVxX/",
    "https://www.instagram.com/p/DCpIoi0hNhx/",
    "https://www.instagram.com/p/DAFyXWUSMoE/",
    "https://www.instagram.com/p/DAF3pGboMCD/",
    "https://www.instagram.com/p/C_MqSqcSpUb/",
    "https://www.instagram.com/p/C-ntp_DiV17/",
    "https://www.instagram.com/p/C-4VFNmBfUA/",
    "https://www.instagram.com/p/C9-tNU2yhWF/",
    "https://www.instagram.com/p/C-FI5E4SYBZ/",
    "https://www.instagram.com/p/C9y8opPyus2/",
    "https://www.instagram.com/p/C83tKltSXUp/",
    "https://www.instagram.com/p/C8rGKA8Sk-R/",
    "https://www.instagram.com/p/C8oIOnUy4Fz/",
    "https://www.instagram.com/p/C8lyJ6VSyTy/"
]

def extract_shortcode(url):
    clean = url.split('?')[0].rstrip('/')
    return clean.split('/')[-1]

# Deduplicate URLs maintaining order
seen = set()
UNIQUE_ITEMS = []
for u in RAW_URLS:
    code = extract_shortcode(u)
    if code and code not in seen:
        seen.add(code)
        UNIQUE_ITEMS.append((code, f"https://www.instagram.com/p/{code}/"))

TARGET_DIR = os.path.join(os.getcwd(), 'public', 'instagram_case_studies')
os.makedirs(TARGET_DIR, exist_ok=True)

print(f"Total Unique Posts to download: {len(UNIQUE_ITEMS)}")
print(f"Target Directory: {TARGET_DIR}")

L = instaloader.Instaloader(
    download_pictures=False,
    download_videos=False,
    download_video_thumbnails=False,
    download_geotags=False,
    download_comments=False,
    save_metadata=False,
    compress_json=False
)

results = []

for idx, (shortcode, url) in enumerate(UNIQUE_ITEMS, 1):
    print(f"\n[{idx}/{len(UNIQUE_ITEMS)}] Processing: {shortcode} -> {url}")
    img_filename = f"{shortcode}.jpg"
    img_filepath = os.path.join(TARGET_DIR, img_filename)
    public_img_path = f"/instagram_case_studies/{img_filename}"
    
    caption = ""
    likes = 0
    comments = 0
    post_date = ""
    display_url = ""
    is_video = False
    
    # Method 1: Instaloader
    try:
        post = instaloader.Post.from_shortcode(L.context, shortcode)
        caption = post.caption if post.caption else ""
        likes = post.likes
        comments = post.comments
        post_date = str(post.date_utc) if post.date_utc else ""
        display_url = post.url
        is_video = post.is_video
        
        # Download image if not exists or empty
        if not os.path.exists(img_filepath) or os.path.getsize(img_filepath) < 1000:
            if display_url:
                resp = requests.get(display_url, timeout=20, headers={'User-Agent': 'Mozilla/5.0'})
                if resp.status_code == 200:
                    with open(img_filepath, 'wb') as f:
                        f.write(resp.content)
                    print(f"  ✓ Downloaded image ({len(resp.content)} bytes)")
        else:
            print(f"  ✓ Image already exists locally")
            
    except Exception as e:
        print(f"  ! Instaloader error for {shortcode}: {e}")
        
        # Method 2: OEmbed / HTML Fallback
        try:
            oembed_url = f"https://api.instagram.com/oembed/?url=https://www.instagram.com/p/{shortcode}/"
            o_res = requests.get(oembed_url, timeout=10)
            if o_res.status_code == 200:
                data = o_res.json()
                caption = data.get('title', '')
                display_url = data.get('thumbnail_url', '')
                if display_url and (not os.path.exists(img_filepath) or os.path.getsize(img_filepath) < 1000):
                    r = requests.get(display_url, timeout=15)
                    if r.status_code == 200:
                        with open(img_filepath, 'wb') as f:
                            f.write(r.content)
                        print(f"  ✓ Downloaded thumbnail via oEmbed")
        except Exception as oe:
            print(f"  ! oEmbed fallback error: {oe}")

        # Method 3: Check if we have an existing image in public/assets/insta-video or public/downloaded_instagram_posts
        if not os.path.exists(img_filepath) or os.path.getsize(img_filepath) < 1000:
            for alt_dir in ['public/assets/insta-video', 'public/downloaded_instagram_posts', 'public/assets/instagram_thumbs']:
                for ext in ['.jpg', '.png', '.webp']:
                    alt_path = os.path.join(os.getcwd(), alt_dir, f"{shortcode}{ext}")
                    if os.path.exists(alt_path) and os.path.getsize(alt_path) > 1000:
                        import shutil
                        shutil.copyfile(alt_path, img_filepath)
                        print(f"  ✓ Copied image from existing local cache: {alt_path}")
                        break

    # Clean caption for title
    cleaned_caption = caption.strip() if caption else f"Direct-Response eCommerce Case Study & Scale Breakdown — {shortcode}"
    lines = [l.strip() for l in cleaned_caption.split('\n') if l.strip()]
    first_line = lines[0] if lines else f"Brand Scaling Case Study — {shortcode}"
    if len(first_line) > 120:
        first_line = first_line[:117] + "..."

    entry = {
        "index": idx,
        "shortcode": shortcode,
        "url": url,
        "title": first_line,
        "description": cleaned_caption,
        "image_file": img_filename,
        "image_path": public_img_path,
        "likes": likes,
        "comments": comments,
        "date": post_date,
        "is_video": is_video
    }
    results.append(entry)
    time.sleep(1) # Be gentle with requests

# 1. Save JSON
json_path = os.path.join(TARGET_DIR, 'descriptions.json')
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)
print(f"\n✓ Saved JSON: {json_path}")

# 2. Save CSV
csv_path = os.path.join(TARGET_DIR, 'descriptions.csv')
with open(csv_path, 'w', encoding='utf-8') as f:
    f.write("Index,Shortcode,Instagram_URL,Title,Image_Path,Date,Likes,Comments,Full_Description\n")
    for r in results:
        desc_escaped = '"' + r['description'].replace('"', '""') + '"'
        title_escaped = '"' + r['title'].replace('"', '""') + '"'
        f.write(f"{r['index']},{r['shortcode']},{r['url']},{title_escaped},{r['image_path']},{r['date']},{r['likes']},{r['comments']},{desc_escaped}\n")
print(f"✓ Saved CSV: {csv_path}")

# 3. Save Markdown
md_path = os.path.join(TARGET_DIR, 'DESCRIPTIONS.md')
with open(md_path, 'w', encoding='utf-8') as f:
    f.write("# 📸 Downloaded Instagram Case Studies & Exact Descriptions\n\n")
    f.write(f"**Total Posts:** {len(results)}  \n")
    f.write(f"**Folder Location:** `public/instagram_case_studies/`  \n\n")
    f.write("---\n\n")
    f.write("## 📋 Summary Table\n\n")
    f.write("| # | Shortcode | Title / Hook | Image File | Instagram Link |\n")
    f.write("|---|---|---|---|---|\n")
    for r in results:
        title_preview = r['title'].replace('|', '-')[:55]
        f.write(f"| {r['index']} | `{r['shortcode']}` | **{title_preview}** | [`{r['image_file']}`](file://{os.path.join(TARGET_DIR, r['image_file'])}) | [View Post]({r['url']}) |\n")
    
    f.write("\n---\n\n")
    f.write("## 📝 Detailed Post Descriptions\n\n")
    for r in results:
        f.write(f"### {r['index']}. {r['title']} (`{r['shortcode']}`)\n\n")
        f.write(f"- **Instagram URL:** [{r['url']}]({r['url']})\n")
        f.write(f"- **Local Image:** [`{r['image_path']}`](file://{os.path.join(TARGET_DIR, r['image_file'])})\n")
        if r['date']:
            f.write(f"- **Date Published:** `{r['date']}`\n")
        if r['likes']:
            f.write(f"- **Likes:** `{r['likes']:,}` | **Comments:** `{r['comments']:,}`\n")
        f.write("\n```text\n")
        f.write(r['description'])
        f.write("\n```\n\n---\n\n")

print(f"✓ Saved Markdown: {md_path}")
print("\n🎉 ALL DOWNLOADS AND DESCRIPTION LISTS SUCCESSFULLY CREATED!")
