// ============================================================================
// MOG — CONFIGURARE CENTRALĂ
// ----------------------------------------------------------------------------
// Tot conținutul site-ului se editează AICI. Nu trebuie să umbli în componente
// pentru texte, linkuri sau imagini.
// ============================================================================

export const SITE = {
  name: "MOG",
  ticker: "$MOG",
  domain: "mog.example", // înlocuiește cu domeniul real
  description:
    "Not a meme. An expression — winning at everything, IRL and onchain. No utility. Just MOG.",
};

// ----------------------------------------------------------------------------
// LINKURI EXTERNE + ADRESA CONTRACTULUI
// Înlocuiește placeholderele cu valori reale când le ai.
// Orice câmp lăsat între paranteze drepte rămâne automat pe "COMING SOON".
// ----------------------------------------------------------------------------
export const LINKS = {
  x: "https://x.com/MOGtheMOGGED",
  telegram: "[TELEGRAM_LINK]",
  buy: "[BUY_LINK]",
  contractAddress: "HdFKhcNEKh1iM1do6iMUn3rdE5cH4MLrpSTU6i9Hpump",
};

/** Un link e „real" doar dacă nu mai e un placeholder de forma [ceva]. */
export function isLive(value: string): boolean {
  return Boolean(value) && !/^\[.*\]$/.test(value.trim());
}

/** Scurtează o adresă lungă pentru afișare: 0x1234…abcd */
export function shortenCA(ca: string, lead = 6, tail = 4): string {
  if (!isLive(ca)) return "COMING SOON";
  if (ca.length <= lead + tail + 1) return ca;
  return `${ca.slice(0, lead)}…${ca.slice(-tail)}`;
}

// ----------------------------------------------------------------------------
// MEDIA
// ----------------------------------------------------------------------------
export const MEDIA = {
  heroVideo: "/media/mog/mog-hero.mp4",
  counterBackdrop: "/media/mog/float-3.jpg",
};

// ----------------------------------------------------------------------------
// NAVIGAȚIE
// ----------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Lore", href: "#lore" },
  { label: "Gallery", href: "#gallery" },
  { label: "Video", href: "#video" },
];

// ----------------------------------------------------------------------------
// HERO
// ----------------------------------------------------------------------------
export const HERO = {
  eyebrow: "a culture coin. there is no meme, ily.",
  title: "MOG",
  subtitle: "THE MOGGED",
  lead: "Not a meme. An expression — winning at everything, IRL and onchain.",
  scrollHint: "↓ SCROLL — YOU'RE ALREADY MOGGED",
  ticker: [
    "Some animals run. Some animals pump. MOG simply exists.",
    "No utility. Just MOG.",
    "You don't buy MOG. You become MOG.",
    "Once you're mogged, there's no going back.",
  ],
};

// ----------------------------------------------------------------------------
// LORE
// ----------------------------------------------------------------------------
export const LORE = {
  eyebrow: "Lore",
  headline: ["Some animals run.", "Some animals pump.", "MOG simply exists", "and everyone else gets mogged."],
  body:
    "To mog someone means to dominate so completely that comparison becomes meaningless. MOG doesn't brag. He doesn't seek validation. He simply exists, and the rest of the timeline adjusts around him.",
  badge: "the glasses aren't optional. they're earned.",
};

// ----------------------------------------------------------------------------
// GALERIE
// Doar artă MOG originală. (Materialele bazate pe fotografii de presă sau
// cadre din filme au fost excluse intenționat — risc de drepturi de autor.)
// ----------------------------------------------------------------------------
export type MogImage = {
  id: number;
  src: string;
  tag: string;
  alt: string;
};

export const GALLERY: MogImage[] = [
  {
    id: 1,
    src: "/media/mog/wagmi-desk.jpg",
    tag: "WAGMI DESK",
    alt: "MOG cu ochelari roșii în fața unui monitor cu grafic de tranzacționare.",
  },
  {
    id: 2,
    src: "/media/mog/ascension.jpg",
    tag: "ASCENSION",
    alt: "MOG musculos, auriu, cu fulgere de energie în jur.",
  },
  {
    id: 3,
    src: "/media/mog/cadet.jpg",
    tag: "$MOG CADET",
    alt: "MOG în costum de astronaut, cu galaxia în fundal.",
  },
  {
    id: 4,
    src: "/media/mog/zero-g.jpg",
    tag: "ZERO-G MOG",
    alt: "MOG plutind în spațiu într-un costum galben, cu cască sferică.",
  },
  {
    id: 5,
    src: "/media/mog/extraction.jpg",
    tag: "EXTRACTION",
    alt: "MOG ținând globul pământesc în palmă, pe fundal negru.",
  },
  {
    id: 6,
    src: "/media/mog/to-the-moon.jpg",
    tag: "MOG TO THE MOON",
    alt: "Cap uriaș MOG legat în lanțuri, plutind peste un peisaj pustiu.",
  },
  {
    id: 7,
    src: "/media/mog/float-1.jpg",
    tag: "SKELE-MOG",
    alt: "MOG alb, schelet, într-un cimitir noaptea.",
  },
  {
    id: 8,
    src: "/media/mog/float-2.jpg",
    tag: "SQUAD DROP",
    alt: "MOG în costum, plonjând din cer alături de alți MOG.",
  },
  {
    id: 9,
    src: "/media/mog/float-3.jpg",
    tag: "RAINBOW REALM",
    alt: "MOG uriaș, muscular, pe un câmp cu curcubeu în fundal.",
  },
  {
    id: 10,
    src: "/media/mog/float-4.jpg",
    tag: "ANGEL MOG",
    alt: "MOG cu aripi albe, zburând printre nori.",
  },
  {
    id: 11,
    src: "/media/mog/float-5.jpg",
    tag: "LAUNCH DAY",
    alt: "MOG în costum albastru, cu o rachetă decolând în fundal.",
  },
  {
    id: 12,
    src: "/media/mog/archive-extra.jpg",
    tag: "CHROME MOG",
    alt: "MOG robot, din metal cromat, cu ochelari reflectorizanți.",
  },
];

// ----------------------------------------------------------------------------
// SECȚIUNI DIVERSE
// ----------------------------------------------------------------------------
export const ARCHIVE = { eyebrow: "the archive keeps floating" };

export const COUNTER = {
  eyebrow: "live counter",
  label: "PEOPLE MOGGED RIGHT NOW",
  hint: "tap anywhere",
  start: 1_337_420,
};

export const GALLERY_COPY = {
  title: "GALLERY",
  hint: "MOGGED SO FAR — CLICK ONE",
};

export const VIDEO = {
  eyebrow: "Video",
  title: "WATCH MOG MOG",
};

export const FOOTER = {
  ticker: "$MOG",
  tagline: "No utility. Just MOG.",
  disclaimer: "Not financial advice. Just MOG.",
};
