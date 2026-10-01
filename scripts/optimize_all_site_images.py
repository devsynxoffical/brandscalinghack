import os
import glob
from PIL import Image

def optimize_png(filepath, max_size=800, quality=82):
    try:
        orig_size = os.path.getsize(filepath)
        if orig_size < 100 * 1024: # already under 100KB
            return
        
        with Image.open(filepath) as img:
            # Resize if too large
            w, h = img.size
            if max(w, h) > max_size:
                ratio = max_size / float(max(w, h))
                new_size = (int(w * ratio), int(h * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)
            
            # Save optimized PNG with quantize / optimize if has alpha, or save compressed
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                img.save(filepath, format='PNG', optimize=True)
            else:
                img = img.convert('RGB')
                img.save(filepath, format='PNG', optimize=True)
                
        new_size = os.path.getsize(filepath)
        print(f"[PNG] {filepath}: {orig_size//1024}KB -> {new_size//1024}KB ({(1 - new_size/orig_size)*100:.1f}% reduction)")
    except Exception as e:
        print(f"Error optimizing {filepath}: {e}")

def optimize_jpg(filepath, max_size=900, quality=78):
    try:
        orig_size = os.path.getsize(filepath)
        if orig_size < 75 * 1024: # already under 75KB
            return
        
        with Image.open(filepath) as img:
            w, h = img.size
            if max(w, h) > max_size:
                ratio = max_size / float(max(w, h))
                new_size = (int(w * ratio), int(h * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)
            
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            img.save(filepath, format='JPEG', quality=quality, optimize=True, progressive=True)
            
        new_size = os.path.getsize(filepath)
        print(f"[JPG] {filepath}: {orig_size//1024}KB -> {new_size//1024}KB ({(1 - new_size/orig_size)*100:.1f}% reduction)")
    except Exception as e:
        print(f"Error optimizing {filepath}: {e}")

def run():
    print("Starting full site image optimization...")
    
    # 1. Optimize teamm/ and team/
    for p in glob.glob("public/teamm/*.png") + glob.glob("public/teamm/*.jpg") + glob.glob("public/team/*.jpeg") + glob.glob("public/team/*.jpg") + glob.glob("public/team/*.png"):
        if p.endswith('.png'):
            optimize_png(p, max_size=700)
        else:
            optimize_jpg(p, max_size=700)

    # 2. Optimize assets/
    for p in glob.glob("public/assets/**/*.png", recursive=True):
        optimize_png(p, max_size=1000)
    for p in glob.glob("public/assets/**/*.jpg", recursive=True):
        optimize_jpg(p, max_size=900)

    # 3. Optimize instagram case studies
    for p in glob.glob("public/instagram_case_studies/*.jpg") + glob.glob("public/downloaded_instagram_posts/*.jpg"):
        optimize_jpg(p, max_size=750, quality=76)
        
    # 4. Optimize brands/
    for p in glob.glob("public/brands/*.png") + glob.glob("public/brands/*.jpg") + glob.glob("public/brands/*.webp"):
        if p.endswith('.png'):
            optimize_png(p, max_size=500)
        elif p.endswith('.jpg'):
            optimize_jpg(p, max_size=500)

    print("All image optimizations complete!")

if __name__ == '__main__':
    run()
