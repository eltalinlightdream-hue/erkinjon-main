/* Atelier ornaments
   ──────────────────
   Thin-line decorative illustrations in the "Italian study atelier"
   style. The exported names are kept from the previous theme so every
   page that scatters these decorations re-themes without changes. */

const STROKE = "var(--terracotta)";
const STROKE_SOFT = "var(--ink-soft)";
const OLIVE = "var(--olive)";

interface OrnamentProps {
  size?: number;
  opacity?: number;
  className?: string;
}

function svgProps(size: number, opacity: number, className: string, viewBox = "0 0 32 32") {
  return {
    width: size,
    height: size,
    viewBox,
    fill: "none" as const,
    opacity,
    className,
    "aria-hidden": true as const,
  };
}

const line = {
  stroke: STROKE,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const lineSoft = { ...line, stroke: STROKE_SOFT };
const lineOlive = { ...line, stroke: OLIVE };

/* A quill in an inkwell */
export function SteveWaving({ size = 96, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M22 4 C18 8 14 14 13 21" {...line} />
      <path d="M22 4 C21 10 18 16 14 20" {...line} />
      <path d="M10 21 h8 l-1.5 7 h-5 z" {...lineSoft} />
    </svg>
  );
}

/* A writing hand: pencil over a ruled line */
export function SteveMining({ size = 96, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M8 22 L20 10 l4 4 L12 26 l-5 1 z" {...line} />
      <path d="M20 10 l4 4" {...line} />
      <path d="M5 29 h22" {...lineSoft} />
    </svg>
  );
}

/* An open book on a stand */
export function SteveReading({ size = 96, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M16 8 C12 5 7 5 4 6 v16 c3-1 8-1 12 2 4-3 9-3 12-2 V6 c-3-1-8-1-12 2 z" {...line} />
      <path d="M16 8 v16" {...lineSoft} />
      <path d="M12 27 h8" {...lineSoft} />
    </svg>
  );
}

/* A laurel sprig */
export function Creeper({ size = 64, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M16 28 C16 18 18 10 24 4" {...lineOlive} />
      <path d="M18 22 C14 21 12 18 12 15 C16 16 18 18 18 22 z" {...lineOlive} />
      <path d="M20 15 C17 13 16 10 17 7 C20 9 21 12 20 15 z" {...lineOlive} />
    </svg>
  );
}

/* A tall cypress tree */
export function Enderman({ size = 48, opacity = 0.18, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M16 2 C20 8 21 16 20 24 h-8 C11 16 12 8 16 2 z" {...lineOlive} />
      <path d="M16 24 v6" {...lineOlive} />
      <path d="M10 30 h12" {...lineSoft} />
    </svg>
  );
}

/* A classical column */
export function Zombie({ size = 80, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M9 6 h14 M8 9 h16" {...lineSoft} />
      <path d="M11 9 v16 M16 9 v16 M21 9 v16" {...lineSoft} />
      <path d="M8 25 h16 M9 28 h14" {...lineSoft} />
    </svg>
  );
}

/* An espresso cup */
export function Pig({ size = 32, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M8 12 h14 v6 a7 7 0 0 1 -14 0 z" {...line} />
      <path d="M22 13 h2 a3 3 0 0 1 0 6 h-2.5" {...line} />
      <path d="M6 28 h18" {...lineSoft} />
      <path d="M13 8 c0-2 2-2 2-4 M18 8 c0-2 2-2 2-4" {...lineSoft} />
    </svg>
  );
}

/* An olive branch */
export function Sheep({ size = 32, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M4 26 C12 22 20 14 28 6" {...lineOlive} />
      <path d="M12 20 C9 19 8 16 9 13 C12 14 13 17 12 20 z" {...lineOlive} />
      <path d="M19 13 C16 12 15 9 16 6 C19 7 20 10 19 13 z" {...lineOlive} />
      <circle cx="16" cy="22" r="2" {...lineOlive} />
      <circle cx="23" cy="15" r="2" {...lineOlive} />
    </svg>
  );
}

/* A pencil */
export function Pickaxe({ size = 32, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M7 21 L19 9 l4 4 L11 25 l-5 1 z" {...line} />
      <path d="M17 11 l4 4" {...lineSoft} />
    </svg>
  );
}

/* A candle */
export function Torch({ size = 24, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M12 14 h8 v12 h-8 z" {...lineSoft} />
      <path d="M16 14 v-3" {...lineSoft} />
      <path d="M16 4 c2 2 2 4 0 5 c-2-1-2-3 0-5 z" {...line} />
      <path d="M9 29 h14" {...lineSoft} />
    </svg>
  );
}

/* A small closed book */
export function BookItem({ size = 28, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path
        d="M9 5 h14 a2 2 0 0 1 2 2 v18 a2 2 0 0 1 -2 2 H9 a2 2 0 0 1 -2 -2 V7 a2 2 0 0 1 2 -2 z"
        {...line}
      />
      <path d="M11 5 v22" {...lineSoft} />
      <path d="M15 11 h7 M15 15 h7" {...lineSoft} />
    </svg>
  );
}

/* A writing desk with a thin frame */
export function CraftingTable({ size = 32, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <rect x="5" y="7" width="22" height="14" rx="2" {...lineSoft} />
      <path d="M9 12 h10 M9 16 h7" {...line} />
      <path d="M8 21 v5 M24 21 v5" {...lineSoft} />
    </svg>
  );
}

/* A sealed letter */
export function Chest({ size = 32, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <rect x="5" y="9" width="22" height="15" rx="2" {...lineSoft} />
      <path d="M5 11 l11 8 11-8" {...lineSoft} />
      <circle cx="16" cy="19" r="2.5" {...line} />
    </svg>
  );
}

/* A compass rose */
export function Compass({ size = 28, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <circle cx="16" cy="16" r="12" {...lineSoft} />
      <path d="M16 6 l3 10 -3 10 -3 -10 z" {...line} />
      <path d="M6 16 h4 M22 16 h4" {...lineSoft} />
    </svg>
  );
}

/* A fountain-pen nib */
export function Sword({ size = 28, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M16 4 C22 8 23 16 20 23 h-8 C9 16 10 8 16 4 z" {...line} />
      <path d="M16 11 v8" {...lineSoft} />
      <circle cx="16" cy="11" r="1.5" {...lineSoft} />
      <path d="M13 26 h6" {...lineSoft} />
    </svg>
  );
}

/* A small fleuron diamond (used as a brand mark) */
export function GrassBlock({ size = 24, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M16 5 L27 16 L16 27 L5 16 z" {...line} />
      <path d="M16 11 L21 16 L16 21 L11 16 z" fill={STROKE} stroke="none" />
    </svg>
  );
}

/* Swallows in flight (hero / large background ornament) */
export function EnderDragonSilhouette({
  width = 300,
  height = 120,
  opacity = 0.08,
  className = "",
}: {
  width?: number;
  height?: number;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 120"
      fill="none"
      opacity={opacity}
      className={className}
      aria-hidden
    >
      <path d="M40 60 C50 48 62 48 70 56 C78 48 90 48 100 60" {...lineSoft} strokeWidth={2} />
      <path d="M150 36 C158 27 167 27 173 33 C179 27 188 27 196 36" {...lineSoft} strokeWidth={2} />
      <path d="M230 76 C236 69 243 69 248 74 C253 69 260 69 266 76" {...lineSoft} strokeWidth={2} />
    </svg>
  );
}

/* A calligraphic flourish — kept for API compatibility */
export function SkeletonHorse({ size = 48, opacity = 1, className = "" }: OrnamentProps) {
  return (
    <svg {...svgProps(size, opacity, className)}>
      <path d="M4 20 C10 12 16 24 22 16 C25 12 28 14 28 18" {...line} />
      <path d="M6 26 h20" {...lineSoft} />
    </svg>
  );
}

type CharacterType =
  | "steve-waving"
  | "steve-mining"
  | "steve-reading"
  | "creeper"
  | "enderman"
  | "zombie"
  | "pig"
  | "sheep"
  | "skeleton-horse";
type ItemType =
  | "pickaxe"
  | "torch"
  | "book"
  | "crafting-table"
  | "chest"
  | "compass"
  | "sword"
  | "grass-block";

interface McCharacterProps {
  character: CharacterType;
  size?: number;
  opacity?: number;
  className?: string;
}

interface McItemProps {
  item: ItemType;
  size?: number;
  opacity?: number;
  className?: string;
}

export function McCharacter({
  character,
  size = 80,
  opacity = 1,
  className = "",
}: McCharacterProps) {
  const props = { size, opacity, className };
  switch (character) {
    case "steve-waving":
      return <SteveWaving {...props} />;
    case "steve-mining":
      return <SteveMining {...props} />;
    case "steve-reading":
      return <SteveReading {...props} />;
    case "creeper":
      return <Creeper {...props} />;
    case "enderman":
      return <Enderman {...props} />;
    case "zombie":
      return <Zombie {...props} />;
    case "pig":
      return <Pig {...props} />;
    case "sheep":
      return <Sheep {...props} />;
    case "skeleton-horse":
      return <SkeletonHorse {...props} />;
  }
}

export function McItem({ item, size = 28, opacity = 1, className = "" }: McItemProps) {
  const props = { size, opacity, className };
  switch (item) {
    case "pickaxe":
      return <Pickaxe {...props} />;
    case "torch":
      return <Torch {...props} />;
    case "book":
      return <BookItem {...props} />;
    case "crafting-table":
      return <CraftingTable {...props} />;
    case "chest":
      return <Chest {...props} />;
    case "compass":
      return <Compass {...props} />;
    case "sword":
      return <Sword {...props} />;
    case "grass-block":
      return <GrassBlock {...props} />;
  }
}
