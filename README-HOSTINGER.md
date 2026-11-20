# Brand Scaling Hacks: Hostinger build

This branch holds the finished website, ready to serve. It has no source code and needs no build step.
`.htaccess` handles https and www, the 301 redirects, URLs without trailing slashes, the 404 page, headers and caching.

Rebuild it from the main branch with: npm run build && node scripts/build-hostinger.cjs, then copy dist/ here.
