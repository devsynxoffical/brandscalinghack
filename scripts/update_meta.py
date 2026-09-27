import json
import re

with open('src/data/instaVideosData.js', 'r', encoding='utf-8') as f:
    content = f.read()
    json_str = content.replace('export const instaVideosList = ', '').rstrip(';\n')
    videos = json.loads(json_str)

print(f"Total videos loaded: {len(videos)}")

# Load existing instagramMetadata.js
with open('src/data/instagramMetadata.js', 'r', encoding='utf-8') as f:
    meta_content = f.read()

# For each video, create an entry if not already present in meta_content
added_count = 0
entries_text = []

for v in videos:
    code = v['shortcode']
    if f"'{code}': {{" in meta_content or f'"{code}": {{' in meta_content:
        continue
    
    title = v['title'].replace("'", "\\'")
    subtitle = v.get('subtitle', 'eCommerce Performance Reel').replace("'", "\\'")
    revenue = v.get('revenue', '$50,000+ Scaled')
    roas = v.get('roas', '4.2x ROAS')
    badge = v.get('badge', 'INSTAGRAM REEL')
    caption = v.get('caption', 'Performance creative, ad scaling strategies, and eCommerce growth engine results.').replace('`', '\\`').replace('${', '\\${')
    
    entry = f"""  // Reel {code}
  '{code}': {{
    shortcode: '{code}',
    title: '{title}',
    subtitle: '{subtitle}',
    revenue: '{revenue}',
    roas: '{roas}',
    badge: '{badge}',
    caption: `{caption}`,
    instagramUrl: 'https://www.instagram.com/reel/{code}/'
  }},"""
    entries_text.append(entry)
    added_count += 1

print(f"Adding {added_count} new entries to instagramMetadata.js")

if added_count > 0:
    insert_point = "export const instagramProofData = {"
    new_meta_content = meta_content.replace(
        insert_point,
        insert_point + "\n" + "\n".join(entries_text)
    )
    with open('src/data/instagramMetadata.js', 'w', encoding='utf-8') as f:
        f.write(new_meta_content)
    print("Successfully updated src/data/instagramMetadata.js!")
