// The only file that changes when a link is saved.
// New category? Add it to `categories` with an unused hue (0-360); the site picks it up automatically.
// Each link: { title, url, cat, note, added, tags: ["UI", "Assets"] }. Tags are searchable; reuse existing ones before inventing new ones.
window.LINKBASE = {
  categories: [
    { id: "inspiration", name: "Design Inspiration", hue: 340, blurb: "Sites and galleries that raise the bar." },
    { id: "ai",          name: "AI Tools",           hue: 265, blurb: "Models and apps that do the heavy lifting." },
    { id: "dev",         name: "Dev Tools",          hue: 190, blurb: "Small utilities that save real time." },
    { id: "assets",      name: "Free Assets",        hue: 150, blurb: "Fonts, icons, palettes and images." },
    { id: "learn",       name: "Learn",              hue: 45,  blurb: "Explainers worth coming back to." },
    { id: "rabbit",      name: "Rabbit Holes",       hue: 15,  blurb: "No purpose. Extremely cool." },
  ],
  links: [],
};
