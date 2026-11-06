import React, { useEffect, useRef, useState } from 'react';

// Muted looping video that only downloads and plays while it is near the viewport.
// Until then it shows the poster image, so pages with many autoplay clips (proof walls,
// creative marquees) no longer download every MP4 on load.
export default function LazyVideo({ src, poster, alt = '', className, style, rootMargin = '200px' }) {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setNear(true); return undefined; }
    const io = new IntersectionObserver(([entry]) => {
      setNear(entry.isIntersecting);
      if (!entry.isIntersecting && !el.paused) el.pause();
    }, { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const el = ref.current;
    if (el && near && el.paused) el.play().catch(() => {});
  }, [near]);

  return (
    <video
      ref={ref}
      // src is attached the first time the clip comes near the screen and kept afterwards
      src={near || (ref.current && ref.current.getAttribute('src')) ? src : undefined}
      poster={poster}
      aria-label={alt || undefined}
      muted
      loop
      playsInline
      preload="none"
      className={className}
      style={style}
    />
  );
}
