import "./BrandCards.css";

// Put the avatar PNGs in /public/brands/ (paths below are served from the public root).
const BRANDS = [
  { name: "Juice Beauty", cat: "Organic Skincare & Makeup", followers: "357K", handle: "@juicebeauty", url: "https://www.instagram.com/juicebeauty/", img: "/brands/juicebeauty.png" },
  { name: "Vedge Nutrition", cat: "Plant-Based Supplements", followers: "88.7K", handle: "@vedgenutrition", url: "https://www.instagram.com/vedgenutrition/", img: "/brands/vedge.png" },
  { name: "Dr Naomi Skin", cat: "Clinical Skincare & Devices", followers: "85K", handle: "@drnaomiskin", url: "https://www.instagram.com/drnaomiskin/", img: "/brands/drnaomi.png" },
  { name: "Water Jewelers", cat: "Premium Jewelry", followers: "81.1K", handle: "@waterwatch.co", url: "https://www.instagram.com/waterwatch.co", img: "/brands/waterjewelers.png" },
  { name: "Little & Lively", cat: "Canadian-Made Baby & Kids Clothing", followers: "80K", handle: "@littleandlively", url: "https://www.instagram.com/littleandlively/", img: "/brands/littleandlively.png" },
  { name: "Veil Cosmetics", cat: "Vegan Cosmetics", followers: "52.1K", handle: "@veilcosmetics", url: "https://www.instagram.com/veilcosmetics/", img: "/brands/veil.png" },
  { name: "ionBottles", cat: "Hydrogen Water Bottles", followers: "23.3K", handle: "@ionbottles", url: "https://www.instagram.com/ionbottles", img: "/brands/ionbottles.png" },
  { name: "Ghost Democracy", cat: "Clean Skincare", followers: "17.5K", handle: "@ghostdemocracy", url: "https://www.instagram.com/ghostdemocracy/", img: "/brands/ghostdemocracy.png" },
  { name: "Swamp Kitten Jewelry", cat: "Jewelry & Watches", followers: "11K", handle: "Facebook", url: "https://www.facebook.com/kristalizejewelry/", img: "/brands/swampkitten.png" },
];

export default function BrandCards() {
  return (
    <section className="ibg-brands" id="brands">
      <div className="ibg-wrap">
        <div className="ibg-head">
          <div>
            <p className="ibg-kicker">Brands We've Scaled</p>
            <h2 className="ibg-title">Trusted By Brands<br /><em>With Real Audiences</em></h2>
          </div>
          <p className="ibg-sub">Beauty, wellness, apparel and DTC brands we have driven paid media, creative and conversion growth for.</p>
        </div>

        <div className="ibg-grid">
          {BRANDS.map((b) => (
            <a key={b.name} className="ibg-card" href={b.url} target="_blank" rel="noopener noreferrer">
              <div className="ibg-top"><span className="ibg-idx">{b.handle}</span><span className="ibg-arrow">&#8599;</span></div>
              <div className="ibg-avatar"><img src={b.img} alt={b.name} loading="lazy" /></div>
              <h3 className="ibg-name">{b.name}</h3>
              <p className="ibg-cat">{b.cat}</p>
              <div className="ibg-stat"><b>{b.followers}</b><span>Followers</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
