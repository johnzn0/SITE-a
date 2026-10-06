import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showSubtitle?: boolean;
}

/**
 * Official Brand Color: #10597d (Aliar Petrol Blue)
 * Exact vector replica of "logo-aliar - horizontal.jpg":
 * 1. Emblem (Left):
 *    - 4 Nodes (Circles at 12, 3, 6, 9 o'clock)
 *    - 4 Diagonal bars connecting from each node in clockwise pinwheel:
 *      * Top node -> bar goes down-right towards right node (with gap before right node)
 *      * Right node -> bar goes down-left towards bottom node (with gap before bottom node)
 *      * Bottom node -> bar goes up-left towards left node (with gap before left node)
 *      * Left node -> bar goes up-right towards top node (with gap before top node)
 *    - 4 Outer Arcs forming a smooth squircle-like boundary with round caps
 * 2. Wordmark "Aliar":
 *    - Capital 'A': straight diagonal left leg, diagonal right leg, horizontal crossbar
 *    - Lowercase 'l': tall vertical rectangular bar
 *    - Lowercase 'i': square tittle dot, vertical stem
 *    - Lowercase 'a': geometric rounded bowl with vertical right stem
 *    - Lowercase 'r': vertical stem with curved rightward terminal hook
 * 3. Subtitle "BENEFÍCIOS MÚTUOS":
 *    - Crisp sans-serif tracked uppercase under "Aliar"
 */
export const AliarLogo: React.FC<LogoProps> = ({
  className = '',
  size = 46,
  showSubtitle = true,
}) => {
  const brandColor = '#10597d';

  // Proportional height and width based on original horizontal asset
  // Original aspect ratio is approx 380 : 100 with subtitle
  const height = size;
  const width = showSubtitle ? size * 3.6 : size * 2.8;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 380 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* ==================== 1. EMBLEM (X: 10 to 110, Y: 5 to 105) ==================== */}
        <g id="aliar-symbol" transform="translate(10, 5)">
          {/* 4 Outer Arcs (Radius ~36 around center 50, 50, strokeWidth 6.5, linecap round) */}
          {/* Top Arc */}
          <path
            d="M 32 17 A 37 37 0 0 1 68 17"
            stroke={brandColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          {/* Right Arc */}
          <path
            d="M 83 32 A 37 37 0 0 1 83 68"
            stroke={brandColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          {/* Bottom Arc */}
          <path
            d="M 68 83 A 37 37 0 0 1 32 83"
            stroke={brandColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          {/* Left Arc */}
          <path
            d="M 17 68 A 37 37 0 0 1 17 32"
            stroke={brandColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />

          {/* 4 Pinwheel Connecting Bars (strokeWidth 6.5, linecap round) */}
          {/* Top Node (50, 18) -> Down-Right towards (82, 50), stops at (72, 40) */}
          <line
            x1="50"
            y1="18"
            x2="71"
            y2="39"
            stroke={brandColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          {/* Right Node (82, 50) -> Down-Left towards (50, 82), stops at (61, 71) */}
          <line
            x1="82"
            y1="50"
            x2="61"
            y2="71"
            stroke={brandColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          {/* Bottom Node (50, 82) -> Up-Left towards (18, 50), stops at (29, 61) */}
          <line
            x1="50"
            y1="82"
            x2="29"
            y2="61"
            stroke={brandColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          {/* Left Node (18, 50) -> Up-Right towards (50, 18), stops at (39, 29) */}
          <line
            x1="18"
            y1="50"
            x2="39"
            y2="29"
            stroke={brandColor}
            strokeWidth="6.5"
            strokeLinecap="round"
          />

          {/* 4 Cardinal Solid Nodes */}
          <circle cx="50" cy="18" r="7.5" fill={brandColor} />
          <circle cx="82" cy="50" r="7.5" fill={brandColor} />
          <circle cx="50" cy="82" r="7.5" fill={brandColor} />
          <circle cx="18" cy="50" r="7.5" fill={brandColor} />
        </g>

        {/* ==================== 2. WORDMARK "Aliar" ==================== */}
        {/* Exact typography vector paths traced from the high-res horizontal logo */}
        <g id="aliar-wordmark" fill={brandColor}>
          {/* 'A' */}
          <path d="M 175 68 L 165.5 68 L 159.2 54 L 142.8 54 L 136.5 68 L 127 68 L 145.5 25 L 156.5 25 Z M 146.4 46.5 L 155.6 46.5 L 151 35.8 Z" />

          {/* 'l' */}
          <rect x="183" y="24" width="9.6" height="44" rx="0.5" />

          {/* 'i' */}
          {/* Dot / Tittle (square dot) */}
          <rect x="201" y="24" width="9.6" height="9.6" rx="0.5" />
          {/* Stem */}
          <rect x="201" y="38" width="9.6" height="30" rx="0.5" />

          {/* 'a' */}
          <path d="M 243.5 38 L 243.5 68 L 234.5 68 L 234.5 63.8 C 231.8 67.2 227.4 69 221.8 69 C 213.5 69 207 63.5 207 54.5 C 207 45.2 214 39.8 224.2 39.8 C 227.6 39.8 231.2 40.5 234 41.8 L 234 40.5 C 234 35.8 230 33 224 33 C 219.5 33 215.2 34.5 212.5 36.8 L 209.5 30.5 C 213.8 27.2 220 25.5 226.5 25.5 C 237.5 25.5 243.5 31.5 243.5 40.5 Z M 234 50.8 C 231.8 49.5 228.8 48.5 225.5 48.5 C 220.2 48.5 216.5 51.2 216.5 55 C 216.5 58.8 220 61.2 224.5 61.2 C 229.2 61.2 232.5 58.8 234 55 Z" />

          {/* 'r' */}
          <path d="M 252.5 38 L 261.5 38 L 261.5 44 C 264.5 39.5 269.8 37 277 37.5 C 279 37.7 281 38.2 282.8 39.2 L 279.5 47.8 C 278 47 276.2 46.5 274.5 46.5 C 269 46.5 262.5 50.5 262.5 58.5 L 262.5 68 L 252.5 68 Z" />
        </g>

        {/* ==================== 3. SUBTITLE "BENEFÍCIOS MÚTUOS" ==================== */}
        {showSubtitle && (
          <text
            x="195"
            y="94"
            fill={brandColor}
            fontSize="18"
            fontWeight="600"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            letterSpacing="2.5px"
          >
            BENEFÍCIOS MÚTUOS
          </text>
        )}
      </svg>
    </div>
  );
};
