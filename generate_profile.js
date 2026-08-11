// ═══════════════════════════════════════════════════════════════════════
//  AETHER DAILY PROFILE GENERATOR
//  Picks today's theme, generates README.md, SVG, and logs evolution.
// ═══════════════════════════════════════════════════════════════════════

import fs from 'fs';
import { themes } from './themes.js';

const USERNAME = 'rviers';

// ─── Determine today's theme ────────────────────────────────────────
const now = new Date();
const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
const dayOfYear = Math.floor((now - startOfYear) / 86400000);
// Random theme selection
const themeIndex = Math.floor(Math.random() * themes.length);
const theme = themes[themeIndex];
const c = theme.colors;

console.log(`\n🎨 Day ${dayOfYear} — Theme: ${theme.name}`);
console.log(`   Principle: ${theme.principle}\n`);

// ─── Fetch latest GitHub activity ───────────────────────────────────
async function fetchLatestActivity() {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}/events/public`);
    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
    const events = await res.json();
    const push = events.find(e => e.type === 'PushEvent');
    if (push) {
      const repo = push.repo.name.replace(`${USERNAME}/`, '');
      const msg = push.payload.commits?.[0]?.message?.split('\n')[0] || 'Routine systems update';
      return { repo, msg: msg.length > 55 ? msg.substring(0, 52) + '...' : msg };
    }
    return { repo: 'system-core', msg: 'Resting between deployments...' };
  } catch (e) {
    console.error('Activity fetch error:', e.message);
    return { repo: 'unknown', msg: 'Compiling thoughts...' };
  }
}

// ─── XML escape helper ──────────────────────────────────────────────
const esc = (s) => s.replace(/[<>&'"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]);

// ─── Generate Aether SVG ────────────────────────────────────────────
function generateSvg(activity) {
  const dateStr = now.toISOString().split('T')[0] + ' ' +
    now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' }) + ' UTC';

  return `<svg fill="none" viewBox="0 0 840 220" width="840" height="220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&amp;family=Inter:wght@400;600;700&amp;display=swap');
      .card-bg { fill: #${c.bg}; }
      .card-border { stroke: #${c.surface}; stroke-width: 1; }
      .card-inner { fill: #${c.surface}; }
      .card-inner-border { stroke: #${c.border}; stroke-width: 0.5; }
      .heading { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13px; fill: #${c.text}; letter-spacing: 3px; }
      .sub { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 10px; fill: #${c.textMuted}; letter-spacing: 1.5px; }
      .date { font-family: 'JetBrains Mono', monospace; font-weight: 400; font-size: 10px; fill: #${c.textMuted}; }
      .mono { font-family: 'JetBrains Mono', monospace; font-size: 12.5px; }
      .prompt { fill: #${c.secondary}; }
      .label { fill: #${c.textMuted}; }
      .value { fill: #${c.text}; }
      .highlight { fill: #${c.accent}; }
      .msg { fill: #${c.success}; }
      .dot-red { fill: #${c.error}; }
      .dot-amber { fill: #${c.warning}; }
      .dot-green { fill: #${c.success}; }
      .status-glow { fill: #${c.success}; }
      .pulse { animation: pulse 3s ease-in-out infinite; }
      @keyframes pulse { 0%, 100% { opacity: 0.8; } 50% { opacity: 0.2; } }
    </style>
    <linearGradient id="accent-line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#${c.accent}" stop-opacity="0"/>
      <stop offset="50%" stop-color="#${c.accent}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#${c.secondary}" stop-opacity="0"/>
    </linearGradient>
    <filter id="soft-glow">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <rect width="838" height="218" x="1" y="1" rx="12" class="card-bg card-border"/>
  <line x1="40" y1="1" x2="800" y2="1" stroke="url(#accent-line)" stroke-width="2"/>
  <text x="32" y="38" class="heading">AETHER</text>
  <text x="105" y="38" class="sub" style="letter-spacing: 2px;">SYSTEM LOG</text>
  <text x="808" y="38" class="date" text-anchor="end">${dateStr}</text>
  <circle cx="780" cy="33" r="3" class="status-glow pulse" filter="url(#soft-glow)"/>
  <circle cx="780" cy="33" r="3" class="status-glow"/>
  <line x1="32" y1="52" x2="808" y2="52" stroke="#${c.border}" stroke-width="0.5"/>
  <rect width="776" height="140" x="32" y="64" rx="8" class="card-inner card-inner-border"/>
  <circle cx="52" cy="82" r="4" class="dot-red"/>
  <circle cx="66" cy="82" r="4" class="dot-amber"/>
  <circle cx="80" cy="82" r="4" class="dot-green"/>
  <text x="100" y="86" class="mono label" style="font-size: 10px;">~/aether</text>
  <text x="52" y="118" class="mono prompt">λ</text>
  <text x="70" y="118" class="mono label">target</text>
  <text x="118" y="118" class="mono highlight">${esc(activity.repo)}</text>
  <text x="52" y="142" class="mono prompt">λ</text>
  <text x="70" y="142" class="mono label">status</text>
  <text x="118" y="142" class="mono value">decrypting latest transmission...</text>
  <text x="52" y="166" class="mono prompt">λ</text>
  <text x="70" y="166" class="mono label">log</text>
  <text x="100" y="166" class="mono msg">"${esc(activity.msg)}"</text>
  <line x1="40" y1="217" x2="800" y2="217" stroke="url(#accent-line)" stroke-width="1"/>
</svg>`;
}

// ─── Generate About Section ─────────────────────────────────────────
function generateAbout() {
  const titles = theme.titles.join(' • ');

  if (theme.aboutFormat === 'json') {
    return `\`\`\`json
{
  "name": "Rafael Viera",
  "alias": "R_Viera",
  "location": "Jakarta, Indonesia",
  "focus": [
    "AI Agent Architecture & Orchestration",
    "Cybersecurity & Threat Intelligence",
    "Full-Stack Systems Engineering",
    "Cloud Infrastructure & DevSecOps"
  ],
  "current_project": "Aether — personal AI assistant framework",
  "today_learning": "${theme.principle}"
}
\`\`\``;
  }

  return `\`\`\`yaml
name: Rafael Viera
alias: R_Viera
location: Jakarta, Indonesia  # UTC+7
focus:
  - AI Agent Architecture & Orchestration
  - Cybersecurity & Threat Intelligence
  - Full-Stack Systems Engineering
  - Cloud Infrastructure & DevSecOps

current_project: "Aether — my personal AI assistant framework"
today_learning: "${theme.principle}"
\`\`\``;
}

// ─── Generate Typing SVG URL ────────────────────────────────────────
function typingUrl() {
  const lines = theme.taglines.map(l => encodeURIComponent(l)).join(';');
  return `https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=22&pause=1000&color=${c.text.toUpperCase()}&center=true&vCenter=true&repeat=true&width=600&height=45&lines=${lines}`;
}

// ─── Generate Full README ───────────────────────────────────────────
function generateReadme() {
  const titles = theme.titles.join(' • ');
  const headerGradient = `0:${c.bg},50:${c.surface},100:${c.border}`;
  const footerGradient = `0:${c.border},50:${c.surface},100:${c.bg}`;

  return `<!-- ═══════════════════════════════════════════════════════════════════ -->
<!-- AETHER DESIGN ACADEMY — Auto-generated daily by Aether            -->
<!-- Theme: ${theme.name} | Principle: ${theme.principle}              -->
<!-- Day ${dayOfYear} of ${now.getUTCFullYear()} | Generated: ${now.toISOString()} -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div align="center">

<!-- ─── HEADER ─── -->
<img src="https://capsule-render.vercel.app/api?type=${theme.capsuleType}&color=${headerGradient}&height=220&section=header&text=R_Viera&fontSize=72&fontColor=${c.text}&fontAlignY=35&desc=${encodeURIComponent(titles)}&descSize=16&descColor=${c.textMuted}&descAlignY=55&animation=${theme.capsuleAnimation}" width="100%" alt="Header"/>

<br/>

<!-- ─── TYPING SVG ─── -->
[![Typing SVG](${typingUrl()})](https://github.com/${USERNAME})

<br/>

<!-- ─── BADGES ─── -->
<a href="https://github.com/${USERNAME}"><img src="https://img.shields.io/badge/Portfolio-${USERNAME}-${c.bg}?style=for-the-badge&logo=github&logoColor=${c.text}&labelColor=${c.surface}" alt="GitHub"/></a>
<img src="https://komarev.com/ghpvc/?username=${USERNAME}&label=Visitors&color=${c.border}&style=for-the-badge&labelColor=${c.surface}" alt="Views"/>

</div>

<br/>

<!-- ═══════════════════ AETHER LOG ═══════════════════ -->

<div align="center">
  <img src="aether-status.svg" width="800" alt="Aether System Log"/>
</div>

<br/>

<!-- ═══════════════════ ABOUT ═══════════════════ -->

## \`▸ whoami\`

${generateAbout()}

<br/>

<!-- ═══════════════════ DESIGN LESSON ═══════════════════ -->

<details>
<summary>🎨 <b>Today's Design Lesson: ${theme.principle}</b></summary>
<br/>

> ${theme.lesson}

**Theme:** \`${theme.name}\` — Palette: \`#${c.bg}\` \`#${c.surface}\` \`#${c.border}\` \`#${c.accent}\` \`#${c.secondary}\`

*This profile rotates through 30 design themes, each teaching a different color theory principle. Powered by [Aether](https://github.com/${USERNAME}/rviers).*

</details>

<br/>

<!-- ═══════════════════ TECH STACK ═══════════════════ -->

## \`▸ tech --stack\`

<div align="center">
<table>
<tr>
<td align="center" width="140"><b>Languages</b></td>
<td align="center" width="140"><b>Frontend</b></td>
<td align="center" width="140"><b>Backend</b></td>
<td align="center" width="140"><b>Infrastructure</b></td>
<td align="center" width="140"><b>Security</b></td>
</tr>
<tr>
<td align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,python&theme=dark" height="40"/>
</td>
<td align="center">
  <img src="https://skillicons.dev/icons?i=react,nextjs,tailwind&theme=dark" height="40"/>
</td>
<td align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,firebase,postgres&theme=dark" height="40"/>
</td>
<td align="center">
  <img src="https://skillicons.dev/icons?i=docker,cloudflare,linux&theme=dark" height="40"/>
</td>
<td align="center">
  <img src="https://skillicons.dev/icons?i=bash,git,redis&theme=dark" height="40"/>
</td>
</tr>
</table>
</div>

<br/>

<!-- ═══════════════════ GITHUB STATS ═══════════════════ -->

## \`▸ git stats\`

<div align="center">
  <img height="180" src="https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&hide_border=true&bg_color=${c.bg}&title_color=${c.text}&text_color=${c.textMuted}&icon_color=${c.secondary}&ring_color=${c.accent}&border_radius=12&include_all_commits=true&count_private=true"/>
  &nbsp;&nbsp;
  <img height="180" src="https://streak-stats.demolab.com?user=${USERNAME}&hide_border=true&background=${c.bg}&ring=${c.accent}&fire=${c.warning}&currStreakLabel=${c.text}&sideLabels=${c.textMuted}&dates=${c.textMuted}&border_radius=12"/>
</div>

<br/>

<div align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&hide_border=true&bg_color=${c.bg}&title_color=${c.text}&text_color=${c.textMuted}&border_radius=12&langs_count=8"/>
</div>

<br/>

<!-- ─── TROPHIES ─── -->
<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=${USERNAME}&theme=${theme.trophyTheme}&no-frame=true&no-bg=true&column=7&margin-w=8" width="100%" alt="Trophies"/>
</div>

<br/>

<!-- ═══════════════════ CONTRIBUTION SNAKE ═══════════════════ -->

## \`▸ contributions\`

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${USERNAME}/${USERNAME}/output/github-snake-dark.svg"/>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${USERNAME}/${USERNAME}/output/github-snake.svg"/>
    <img alt="Contribution Snake" src="https://raw.githubusercontent.com/${USERNAME}/${USERNAME}/output/github-snake.svg" width="100%"/>
  </picture>
</div>

<br/>

<!-- ═══════════════════ ACTIVITY GRAPH ═══════════════════ -->

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${USERNAME}&bg_color=${c.bg}&color=${c.textMuted}&line=${c.accent}&point=${c.secondary}&area=true&area_color=${c.border}&hide_border=true&custom_title=Commit%20Timeline&radius=12" width="95%" alt="Activity Graph"/>
</div>

<br/>

<!-- ═══════════════════ FOOTER ═══════════════════ -->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=${theme.capsuleType}&color=${footerGradient}&height=120&section=footer" width="100%"/>

<br/>

\`\`\`
"${theme.quote}"
\`\`\`

<sub>🎨 Today's theme: <b>${theme.name}</b> — ${theme.principle} · Autonomously maintained by <b>Aether</b></sub>

</div>
`;
}

// ─── Log design evolution ───────────────────────────────────────────
function logEvolution() {
  const dateStr = now.toISOString().split('T')[0];
  const palette = `\`#${c.bg}\` \`#${c.surface}\` \`#${c.border}\` \`#${c.accent}\` \`#${c.secondary}\``;

  const entry = `
### Day ${dayOfYear} — ${dateStr}
**Theme:** ${theme.name}
**Principle:** ${theme.principle}
**Palette:** ${palette}
**Lesson:** ${theme.lesson}

---
`;

  // Create file if it doesn't exist
  if (!fs.existsSync('design_evolution.md')) {
    fs.writeFileSync('design_evolution.md', `# 🎨 Aether Design Evolution Log

> This log tracks how Aether explores and learns design principles through daily theme rotations.
> Each day, a new color theory concept is applied to this GitHub profile.
> 30 themes · 30 lessons · Infinite learning.

---
${entry}`);
  } else {
    fs.appendFileSync('design_evolution.md', entry);
  }
}

// ─── MAIN ───────────────────────────────────────────────────────────
async function main() {
  const activity = await fetchLatestActivity();

  // 1. Generate README.md
  const readme = generateReadme();
  fs.writeFileSync('README.md', readme);
  console.log('✅ README.md generated');

  // 2. Generate Aether SVG
  const svg = generateSvg(activity);
  fs.writeFileSync('aether-status.svg', svg);
  console.log(`✅ aether-status.svg generated (repo: ${activity.repo})`);

  // 3. Save copy to history folder
  const dateStr = now.toISOString().split('T')[0];
  const historyDir = `history/${dateStr}_${theme.id}`;
  if (!fs.existsSync('history')) {
    fs.mkdirSync('history', { recursive: true });
  }
  if (!fs.existsSync(historyDir)) {
    fs.mkdirSync(historyDir, { recursive: true });
  }
  fs.writeFileSync(`${historyDir}/README.md`, readme);
  fs.writeFileSync(`${historyDir}/aether-status.svg`, svg);
  console.log(`✅ Saved copy to ${historyDir}/`);

  // 4. Log evolution
  logEvolution();
  console.log('✅ design_evolution.md updated');

  console.log(`\n🎨 Theme "${theme.name}" applied successfully!`);
  console.log(`   Quote: "${theme.quote}"\n`);
}

main().catch(console.error);
