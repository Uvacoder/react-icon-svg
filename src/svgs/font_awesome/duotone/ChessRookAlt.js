import * as React from "react";

function SvgChessRookAlt(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M320 473.89V496a16 16 0 01-16 16H16a16 16 0 01-16-16v-22.11a16 16 0 018.85-14.31L32 448v-16a16 16 0 0116-16h224a16 16 0 0116 16v16l23.16 11.58a16 16 0 018.84 14.31z"
        opacity={0.4}
      />
      <path
        d="M71.81 210.32L57.33 384h205.34l-14.48-173.7 30.62-31.11a32 32 0 009.19-22.45V72a8 8 0 00-8-8h-35.18a8 8 0 00-8 8v40h-32.94V72a8 8 0 00-8-8h-71.75a8 8 0 00-8 8v40H83.19V72a8 8 0 00-8-8H40a8 8 0 00-8 8v84.82a32 32 0 009.21 22.47zm64.6 21.27a23.59 23.59 0 0147.18 0v47.18h-47.18z"
        className="chess-rook-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChessRookAlt;
