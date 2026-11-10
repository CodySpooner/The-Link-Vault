// The only file that changes when a link is saved.
// New category? Add it to `categories` with an unused hue (0-360); every design picks it up automatically.
// `sample: true` entries are placeholders and get removed once real links arrive.
window.LINKBASE = {
  categories: [
    { id: "inspiration", name: "Design Inspiration", hue: 340, blurb: "Sites and galleries that raise the bar." },
    { id: "ai",          name: "AI Tools",           hue: 265, blurb: "Models and apps that do the heavy lifting." },
    { id: "dev",         name: "Dev Tools",          hue: 190, blurb: "Small utilities that save real time." },
    { id: "assets",      name: "Free Assets",        hue: 150, blurb: "Fonts, icons, palettes and images." },
    { id: "learn",       name: "Learn",              hue: 45,  blurb: "Explainers worth coming back to." },
    { id: "rabbit",      name: "Rabbit Holes",       hue: 15,  blurb: "No purpose. Extremely cool." },  ],
  links: [
    { title: "Awwwards",          url: "https://www.awwwards.com",       cat: "inspiration", note: "The daily leaderboard of the best-built sites on the web.", added: "2026-11-09", sample: true },
    { title: "Godly",              url: "https://godly.website",          cat: "inspiration", note: "Hand-picked, astronomically good web design with video previews.", added: "2026-11-09", sample: true },
    { title: "Mobbin",             url: "https://mobbin.com",             cat: "inspiration", note: "Searchable library of real app screens and flows.", added: "2026-11-09", sample: true },
    { title: "Cosmos",             url: "https://www.cosmos.so",          cat: "inspiration", note: "A calm, ad-free visual moodboard.", added: "2026-11-09", sample: true },

    { title: "Perplexity",         url: "https://www.perplexity.ai",      cat: "ai", note: "Answer engine that cites its sources.", added: "2026-11-09", sample: true },
    { title: "Suno",               url: "https://suno.com",               cat: "ai", note: "Full songs generated from a text prompt.", added: "2026-11-09", sample: true },
    { title: "Runway",             url: "https://runwayml.com",           cat: "ai", note: "AI video generation and editing.", added: "2026-11-09", sample: true },
    { title: "ElevenLabs",         url: "https://elevenlabs.io",          cat: "ai", note: "Uncannily good text-to-speech and voice cloning.", added: "2026-11-09", sample: true },

    { title: "regex101",           url: "https://regex101.com",           cat: "dev", note: "Build and debug regex with live explanations.", added: "2026-11-09", sample: true },
    { title: "Can I use",          url: "https://caniuse.com",            cat: "dev", note: "Browser support tables for every web feature.", added: "2026-11-09", sample: true },
    { title: "Bundlephobia",       url: "https://bundlephobia.com",       cat: "dev", note: "See what an npm package really costs.", added: "2026-11-09", sample: true },
    { title: "Excalidraw",         url: "https://excalidraw.com",         cat: "dev", note: "Hand-drawn style whiteboard in a browser tab.", added: "2026-11-09", sample: true },

    { title: "Fontshare",          url: "https://www.fontshare.com",      cat: "assets", note: "Free, quality type from Indian Type Foundry.", added: "2026-11-09", sample: true },
    { title: "Lucide",             url: "https://lucide.dev",             cat: "assets", note: "Clean, consistent open-source icon set.", added: "2026-11-09", sample: true },
    { title: "Coolors",            url: "https://coolors.co",             cat: "assets", note: "Generate palettes with a press of the spacebar.", added: "2026-11-09", sample: true },
    { title: "Unsplash",           url: "https://unsplash.com",           cat: "assets", note: "Free high-resolution photography.", added: "2026-11-09", sample: true },

    { title: "The Book of Shaders", url: "https://thebookofshaders.com",  cat: "learn", note: "Gentle, step-by-step intro to fragment shaders.", added: "2026-11-09", sample: true },
    { title: "Josh W. Comeau",     url: "https://www.joshwcomeau.com",    cat: "learn", note: "Interactive CSS and React deep dives.", added: "2026-11-09", sample: true },
    { title: "roadmap.sh",         url: "https://roadmap.sh",             cat: "learn", note: "Step-by-step learning paths for developers.", added: "2026-11-09", sample: true },
    { title: "Laws of UX",         url: "https://lawsofux.com",           cat: "learn", note: "Design psychology, one law at a time.", added: "2026-11-09", sample: true },

    { title: "neal.fun",           url: "https://neal.fun",               cat: "rabbit", note: "Playful web experiments that eat whole afternoons.", added: "2026-11-09", sample: true },
    { title: "Radio Garden",       url: "https://radio.garden",           cat: "rabbit", note: "Spin a globe and tune into live radio anywhere.", added: "2026-11-09", sample: true },
    { title: "Window Swap",        url: "https://www.window-swap.com",    cat: "rabbit", note: "Look out of a stranger's window somewhere in the world.", added: "2026-11-09", sample: true },
    { title: "Windy",              url: "https://www.windy.com",          cat: "rabbit", note: "Mesmerising live weather and wind maps.", added: "2026-11-09", sample: true },  ],
};
