import subprocess
import os
import json
import concurrent.futures

with open('urls_to_download.txt', 'r') as f:
    urls = [line.strip() for line in f if line.strip()]

output_dir = 'public/assets/insta-video'
os.makedirs(output_dir, exist_ok=True)

print(f"Starting download of {len(urls)} Instagram videos into {output_dir}...")

def download_video(url):
    code = url.rstrip('/').split('/')[-1]
    video_path = os.path.join(output_dir, f"{code}.mp4")
    thumb_path = os.path.join(output_dir, f"{code}.jpg")
    
    # If already downloaded, skip
    if os.path.exists(video_path) and os.path.getsize(video_path) > 1000:
        return {"shortcode": code, "status": "already_exists", "video": f"/assets/insta-video/{code}.mp4", "image": f"/assets/insta-video/{code}.jpg"}
        
    cmd = [
        "yt-dlp",
        "-o", f"{output_dir}/{code}.%(ext)s",
        "--write-thumbnail",
        "--no-playlist",
        "--write-info-json",
        url
    ]
    try:
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, timeout=60)
        if res.returncode == 0:
            return {"shortcode": code, "status": "success", "video": f"/assets/insta-video/{code}.mp4", "image": f"/assets/insta-video/{code}.jpg"}
        else:
            return {"shortcode": code, "status": "failed", "error": res.stderr}
    except Exception as e:
        return {"shortcode": code, "status": "exception", "error": str(e)}

results = []
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
    futures = {executor.submit(download_video, url): url for url in urls}
    for future in concurrent.futures.as_completed(futures):
        res = future.result()
        print(f"[{res.get('status')}] {res.get('shortcode')}")
        results.append(res)

with open('download_results.json', 'w') as f:
    json.dump(results, f, indent=2)

print("Download process complete!")
