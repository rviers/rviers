// ═══════════════════════════════════════════════════════════════════════
// AETHER DAILY 3D AESTHETIC PROFILE GENERATOR
// Expressive 3D layout generator with self-contained SVG header & status log.
// ═══════════════════════════════════════════════════════════════════════

import fs from 'fs';
import path from 'path';
import { themes } from './themes.js';

const USERNAME = 'rviers';
const REPO_DIR = '/home/rafael/AI Aether/7.sandbox/rviers';

function escapeXML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Determine today's theme
const now = new Date();
const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
const dayOfYear = Math.floor((now - startOfYear) / 86400000);
const themeIndex = Math.floor(Math.random() * themes.length);
const theme = themes[themeIndex];
const c = theme.colors;

console.log(`\n🎨 Day ${dayOfYear} — 3D Theme: ${theme.name}`);
console.log(`   Principle: ${theme.principle}\n`);

// 1. Generate 3D Hero Header SVG locally (Self-contained, 0 Vercel dependency)
function generate3DHeaderSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 230" width="100%" height="230">
  <defs>
    <linearGradient id="headerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#${c.bg}" />
      <stop offset="50%" stop-color="#${c.surface}" />
      <stop offset="100%" stop-color="#${c.border}" />
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#${c.text}" />
      <stop offset="100%" stop-color="#${c.accent}" />
    </linearGradient>
    <filter id="glowHeader">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="900" height="230" rx="16" fill="url(#headerBg)" stroke="#${c.border}" stroke-width="2"/>
  
  <!-- Wave Math Pattern Background -->
  <path d="M 0 170 Q 225 120 450 170 T 900 170 L 900 230 L 0 230 Z" fill="#${c.accent}" fill-opacity="0.15">
    <animate attributeName="d" dur="8s" repeatCount="indefinite"
      values="M 0 170 Q 225 120 450 170 T 900 170 L 900 230 L 0 230 Z;
              M 0 160 Q 225 200 450 160 T 900 160 L 900 230 L 0 230 Z;
              M 0 170 Q 225 120 450 170 T 900 170 L 900 230 L 0 230 Z" />
  </path>
  <path d="M 0 185 Q 225 145 450 185 T 900 185 L 900 230 L 0 230 Z" fill="#${c.secondary}" fill-opacity="0.25">
    <animate attributeName="d" dur="6s" repeatCount="indefinite"
      values="M 0 185 Q 225 145 450 185 T 900 185 L 900 230 L 0 230 Z;
              M 0 195 Q 225 155 450 195 T 900 195 L 900 230 L 0 230 Z;
              M 0 185 Q 225 145 450 185 T 900 185 L 900 230 L 0 230 Z" />
  </path>

  <!-- 3D Geometric Floating Cubes -->
  <g opacity="0.35" transform="translate(680, 20)">
    <polygon points="60,20 110,45 60,70 10,45" fill="#${c.accent}">
      <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="4s" repeatCount="indefinite" />
    </polygon>
    <polygon points="10,45 60,70 60,120 10,95" fill="#${c.secondary}">
      <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="4s" repeatCount="indefinite" />
    </polygon>
    <polygon points="60,70 110,45 110,95 60,120" fill="#${c.border}">
      <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="4s" repeatCount="indefinite" />
    </polygon>
  </g>

  <!-- Title & Description -->
  <text x="450" y="95" font-family="'Fira Code', monospace" font-size="54" font-weight="900" fill="url(#textGrad)" text-anchor="middle" filter="url(#glowHeader)">R_VIERA</text>
  <text x="450" y="140" font-family="'Fira Code', monospace" font-size="16" font-weight="bold" fill="#${c.accent}" text-anchor="middle" letter-spacing="2">3D DIGITAL CRAFTSMAN • SECURITY ARCHITECT • AI ENGINEER</text>
</svg>`;
}

// 2. Generate 3D Dynamic SVG Log
function generate3DSVGLog() {
  const timestamp = new Date().toISOString();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" width="100%" height="240">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#${c.bg}" />
      <stop offset="100%" stop-color="#${c.surface}" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#${c.accent}" />
      <stop offset="100%" stop-color="#${c.secondary}" />
    </linearGradient>
    <filter id="shadow3D" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.6" />
    </filter>
    <filter id="glow3D">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="240" rx="20" fill="url(#bgGrad)" stroke="#${c.border}" stroke-width="2"/>

  <!-- 3D Decorative Floating Cubes -->
  <g opacity="0.25">
    <path d="M 700 40 L 740 60 L 700 80 L 660 60 Z" fill="#${c.accent}"/>
    <path d="M 660 60 L 700 80 L 700 120 L 660 100 Z" fill="#${c.secondary}"/>
    <path d="M 700 80 L 740 60 L 740 100 L 700 120 Z" fill="#${c.border}"/>
  </g>

  <!-- 3D Glass Card Container -->
  <rect x="30" y="30" width="740" height="180" rx="16" fill="#${c.surface}" fill-opacity="0.7" stroke="url(#accentGrad)" stroke-width="2" filter="url(#shadow3D)"/>

  <!-- Title Badge -->
  <rect x="55" y="55" width="180" height="32" rx="8" fill="url(#accentGrad)"/>
  <text x="145" y="76" font-family="'Fira Code', monospace" font-size="13" font-weight="bold" fill="#${c.bg}" text-anchor="middle">AETHER 3D LOG</text>

  <!-- System Information Rows -->
  <text x="55" y="120" font-family="'Fira Code', monospace" font-size="16" fill="#${c.text}" font-weight="bold">
    Theme: <tspan fill="#${c.accent}">${escapeXML(theme.name)}</tspan> [3D ${escapeXML(theme.principle)}]
  </text>

  <text x="55" y="150" font-family="'Fira Code', monospace" font-size="14" fill="#${c.textMuted}">
    Lesson: ${escapeXML(theme.lesson)}
  </text>

  <text x="55" y="180" font-family="'Fira Code', monospace" font-size="12" fill="#${c.secondary}" filter="url(#glow3D)">
    Autonomously Rotated &amp; Rendered by Aether ${escapeXML(timestamp)}
  </text>
</svg>`;
}

// 3. Generate 3D Aesthetic README.md
function generateReadme() {
  const cacheBuster = Date.now();

  return `<!-- ═══════════════════════════════════════════════════════════════════ -->
<!-- AETHER 3D AESTHETIC DESIGN ACADEMY -->
<!-- Theme: ${theme.name} | Principle: ${theme.principle} -->
<!-- Day ${dayOfYear} ${now.getFullYear()} | Generated: ${now.toISOString()} -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<div align="center">

<!-- ─── 3D HERO HEADER ─── -->
<img src="https://raw.githubusercontent.com/${USERNAME}/${USERNAME}/main/header.svg?v=${cacheBuster}" width="100%" alt="3D Header"/>

<br/>

<!-- ─── TYPING SVG ─── -->
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=${c.accent.toUpperCase()}&center=true&vCenter=true&repeat=true&width=600&height=45&lines=3D+Volumetric+Aesthetic+Interfaces;Crafting+High-Performance+Secure+Systems;Automated+and+Maintained+by+Aether)](https://github.com/${USERNAME})

<br/>

<!-- ─── BADGES ─── -->
<a href="https://github.com/${USERNAME}"><img src="https://img.shields.io/badge/Portfolio-rviers-${c.bg}?style=for-the-badge&logo=github&logoColor=${c.accent}&labelColor=${c.surface}" alt="GitHub"/></a>
<img src="https://komarev.com/ghpvc/?username=${USERNAME}&label=Profile%20Views&color=${c.accent}&style=for-the-badge&labelColor=${c.surface}" alt="Views"/>

</div>

<br/>

<!-- ═══════════════════ 3D AETHER SYSTEM LOG ═══════════════════ -->

<div align="center">
  <img src="https://raw.githubusercontent.com/${USERNAME}/${USERNAME}/main/aether-status.svg?v=${cacheBuster}" width="800" alt="Aether 3D Status Log"/>
</div>

<br/>

<!-- ═══════════════════ DAILY 3D DESIGN LESSON ═══════════════════ -->

<details open>
<summary>🎨 <b>Today's 3D Design Theory: ${theme.principle}</b></summary>
<br/>

> ${theme.lesson}

**Current Theme Palette:** \`#${c.bg}\` \`#${c.surface}\` \`#${c.border}\` \`#${c.accent}\` \`#${c.secondary}\`

*This 3D Aesthetic Profile rotates themes daily, logging visual evolution in \`history/\`. Maintained autonomously by [Aether](https://github.com/${USERNAME}/rviers).*

</details>

<br/>

<!-- ═══════════════════ 3D TECH STACK ═══════════════════ -->

## \`▸ tech --stack --3d\`

<div align="center">
<table>
<tr>
<td align="center" width="140"><b>Languages</b></td>
<td align="center" width="140"><b>Frontend 3D</b></td>
<td align="center" width="140"><b>Backend</b></td>
<td align="center" width="140"><b>Infrastructure</b></td>
<td align="center" width="140"><b>Security</b></td>
</tr>
<tr>
<td align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,python&theme=dark" height="42"/>
</td>
<td align="center">
  <img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,threejs&theme=dark" height="42"/>
</td>
<td align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,postgres,redis&theme=dark" height="42"/>
</td>
<td align="center">
  <img src="https://skillicons.dev/icons?i=docker,k8s,linux,cloudflare&theme=dark" height="42"/>
</td>
<td align="center">
  <img src="https://skillicons.dev/icons?i=bash,aws&theme=dark" height="42"/>
</td>
</tr>
</table>
</div>

<br/>

<!-- ═══════════════════ GITHUB STATS ═══════════════════ -->

## \`▸ git --stats\`

<div align="center">
  <img height="180" src="https://github-readme-stats-fast.vercel.app/api?username=${USERNAME}&show_icons=true&hide_border=true&bg_color=${c.bg}&title_color=${c.text}&text_color=${c.textMuted}&icon_color=${c.secondary}&ring_color=${c.accent}&border_radius=16&include_all_commits=true&count_private=true"/>
  &nbsp;&nbsp;
  <img height="180" src="https://streak-stats.demolab.com?user=${USERNAME}&hide_border=true&background=${c.bg}&ring=${c.accent}&fire=${c.warning}&currStreakLabel=${c.text}&sideLabels=${c.textMuted}&dates=${c.textMuted}&border_radius=16"/>
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

---

<div align="center">
<sub>🎨 Today's 3D theme: <b>${theme.name}</b> (${theme.principle}) • Autonomously maintained by <b>Aether</b></sub>
</div>
`;
}

// Execute Generation & History Backup
const headerContent = generate3DHeaderSVG();
const svgContent = generate3DSVGLog();
const readmeContent = generateReadme();

fs.writeFileSync(path.join(REPO_DIR, 'header.svg'), headerContent);
fs.writeFileSync(path.join(REPO_DIR, 'aether-status.svg'), svgContent);
fs.writeFileSync(path.join(REPO_DIR, 'README.md'), readmeContent);

// Save to history/
const dateStr = new Date().toISOString().split('T')[0];
const historyDir = path.join(REPO_DIR, 'history', `${dateStr}_${theme.id}`);
if (!fs.existsSync(historyDir)) {
  fs.mkdirSync(historyDir, { recursive: true });
}
fs.writeFileSync(path.join(historyDir, 'header.svg'), headerContent);
fs.writeFileSync(path.join(historyDir, 'aether-status.svg'), svgContent);
fs.writeFileSync(path.join(historyDir, 'README.md'), readmeContent);

console.log(`✅ 3D Header SVG generated (header.svg)`);
console.log(`✅ 3D README.md generated`);
console.log(`✅ aether-status.svg 3D generated`);
console.log(`✅ Saved copy to ${historyDir}`);
