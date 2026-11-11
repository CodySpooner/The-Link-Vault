// The only file that changes when a link is saved.
// New category? Add it to `categories` with an unused hue (0-360); the site picks it up automatically.
// Each link: { title, url, cat, note, added, tags: ["UI", "Assets"], shot: "shots/example.com.jpg" }.
// Tags are searchable; reuse existing ones before inventing new ones. `shot` is an 800x500 screenshot of the site, shown on its card.
window.LINKBASE = {
  categories: [
    { id: "inspiration", name: "Web Inspiration",    hue: 340, blurb: "Galleries of websites that raise the bar." },
    { id: "references",  name: "App & UI References", hue: 20, blurb: "Real screens, icons and small details from shipped apps." },
    { id: "motion",      name: "Motion",             hue: 45,  blurb: "Animation, transitions and things that move." },
    { id: "components",  name: "UI Components",      hue: 190, blurb: "Blocks and templates to build with instead of from scratch." },
    { id: "assets",      name: "Free Assets",        hue: 150, blurb: "Icons, logos, backgrounds and sprites." },
    { id: "ai",          name: "Prompts & Skills",   hue: 265, blurb: "Prompts and agent skills that make AI design better." },
    { id: "startups",    name: "Startups",           hue: 215, blurb: "Real businesses and the numbers behind them." },
    { id: "research",    name: "Market Research",    hue: 95,  blurb: "Find out what is worth building before you build it." },
    { id: "launch",      name: "Launch Boards",      hue: 300, blurb: "Where new products show up first." },
  ],
  links: [
    { title: "Landdding", url: "https://landdding.com", cat: "inspiration", note: "A daily-updated gallery of website designs and templates, upvoted by the community.", added: "2026-11-11", tags: ["Websites", "Inspiration", "Community"], shot: "shots/landdding.com.jpg" },
    { title: "Landbook", url: "https://land-book.com", cat: "inspiration", note: "Hand-picked website designs updated daily, browsable by page type: landing, pricing, about, blog and more.", added: "2026-11-11", tags: ["Websites", "Inspiration", "Landing Pages"], shot: "shots/land-book.com.jpg" },
    { title: "Saaspo", url: "https://saaspo.com", cat: "inspiration", note: "A gallery of SaaS landing pages to borrow ideas from.", added: "2026-11-11", tags: ["Websites", "SaaS", "Landing Pages"] },
    { title: "Curate", url: "https://curate.gallery", cat: "inspiration", note: "A curated collection of well-designed websites from startups, tools and studios, filterable by industry.", added: "2026-11-11", tags: ["Websites", "Inspiration"], shot: "shots/curate.gallery.jpg" },
    { title: "Design Details", url: "https://designdetails.io", cat: "inspiration", note: "Live websites captured in full: sections, scroll recordings, fonts and colours.", added: "2026-11-11", tags: ["Websites", "Inspiration", "Fonts"], shot: "shots/designdetails.io.jpg" },
    { title: "landing.love", url: "https://www.landing.love", cat: "inspiration", note: "2,000+ animated websites, each with a full-page video recording.", added: "2026-11-11", tags: ["Websites", "Motion", "Landing Pages"], shot: "shots/landing.love.jpg" },
    { title: "Supahero", url: "https://supahero.io", cat: "inspiration", note: "A library of website hero sections, just the top of the page.", added: "2026-11-11", tags: ["Websites", "Landing Pages"], shot: "shots/supahero.io.jpg" },
    { title: "Footer", url: "https://www.footer.design", cat: "inspiration", note: "A gallery of nothing but website footers, sorted by style.", added: "2026-11-11", tags: ["Websites", "Inspiration"], shot: "shots/footer.design.jpg" },
    { title: "Recent", url: "https://recent.design", cat: "inspiration", note: "A daily curation of design, websites and tools, plus design jobs.", added: "2026-11-11", tags: ["Inspiration", "Websites"], shot: "shots/recent.design.jpg" },
    { title: "Inspora", url: "https://www.inspora.design", cat: "inspiration", note: "A wall of design shots, websites, logos and app icons.", added: "2026-11-11", tags: ["Inspiration", "Logos"], shot: "shots/inspora.design.jpg" },
    { title: "On Design", url: "https://on.design", cat: "inspiration", note: "An invite-only community where designers share their work. Needs a sign-in.", added: "2026-11-11", tags: ["Community", "Inspiration"], shot: "shots/on.design.jpg" },
    { title: "posts.design", url: "https://posts.design", cat: "inspiration", note: "4,500+ real social posts, X headers and OG images from 1,000+ brands.", added: "2026-11-11", tags: ["Social", "Inspiration"], shot: "shots/posts.design.jpg" },

    { title: "Mobbin", url: "https://mobbin.com", cat: "references", note: "600,000+ searchable screens from real mobile and web apps.", added: "2026-11-11", tags: ["Apps", "UI", "Mobile"], shot: "shots/mobbin.com.jpg" },
    { title: "Refero", url: "https://refero.design", cat: "references", note: "A huge library of real web and iOS screens and flows, with an MCP so agents can look things up too.", added: "2026-11-11", tags: ["Apps", "UI", "AI"], shot: "shots/refero.design.jpg" },
    { title: "60fps", url: "https://60fps.design", cat: "references", note: "UI and animation details from the best iOS and web apps.", added: "2026-11-11", tags: ["Apps", "Motion", "Mobile"], shot: "shots/60fps.design.jpg" },
    { title: "Detail", url: "https://detail.design", cat: "references", note: "Small design decisions that make products feel considered.", added: "2026-11-11", tags: ["UI", "Details"], shot: "shots/detail.design.jpg" },
    { title: "Design Spells", url: "https://designspells.com", cat: "references", note: "Design details and easter eggs that feel like magic.", added: "2026-11-11", tags: ["UI", "Details", "Motion"], shot: "shots/designspells.com.jpg" },
    { title: "Iconly", url: "https://iconly.design", cat: "references", note: "2,400+ app, game and web app icons to browse for inspiration.", added: "2026-11-11", tags: ["Icons", "Apps"], shot: "shots/iconly.design.jpg" },
    { title: "Icon Museum", url: "https://icon.museum", cat: "references", note: "A curated gallery of iconic iOS app icons.", added: "2026-11-11", tags: ["Icons", "Apps"], shot: "shots/icon.museum.jpg" },

    { title: "Ripplix", url: "https://www.ripplix.com", cat: "motion", note: "7,000+ UI animations and micro-interactions from real apps, each with a prompt to rebuild it with AI.", added: "2026-11-11", tags: ["Motion", "UI", "Prompts"], shot: "shots/ripplix.com.jpg" },
    { title: "Motionimo", url: "https://motionimo.xyz", cat: "motion", note: "Hand-picked motion design: promo videos, reels, logo animations and searchable frames.", added: "2026-11-11", tags: ["Motion", "Inspiration", "Video"], shot: "shots/motionimo.xyz.jpg" },
    { title: "Transitions.dev", url: "https://transitions.dev", cat: "motion", note: "Crafted UI transitions to copy and paste, or hand to your agent as a skill.", added: "2026-11-11", tags: ["Motion", "UI", "Skills"], shot: "shots/transitions.dev.jpg" },
    { title: "Paper Animation", url: "https://paperanimation.ai", cat: "motion", note: "Upload an image, pick the object, get a paper-style animation for your clips.", added: "2026-11-11", tags: ["Motion", "AI", "Video"], shot: "shots/paperanimation.ai.jpg" },
    { title: "pixelfx", url: "https://patch-gg.github.io/pixelfx", cat: "motion", note: "244 pixel art effects (fire, lightning, attacks), each a small piece of code you can export as a sprite sheet.", added: "2026-11-11", tags: ["Pixel Art", "Motion", "Free"], shot: "shots/pixelfx.jpg" },

    { title: "Efferd", url: "https://wtf-this-is-crazy.vercel.app", cat: "components", note: "shadcn blocks your agent can place, theme and ship.", added: "2026-11-11", tags: ["Components", "React", "AI"], shot: "shots/wtf-this-is-crazy.vercel.app.jpg" },
    { title: "beUI", url: "https://beui.dev", cat: "components", note: "Free open-source animated components for React and React Native, installed with the shadcn CLI.", added: "2026-11-11", tags: ["Components", "React", "Motion"], shot: "shots/beui.dev.jpg" },
    { title: "Prestige UI", url: "https://prestigeui.com", cat: "components", note: "Animated React blocks and components that make a site look expensive.", added: "2026-11-11", tags: ["Components", "React", "Motion"], shot: "shots/prestigeui.com.jpg" },
    { title: "Bencho", url: "https://bencho.dev", cat: "components", note: "Interactive React components and micro-interactions your agent can build with.", added: "2026-11-11", tags: ["Components", "React", "Motion"], shot: "shots/bencho.dev.jpg" },
    { title: "uilabs", url: "https://www.uilabs.dev", cat: "components", note: "A small lab of experimental, finely made UI components.", added: "2026-11-11", tags: ["Components", "UI", "Motion"], shot: "shots/uilabs.dev.jpg" },
    { title: "HorizonX", url: "https://horizonx.so/explore", cat: "components", note: "UI kits, templates and components ready for Cursor, Lovable or v0.", added: "2026-11-11", tags: ["Templates", "Components", "AI"], shot: "shots/horizonx.so.jpg" },
    { title: "Libraries.dev", url: "https://libraries.dev", cat: "components", note: "UI effect libraries and on-device ML models, ready for agents.", added: "2026-11-11", tags: ["Components", "AI"], shot: "shots/libraries.dev.jpg" },
    { title: "Modulify Templates", url: "https://modulify.ai/templates", cat: "components", note: "Free production-ready website templates to clone and make your own.", added: "2026-11-11", tags: ["Templates", "Websites", "Free"], shot: "shots/modulify.ai.jpg" },

    { title: "Backgrounds Supply", url: "https://backgrounds.supply", cat: "assets", note: "Handcrafted and AI-made backgrounds, wallpapers and gradients.", added: "2026-11-11", tags: ["Backgrounds", "Assets"], shot: "shots/backgrounds.supply.jpg" },
    { title: "Logo to Use", url: "https://logotouse.com/logos/gorgeous", cat: "assets", note: "Unsplash for logos: ready-made SVG logos for your projects.", added: "2026-11-11", tags: ["Logos", "Assets"], shot: "shots/logotouse.com.jpg" },
    { title: "Gentleface", url: "https://gentleface.com", cat: "assets", note: "3,286 free pixel-perfect icons, 1,000 of them animated. MIT licence.", added: "2026-11-11", tags: ["Icons", "Free", "Assets"], shot: "shots/gentleface.com.jpg" },
    { title: "IconMCP", url: "https://iconmcp.com", cat: "assets", note: "8,000+ icons plus an MCP server so your agent can search them. MIT licence.", added: "2026-11-11", tags: ["Icons", "Free", "AI"], shot: "shots/iconmcp.com.jpg" },
    { title: "useAnimations", url: "https://useanimations.com", cat: "assets", note: "300 free animated icons for React, shadcn and Lottie. MIT licence.", added: "2026-11-11", tags: ["Icons", "Motion", "Free"], shot: "shots/useanimations.com.jpg" },
    { title: "Pixel Art Atlas", url: "https://huggingface.co/datasets/Angais/pixel-art-atlas-1.4m", cat: "assets", note: "1.4 million captioned pixel art sprites, free to use (CC0).", added: "2026-11-11", tags: ["Pixel Art", "Free", "AI"], shot: "shots/pixel-art-atlas.jpg" },

    { title: "Unslop", url: "https://github.com/heydamir/unslop", cat: "ai", note: "A Claude skill that turns vibecoded, AI-looking UI into a designed interface.", added: "2026-11-11", tags: ["Skills", "AI", "UI"], shot: "shots/github-unslop.jpg" },
    { title: "Skill Issue", url: "https://skill-issue.in", cat: "ai", note: "A ranked library of agent skills, sorted by what actually gets used.", added: "2026-11-11", tags: ["Skills", "AI", "Directory"], shot: "shots/skill-issue.in.jpg" },
    { title: "Prompt Motion", url: "https://promptmotion.org", cat: "ai", note: "A gallery of motion design made by Claude, with the prompts and skills to copy.", added: "2026-11-11", tags: ["Prompts", "Motion", "Skills"] },
    { title: "Jiro", url: "https://jiro.build", cat: "ai", note: "A library of design prompts for vibe coding better websites.", added: "2026-11-11", tags: ["Prompts", "Websites", "AI"], shot: "shots/jiro.build.jpg" },
    { title: "Motionsites", url: "https://motionsites.ai", cat: "ai", note: "Copy-paste prompts for animated landing pages, new ones every day.", added: "2026-11-11", tags: ["Prompts", "Landing Pages", "Motion"], shot: "shots/motionsites.ai.jpg" },

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
