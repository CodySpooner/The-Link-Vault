// The only file that changes when a link is saved.
// New category? Add it to `categories` with an unused hue (0-360); the site picks it up automatically.
// Each link: { title, url, cat, note, added, tags: ["UI", "Assets"], shot: "shots/example.com.jpg" }.
// Tags are searchable; reuse existing ones before inventing new ones. `shot` is an 800x500 screenshot of the site, shown on its card.
window.LINKBASE = {
  categories: [
    { id: "inspiration", name: "Design Inspiration", hue: 340, blurb: "Sites and galleries that raise the bar." },
    { id: "ai",          name: "AI Tools",           hue: 265, blurb: "Models and apps that do the heavy lifting." },
    { id: "dev",         name: "Dev Tools",          hue: 190, blurb: "Small utilities that save real time." },
    { id: "assets",      name: "Free Assets",        hue: 150, blurb: "Fonts, icons, palettes and images." },
    { id: "learn",       name: "Learn",              hue: 45,  blurb: "Explainers worth coming back to." },
    { id: "rabbit",      name: "Rabbit Holes",       hue: 15,  blurb: "No purpose. Extremely cool." },
    { id: "startups",    name: "Startups",           hue: 215, blurb: "Real businesses and the numbers behind them." },
  ],
  links: [
    { title: "TrustMRR", url: "https://trustmrr.com", cat: "startups", note: "A database of startups with verified revenue: a leaderboard ranked by monthly income, plus a marketplace to buy and sell them.", added: "2026-11-10", tags: ["Startups", "Revenue", "SaaS"], shot: "shots/trustmrr.com.jpg" },
  ],
};
