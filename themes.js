// ═══════════════════════════════════════════════════════════════════════
//  AETHER DESIGN ACADEMY — 30 Theme Library
//  Each theme teaches a different color theory principle.
//  Rotates daily. Design evolution logged automatically.
// ═══════════════════════════════════════════════════════════════════════

export const themes = [

  // ─── DAY 1: MONOCHROMATIC ──────────────────────────────────────────
  {
    name: "Tokyo Night",
    id: "tokyo_night",
    principle: "Monochromatic Harmony",
    lesson: "Uses a single hue family (blue 250°) with lightness variations. Purple at 280° acts as a near-analogous secondary. The lesson: restraint in hue selection forces mastery of the lightness dimension. Notice how depth is created entirely through value contrast, not hue contrast.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1a1b27", surface: "24283b", border: "414868",
      text: "c0caf5", textMuted: "565f89",
      accent: "7aa2f7", secondary: "bb9af7",
      success: "9ece6a", warning: "e0af68", error: "f7768e",
    },
    trophyTheme: "tokyonight",
    taglines: [
      "Building systems that think for themselves",
      "Automating what others do manually",
      "Security is not a feature — it's the architecture",
    ],
    quote: "The best systems are the ones you never notice — until they save you.",
    titles: ["Systems Architect", "Security Researcher", "AI Engineer"],
    aboutFormat: "yaml",
  },

  // ─── DAY 2: ANALOGOUS WARM ────────────────────────────────────────
  {
    name: "Kanagawa Wave",
    id: "kanagawa_wave",
    principle: "Analogous Warm Palette",
    lesson: "Inspired by Hokusai's Great Wave. Combines warm ochre (40°) and cool indigo (230°) as complementary anchors, with muted teal bridging them. The lesson: borrowing from masterworks gives you pre-validated palettes. The desaturated background lets the warm accent breathe.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1f1f28", surface: "2a2a37", border: "54546d",
      text: "dcd7ba", textMuted: "727169",
      accent: "7e9cd8", secondary: "e6c384",
      success: "98bb6c", warning: "ff9e3b", error: "e82424",
    },
    trophyTheme: "darkhub",
    taglines: [
      "Designing with the patience of a calligrapher",
      "Every line of code is a brushstroke",
      "Precision meets artistry in every commit",
    ],
    quote: "In the wave lies both chaos and structure — code is the same.",
    titles: ["Digital Craftsman", "Infrastructure Artist", "Security Engineer"],
    aboutFormat: "yaml",
  },

  // ─── DAY 3: COOL ANALOGOUS / SWISS MINIMALISM ─────────────────────
  {
    name: "Nord Frost",
    id: "nord_frost",
    principle: "Cool Analogous — Arctic Minimalism",
    lesson: "Strictly cool-temperature palette (200°-220°) inspired by Nordic winter. Four frost blues create hierarchy without introducing new hues. The lesson: you can build an entire UI with only cool tones if your value scale is precise enough. The warmth of aurora green serves as the sole accent.",
    capsuleType: "soft",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "2e3440", surface: "3b4252", border: "4c566a",
      text: "eceff4", textMuted: "81a1c1",
      accent: "88c0d0", secondary: "5e81ac",
      success: "a3be8c", warning: "ebcb8b", error: "bf616a",
    },
    trophyTheme: "nord",
    taglines: [
      "Clean code. Clear thinking. Cold precision.",
      "Stripping complexity down to its core",
      "Architecture as clear as arctic air",
    ],
    quote: "Simplicity is not the absence of complexity — it's the resolution of it.",
    titles: ["Systems Engineer", "Clean Code Advocate", "DevSecOps"],
    aboutFormat: "yaml",
  },

  // ─── DAY 4: EARTH TONES / VINTAGE ─────────────────────────────────
  {
    name: "Gruvbox Amber",
    id: "gruvbox_amber",
    principle: "Earth Tones — Retro Warmth",
    lesson: "Warm base (40° shifted) with orange/amber accents. This palette works because it mimics natural materials — leather, wood, amber. The lesson: earth tones trigger comfort and trust. The high-chroma orange accent at 30° pops against the muted base without feeling artificial.",
    capsuleType: "waving",
    capsuleAnimation: "scaleIn",
    colors: {
      bg: "282828", surface: "3c3836", border: "504945",
      text: "ebdbb2", textMuted: "928374",
      accent: "fe8019", secondary: "fabd2f",
      success: "b8bb26", warning: "fabd2f", error: "fb4934",
    },
    trophyTheme: "gruvbox",
    taglines: [
      "Old-school engineering, modern execution",
      "Built to last, not built to impress",
      "Warm code for a cold digital world",
    ],
    quote: "Good code ages like fine leather — it only gets better with use.",
    titles: ["Backend Architect", "Security Researcher", "Systems Builder"],
    aboutFormat: "json",
  },

  // ─── DAY 5: MUTED PASTELS / COMFORT ───────────────────────────────
  {
    name: "Catppuccin Mocha",
    id: "catppuccin_mocha",
    principle: "Muted Chroma — Comfort Colors",
    lesson: "A community-driven palette that deliberately caps saturation to create a cozy reading environment. The lesson: high chroma is not always desirable. Lower saturation reduces eye strain during long sessions. The mauve accent provides enough distinction without screaming for attention.",
    capsuleType: "rounded",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1e1e2e", surface: "313244", border: "45475a",
      text: "cdd6f4", textMuted: "6c7086",
      accent: "cba6f7", secondary: "89b4fa",
      success: "a6e3a1", warning: "f9e2af", error: "f38ba8",
    },
    trophyTheme: "discord",
    taglines: [
      "Soft interfaces, hard security",
      "Comfort-driven development",
      "Code should feel like home",
    ],
    quote: "The best interface is one you can stare at for hours without fatigue.",
    titles: ["Full-Stack Developer", "UI Engineer", "AI Researcher"],
    aboutFormat: "yaml",
  },

  // ─── DAY 6: SPLIT-COMPLEMENTARY ───────────────────────────────────
  {
    name: "Rosé Pine Moon",
    id: "rose_pine_moon",
    principle: "Split-Complementary — Romantic Tension",
    lesson: "Rose (340°) and pine (160°) sit opposite on the wheel, but the muted application prevents clash. The gold accent at 45° adds warmth as a mediator. The lesson: split-complementary gives you contrast without the aggression of pure complementary. The key is keeping both sides low-chroma.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "232136", surface: "2a273f", border: "393552",
      text: "e0def4", textMuted: "6e6a86",
      accent: "c4a7e7", secondary: "ea9a97",
      success: "9ccfd8", warning: "f6c177", error: "eb6f92",
    },
    trophyTheme: "discord",
    taglines: [
      "Where elegance meets engineering",
      "Designing systems with soul",
      "Poetry in every protocol",
    ],
    quote: "Code without beauty is just instructions — code with beauty is craft.",
    titles: ["Creative Engineer", "Security Architect", "AI Designer"],
    aboutFormat: "yaml",
  },

  // ─── DAY 7: TRIADIC HARMONY ────────────────────────────────────────
  {
    name: "Dracula",
    id: "dracula",
    principle: "Triadic Harmony — Controlled Vibrancy",
    lesson: "Purple (270°), green (150°), and pink (330°) form a triadic relationship. The dark base at 260° creates enough negative space for three strong accents to coexist. The lesson: triadic palettes feel vibrant and balanced, but only when the base is sufficiently neutral. Too much saturation in the background would create chaos.",
    capsuleType: "shark",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "282a36", surface: "44475a", border: "6272a4",
      text: "f8f8f2", textMuted: "6272a4",
      accent: "bd93f9", secondary: "ff79c6",
      success: "50fa7b", warning: "f1fa8c", error: "ff5555",
    },
    trophyTheme: "dracula",
    taglines: [
      "Nocturnal coding. Maximum output.",
      "The night shift produces the best code",
      "Dark themes done right, not just inverted",
    ],
    quote: "The night is not the absence of light — it's a different kind of visibility.",
    titles: ["Night Owl Developer", "Security Specialist", "Open Source Builder"],
    aboutFormat: "json",
  },

  // ─── DAY 8: COMPLEMENTARY — SCIENTIFIC PRECISION ──────────────────
  {
    name: "Solarized Dark",
    id: "solarized_dark",
    principle: "Complementary — Scientific Precision",
    lesson: "Ethan Schoonover's masterwork uses precise L*a*b* values to ensure every color pair passes accessibility. Teal (175°) and warm yellow (45°) are classic complements. The lesson: a truly professional palette is mathematically derived, not eyeballed. Every value has a reason — this is color engineering, not color decoration.",
    capsuleType: "soft",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "002b36", surface: "073642", border: "586e75",
      text: "839496", textMuted: "657b83",
      accent: "268bd2", secondary: "2aa198",
      success: "859900", warning: "b58900", error: "dc322f",
    },
    trophyTheme: "alduin",
    taglines: [
      "Precision-engineered interfaces",
      "Every pixel has a purpose",
      "Lab-tested color science in production",
    ],
    quote: "Good design is not opinion — it's measurement.",
    titles: ["Systems Architect", "Color Engineer", "DevOps Lead"],
    aboutFormat: "yaml",
  },

  // ─── DAY 9: TETRADIC — BALANCED MULTI-ACCENT ──────────────────────
  {
    name: "One Dark",
    id: "one_dark",
    principle: "Tetradic — Balanced Multi-Accent",
    lesson: "Four accent colors (blue 210°, green 150°, orange 30°, purple 280°) form a rectangle on the wheel. The secret: the muted grey-blue base prevents any accent from dominating. The lesson: tetradic schemes need a neutral referee. Without the slate foundation, four strong colors would fight for attention.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "282c34", surface: "31353f", border: "3e4451",
      text: "abb2bf", textMuted: "5c6370",
      accent: "61afef", secondary: "c678dd",
      success: "98c379", warning: "e5c07b", error: "e06c75",
    },
    trophyTheme: "onedark",
    taglines: [
      "One theme to rule them all",
      "Balance is the ultimate skill",
      "Four colors, zero compromise",
    ],
    quote: "Balance is not the absence of forces — it's the harmony between them.",
    titles: ["Full-Stack Engineer", "AI Developer", "Security Analyst"],
    aboutFormat: "yaml",
  },

  // ─── DAY 10: TEMPERATURE CONTRAST ─────────────────────────────────
  {
    name: "Ayu Mirage",
    id: "ayu_mirage",
    principle: "Temperature Contrast — Warm on Cool",
    lesson: "A cool blue-grey base (210°) meets a warm amber accent (35°). This temperature contrast creates visual interest without using complementary hues. The lesson: warm and cool are a design axis independent of the color wheel. A single warm element on a cool field acts like a campfire in winter — it draws the eye irresistibly.",
    capsuleType: "slice",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1f2430", surface: "232834", border: "33415e",
      text: "cbccc6", textMuted: "707a8c",
      accent: "ffcc66", secondary: "73d0ff",
      success: "bae67e", warning: "ffd580", error: "f28779",
    },
    trophyTheme: "darkhub",
    taglines: [
      "Warm ideas in a cool-headed framework",
      "Where amber meets arctic engineering",
      "Contrast creates clarity",
    ],
    quote: "The warmest solutions come from the coolest thinking.",
    titles: ["Cloud Architect", "Frontend Artisan", "Security Engineer"],
    aboutFormat: "json",
  },

  // ─── DAY 11: BIOPHILIC — NATURE PALETTE ───────────────────────────
  {
    name: "Everforest",
    id: "everforest",
    principle: "Biophilic Design — Nature Palette",
    lesson: "Greens (130°-160°) and warm stone (40°) mimic a forest floor at dusk. This triggers biophilia — the human affinity for natural environments. The lesson: nature never uses pure hues. Every color in a forest is muted, warm-shifted, and layered. Digital biophilic design should feel like looking at moss, not at a traffic light.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "2d353b", surface: "343f44", border: "475258",
      text: "d3c6aa", textMuted: "859289",
      accent: "a7c080", secondary: "7fbbb3",
      success: "a7c080", warning: "dbbc7f", error: "e67e80",
    },
    trophyTheme: "alduin",
    taglines: [
      "Growing code like a forest — patient and deep",
      "Root-level engineering for organic systems",
      "Nature-inspired architecture",
    ],
    quote: "A forest doesn't rush, yet everything gets done.",
    titles: ["Green Stack Engineer", "Sustainable Tech", "AI Naturalist"],
    aboutFormat: "yaml",
  },

  // ─── DAY 12: MONOCHROMATIC BLUE — CHROMA VARIATION ────────────────
  {
    name: "Moonlight",
    id: "moonlight",
    principle: "Monochromatic Blue — Chroma Gradient",
    lesson: "Pure monochromatic blue (230°) with chroma ranging from near-0 (backgrounds) to high (accents). The ethereal glow comes from high-lightness, high-chroma blue on a low-lightness, low-chroma base. The lesson: within a single hue, the chroma axis is your second dimension of contrast. Use it deliberately.",
    capsuleType: "rounded",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "222436", surface: "2f334d", border: "444a73",
      text: "c8d3f5", textMuted: "636da6",
      accent: "82aaff", secondary: "c099ff",
      success: "c3e88d", warning: "ffc777", error: "ff757f",
    },
    trophyTheme: "discord",
    taglines: [
      "Coding by moonlight, deploying by dawn",
      "Ethereal interfaces, grounded logic",
      "Luminous code in a dark universe",
    ],
    quote: "Moonlight doesn't compete with the sun — it reveals what darkness hides.",
    titles: ["Platform Engineer", "AI Researcher", "Night Architect"],
    aboutFormat: "yaml",
  },

  // ─── DAY 13: DARK LUXE — DEPTH THROUGH SHADOW ─────────────────────
  {
    name: "Poimandres",
    id: "poimandres",
    principle: "Dark Luxe — Depth Through Shadow",
    lesson: "Named after the Hermetic text. Ultra-dark base (< 12% L) with cool purple undertones. The lesson: true luxury in dark themes comes from subtle color in the shadows, not from bright accents. The near-invisible gradient from bg to surface creates dimensionality that flat black cannot achieve.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1b1e28", surface: "252837", border: "303340",
      text: "e4f0fb", textMuted: "767c9d",
      accent: "add7ff", secondary: "91b4d5",
      success: "5de4c7", warning: "fffac2", error: "d0679d",
    },
    trophyTheme: "discord",
    taglines: [
      "Deep systems require deep thinking",
      "The void isn't empty — it's full of structure",
      "Shadow engineering for luminous results",
    ],
    quote: "The deepest architecture is the one you sense but cannot see.",
    titles: ["Deep Systems Engineer", "Cryptography Researcher", "AI Architect"],
    aboutFormat: "yaml",
  },

  // ─── DAY 14: WARM MONOCHROMATIC — LUXURY GOLD ─────────────────────
  {
    name: "Vesper",
    id: "vesper",
    principle: "Warm Monochromatic — Luxury Gold",
    lesson: "Amber/gold (40°-50°) on a warm dark base creates an evening atmosphere. The lesson: warm monochromatic schemes feel exclusive because they're rare in tech. Most tech palettes default to cool blues. By going warm, you immediately differentiate. The gold accent triggers associations with premium and craftsmanship.",
    capsuleType: "waving",
    capsuleAnimation: "scaleIn",
    colors: {
      bg: "101010", surface: "1c1c1c", border: "333333",
      text: "d4d4d4", textMuted: "6a6a6a",
      accent: "ffc799", secondary: "d19a66",
      success: "a5d6a7", warning: "ffc799", error: "ef5350",
    },
    trophyTheme: "chalk",
    taglines: [
      "Gold-standard engineering",
      "Craftsmanship over cleverness",
      "Premium code for premium systems",
    ],
    quote: "Excellence is not a skill — it's an attitude applied to every line.",
    titles: ["Lead Architect", "Security Consultant", "AI Strategist"],
    aboutFormat: "json",
  },

  // ─── DAY 15: 60-30-10 STRICT ──────────────────────────────────────
  {
    name: "Vitesse Dark",
    id: "vitesse_dark",
    principle: "The 60-30-10 Rule — Strictly Applied",
    lesson: "60% neutral dark (bg/surface), 30% muted text, 10% vivid green accent. Nothing else. The lesson: the 60-30-10 rule is the single most reliable composition formula. When in doubt, apply it literally. The green accent at 150° is reserved exclusively for interactive and emphasis elements — never for decoration.",
    capsuleType: "soft",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "121212", surface: "1e1e1e", border: "2e2e2e",
      text: "dbd7ca", textMuted: "6e6e6e",
      accent: "4d9375", secondary: "b8a965",
      success: "4d9375", warning: "e6cc77", error: "cb7676",
    },
    trophyTheme: "chalk",
    taglines: [
      "60% foundation. 30% structure. 10% brilliance.",
      "Minimalism with mathematical precision",
      "The rule of proportions governs all design",
    ],
    quote: "Constraint is the mother of creativity.",
    titles: ["Minimalist Coder", "Systems Designer", "Security Analyst"],
    aboutFormat: "yaml",
  },

  // ─── DAY 16: ACCESSIBILITY-FIRST ──────────────────────────────────
  {
    name: "Night Owl",
    id: "night_owl",
    principle: "Accessibility-First Design",
    lesson: "Created by Sarah Drasner specifically for WCAG AAA compliance. Every color pair achieves >7:1 contrast ratio. The lesson: accessibility is not a constraint — it's a feature. By starting with contrast requirements, you end up with palettes that are more readable for EVERYONE, not just users with disabilities.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "011627", surface: "0b2942", border: "1d3b53",
      text: "d6deeb", textMuted: "637777",
      accent: "82aaff", secondary: "c792ea",
      success: "addb67", warning: "ecc48d", error: "ef5350",
    },
    trophyTheme: "algolia",
    taglines: [
      "Designed for every pair of eyes",
      "Accessibility is architecture, not afterthought",
      "AAA contrast — because AA is just average",
    ],
    quote: "If your design excludes anyone, your design has failed.",
    titles: ["Accessibility Engineer", "Inclusive Design Lead", "AI for All"],
    aboutFormat: "yaml",
  },

  // ─── DAY 17: DESIGN SYSTEM TOKENS ─────────────────────────────────
  {
    name: "Material Palenight",
    id: "material_palenight",
    principle: "Design System Tokens",
    lesson: "Material Design's dark variant demonstrates the 3-layer token system: primitive (raw colors), semantic (intent: primary/error/surface), and component tokens. The lesson: never use colors directly. Always go through semantic tokens. This makes theme-switching trivial and prevents 'color spaghetti' in large codebases.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "292d3e", surface: "34324a", border: "444267",
      text: "a6accd", textMuted: "676e95",
      accent: "82aaff", secondary: "c792ea",
      success: "c3e88d", warning: "ffcb6b", error: "f07178",
    },
    trophyTheme: "discord",
    taglines: [
      "Tokens over hardcodes. Always.",
      "Design systems that scale infinitely",
      "From primitives to production in one pipeline",
    ],
    quote: "A design system is not a style guide — it's a shared language.",
    titles: ["Design Systems Architect", "Token Engineer", "AI Infrastructure"],
    aboutFormat: "yaml",
  },

  // ─── DAY 18: ANALOGOUS WARM — SUNSET ──────────────────────────────
  {
    name: "Horizon",
    id: "horizon",
    principle: "Analogous Warm — Sunset Gradient",
    lesson: "Red (0°) through orange (30°) to pink (340°) — a tight analogous range on the warm side. The lesson: sunsets work as palettes because they compress the warm spectrum into a single view. The dark base grounds the warmth and prevents it from feeling overwhelming. Time-of-day palettes tap into deep emotional memory.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1c1e26", surface: "232530", border: "2e303e",
      text: "d5d8da", textMuted: "6c6f93",
      accent: "e95678", secondary: "fab795",
      success: "09f7a0", warning: "fab795", error: "e95678",
    },
    trophyTheme: "radical",
    taglines: [
      "Every sunset is a new palette",
      "Warm engineering for a connected world",
      "Building at the edge of day and night",
    ],
    quote: "The best interfaces feel like golden hour — warm, clear, and transient.",
    titles: ["Edge Computing Engineer", "Security Researcher", "Sunset Coder"],
    aboutFormat: "json",
  },

  // ─── DAY 19: CHROMA CONTROL — VIVID VS MUTED ─────────────────────
  {
    name: "Andromeda",
    id: "andromeda",
    principle: "Chroma Control — Vivid on Muted",
    lesson: "Pastel accents (high lightness, medium chroma) on a low-chroma dark base. The lesson: controlling chroma independently of lightness is the mark of a skilled colorist. The accents feel bright and modern without being aggressive. This is the antidote to both boring greys and neon-slop.",
    capsuleType: "rounded",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "23262e", surface: "2b2f3a", border: "3b4048",
      text: "d5ced9", textMuted: "6e7179",
      accent: "00e8c6", secondary: "ee5d43",
      success: "96e072", warning: "ffe66d", error: "ee5d43",
    },
    trophyTheme: "darkhub",
    taglines: [
      "Vivid ideas on a muted canvas",
      "Chroma is a dial, not a switch",
      "Controlled intensity, maximum impact",
    ],
    quote: "Restraint in base, boldness in accent — that's the formula.",
    titles: ["Frontend Architect", "Creative Technologist", "Security Engineer"],
    aboutFormat: "yaml",
  },

  // ─── DAY 20: DOMINANT SINGLE HUE — CONFIDENCE ─────────────────────
  {
    name: "Cobalt Deep",
    id: "cobalt_deep",
    principle: "Dominant Single Hue — Brand Confidence",
    lesson: "Bold, saturated blue (220°) dominates every surface. The lesson: using your brand color as the background — not just the accent — is a power move. It signals confidence. But it only works if the text contrast is immaculate (here: bright white/yellow on deep blue). One wrong shade and it becomes unreadable.",
    capsuleType: "waving",
    capsuleAnimation: "scaleIn",
    colors: {
      bg: "193549", surface: "1f4662", border: "2a5f7f",
      text: "e1efff", textMuted: "6a9fb5",
      accent: "ffc600", secondary: "ff9d00",
      success: "3ad900", warning: "ffc600", error: "ff628c",
    },
    trophyTheme: "algolia",
    taglines: [
      "Bold choices. Bold results.",
      "One color, total commitment",
      "Confidence is coded in blue",
    ],
    quote: "Boldness is not the absence of doubt — it's the decision to commit anyway.",
    titles: ["Lead Developer", "Cloud Security", "Bold Stack Engineer"],
    aboutFormat: "yaml",
  },

  // ─── DAY 21: RETRO REVIVAL — CONTROLLED NOSTALGIA ─────────────────
  {
    name: "Synthwave Midnight",
    id: "synthwave_midnight",
    principle: "Retro Revival — Nostalgia Without Kitsch",
    lesson: "Synthwave (purple 280° + pink 330° + cyan 180°) is the most dangerous palette to execute well. The lesson: retro works when it's RESTRAINED. This version uses the synthwave hues at lower chroma than typical AI-generated versions. No glow effects. No scan lines. Just the colors, applied with discipline. The anti-slop version of a slop-prone genre.",
    capsuleType: "slice",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "262335", surface: "2e2444", border: "463465",
      text: "e0d5f5", textMuted: "8071a8",
      accent: "f97e72", secondary: "36f9f6",
      success: "72f1b8", warning: "fede5d", error: "fe4450",
    },
    trophyTheme: "radical",
    taglines: [
      "Retro aesthetics, modern architecture",
      "Nostalgia is a feeling, not a filter",
      "Old-school vibes, new-school security",
    ],
    quote: "The past is a palette — borrow from it, don't copy it.",
    titles: ["Retro Futurist", "Systems Tinkerer", "Security Archaeologist"],
    aboutFormat: "json",
  },

  // ─── DAY 22: PROFESSIONAL MUTED — CORPORATE PALETTE ───────────────
  {
    name: "Slack Aubergine",
    id: "slack_aubergine",
    principle: "Professional Muted — Corporate Identity",
    lesson: "Slack's aubergine (280° desaturated to ~15% chroma) demonstrates corporate color strategy. The lesson: professional palettes use lower saturation than consumer palettes. The muted purple signals creativity without being playful. The teal secondary adds just enough contrast for interactive elements.",
    capsuleType: "soft",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1a1d21", surface: "222529", border: "35373b",
      text: "d1d2d3", textMuted: "808184",
      accent: "4a154b", secondary: "36c5f0",
      success: "2eb67d", warning: "ecb22e", error: "e01e5a",
    },
    trophyTheme: "chalk",
    taglines: [
      "Enterprise-grade thinking",
      "Professional code. Professional palette.",
      "Where corporate meets creative",
    ],
    quote: "Professionalism isn't boring — it's trustworthy.",
    titles: ["Enterprise Architect", "Team Lead", "Security Compliance"],
    aboutFormat: "yaml",
  },

  // ─── DAY 23: ENVIRONMENTAL HARMONY ─────────────────────────────────
  {
    name: "GitHub Dimmed",
    id: "github_dimmed",
    principle: "Environmental Harmony — Platform Native",
    lesson: "Using the host platform's own palette creates zero visual friction. The lesson: sometimes the best design decision is to NOT design. GitHub Dimmed (#22272e) is optimized for code readability by the GitHub design team. By aligning with it, your profile feels native and professional rather than decorative.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "22272e", surface: "2d333b", border: "444c56",
      text: "adbac7", textMuted: "768390",
      accent: "539bf5", secondary: "b083f0",
      success: "57ab5a", warning: "c69026", error: "e5534b",
    },
    trophyTheme: "gitdimmed",
    taglines: [
      "When in Rome, code as the Romans do",
      "Platform-native design is underrated",
      "Seamless integration, invisible design",
    ],
    quote: "The highest compliment for design: 'I didn't even notice it.'",
    titles: ["Open Source Maintainer", "GitHub Native", "DevOps Engineer"],
    aboutFormat: "yaml",
  },

  // ─── DAY 24: HIGH CONTRAST — FUNCTIONAL COLOR ─────────────────────
  {
    name: "Monokai Pro",
    id: "monokai_pro",
    principle: "High Contrast — Functional Color Use",
    lesson: "Each color serves a syntactic function — yellow for strings, red for errors, green for success. The lesson: in data-dense interfaces, color must be FUNCTIONAL, not decorative. Monokai proves that high contrast can be pleasant if the hue distribution is balanced across the spectrum. No two functions share a hue.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "2d2a2e", surface: "3b383e", border: "504e55",
      text: "fcfcfa", textMuted: "727072",
      accent: "78dce8", secondary: "ab9df2",
      success: "a9dc76", warning: "ffd866", error: "ff6188",
    },
    trophyTheme: "monokai",
    taglines: [
      "Every color earns its place",
      "Functional beauty over decorative noise",
      "High contrast, high readability, high standards",
    ],
    quote: "If a color doesn't communicate meaning, it's just noise.",
    titles: ["Senior Developer", "Code Quality Lead", "AI Engineer"],
    aboutFormat: "yaml",
  },

  // ─── DAY 25: NEGATIVE SPACE — RESTRAINT ───────────────────────────
  {
    name: "Ariake Dark",
    id: "ariake_dark",
    principle: "Negative Space — The Power of Restraint",
    lesson: "Japanese minimalism: maximum whitespace, minimal color intervention. The lesson: what you DON'T add is as important as what you DO. This palette uses only 2 accent hues — desaturated blue and a single warm highlight. Everything else is grayscale. The restraint itself becomes the design statement.",
    capsuleType: "soft",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1a1a24", surface: "222230", border: "3d3d50",
      text: "d4d4e4", textMuted: "62627a",
      accent: "7aa2f7", secondary: "c4b28a",
      success: "8dc891", warning: "c4b28a", error: "d16969",
    },
    trophyTheme: "darkhub",
    taglines: [
      "Less is more. Much more.",
      "The beauty of empty space",
      "Minimalism isn't lazy — it's intentional",
    ],
    quote: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    titles: ["Minimalist Developer", "Clean Architecture", "Zen Security"],
    aboutFormat: "yaml",
  },

  // ─── DAY 26: DEPTH LAYERS — OCEAN ANALOGY ─────────────────────────
  {
    name: "Submarine",
    id: "submarine",
    principle: "Depth Layers — Ocean Analogy",
    lesson: "Teal (185°) at varying depths creates a submarine effect. Each surface level is a 'depth zone': abyss (bg), deep sea (surface), twilight (border), sunlit (accent). The lesson: you can create compelling visual hierarchy using only value shifts within a single hue. This is monochromatic, but with a spatial narrative.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "10253e", surface: "152d48", border: "1d3a5c",
      text: "c0d6e4", textMuted: "5b7e97",
      accent: "5fb3b3", secondary: "c594c5",
      success: "99c794", warning: "fac863", error: "ec5f67",
    },
    trophyTheme: "algolia",
    taglines: [
      "Diving deep into every problem",
      "Surface-level is never enough",
      "Depth-first engineering",
    ],
    quote: "The surface reflects light — the depths hold the structure.",
    titles: ["Deep Stack Engineer", "Submarine Architect", "Depth-First Security"],
    aboutFormat: "json",
  },

  // ─── DAY 27: LOW-CHROMA HARMONY ────────────────────────────────────
  {
    name: "Palenight Storm",
    id: "palenight_storm",
    principle: "Low-Chroma Harmony — Gentle Contrast",
    lesson: "All accents are desaturated versions of their pure hues — lavender instead of purple, sky instead of blue, peach instead of orange. The lesson: chroma below 0.12 OKLCH creates a 'whisper' palette where no element shouts. This is excellent for content-heavy interfaces where the content should be the loudest element, not the chrome.",
    capsuleType: "rounded",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "292d3e", surface: "32364a", border: "444a6e",
      text: "bfc7d5", textMuted: "697098",
      accent: "89aaeb", secondary: "c792ea",
      success: "a5d6a7", warning: "f0c674", error: "e57373",
    },
    trophyTheme: "discord",
    taglines: [
      "Quiet interfaces, loud impact",
      "Let the content speak, not the chrome",
      "Whispering palettes for thoughtful design",
    ],
    quote: "Loud design is easy. Quiet design that still communicates — that's mastery.",
    titles: ["UX Engineer", "Content Architect", "Thoughtful Coder"],
    aboutFormat: "yaml",
  },

  // ─── DAY 28: COLOR PSYCHOLOGY — WISDOM/TRUST ──────────────────────
  {
    name: "Owl of Minerva",
    id: "owl_of_minerva",
    principle: "Color Psychology — Wisdom & Trust",
    lesson: "Warm muted earth tones (stone 50°, amber 40°) on a deep warm base. Named after Hegel's owl: 'the owl of Minerva spreads its wings only at dusk.' The lesson: warm neutrals trigger trust, maturity, and perceived expertise. This is the palette of a mentor, not a student. Perfect for portfolios where credibility matters.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1c1917", surface: "292524", border: "44403c",
      text: "e7e5e4", textMuted: "78716c",
      accent: "d97706", secondary: "a3a3a3",
      success: "65a30d", warning: "d97706", error: "dc2626",
    },
    trophyTheme: "alduin",
    taglines: [
      "Wisdom earned through debugging at 3 AM",
      "Trust is built commit by commit",
      "Mature architecture for mature problems",
    ],
    quote: "The owl of Minerva spreads its wings only with the falling of dusk.",
    titles: ["Senior Architect", "Trusted Advisor", "Security Mentor"],
    aboutFormat: "yaml",
  },

  // ─── DAY 29: FOCUS COLOR — COGNITIVE LOAD ─────────────────────────
  {
    name: "Noctis Azureus",
    id: "noctis_azureus",
    principle: "Focus Color — Managing Cognitive Load",
    lesson: "A single focus color (azure 210°) guides the eye through information hierarchy. Everything else is greyscale. The lesson: in complex interfaces, cognitive load is reduced by limiting color decisions. When the user sees azure, they know it's interactive or important. This is 'color as signpost' rather than 'color as decoration'.",
    capsuleType: "waving",
    capsuleAnimation: "fadeIn",
    colors: {
      bg: "1b2932", surface: "243540", border: "325060",
      text: "c5cdd3", textMuted: "6b8593",
      accent: "3c9dde", secondary: "6dbdfa",
      success: "49e9a6", warning: "e4b781", error: "df769b",
    },
    trophyTheme: "algolia",
    taglines: [
      "Focus is a feature, not a constraint",
      "One signal cuts through the noise",
      "Cognitive load is a design debt",
    ],
    quote: "Clarity is not the result of simplicity — it's the result of focus.",
    titles: ["Focus Engineer", "UX Architect", "Cognitive Systems Designer"],
    aboutFormat: "yaml",
  },

  // ─── DAY 30: ART DECO — HISTORICAL REFERENCE ─────────────────────
  {
    name: "Great Gatsby",
    id: "great_gatsby",
    principle: "Art Deco — Historical Color Reference",
    lesson: "Gold (45°), deep navy (220°), and cream — the Art Deco palette of the 1920s. The lesson: color palettes carry historical associations. Art Deco signals luxury, ambition, and the machine age. Using historical color schemes adds cultural depth to your design. The gold accent on navy is one of the most timeless high-contrast combinations in design history.",
    capsuleType: "waving",
    capsuleAnimation: "scaleIn",
    colors: {
      bg: "0d1117", surface: "161b22", border: "30363d",
      text: "f0e6d2", textMuted: "7d8590",
      accent: "d4a843", secondary: "4a7ab5",
      success: "7cb342", warning: "d4a843", error: "c62828",
    },
    trophyTheme: "darkhub",
    taglines: [
      "Golden-age engineering for a modern era",
      "Timeless design, cutting-edge code",
      "Where Art Deco meets algorithm",
    ],
    quote: "So we beat on, boats against the current, coding ceaselessly into the future.",
    titles: ["Timeless Architect", "Design Historian", "Golden Stack Engineer"],
    aboutFormat: "json",
  },
];
