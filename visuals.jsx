// visuals.jsx — brand visuals: sunburst, sparkle, IP placeholder shapes
// All shapes are designed to feel like minimal-geometric 3D toy IPs in monochrome.

const Sparkle = ({ size = 24, color = "currentColor", style }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} style={style} aria-hidden="true">
    <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" fill={color}/>
  </svg>
);

// The signature radiating ring from the brand poster. Procedurally generated rays.
const Sunburst = ({ rays = 48, innerRays = 36, color = "currentColor", className }) => {
  const outer = [];
  for (let i = 0; i < rays; i++) {
    const angle = (i / rays) * 360;
    outer.push(
      <polygon
        key={`o${i}`}
        points="0,-200 4,-340 -4,-340"
        transform={`rotate(${angle})`}
        fill={color}
        opacity={i % 2 ? 0.95 : 0.45}
      />
    );
  }
  const inner = [];
  for (let i = 0; i < innerRays; i++) {
    const angle = (i / innerRays) * 360 + 3;
    inner.push(
      <polygon
        key={`i${i}`}
        points="0,-130 2.4,-200 -2.4,-200"
        transform={`rotate(${angle})`}
        fill={color}
        opacity={i % 2 ? 0.9 : 0.5}
      />
    );
  }
  return (
    <svg viewBox="-400 -400 800 800" className={className} aria-hidden="true">
      <g>{outer}</g>
      <g className="float-rev">{inner}</g>
    </svg>
  );
};

// Simpler ring version used in cases/methodology
const RingMark = ({ size = 120, color = "currentColor", rays = 36 }) => {
  const arr = [];
  for (let i = 0; i < rays; i++) {
    const angle = (i / rays) * 360;
    arr.push(
      <polygon
        key={i}
        points="0,-44 1.5,-58 -1.5,-58"
        transform={`rotate(${angle})`}
        fill={color}
        opacity={i % 2 ? 0.9 : 0.45}
      />
    );
  }
  return (
    <svg viewBox="-60 -60 120 120" width={size} height={size} aria-hidden="true">
      {arr}
    </svg>
  );
};

// 3D-toy-feel placeholder shapes (monochrome with subtle gradient for matte/metallic feel)
const ShapeDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
    <defs>
      <radialGradient id="matte-sphere" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#fbf8f0"/>
        <stop offset="38%" stopColor="#b8b3a6"/>
        <stop offset="100%" stopColor="#23211c"/>
      </radialGradient>
      <radialGradient id="dark-sphere" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#5c5a52"/>
        <stop offset="48%" stopColor="#1f1d18"/>
        <stop offset="100%" stopColor="#000"/>
      </radialGradient>
      <radialGradient id="metal-sphere" cx="40%" cy="28%" r="78%">
        <stop offset="0%" stopColor="#f5f1e8"/>
        <stop offset="36%" stopColor="#9a958a"/>
        <stop offset="74%" stopColor="#33312b"/>
        <stop offset="100%" stopColor="#0a0a0a"/>
      </radialGradient>
      <linearGradient id="cap-grad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#f5f1e8"/>
        <stop offset="50%" stopColor="#8a8579"/>
        <stop offset="100%" stopColor="#15140f"/>
      </linearGradient>
      <linearGradient id="block-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3a382f"/>
        <stop offset="100%" stopColor="#0a0a0a"/>
      </linearGradient>
    </defs>
  </svg>
);

// IP #1 — "Sparky": sphere body + sparkle hat + minimal eyes
const IPSparky = ({ size = 120 }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
    <ellipse cx="100" cy="180" rx="58" ry="6" fill="#000" opacity=".5"/>
    <circle cx="100" cy="120" r="62" fill="url(#matte-sphere)"/>
    <circle cx="78" cy="108" r="6" fill="#0a0a0a"/>
    <circle cx="122" cy="108" r="6" fill="#0a0a0a"/>
    <circle cx="76" cy="106" r="2" fill="#fff"/>
    <circle cx="120" cy="106" r="2" fill="#fff"/>
    <path d="M88 138 Q100 146 112 138" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <g transform="translate(100 50)">
      <path d="M0 -40 L6 -6 L40 0 L6 6 L0 40 L-6 6 L-40 0 L-6 -6 Z" fill="currentColor"/>
    </g>
  </svg>
);

// IP #2 — "Block": stacked geometric — capsule on a cube on a disc
const IPBlock = ({ size = 120 }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
    <ellipse cx="100" cy="184" rx="56" ry="5" fill="#000" opacity=".5"/>
    <ellipse cx="100" cy="170" rx="58" ry="12" fill="url(#metal-sphere)"/>
    <rect x="60" y="80" width="80" height="80" rx="6" fill="url(#block-grad)"/>
    <rect x="60" y="80" width="80" height="14" fill="#fff" opacity=".06"/>
    <rect x="84" y="36" width="32" height="60" rx="16" fill="url(#cap-grad)"/>
    <circle cx="100" cy="36" r="4" fill="currentColor"/>
  </svg>
);

// IP #3 — "Match": a stylized match/flame as a minimal 3D toy
const IPMatch = ({ size = 120 }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
    <ellipse cx="100" cy="184" rx="46" ry="5" fill="#000" opacity=".5"/>
    <rect x="92" y="80" width="16" height="96" rx="2" fill="url(#cap-grad)"/>
    <path d="M100 30 C 124 60, 122 84, 108 96 C 96 106, 96 80, 92 76 C 88 86, 80 86, 80 70 C 80 56, 86 42, 100 30 Z" fill="url(#metal-sphere)"/>
    <circle cx="96" cy="64" r="3" fill="#0a0a0a"/>
    <circle cx="106" cy="64" r="3" fill="#0a0a0a"/>
  </svg>
);

// IP #4 — "Cube": cute cube with eyes (signal generation/decoding)
const IPCube = ({ size = 120 }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
    <ellipse cx="100" cy="180" rx="54" ry="6" fill="#000" opacity=".5"/>
    <g transform="translate(100 110)">
      <polygon points="0,-60 60,-30 60,40 0,70 -60,40 -60,-30" fill="url(#metal-sphere)"/>
      <polygon points="0,-60 60,-30 0,0 -60,-30" fill="#f5f1e8" opacity=".95"/>
      <polygon points="0,0 60,-30 60,40 0,70" fill="#1c1c1c" opacity=".55"/>
      <circle cx="-22" cy="14" r="5" fill="#0a0a0a"/>
      <circle cx="18" cy="14" r="5" fill="#0a0a0a"/>
    </g>
  </svg>
);

// IP #5 — minimal "Eye" used as Stage 1 (decoding)
const IPEye = ({ size = 120 }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
    <ellipse cx="100" cy="172" rx="58" ry="6" fill="#000" opacity=".5"/>
    <ellipse cx="100" cy="100" rx="80" ry="44" fill="url(#metal-sphere)"/>
    <circle cx="100" cy="100" r="28" fill="#0a0a0a"/>
    <circle cx="92" cy="92" r="6" fill="#f5f1e8"/>
    <circle cx="108" cy="108" r="2.5" fill="#f5f1e8" opacity=".7"/>
  </svg>
);

// Stage 2: Trend-Toy Sculpt — sphere + sparkle + tool
const IPSculpt = ({ size = 120 }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
    <ellipse cx="100" cy="180" rx="56" ry="5" fill="#000" opacity=".5"/>
    <circle cx="100" cy="116" r="56" fill="url(#matte-sphere)"/>
    <g transform="translate(150 70) rotate(20)" fill="currentColor">
      <path d="M0 -22 L4 -4 L22 0 L4 4 L0 22 L-4 4 L-22 0 L-4 -4 Z"/>
    </g>
    <g transform="translate(60 60)" fill="currentColor" opacity=".6">
      <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z"/>
    </g>
  </svg>
);

// Stage 3: Extension — multiple linked spheres
const IPExtend = ({ size = 120 }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
    <ellipse cx="100" cy="180" rx="62" ry="6" fill="#000" opacity=".5"/>
    <line x1="50" y1="120" x2="150" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity=".5"/>
    <circle cx="50" cy="120" r="28" fill="url(#metal-sphere)"/>
    <circle cx="100" cy="100" r="40" fill="url(#matte-sphere)"/>
    <circle cx="150" cy="120" r="28" fill="url(#dark-sphere)"/>
  </svg>
);

// Stage 4: Commercial — sphere with currency / box
const IPCommerce = ({ size = 120 }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
    <ellipse cx="100" cy="184" rx="60" ry="5" fill="#000" opacity=".5"/>
    <rect x="40" y="116" width="120" height="60" rx="4" fill="url(#block-grad)"/>
    <rect x="40" y="116" width="120" height="10" fill="#fff" opacity=".08"/>
    <line x1="100" y1="116" x2="100" y2="176" stroke="currentColor" strokeWidth="1" opacity=".4"/>
    <circle cx="100" cy="86" r="36" fill="url(#metal-sphere)"/>
    <text x="100" y="94" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="32" fill="#0a0a0a">¥</text>
  </svg>
);

// Logo lockup (ibd✦ small mark)
const IBDMark = ({ color = "currentColor" }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-display)", fontWeight: 800, color }}>
    <span style={{ letterSpacing: "-.02em" }}>ibd</span>
    <Sparkle size={14} color="var(--accent)"/>
  </span>
);

Object.assign(window, {
  Sparkle, Sunburst, RingMark, ShapeDefs,
  IPSparky, IPBlock, IPMatch, IPCube, IPEye, IPSculpt, IPExtend, IPCommerce,
  IBDMark,
});
