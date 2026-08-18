// The previous hero artwork: an SVG sunrise scene (sun, hills, winding path,
// olive trees). Replaced by the full-bleed Pilgrim's Progress image in
// HomeArtwork.tsx (2026-08-18); kept here unused in case it is wanted again.
// Its CSS hooks (.art-* classes) are still defined in app/globals.css.

function OliveTree({
  x,
  y,
  scale = 1,
  flip = false,
}: {
  x: number;
  y: number;
  scale?: number;
  flip?: boolean;
}) {
  return (
    <g
      className="art-tree"
      transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}
    >
      <path d="M-3.2 -8 v36 c0 3.5 6.4 3.5 6.4 0 v-36z" fill="var(--art-trunk)" />
      <ellipse cx="0" cy="-36" rx="30" ry="38" fill="var(--art-tree)" />
      <ellipse cx="-22" cy="-22" rx="18" ry="24" fill="var(--art-tree)" />
      <ellipse cx="22" cy="-20" rx="16" ry="22" fill="var(--art-tree)" />
      <ellipse cx="6" cy="-54" rx="16" ry="20" fill="var(--art-tree)" />
      <ellipse
        cx="-10"
        cy="-42"
        rx="14"
        ry="18"
        fill="var(--art-tree-lit)"
        opacity="0.4"
      />
    </g>
  );
}

function Bird({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <path
      d="M0 0 q8 5 16 -1 q7 7 15 1"
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill="none"
      stroke="var(--art-bird)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  );
}

export function HomeArtworkScenic() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          <linearGradient id="home-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--art-sky-top)" />
            <stop offset="42%" stopColor="var(--art-sky-mid)" />
            <stop offset="72%" stopColor="var(--art-sky-horizon)" />
            <stop offset="100%" stopColor="var(--art-sky-ground)" />
          </linearGradient>
          <radialGradient id="home-sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--art-sun)" stopOpacity="0.55" />
            <stop offset="35%" stopColor="var(--art-sun)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--art-sun)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="home-path" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--art-path-edge)" />
            <stop offset="50%" stopColor="var(--art-path)" />
            <stop offset="100%" stopColor="var(--art-path-edge)" />
          </linearGradient>
          <linearGradient id="home-ground-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--bg)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--bg)" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="home-haze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--art-haze)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--art-haze)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--art-haze)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#home-sky)" />

        <g className="art-stars">
          <circle cx="86" cy="64" r="1.1" fill="var(--art-star)" />
          <circle cx="164" cy="118" r="0.8" fill="var(--art-star)" opacity="0.7" />
          <circle cx="248" cy="46" r="1.3" fill="var(--art-star)" />
          <circle cx="318" cy="132" r="0.7" fill="var(--art-star)" opacity="0.55" />
          <circle cx="412" cy="72" r="1" fill="var(--art-star)" />
          <circle cx="502" cy="28" r="0.9" fill="var(--art-star)" opacity="0.8" />
          <circle cx="596" cy="96" r="0.7" fill="var(--art-star)" />
          <circle cx="678" cy="40" r="1.2" fill="var(--art-star)" />
          <circle cx="812" cy="58" r="0.8" fill="var(--art-star)" />
          <circle cx="894" cy="112" r="1.1" fill="var(--art-star)" opacity="0.75" />
          <circle cx="986" cy="36" r="0.9" fill="var(--art-star)" />
          <circle cx="1074" cy="88" r="1.3" fill="var(--art-star)" />
          <circle cx="1168" cy="52" r="0.7" fill="var(--art-star)" opacity="0.6" />
          <circle cx="1254" cy="124" r="1" fill="var(--art-star)" />
          <circle cx="1338" cy="44" r="0.8" fill="var(--art-star)" />
          <circle cx="1402" cy="92" r="1.1" fill="var(--art-star)" />
          <circle cx="54" cy="176" r="0.7" fill="var(--art-star)" opacity="0.5" />
          <circle cx="1388" cy="168" r="0.9" fill="var(--art-star)" opacity="0.65" />
        </g>

        <g className="art-rays">
          <polygon points="720,195 700,900 740,900" fill="var(--art-sun)" />
          <polygon points="720,195 560,900 590,900" fill="var(--art-sun)" />
          <polygon points="720,195 850,900 878,900" fill="var(--art-sun)" />
          <polygon points="720,195 430,900 452,900" fill="var(--art-sun)" />
          <polygon points="720,195 990,900 1014,900" fill="var(--art-sun)" />
          <polygon points="720,195 250,820 268,840" fill="var(--art-sun)" />
          <polygon points="720,195 1170,820 1190,842" fill="var(--art-sun)" />
        </g>

        <ellipse cx="720" cy="210" rx="460" ry="260" fill="url(#home-sun-glow)" />
        <g className="art-glow">
          <circle cx="720" cy="195" r="92" fill="var(--art-sun)" opacity="0.2" />
          <circle cx="720" cy="195" r="52" fill="var(--art-sun)" opacity="0.35" />
          <circle cx="720" cy="195" r="34" fill="var(--art-sun)" />
          <circle cx="710" cy="186" r="11" fill="var(--art-sun-core)" opacity="0.55" />
        </g>

        <g className="art-cloud" fill="var(--art-cloud)">
          <ellipse cx="240" cy="168" rx="110" ry="26" />
          <ellipse cx="186" cy="176" rx="58" ry="18" />
          <ellipse cx="298" cy="174" rx="52" ry="16" />
          <ellipse cx="1180" cy="148" rx="130" ry="24" />
          <ellipse cx="1120" cy="156" rx="64" ry="16" />
          <ellipse cx="1248" cy="154" rx="58" ry="15" />
        </g>

        <Bird x={980} y={150} scale={1} />
        <Bird x={1016} y={162} scale={0.72} />
        <Bird x={1088} y={144} scale={0.84} />

        <path
          className="art-hill art-hill-far"
          d="M-40 548 C 180 500 280 470 430 492 C 580 514 640 438 780 448 C 940 460 1020 528 1180 506 C 1300 490 1380 518 1480 498 L 1480 900 L -40 900 Z"
          fill="var(--art-hill-1)"
        />
        <rect x="0" y="500" width="1440" height="90" fill="url(#home-haze)" />

        <path
          className="art-hill art-hill-mid"
          d="M-40 602 C 120 568 240 628 400 586 C 560 544 650 608 820 574 C 1000 538 1140 616 1480 568 L 1480 900 L -40 900 Z"
          fill="var(--art-hill-2)"
        />

        <path
          className="art-hill art-hill-peak"
          d="M-40 704 C 70 678 150 718 250 656 C 340 592 400 512 508 498 C 572 488 612 534 652 588 C 740 668 840 708 980 676 C 1130 642 1280 718 1480 688 L 1480 900 L -40 900 Z"
          fill="var(--art-hill-3)"
        />
        <path
          d="M 250 656 C 340 592 400 512 508 498 C 540 494 568 508 592 530 C 520 548 430 610 360 680 C 320 700 280 690 250 656 Z"
          fill="var(--art-hill-3-shade)"
          opacity="0.28"
        />

        <path
          className="art-path"
          d="M 708 900 C 690 852 628 836 646 786 C 664 736 752 722 722 672 C 692 622 704 602 712 572 L 732 572 C 724 602 736 622 706 672 C 676 722 760 736 778 786 C 796 836 734 852 732 900 Z"
          fill="url(#home-path)"
        />
        <path
          d="M 720 900 C 704 852 656 834 668 786 C 680 738 740 724 722 676 C 708 636 716 604 722 572"
          fill="none"
          stroke="var(--art-path-light)"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.55"
        />

        <path
          className="art-hill art-hill-near"
          d="M-40 802 C 160 754 300 828 470 786 C 620 748 710 822 840 792 C 1020 754 1220 838 1480 778 L 1480 900 L -40 900 Z"
          fill="var(--art-hill-4)"
        />

        <OliveTree x={92} y={768} scale={1.18} />
        <OliveTree x={188} y={802} scale={0.82} />
        <OliveTree x={268} y={778} scale={0.64} />
        <OliveTree x={1188} y={762} scale={1.08} flip />
        <OliveTree x={1296} y={794} scale={0.9} flip />
        <OliveTree x={1388} y={748} scale={1.22} flip />

        <rect x="0" y="730" width="1440" height="170" fill="url(#home-ground-fade)" />
      </svg>
    </div>
  );
}
