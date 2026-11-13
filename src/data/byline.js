// Visible author and date line for guides, comparisons, benchmarks, tools, glossary and case studies.
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const humanDate = (iso) => { const [y, m, d] = String(iso).slice(0, 10).split('-').map(Number); return `${MONTHS[m - 1]} ${d}, ${y}`; };
export const BYLINE_KINDS = new Set(['comparison', 'benchmark', 'tool', 'glossary']);
export const AUTHOR = { name: 'Gaurav Kapoor', role: 'Founder, Brand Scaling', url: '/about' };
