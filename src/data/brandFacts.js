// Single source of truth for brand facts. The footer, About, Contact and Privacy pages read
// from here, and scripts/seo-audit-full.mjs checks that index.html JSON-LD, llms.txt and the
// prerendered pages state the same values. Only verified facts belong here: no founding year
// or price range until the owner confirms them.
export const BRAND = {
  name: 'Brand Scaling',
  legalName: 'Brand Scaling Hacks LLC',
  url: 'https://www.brandscalinghacks.com',
  email: 'team@brandscalinghacks.com',
  address: {
    street: '27 W 24th Street, Suite 702',
    streetLine1: '27 W 24th Street',
    streetLine2: 'Suite 702',
    locality: 'New York',
    region: 'NY',
    postalCode: '10010',
    country: 'United States',
    countryCode: 'US'
  },
  founder: {
    name: 'Gaurav Kapoor',
    role: 'Founder',
    experience: '12+ years in ecommerce, since 2014',
    sameAs: [
      'https://www.linkedin.com/in/gauravecom/',
      'https://www.youtube.com/@gauravecom',
      'https://www.instagram.com/gauravecomm/',
      'https://x.com/gauravecomm',
      'https://www.facebook.com/gaurav.kapoor.3994'
    ]
  },
  sameAs: [
    'https://www.youtube.com/@gauravecom',
    'https://www.instagram.com/gauravecomm/',
    'https://www.facebook.com/groups/brandscalinghacks',
    'https://www.linkedin.com/in/gauravecom/',
    'https://www.facebook.com/gaurav.kapoor.3994'
  ],
  // Stated across the site; see SEO_FIX_REPORT.md "Unverified claims" for the evidence status
  proof: { adSpendManaged: '$50M+', minimumAdSpend: '$10,000 to $20,000 a month' },
  whatsapp: { number: '919625695456', display: '+91 96256 95456' }
};

export const ADDRESS_ONE_LINE = `${BRAND.address.street}, ${BRAND.address.locality}, ${BRAND.address.region} ${BRAND.address.postalCode}, ${BRAND.address.country}`;
