// Generates attractive temporary placeholder images (SVG) for Manx Quality Sheds.
// Run with: node scripts/generate-placeholders.mjs
// These are ONLY placeholders - replace files in /public/images with real project
// photography as it becomes available (same file names to avoid code changes).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "images");

// Restrained, natural, timber/garden inspired palette.
const PALETTES = [
  ["#3f4a3a", "#5b6b52"], // deep olive / forest
  ["#7a5a3a", "#9c7a52"], // cedar timber
  ["#2f332c", "#4a5443"], // charcoal green
  ["#8a6a45", "#b08d5f"], // warm timber
  ["#44503f", "#6c7a5c"], // moss
  ["#5c4630", "#836945"], // dark timber
];

function paletteFor(seed) {
  const idx = Math.abs(hash(seed)) % PALETTES.length;
  return PALETTES[idx];
}

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h;
}

function svgPlaceholder({ width, height, label, seed }) {
  const [c1, c2] = paletteFor(seed || label);
  const id = `g${Math.abs(hash(seed || label))}`;
  const stripes = Array.from({ length: 6 }, (_, i) => {
    const x = (width / 6) * i;
    return `<rect x="${x}" y="0" width="${width / 12}" height="${height}" fill="#ffffff" opacity="0.03" />`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(
    label
  )}">
  <defs>
    <linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}" />
      <stop offset="100%" stop-color="${c2}" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#${id})" />
  ${stripes}
  <g opacity="0.9">
    <rect x="0" y="${height - height * 0.22}" width="${width}" height="${height * 0.22}" fill="#000000" opacity="0.12" />
  </g>
  <text x="50%" y="${height - 28}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.max(
    14,
    Math.min(22, width / 28)
  )}" fill="#f4f1ea" opacity="0.92" letter-spacing="0.5">${escapeXml(
    label
  )}</text>
  <text x="50%" y="${height - 8}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" fill="#f4f1ea" opacity="0.6" letter-spacing="1.5">MANX QUALITY SHEDS — PLACEHOLDER IMAGE</text>
</svg>`;
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function write(relPath, width, height, label, seed) {
  const full = join(ROOT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, svgPlaceholder({ width, height, label, seed: seed || relPath }));
  console.log("wrote", relPath);
}

// Hero + editorial images
write("hero/home-hero.svg", 1920, 1280, "Bespoke Garden Room, Isle of Man");
write("hero/about-hero.svg", 1920, 900, "Manx Quality Sheds Workshop");
write("hero/projects-hero.svg", 1920, 900, "Our Work — Bespoke Builds");
write("hero/services-hero.svg", 1920, 900, "Our Services");
write("hero/financing-hero.svg", 1920, 700, "Financing Your Project");
write("hero/faqs-hero.svg", 1920, 700, "Frequently Asked Questions");
write("hero/contact-hero.svg", 1920, 700, "Get In Touch");

// About page
write("about/family-workshop.svg", 1200, 1500, "Family Run Since Day One");
write("about/craftsmanship-detail.svg", 1200, 900, "Handcrafted Timber Detail");

// Services
const services = [
  "bespoke-sheds",
  "summer-houses",
  "garden-rooms",
  "decking",
  "fencing",
  "garden-transformations",
];
for (const s of services) {
  write(`services/${s}/cover.svg`, 1200, 900, s.replace(/-/g, " "));
  write(`services/${s}/detail-1.svg`, 1000, 1250, `${s.replace(/-/g, " ")} detail`, `${s}-1`);
  write(`services/${s}/detail-2.svg`, 1000, 1250, `${s.replace(/-/g, " ")} example`, `${s}-2`);
}

// Featured project: Western Red Cedar summerhouse with hidden shed
write("projects/cedar-summerhouse/cover.svg", 1600, 1067, "3x5m Cedar Summerhouse & Hidden Shed");
write("projects/cedar-summerhouse/gallery-1.svg", 1200, 900, "Cedar Cladding Detail", "cedar-1");
write("projects/cedar-summerhouse/gallery-2.svg", 1200, 900, "Insulated Interior", "cedar-2");
write("projects/cedar-summerhouse/gallery-3.svg", 1200, 900, "Hidden Shed Access", "cedar-3");
write("projects/cedar-summerhouse/gallery-4.svg", 1200, 1500, "Completed Garden Room", "cedar-4");

// Demo/placeholder projects for the portfolio grid (clearly labelled demo data)
const demoProjects = [
  ["timber-deck-douglas", "Timber Deck, Douglas (Demo)"],
  ["garden-room-onchan", "Insulated Garden Room, Onchan (Demo)"],
  ["fencing-castletown", "Feather-Edge Fencing, Castletown (Demo)"],
  ["shed-peel", "Bespoke Shed, Peel (Demo)"],
  ["garden-transformation-ramsey", "Garden Transformation, Ramsey (Demo)"],
  ["summerhouse-laxey", "Summer House, Laxey (Demo)"],
];
for (const [slug, label] of demoProjects) {
  write(`projects/${slug}/cover.svg`, 1400, 1050, label, slug);
  write(`projects/${slug}/gallery-1.svg`, 1100, 900, `${label} detail`, `${slug}-1`);
  write(`projects/${slug}/gallery-2.svg`, 1100, 900, `${label} view`, `${slug}-2`);
}

// Gallery (varied sizes for masonry feel on homepage)
const galleryItems = [
  ["gallery-01", "Cedar Summerhouse Exterior", 1200, 1500],
  ["gallery-02", "Hand Built Shed Frame", 1400, 1050],
  ["gallery-03", "Composite Decking", 1400, 1050],
  ["gallery-04", "Feather-Edge Fence Panel", 1200, 1500],
  ["gallery-05", "Insulated Garden Room Interior", 1400, 1050],
  ["gallery-06", "Garden Transformation Overview", 1600, 1067],
  ["gallery-07", "Timber Joinery Detail", 1200, 1500],
  ["gallery-08", "Summer House Windows", 1400, 1050],
];
for (const [slug, label, w, h] of galleryItems) {
  write(`gallery/${slug}.svg`, w, h, label, slug);
}

// Process icons area / misc
write("misc/quote-cta-background.svg", 1920, 800, "Start Your Bespoke Build");
write("misc/og-default.svg", 1200, 630, "Manx Quality Sheds — Bespoke Outdoor Spaces");

console.log("\nDone. Placeholder SVGs written to public/images/.");
