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
    { id: "research",    name: "Market Research",    hue: 95,  blurb: "Find out what is worth building before you build it." },
    { id: "launch",      name: "Launch Boards",      hue: 300, blurb: "Where new products show up first." },
  ],
  links: [
    { title: "TrustMRR", url: "https://trustmrr.com", cat: "startups", note: "A database of startups with verified revenue: a leaderboard ranked by monthly income, plus a marketplace to buy and sell them.", added: "2026-11-10", tags: ["Startups", "Revenue", "SaaS"], shot: "shots/trustmrr.com.jpg" },
    { title: "Indie Hackers Ideas", url: "https://www.indiehackers.com/ideas", cat: "startups", note: "A database of reports on startup ideas that already work, each listed with the business's monthly revenue.", added: "2026-11-10", tags: ["Startups", "Ideas", "Revenue"], shot: "shots/indiehackers.com.jpg" },

    { title: "NoctralSpy", url: "https://noctralspy.com/explorar", cat: "research", note: "App market research: estimated revenue, downloads, rankings and competitors for App Store and Google Play apps. Needs a sign-in.", added: "2026-11-10", tags: ["Apps", "Research", "Revenue"], shot: "shots/noctralspy.com.jpg" },
    { title: "App Store Tracker", url: "https://www.appstoretracker.com", cat: "research", note: "Daily iPhone App Store rankings: which apps are climbing and falling fastest, new releases and new number ones, across 100+ countries.", added: "2026-11-10", tags: ["Apps", "Rankings", "Research"], shot: "shots/appstoretracker.com.jpg" },
    { title: "Can I Vibecode It?", url: "https://canivibecodeit.com", cat: "research", note: "A scoreboard of 1,000+ apps judged on one question: can AI build you a replacement today, or is it still worth paying for?", added: "2026-11-10", tags: ["AI", "Research", "SaaS"], shot: "shots/canivibecodeit.com.jpg" },

    { title: "Product Hunt", url: "https://www.producthunt.com", cat: "launch", note: "The daily leaderboard of new tech products, voted on by the community.", added: "2026-11-10", tags: ["Launch", "Startups", "Community"], shot: "shots/producthunt.com.jpg" },
    { title: "UppLaunch", url: "https://www.upplaunch.com", cat: "launch", note: "A weekly launch board for indie makers: list a product, collect upvotes and a backlink, and every week stays in a public archive.", added: "2026-11-10", tags: ["Launch", "Indie", "Backlinks"], shot: "shots/upplaunch.com.jpg" },
    { title: "TinyShelf", url: "https://www.tinyshelf.co", cat: "launch", note: "A small, hand-reviewed directory of good software, browsable by category or tag.", added: "2026-11-10", tags: ["Directory", "Software", "Indie"], shot: "shots/tinyshelf.co.jpg" },
  ],
};
