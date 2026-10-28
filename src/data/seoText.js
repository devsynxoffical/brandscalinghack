// Shared text cleaner for titles and meta descriptions built from Instagram captions.
// Instagram copy is full of emoji and "mathematical bold" Unicode letters (𝗙𝗶𝗻𝗮𝗹𝗹𝘆),
// which look broken in search snippets and break keyword matching. NFKC folds the
// styled letters back to ASCII; the regex strips pictographs and symbols.

const EMOJI_RE = /\p{Extended_Pictographic}|\p{Emoji_Presentation}|\u{FE0F}|\u{200D}|\u{20E3}|[\u{2600}-\u{27BF}]/gu;

export function cleanSeoText(input, maxLength) {
  let text = String(input || '')
    .normalize('NFKC')
    .replace(EMOJI_RE, '')
    .replace(/[\u2060\u00AD\u200B-\u200F]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.!?;:])/g, '$1')
    .trim();
  if (maxLength && text.length > maxLength) {
    const cut = text.slice(0, maxLength - 1);
    const lastSpace = cut.lastIndexOf(' ');
    text = (lastSpace > maxLength * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[,;:\-–]$/, '') + '…';
  }
  return text;
}

// Builds a description from a case study: prefer caption text that goes beyond the
// title; otherwise fall back to the headline numbers.
export function caseStudyDescription(cs) {
  const title = cleanSeoText(cs.title);
  const titleKey = title.replace(/[\s.,…:\-–]+$/, '').slice(0, 40);
  // Work line by line: captions usually open with the headline (sometimes twice),
  // so drop every line that starts with it and keep the first real sentences.
  const lines = String(cs.fullCaption || cs.summary || '')
    .split('\n')
    .map((l) => cleanSeoText(l))
    .filter((l) => l.length > 0 && !(titleKey && l.startsWith(titleKey)));
  let body = lines.join(' ');
  if (body.length < 60) {
    body = `${title}. ${[cs.revenue, cs.roas, cs.system].filter(Boolean).map((v) => cleanSeoText(v)).join(', ')}. Verified Meta ads case study by Brand Scaling.`;
  } else {
    body = `${title}: ${body}`;
  }
  return cleanSeoText(body, 155);
}
